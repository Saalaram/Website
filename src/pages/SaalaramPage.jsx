import React, { useState, useEffect } from 'react';
import {
  Square, DoorOpen, Lightbulb, ArrowRight,
  Check, Eye, Star, X, ChevronRight, Sparkles
} from 'lucide-react';
import { getProducts } from '../firebase/api';

// ── Static placeholder products ──
const staticWindows = [
  {
    id: 'w1', category: 'Windows',
    name: 'uPVC Sliding Window',
    description: 'High-performance 3-track uPVC sliding window with German hardware, mosquito mesh, and multi-point locking for maximum security.',
    material: 'uPVC Profile',
    glassType: '5mm Float + Air Gap Double Glazed',
    rating: 4.9,
    specs: ['Acoustic STC rating 38dB', 'Air infiltration < 1.0 m³/hr', 'Water tightness at 600 Pa', 'UV stabilised profiles', 'Available in 30+ colours'],
    images: ['https://images.unsplash.com/photo-1601760561441-16420502c7e0?auto=format&fit=crop&w=700&q=85'],
    badge: 'Best Seller',
  },
  {
    id: 'w2', category: 'Windows',
    name: 'Aluminium Casement Window',
    description: 'Precision-extruded aluminium casement window with powder-coat finish, top-hung or side-hung options, and concealed hinges.',
    material: 'Aluminium 6063 T5 Alloy',
    glassType: 'Toughened 6mm Safety Glass',
    rating: 4.8,
    specs: ['Thermal break option available', 'Powder coat — RAL any colour', 'Anti-corrosion anodised finish', 'Child-safe restricted opening', 'Seamless drainage channel'],
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=85'],
    badge: 'Premium',
  },
  {
    id: 'w3', category: 'Windows',
    name: 'uPVC Fixed Picture Window',
    description: 'Large-format fixed picture windows for unobstructed views and maximum natural light. Ideal for living rooms and feature walls.',
    material: 'uPVC Multi-Chamber Profile',
    glassType: 'Double Glazed Low-E 4+12+4mm',
    rating: 4.7,
    specs: ['Low-E coating for heat control', 'Customisable sizes up to 2.4m × 2.4m', 'High wind load resistance', 'Excellent weatherproofing', 'Energy efficient U-value 1.6'],
    images: ['https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=700&q=85'],
    badge: 'New',
  },
];

const staticDoors = [
  {
    id: 'd1', category: 'Doors',
    name: 'uPVC Main Entrance Door',
    description: 'Heavy-duty uPVC entrance door with 5-point locking system, solid PVC foam core, and anti-burglary certification for maximum home security.',
    material: 'Solid uPVC Foam Core',
    glassType: 'Optional decorative glass insert',
    rating: 4.9,
    specs: ['5-point multi-locking system', 'Anti-burglary RC2 class rating', 'Acoustic insulation 42dB', 'Weatherseal on all four sides', '10-year manufacturer warranty'],
    images: ['https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=700&q=85'],
    badge: 'Best Seller',
  },
  {
    id: 'd2', category: 'Doors',
    name: 'Aluminium French Door',
    description: 'Elegant double-leaf aluminium French doors with floor-to-ceiling glass, ideal for connecting living spaces to patios or balconies.',
    material: 'Aluminium with Thermal Break',
    glassType: 'Toughened 8mm Tempered Glass',
    rating: 4.8,
    specs: ['Smooth pivot or swing operation', 'Double draught-proofing seals', 'Available in inward/outward swing', 'Panoramic glass option', 'Powder coat — any RAL colour'],
    images: ['https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=700&q=85'],
    badge: 'Premium',
  },
  {
    id: 'd3', category: 'Doors',
    name: 'Aluminium Bi-fold Door',
    description: 'Wide-span aluminium bi-fold/folding door system that stacks neatly to the side, creating an expansive opening between indoor and outdoor spaces.',
    material: 'Aluminium Slimline Profile',
    glassType: 'Double Glazed Safety Glass',
    rating: 4.7,
    specs: ['Spans up to 6 metres wide', 'Slim 80mm sightlines', 'Bottom rolling system', 'Smooth single-hand operation', 'Optional fly screen panel'],
    images: ['https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&w=700&q=85'],
    badge: 'New',
  },
];

const staticLights = [
  {
    id: 'l1', category: 'Lights',
    name: 'Recessed LED Panel',
    description: 'Ultra-slim 60×60 cm surface-mount or recessed LED panel with flicker-free driver, high CRI >95 for true colour rendering in offices and homes.',
    material: 'Aluminium Housing + Polycarbonate Diffuser',
    glassType: 'Opal Diffuser — IP40 Rating',
    rating: 4.8,
    specs: ['40W / 4200 lumen output', 'CRI > 95 for true colour rendering', 'Flicker-free driver — eye safe', 'Dimmable 1–100%', '50,000 hour rated lifespan'],
    images: ['https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=700&q=85'],
    badge: 'Popular',
  },
  {
    id: 'l2', category: 'Lights',
    name: 'Decorative Pendant Chandelier',
    description: 'Statement chandeliers for dining rooms, lobbies, and double-height spaces. Available in modern, classic, and contemporary finishes.',
    material: 'Brass / Chrome / Matte Black Frame',
    glassType: 'Crystal or Frosted Glass Shades',
    rating: 4.9,
    specs: ['E27 / GU10 compatible sockets', 'Height adjustable drop rod', 'Multiple finish options', 'Custom diameter available', 'ETL/CE certified'],
    images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85'],
    badge: 'Luxury',
  },
  {
    id: 'l3', category: 'Lights',
    name: 'Track Lighting System',
    description: 'Flexible track rail system with adjustable spotlights for accent lighting in kitchens, retail spaces, galleries, and feature walls.',
    material: 'Powder-Coat Steel Track',
    glassType: 'Adjustable Spot — 15°/45° beam',
    rating: 4.7,
    specs: ['1m / 2m / 3m track lengths', 'Spotlight rotates 350°', 'LED 7W per head — warm/cool white', 'Magnetic coupling heads', 'IP20 indoor rated'],
    images: ['https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=700&q=85'],
    badge: 'New',
  },
];

const categoryConfig = [
  { id: 'windows', label: 'Windows', icon: Square, color: '#1e40af', data: staticWindows },
  { id: 'doors', label: 'Doors', icon: DoorOpen, color: '#065f46', data: staticDoors },
  { id: 'lights', label: 'Lights', icon: Lightbulb, color: '#92400e', data: staticLights },
];

function ProductCard({ prod, onDetail, onQuote }) {
  return (
    <div className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '240px', position: 'relative', overflow: 'hidden', background: '#f4f1eb' }}>
        <img
          src={prod.images ? prod.images[0] : prod.image}
          alt={prod.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transition: 'transform 0.5s ease',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <span className="badge badge-gold">{prod.category}</span>
          {prod.badge && (
            <span style={{
              padding: '4px 10px',
              background: 'var(--dark)',
              color: 'var(--primary)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>{prod.badge}</span>
          )}
        </div>
        {prod.rating && (
          <div style={{
            position: 'absolute', bottom: '12px', right: '12px',
            background: 'rgba(0,0,0,0.65)',
            color: '#fff',
            padding: '4px 10px',
            fontSize: '0.78rem', fontWeight: 700,
            display: 'flex', alignItems: 'center', gap: '5px',
            backdropFilter: 'blur(4px)',
          }}>
            <Star size={12} fill="var(--primary)" color="var(--primary)" />
            {prod.rating}
          </div>
        )}
      </div>
      <div style={{ padding: '1.4rem 1.5rem', flex: 1 }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.15rem', color: 'var(--dark)',
          fontWeight: 600, marginBottom: '8px',
        }}>{prod.name}</h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.86rem', lineHeight: '1.65', marginBottom: '14px', minHeight: '54px' }}>
          {prod.description}
        </p>
        <div style={{
          background: 'var(--light)',
          padding: '10px 14px',
          fontSize: '0.8rem', color: 'var(--text)',
          marginBottom: '16px',
        }}>
          <span style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Material: </span>
          {prod.material}
        </div>
      </div>
      <div style={{ padding: '0 1.5rem 1.5rem', display: 'flex', gap: '10px' }}>
        <button
          onClick={() => onDetail(prod)}
          className="btn btn-ghost"
          style={{ flex: 1, minHeight: '46px', fontSize: '0.85rem' }}
        >
          <Eye size={14} /> Details
        </button>
        <button
          onClick={() => onQuote(prod)}
          className="btn btn-primary"
          style={{ flex: 1, minHeight: '46px', fontSize: '0.85rem' }}
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}

export default function SaalaramPage({ onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState('windows');
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

  const currentConfig = categoryConfig.find(c => c.id === activeCategory);
  const staticData = currentConfig?.data || [];

  // Merge firebase products for matching category + static
  const fbFiltered = firebaseProducts.filter(p =>
    p.category?.toLowerCase() === activeCategory ||
    (activeCategory === 'windows' && p.category === 'Windows') ||
    (activeCategory === 'doors' && p.category === 'Doors') ||
    (activeCategory === 'lights' && p.category === 'Lights')
  );
  const displayed = [...fbFiltered, ...staticData];

  return (
    <div style={{ paddingTop: '88px' }}>

      {/* ── BRAND HERO ── */}
      <section style={{
        background: 'var(--dark)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative gold lines */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(182,140,90,0.07) 0%, transparent 70%)
          `,
        }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
        }} />
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center', gap: '10px',
                marginBottom: '20px',
                color: 'var(--primary)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}>
                <Sparkles size={14} /> Premium Architectural Products
              </div>
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                marginBottom: '28px',
              }}>
                SAALARAM
              </h1>
              <p style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: '1.05rem',
                lineHeight: '1.78',
                maxWidth: '480px',
                marginBottom: '36px',
              }}>
                Discover our curated range of premium architectural products — windows, doors, and lighting systems engineered for performance, beauty, and longevity.
              </p>
              <button
                onClick={() => onOpenQuoteModal()}
                className="btn btn-primary"
                style={{ padding: '0 44px', fontSize: '1rem' }}
              >
                Request Product Catalogue <ArrowRight size={17} />
              </button>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}>
              {[
                { img: 'https://images.unsplash.com/photo-1601760561441-16420502c7e0?auto=format&fit=crop&w=500&q=80', label: 'Windows' },
                { img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=500&q=80', label: 'Doors' },
                { img: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=500&q=80', label: 'Lights' },
                { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=80', label: 'Interiors' },
              ].map(({ img, label }) => (
                <div key={label} style={{
                  position: 'relative',
                  height: '180px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <img src={img} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)',
                  }} />
                  <span style={{
                    position: 'absolute', bottom: '10px', left: '14px',
                    color: '#fff', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em',
                  }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── USP STRIP ── */}
      <section style={{ background: 'var(--primary)', padding: '0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}>
            {[
              { title: '10-Year Warranty', sub: 'On all installed products' },
              { title: 'German Hardware', sub: 'Certified locking systems' },
              { title: 'ISO Certified', sub: 'Quality-tested profiles' },
              { title: 'Free Installation', sub: 'By certified technicians' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '28px 24px', textAlign: 'center',
                borderLeft: i > 0 ? '1px solid rgba(23,24,23,0.18)' : 'none',
              }}>
                <div style={{ color: 'var(--dark)', fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ color: 'rgba(23,24,23,0.65)', fontSize: '0.82rem' }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATALOG ── */}
      <section style={{ background: 'var(--light)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '50px' }}>
            <div className="eyebrow">Product Catalogue</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: 'var(--dark)', fontWeight: 600, lineHeight: 1.1,
            }}>
              Browse by Category
            </h2>
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0', marginBottom: '50px', border: '1px solid var(--border)', width: 'fit-content' }}>
            {categoryConfig.map(({ id, label, icon: Icon }, i) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                style={{
                  padding: '14px 36px',
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: activeCategory === id ? 'var(--dark)' : '#fff',
                  color: activeCategory === id ? '#fff' : 'var(--muted)',
                  border: 'none',
                  borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
                  cursor: 'pointer',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.04em',
                  transition: 'all 0.3s',
                }}
              >
                <Icon size={17} />
                {label}
              </button>
            ))}
          </div>

          {/* Products */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '28px',
          }}>
            {displayed.map(prod => (
              <ProductCard
                key={prod.id}
                prod={prod}
                onDetail={setSelectedProduct}
                onQuote={(p) => onOpenQuoteModal(`Product Quote: ${p.name}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT MODAL ── */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: '2rem', background: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '8px', display: 'inline-block' }}>{selectedProduct.category}</span>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2rem', color: 'var(--dark)', fontWeight: 600,
                }}>{selectedProduct.name}</h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  width: '36px', height: '36px', background: 'var(--light)',
                  border: '1px solid var(--border)', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              ><X size={18} /></button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '1.5rem' }}>
              <img
                src={selectedProduct.images ? selectedProduct.images[0] : selectedProduct.image}
                alt={selectedProduct.name}
                style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
              />
              <div>
                <h4 style={{ color: 'var(--primary-dark)', marginBottom: '12px', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Product Overview</h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {selectedProduct.description}
                </p>
                <h5 style={{ color: 'var(--dark)', marginBottom: '10px', fontWeight: 700 }}>Key Specifications:</h5>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem' }}>
                  {(selectedProduct.specs || []).map((spec, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={15} color="var(--primary)" style={{ flexShrink: 0 }} />
                      <span style={{ color: 'var(--text)', fontSize: '0.88rem' }}>{spec}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    const name = selectedProduct.name;
                    setSelectedProduct(null);
                    onOpenQuoteModal(`Product Quote: ${name}`);
                  }}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Request Price & Installation Quote <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
