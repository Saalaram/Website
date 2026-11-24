import { db, storage } from './config';
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { initialProjects, initialProducts } from './mockData';

// Local storage key for persistent client updates during demo mode
const LOCAL_STORAGE_PROJECTS = 'saalaram_projects_v1';
const LOCAL_STORAGE_PRODUCTS = 'saalaram_products_v1';
const LOCAL_STORAGE_INQUIRIES = 'saalaram_inquiries_v1';

// Initializer helper to ensure local state has demo data
function getLocalItems(key, fallbackData) {
  try {
    const saved = localStorage.getItem(key);
    if (!saved) {
      localStorage.setItem(key, JSON.stringify(fallbackData));
      return fallbackData;
    }
    return JSON.parse(saved);
  } catch (e) {
    return fallbackData;
  }
}

// --------------------------------------------------------------------------
// PROJECTS & PORTFOLIO API
// --------------------------------------------------------------------------
export async function getProjects(categoryFilter = 'All') {
  try {
    const projectsRef = collection(db, 'projects');
    let q;
    if (categoryFilter !== 'All') {
      q = query(projectsRef, where('category', '==', categoryFilter), orderBy('createdAt', 'desc'));
    } else {
      q = query(projectsRef, orderBy('createdAt', 'desc'));
    }
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
  } catch (err) {
    console.warn("Firebase Firestore connection notice - fallback to cached data:", err.message);
  }

  // Fallback / Demo data mode
  const localProjects = getLocalItems(LOCAL_STORAGE_PROJECTS, initialProjects);
  if (categoryFilter === 'All') return localProjects;
  return localProjects.filter(p => p.category === categoryFilter);
}

export async function createProject(projectData, imageFile) {
  let imageUrl = projectData.coverImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";

  // Upload to Firebase Storage if file provided
  if (imageFile && storage) {
    try {
      const storageRef = ref(storage, `projects/${Date.now()}_${imageFile.name}`);
      const snapshot = await uploadBytesResumable(storageRef, imageFile);
      imageUrl = await getDownloadURL(snapshot.ref);
    } catch (err) {
      console.warn("Storage upload fallback: Using object URL or placeholder:", err.message);
      if (imageFile instanceof File) {
        imageUrl = URL.createObjectURL(imageFile);
      }
    }
  }

  const newProject = {
    ...projectData,
    coverImage: imageUrl,
    images: [imageUrl],
    createdAt: new Date().toISOString()
  };

  try {
    const docRef = await addDoc(collection(db, 'projects'), {
      ...newProject,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, ...newProject };
  } catch (err) {
    // Local storage fallback for admin demo
    const current = getLocalItems(LOCAL_STORAGE_PROJECTS, initialProjects);
    const mockId = `proj_${Date.now()}`;
    const savedProject = { id: mockId, ...newProject };
    localStorage.setItem(LOCAL_STORAGE_PROJECTS, JSON.stringify([savedProject, ...current]));
    return savedProject;
  }
}

// --------------------------------------------------------------------------
// PRODUCTS CATALOG API
// --------------------------------------------------------------------------
export async function getProducts(categoryFilter = 'All') {
  try {
    const productsRef = collection(db, 'products');
    let q;
    if (categoryFilter !== 'All') {
      q = query(productsRef, where('category', '==', categoryFilter));
    } else {
      q = query(productsRef);
    }
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
  } catch (err) {
    console.warn("Firebase Firestore connection notice - fallback to product cached data:", err.message);
  }

  const localProducts = getLocalItems(LOCAL_STORAGE_PRODUCTS, initialProducts);
  if (categoryFilter === 'All') return localProducts;
  return localProducts.filter(p => p.category === categoryFilter);
}

export async function createProduct(productData, imageFile) {
  let imageUrl = productData.image || "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80";

  if (imageFile && storage) {
    try {
      const storageRef = ref(storage, `products/${Date.now()}_${imageFile.name}`);
      const snapshot = await uploadBytesResumable(storageRef, imageFile);
      imageUrl = await getDownloadURL(snapshot.ref);
    } catch (err) {
      if (imageFile instanceof File) {
        imageUrl = URL.createObjectURL(imageFile);
      }
    }
  }

  const newProduct = {
    ...productData,
    images: [imageUrl],
    inStock: true,
    createdAt: new Date().toISOString()
  };

  try {
    const docRef = await addDoc(collection(db, 'products'), {
      ...newProduct,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, ...newProduct };
  } catch (err) {
    const current = getLocalItems(LOCAL_STORAGE_PRODUCTS, initialProducts);
    const mockId = `prod_${Date.now()}`;
    const savedProduct = { id: mockId, ...newProduct };
    localStorage.setItem(LOCAL_STORAGE_PRODUCTS, JSON.stringify([savedProduct, ...current]));
    return savedProduct;
  }
}

// --------------------------------------------------------------------------
// CONTACT & QUOTE INQUIRIES API
// --------------------------------------------------------------------------
export async function submitQuoteInquiry(inquiryData, documentFile) {
  let attachedFileUrl = null;

  if (documentFile && storage) {
    try {
      const storageRef = ref(storage, `blueprints/${Date.now()}_${documentFile.name}`);
      const snapshot = await uploadBytesResumable(storageRef, documentFile);
      attachedFileUrl = await getDownloadURL(snapshot.ref);
    } catch (err) {
      attachedFileUrl = `[Simulated Storage Attachment: ${documentFile.name}]`;
    }
  }

  const record = {
    ...inquiryData,
    attachedFileUrl: attachedFileUrl || (documentFile ? documentFile.name : null),
    status: 'New',
    submittedAt: new Date().toISOString()
  };

  try {
    const docRef = await addDoc(collection(db, 'inquiries'), {
      ...record,
      submittedAt: serverTimestamp()
    });
    return { id: docRef.id, success: true };
  } catch (err) {
    const current = getLocalItems(LOCAL_STORAGE_INQUIRIES, []);
    const saved = { id: `inq_${Date.now()}`, ...record };
    localStorage.setItem(LOCAL_STORAGE_INQUIRIES, JSON.stringify([saved, ...current]));
    return { id: saved.id, success: true };
  }
}

export async function getInquiries() {
  try {
    const refCol = collection(db, 'inquiries');
    const q = query(refCol, orderBy('submittedAt', 'desc'));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
  } catch (err) {
    console.warn("Inquiries fetch fallback:", err.message);
  }
  return getLocalItems(LOCAL_STORAGE_INQUIRIES, [
    {
      id: "inq_demo_1",
      customerName: "Vikram Malhotra",
      email: "vikram@architects.in",
      phone: "+91 81221 98345",
      serviceType: "Windows & Blinds",
      projectScope: "3 BHK Apartment Glazing & Motorized Blinds",
      attachedFileUrl: "Blueprint_FloorPlan_v2.pdf",
      message: "Required acoustic thermal windows for master bedrooms and motorized zip blinds for balcony.",
      status: "New",
      submittedAt: "2026-07-28T14:20:00Z"
    },
    {
      id: "inq_demo_2",
      customerName: "Anita Sharma",
      email: "anita.s@gmail.com",
      phone: "+91 98112 34567",
      serviceType: "Civil Engineering",
      projectScope: "Residential House Construction (3500 sq.ft)",
      attachedFileUrl: null,
      message: "Looking for structural consultation and turnkey civil construction execution in South Avenue.",
      status: "Contacted",
      submittedAt: "2026-07-27T09:15:00Z"
    }
  ]);
}
