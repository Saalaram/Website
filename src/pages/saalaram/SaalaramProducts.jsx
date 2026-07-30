import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Square, DoorOpen, Lightbulb, Check, Eye, Star, X, ArrowRight, Sparkles, Filter
} from 'lucide-react';
import { getProducts } from '../../firebase/api';
import SaalaramContactForm from '../../components/Saalaram/SaalaramContactForm';

const staticWindows = [
  {
    id: 'w1', category: 'Windows',
    name: 'uPVC Sliding Window System',
    description: 'High-performance 3-track uPVC sliding window with German hardware, mosquito mesh, and multi-point locking for maximum security.',
    material: 'uPVC Multi-Chamber Profile',
    glassType: '5mm Float + Air Gap Double Glazed',
    rating: 4.9,
    specs: ['Acoustic STC rating 38dB', 'Air infiltration < 1.0 m³/hr', 'Water tightness at 600 Pa', 'UV stabilised profiles'],
    images: ['https://images.unsplash.com/photo-1601760561441-16420502c7e0?auto=format&fit=crop&w=700&q=85'],
  },
  {
    id: 'w2', category: 'Windows',
    name: 'Aluminium Casement Window',
    description: 'Precision-extruded aluminium casement window with powder-coat finish, top-hung or side-hung options, and concealed hinges.',
    material: 'Aluminium 6063 T5 Alloy',
    glassType: 'Toughened 6mm Safety Glass',
    rating: 4.8,
    specs: ['Thermal break option available', 'Powder coat — RAL any colour', 'Anti-corrosion anodised finish'],
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=85'],
  },
  {
    id: 'w3', category: 'Windows',
    name: 'uPVC Fixed Picture Window',
    description: 'Large-format fixed picture windows for unobstructed views and maximum natural light. Ideal for living rooms.',
    material: 'uPVC Multi-Chamber Profile',
    glassType: 'Double Glazed Low-E 4+12+4mm',
    rating: 4.7,
    specs: ['Low-E coating for heat control', 'Customisable sizes up to 2.4m × 2.4m', 'Energy efficient U-value 1.6'],
    images: ['https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=700&q=85'],
  },
];

const staticDoors = [
  {
    id: 'd1', category: 'Doors',
    name: 'uPVC Main Entrance Door',
    description: 'Heavy-duty uPVC entrance door with 5-point locking system, solid PVC foam core, and anti-burglary certification.',
    material: 'Solid uPVC Foam Core',
    glassType: 'Optional decorative glass insert',
    rating: 4.9,
    specs: ['5-point multi-locking system', 'Anti-burglary RC2 class rating', 'Acoustic insulation 42dB'],
    images: ['https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=700&q=85'],
  },
  {
    id: 'd2', category: 'Doors',
    name: 'Aluminium French Door',
    description: 'Elegant double-leaf aluminium French doors with floor-to-ceiling glass, ideal for connecting living spaces to patios.',
    material: 'Aluminium with Thermal Break',
    glassType: 'Toughened 8mm Tempered Glass',
    rating: 4.8,
    specs: ['Smooth pivot or swing operation', 'Double draught-proofing seals', 'Panoramic glass option'],
    images: ['https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=700&q=85'],
  },
  {
    id: 'd3', category: 'Doors',
    name: 'Aluminium Bi-fold Door',
    description: 'Wide-span aluminium bi-fold door system that stacks neatly to the side, creating an expansive indoor-outdoor opening.',
    material: 'Aluminium Slimline Profile',
    glassType: 'Double Glazed Safety Glass',
    rating: 4.7,
    specs: ['Spans up to 6 metres wide', 'Slim 80mm sightlines', 'Bottom rolling system'],
    images: ['https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&w=700&q=85'],
  },
];

const staticLights = [
  {
    id: 'l1', category: 'Lights',
    name: 'Recessed LED Panel',
    description: 'Ultra-slim 60×60 cm surface-mount or recessed LED panel with flicker-free driver and CRI >95.',
    material: 'Aluminium Housing + Polycarbonate Diffuser',
    glassType: 'Opal Diffuser — IP40 Rating',
    rating: 4.8,
    specs: ['40W / 4200 lumen output', 'CRI > 95 for true colour rendering', 'Dimmable 1–100%'],
    images: ['https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=700&q=85'],
  },
  {
    id: 'l2', category: 'Lights',
    name: 'Decorative Pendant Chandelier',
    description: 'Statement chandeliers for dining rooms, lobbies, and double-height spaces in modern finishes.',
    material: 'Brass / Chrome / Matte Black Frame',
    glassType: 'Crystal or Frosted Glass Shades',
    rating: 4.9,
    specs: ['E27 / GU10 compatible sockets', 'Height adjustable drop rod', 'ETL/CE certified'],
    images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85'],
  },
  {
    id: 'l3', category: 'Lights',
    name: 'Track Lighting System',
    description: 'Flexible track rail system with adjustable spotlights for accent lighting in kitchens and galleries.',
    material: 'Powder-Coat Steel Track',
    glassType: 'Adjustable Spot — 15°/45° beam',
    rating: 4.7,
    specs: ['1m / 2m / 3m track lengths', 'Spotlight rotates 350°', 'LED 7W per head'],
    images: ['https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=700&q=85'],
  },
];

export default function SaalaramProducts({ onOpenQuoteModal }) {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory.toLowerCase());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [firebaseProducts, setFirebaseProducts] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await getProducts('All');
        setFirebaseProducts(data || []);
      } catch {
        setFirebaseProducts([]);
      }
    }
    load();
  }, []);

  const categories = ['all', 'windows', 'doors', 'lights'];

  const allStatic = [...staticWindows, ...staticDoors, ...staticLights];
  const combined = [...firebaseProducts, ...allStatic];

  const displayed = activeCategory === 'all'
    ? combined
    : combined.filter(p => p.category?.toLowerCase() === activeCategory);

  return (
    <div style={{ paddingTop: '88px', background: '#0a1222', color: '#fff', minHeight: '100vh' }}>

      {/* ── HERO BANNER ── */}
      <section style={{
        padding: '90px 0 80px 0',
        background: `radial-gradient(ellipse 90% 70% at 50% -10%, rgba(37,99,235,0.28) 0%, transparent 80%),
          linear-gradient(180deg, #0d172a 0%, #09101f 100%)`,
        borderBottom: '1px solid rgba(59,130,246,0.15)',
      }}>
        <div className="container">
          <div style={{ maxWidth: '640px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', background: 'rgba(37,99,235,0.15)',
              border: '1px solid rgba(59,130,246,0.3)', color: '#60a5fa',
              fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: '18px',
            }}>
              Product Catalogue
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.4rem, 6vw, 4rem)',
              fontWeight: 700, color: '#fff', letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}>
              Fenestration & Lighting Catalog
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: '1.75' }}>
              Explore our complete range of acoustic uPVC windows, aluminum entrance doors, motorized blinds, and architectural lighting systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── CATALOGUE GRID ── */}
      <section style={{ padding: '90px 0', background: '#09101f' }}>
        <div className="container">

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '45px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '12px 28px',
                  background: activeCategory === cat ? '#2563eb' : '#111d33',
                  border: activeCategory === cat ? '1px solid #3b82f6' : '1px solid rgba(255,255,255,0.15)',
                  color: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.7)',
                  fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.88rem',
                  textTransform: 'capitalize', cursor: 'pointer', transition: 'all 0.3s ease',
                  boxShadow: activeCategory === cat ? '0 4px 16px rgba(37,99,235,0.35)' : 'none',
                }}
              >
                {cat === 'all' ? 'All Products' : cat}
              </button>
            ))}
          </div>

          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.86rem', fontWeight: 600, marginBottom: '28px', letterSpacing: '0.05em' }}>
            Showing {displayed.length} products
          </p>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px' }}>
            {displayed.map((prod) => (
              <div key={prod.id} style={{ background: '#111d33', border: '1px solid rgba(59,130,246,0.2)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '230px', overflow: 'hidden', position: 'relative' }}>
                  <img src={prod.images ? prod.images[0] : prod.image} alt={prod.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '12px', left: '12px', padding: '4px 10px', background: '#2563eb', color: '#fff', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>
                    {prod.category}
                  </span>
                  {prod.rating && (
                    <span style={{ position: 'absolute', bottom: '12px', right: '12px', padding: '4px 10px', background: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: '0.78rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Star size={12} fill="#60a5fa" color="#60a5fa" /> {prod.rating}
                    </span>
                  )}
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: '#fff', fontWeight: 600, marginBottom: '8px' }}>{prod.name}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: '1.65', marginBottom: '16px', minHeight: '52px' }}>{prod.description}</p>
                    <div style={{ background: 'rgba(15,25,46,0.7)', padding: '10px 14px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', marginBottom: '18px' }}>
                      <span style={{ color: '#60a5fa', fontWeight: 700 }}>Material: </span>{prod.material}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      style={{ flex: 1, height: '44px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                    >
                      <Eye size={14} /> Details
                    </button>
                    <button
                      onClick={() => onOpenQuoteModal(`Product Quote: ${prod.name}`)}
                      style={{ flex: 1, height: '44px', background: '#2563eb', border: 'none', color: '#fff', fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer' }}
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT MODAL ── */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2.2rem', background: '#111d33', border: '1px solid rgba(59,130,246,0.3)', color: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ padding: '4px 10px', background: '#2563eb', color: '#fff', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', display: 'inline-block' }}>{selectedProduct.category}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#fff', fontWeight: 600 }}>{selectedProduct.name}</h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              ><X size={18} /></button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '1.5rem' }}>
              <img src={selectedProduct.images ? selectedProduct.images[0] : selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div>
                <h4 style={{ color: '#60a5fa', marginBottom: '10px', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Product Overview</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {selectedProduct.description}
                </p>
                <h5 style={{ color: '#fff', marginBottom: '10px', fontWeight: 700 }}>Key Specifications:</h5>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem' }}>
                  {(selectedProduct.specs || []).map((spec, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem' }}>
                      <Check size={15} color="#60a5fa" style={{ flexShrink: 0 }} /> {spec}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    const name = selectedProduct.name;
                    setSelectedProduct(null);
                    onOpenQuoteModal(`Product Quote: ${name}`);
                  }}
                  style={{ width: '100%', height: '50px', background: '#2563eb', border: 'none', color: '#fff', fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.92rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                >
                  Request Price & Installation Quote <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CONTACT US FORM AT THE END OF THE PAGE ── */}
      <SaalaramContactForm defaultSubject="Product Catalog Enquiry" />
    </div>
  );
}
