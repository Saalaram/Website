import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  PlusCircle, 
  FileText, 
  FolderPlus, 
  Grid, 
  Database, 
  Upload, 
  CheckCircle, 
  Eye, 
  Download, 
  LogOut, 
  Search, 
  RefreshCw 
} from 'lucide-react';
import { 
  getProjects, 
  createProject, 
  getProducts, 
  createProduct, 
  getInquiries 
} from '../../firebase/api';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('admin@saalaram.com');
  const [password, setPassword] = useState('admin123');

  const [activeAdminTab, setActiveAdminTab] = useState('inquiries'); // inquiries, projects, products

  // Data states
  const [inquiries, setInquiries] = useState([]);
  const [projects, setProjects] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // New Project Form State
  const [newProject, setNewProject] = useState({
    title: '',
    category: 'Civil Engineering',
    clientName: '',
    location: '',
    squareFeet: '',
    year: '2026',
    description: ''
  });
  const [projectFile, setProjectFile] = useState(null);

  // New Product Form State
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Windows',
    material: '',
    glassType: '',
    description: '',
    rating: '4.9/5'
  });
  const [productFile, setProductFile] = useState(null);

  const [actionSuccessMsg, setActionSuccessMsg] = useState('');

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@saalaram.com' && password === 'admin123') {
      setIsAuthenticated(true);
      loadAdminData();
    } else {
      alert("Invalid Admin Credentials. Default login: admin@saalaram.com / admin123");
    }
  };

  const loadAdminData = async () => {
    setLoading(true);
    const [inqData, projData, prodData] = await Promise.all([
      getInquiries(),
      getProjects('All'),
      getProducts('All')
    ]);
    setInquiries(inqData);
    setProjects(projData);
    setProducts(prodData);
    setLoading(false);
  };

  // Add Project submit
  const handleAddProject = async (e) => {
    e.preventDefault();
    if (!newProject.title) return alert("Title is required");
    setLoading(true);
    await createProject(newProject, projectFile);
    setActionSuccessMsg("New Project uploaded & saved to Firebase Storage + Firestore!");
    setNewProject({ title: '', category: 'Civil Engineering', clientName: '', location: '', squareFeet: '', year: '2026', description: '' });
    setProjectFile(null);
    loadAdminData();
    setTimeout(() => setActionSuccessMsg(''), 4000);
  };

  // Add Product submit
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!newProduct.name) return alert("Product name is required");
    setLoading(true);
    await createProduct(newProduct, productFile);
    setActionSuccessMsg("New Product added & published to Firebase catalog!");
    setNewProduct({ name: '', category: 'Windows', material: '', glassType: '', description: '', rating: '4.9/5' });
    setProductFile(null);
    loadAdminData();
    setTimeout(() => setActionSuccessMsg(''), 4000);
  };

  if (!isAuthenticated) {
    return (
      <section className="section-padding" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '440px' }}>
          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(197, 168, 128, 0.15)',
                border: '1px solid var(--border-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
                color: 'var(--accent-gold)'
              }}>
                <Lock size={28} />
              </div>
              <h3 className="heading-serif" style={{ fontSize: '1.8rem', color: '#FFF' }}>
                Firebase Admin Portal
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Manage website portfolio, product catalog & client quotes.
              </p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="form-label">Admin Email</label>
                <input 
                  type="email" 
                  className="form-input" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-input" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                <span>Sign In to Admin Console</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)', minHeight: '90vh' }}>
      <div className="container">
        {/* Top Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '2.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '1.5rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)' }}>
              <Shield size={18} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Firebase Authenticated Administrator
              </span>
            </div>
            <h2 className="heading-serif" style={{ fontSize: '2.2rem', color: '#FFF' }}>
              Management Dashboard
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={loadAdminData} className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem' }}>
              <RefreshCw size={16} />
              <span>Sync Cloud</span>
            </button>
            <button onClick={() => setIsAuthenticated(false)} className="btn btn-outline-gold" style={{ padding: '0.6rem 1.2rem' }}>
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Action Success Alert */}
        {actionSuccessMsg && (
          <div style={{
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid var(--accent-emerald)',
            color: 'var(--accent-emerald)',
            padding: '1rem',
            borderRadius: '10px',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem'
          }}>
            <CheckCircle size={18} />
            <span>{actionSuccessMsg}</span>
          </div>
        )}

        {/* Dashboard Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Total Client Leads</div>
            <div className="heading-serif text-gradient-gold" style={{ fontSize: '2rem', fontWeight: 700 }}>
              {inquiries.length}
            </div>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Portfolio Projects</div>
            <div className="heading-serif" style={{ fontSize: '2rem', fontWeight: 700, color: '#FFF' }}>
              {projects.length}
            </div>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Catalog Products</div>
            <div className="heading-serif" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-blue)' }}>
              {products.length}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="filter-tabs" style={{ justifyContent: 'flex-start', marginBottom: '2rem' }}>
          <button
            onClick={() => setActiveAdminTab('inquiries')}
            className={`tab-btn ${activeAdminTab === 'inquiries' ? 'active' : ''}`}
          >
            Client Quote Inquiries ({inquiries.length})
          </button>
          <button
            onClick={() => setActiveAdminTab('projects')}
            className={`tab-btn ${activeAdminTab === 'projects' ? 'active' : ''}`}
          >
            + Add New Portfolio Project
          </button>
          <button
            onClick={() => setActiveAdminTab('products')}
            className={`tab-btn ${activeAdminTab === 'products' ? 'active' : ''}`}
          >
            + Add New Windows/Doors Product
          </button>
        </div>

        {/* Tab 1: Client Inquiries Lead Table */}
        {activeAdminTab === 'inquiries' && (
          <div className="glass-card" style={{ padding: '2rem', overflowX: 'auto' }}>
            <h3 className="heading-serif" style={{ fontSize: '1.4rem', color: '#FFF', marginBottom: '1.5rem' }}>
              Incoming Client Quotes & Consultation Requests
            </h3>

            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.85rem' }}>Customer</th>
                  <th style={{ padding: '0.85rem' }}>Category & Scope</th>
                  <th style={{ padding: '0.85rem' }}>Estimated Investment</th>
                  <th style={{ padding: '0.85rem' }}>Blueprint File</th>
                  <th style={{ padding: '0.85rem' }}>Date</th>
                  <th style={{ padding: '0.85rem' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inq) => (
                  <tr key={inq.id} style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-main)' }}>
                    <td style={{ padding: '0.85rem' }}>
                      <div style={{ fontWeight: 600, color: '#FFF' }}>{inq.customerName}</div>
                      <div style={{ color: 'var(--accent-gold)', fontSize: '0.8rem' }}>{inq.phone}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{inq.email}</div>
                    </td>
                    <td style={{ padding: '0.85rem' }}>
                      <span className="badge badge-gold" style={{ marginBottom: '4px' }}>{inq.serviceType}</span>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{inq.projectScope}</div>
                    </td>
                    <td style={{ padding: '0.85rem', fontWeight: 600, color: 'var(--accent-gold)' }}>
                      {inq.estimatedCostRange || 'Custom Quote'}
                    </td>
                    <td style={{ padding: '0.85rem' }}>
                      {inq.attachedFileUrl ? (
                        <span className="badge badge-blue" style={{ cursor: 'pointer' }}>
                          <Download size={12} style={{ marginRight: '4px' }} /> Attachment
                        </span>
                      ) : (
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>None</span>
                      )}
                    </td>
                    <td style={{ padding: '0.85rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      {new Date(inq.submittedAt).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '0.85rem' }}>
                      <span className={`badge ${inq.status === 'New' ? 'badge-gold' : 'badge-emerald'}`}>
                        {inq.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Add New Portfolio Project */}
        {activeAdminTab === 'projects' && (
          <div className="glass-card" style={{ padding: '2.5rem', maxWidth: '800px' }}>
            <h3 className="heading-serif" style={{ fontSize: '1.5rem', color: '#FFF', marginBottom: '1.5rem' }}>
              Upload Portfolio Project to Firebase
            </h3>

            <form onSubmit={handleAddProject}>
              <div className="form-group">
                <label className="form-label">Project Title *</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Royal Palm Luxury Villa Construction"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select 
                    className="form-select"
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                  >
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Windows & Doors">Windows & Doors</option>
                    <option value="Blinds & Interior">Blinds & Interior</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="e.g. Jubilee Hills Phase 3"
                    value={newProject.location}
                    onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Client / Group Name</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="e.g. Private Owner"
                    value={newProject.clientName}
                    onChange={(e) => setNewProject({ ...newProject, clientName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Scale / Area (sq.ft)</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="e.g. 4,200 sq.ft"
                    value={newProject.squareFeet}
                    onChange={(e) => setNewProject({ ...newProject, squareFeet: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Upload High-Res Project Photo (Firebase Storage)</label>
                <input 
                  type="file" 
                  className="form-input"
                  onChange={(e) => setProjectFile(e.target.files[0])}
                  accept="image/*"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Project Overview Description</label>
                <textarea 
                  className="form-textarea" 
                  rows="4" 
                  placeholder="Detail structural calculations, materials used, glass specifications..."
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                <Upload size={16} />
                <span>Save & Publish Project</span>
              </button>
            </form>
          </div>
        )}

        {/* Tab 3: Add New Product */}
        {activeAdminTab === 'products' && (
          <div className="glass-card" style={{ padding: '2.5rem', maxWidth: '800px' }}>
            <h3 className="heading-serif" style={{ fontSize: '1.5rem', color: '#FFF', marginBottom: '1.5rem' }}>
              Add Product Item to Firebase Catalog
            </h3>

            <form onSubmit={handleAddProduct}>
              <div className="form-group">
                <label className="form-label">Product Model Name *</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Acoustic Soundproof uPVC Tilt-Turn Window"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select 
                    className="form-select"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  >
                    <option value="Windows">Windows</option>
                    <option value="Doors">Doors</option>
                    <option value="Blinds">Blinds</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Frame Material</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="e.g. German Grade uPVC / Thermal Aluminum"
                    value={newProduct.material}
                    onChange={(e) => setNewProduct({ ...newProduct, material: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Glass Specification / Shading Mesh</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g. Double Glazed Acoustic Low-E Glass 24mm"
                  value={newProduct.glassType}
                  onChange={(e) => setNewProduct({ ...newProduct, glassType: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Product Image (Firebase Storage)</label>
                <input 
                  type="file" 
                  className="form-input"
                  onChange={(e) => setProductFile(e.target.files[0])}
                  accept="image/*"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Description & Features</label>
                <textarea 
                  className="form-textarea" 
                  rows="3" 
                  placeholder="Acoustic insulation dB ratings, water tightness, multi-locking security..."
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                <Upload size={16} />
                <span>Publish Product to Catalog</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
