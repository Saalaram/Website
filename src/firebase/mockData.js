// Initial architectural and engineering project data
export const initialProjects = [
  {
    id: "proj_1",
    title: "Celestial Heights - Luxury Villa Construction",
    category: "Civil Engineering",
    clientName: "Royals Residency Group",
    location: "Green Valley Phase II",
    squareFeet: "5,400 sq.ft",
    year: "2025",
    description: "Complete turn-key civil engineering consultancy, structural design calculation, earthquake-resistant foundation engineering, and luxury elevation construction.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    createdAt: "2026-01-15T08:00:00Z"
  },
  {
    id: "proj_2",
    title: "Acoustic Glass Glazing & Slim-Line Sliding Windows",
    category: "Windows & Doors",
    clientName: "Skyline Apartments",
    location: "Metropolis Tower",
    squareFeet: "12,000 sq.ft Glazing",
    year: "2025",
    description: "Installation of thermal-break aluminum slim-profile sliding doors and double-glazed acoustic soundproof windows across 24 luxury penthouses.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    createdAt: "2026-02-10T10:30:00Z"
  },
  {
    id: "proj_3",
    title: "Motorized Smart Blinds & Venetian Interior Installation",
    category: "Blinds & Interior",
    clientName: "Nexus Tech Corporate Park",
    location: "Financial District",
    squareFeet: "18,500 sq.ft Coverage",
    year: "2026",
    description: "Automated solar heat reflection motorized roller blinds integrated with smart building management systems (BMS) for energy efficiency.",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    createdAt: "2026-03-01T14:15:00Z"
  },
  {
    id: "proj_4",
    title: "Commercial Multi-Story Structural Consultation & Planning",
    category: "Civil Engineering",
    clientName: "Apex Retail Developers",
    location: "North Suburbs",
    squareFeet: "32,000 sq.ft",
    year: "2025",
    description: "Structural auditing, soil stability test report, high-grade concrete reinforcement engineering, and local Municipal approval compliance.",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
    ],
    coverImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    createdAt: "2026-04-12T09:00:00Z"
  }
];

// Initial Architectural Products catalog
export const initialProducts = [
  {
    id: "prod_1",
    name: "Ultra-Thermal Aluminum Lift & Slide Door",
    category: "Doors",
    material: "Powder Coated Thermal-Break Aluminum",
    glassType: "Double Glazed Low-E Acoustic Glass",
    description: "Engineered for massive architectural openings up to 6 meters wide. Features high wind-load resistance and effortless sliding geometry.",
    specs: ["Thermal Insulation: Uw = 1.3 W/m²K", "Sound Proofing: Up to 42 dB", "Multi-Point Security Locking"],
    images: [
      "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80"
    ],
    inStock: true,
    featured: true,
    rating: "4.9/5"
  },
  {
    id: "prod_2",
    name: "uPVC Tilt & Turn European Window",
    category: "Windows",
    material: "UV-Resistant German Grade uPVC",
    glassType: "Toughened Argon-Filled Double Pane",
    description: "Dual-action opening mechanism allowing inward tilting for rain-safe ventilation and full turn opening for easy cleaning.",
    specs: ["100% Water Tightness", "Corrosion Free Multi-Chamber Profile", "Built-in Mosquito Mesh Track"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    inStock: true,
    featured: true,
    rating: "4.8/5"
  },
  {
    id: "prod_3",
    name: "Motorized Zip-Track External Sun Blind",
    category: "Blinds",
    material: "High-Tenacity Fibreglass PVC Screen",
    glassType: "N/A - Exterior Shading System",
    description: "Wind-resistant external roller blind capable of withstanding speeds up to 90 km/h. Blocks 95% of solar heat before entering the room.",
    specs: ["Somfy Motor Automation", "Smart Home App & Remote Control", "UV Blocking 95%+"],
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    inStock: true,
    featured: true,
    rating: "5.0/5"
  },
  {
    id: "prod_4",
    name: "Acoustic Glass Casement Window with Mesh",
    category: "Windows",
    material: "Anodized Architectural Aluminum",
    glassType: "6mm + 12A + 6mm Double Laminated",
    description: "Maximum noise reduction designed for urban apartments near busy roads and highways. Includes invisible stainless steel fly screen.",
    specs: ["Acoustic Dampening 45dB", "Heavy Duty Friction Stays", "Keyed Child Security Lock"],
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    ],
    inStock: true,
    featured: false,
    rating: "4.7/5"
  }
];
