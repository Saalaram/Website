import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Square, DoorOpen, Lightbulb, ArrowRight,
  Check, Eye, Star, X, Sparkles, ShieldCheck, Award, Layers
} from 'lucide-react';
import { getProducts } from '../../firebase/api';
import SaalaramContactForm from '../../components/Saalaram/SaalaramContactForm';

const staticFeatured = [
  {
    id: 'w1', category: 'Windows',
    name: 'uPVC Acoustic Sliding Window',
    description: 'High-performance 3-track uPVC sliding window with German hardware, mosquito mesh, and multi-point locking.',
    material: 'German uPVC Profile',
    rating: 4.9,
    specs: ['Acoustic STC rating 38dB', 'Air infiltration < 1.0 m³/hr', 'Water tightness at 600 Pa'],
    images: ['https://images.unsplash.com/photo-1601760561441-16420502c7e0?auto=format&fit=crop&w=700&q=85'],
  },
  {
    id: 'd1', category: 'Doors',
    name: 'Aluminium Heavy-Duty French Door',
    description: 'Double-leaf aluminium French doors with floor-to-ceiling toughened safety glass and thermal break.',
    material: 'Aluminium 6063 T5 Alloy',
    rating: 4.9,
    specs: ['5-point multi-locking system', 'Anti-burglary RC2 class rating', 'Acoustic insulation 42dB'],
    images: ['https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=700&q=85'],
  },
  {
    id: 'l1', category: 'Lights',
    name: 'Architectural Recessed LED Panel',
    description: 'Ultra-slim surface-mount or recessed LED panel with flicker-free driver and high CRI >95.',
    material: 'Aluminium Housing + Polycarbonate Diffuser',
    rating: 4.8,
    specs: ['40W / 4200 lumen output', 'CRI > 95 for true colour rendering', '50,000 hour rated lifespan'],
    images: ['https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=700&q=85'],
  },
];

export default function SaalaramHome({ onOpenQuoteModal }) {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ paddingTop: '88px', background: '#0a1222', color: '#fff', minHeight: '100vh' }}>

      {/* ── HERO BANNER ── */}
      <section style={{
        position: 'relative',
        padding: '110px 0 100px 0',
        background: `radial-gradient(ellipse 90% 70% at 50% -10%, rgba(37,99,235,0.28) 0%, transparent 80%),
          linear-gradient(180deg, #0d172a 0%, #09101f 100%)`,
        overflow: 'hidden',
        borderBottom: '1px solid rgba(59,130,246,0.15)',
      }}>
        {/* Subtle grid accent */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px', pointerEvents: 'none',
        }} />

        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '60px',
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px', background: 'rgba(37,99,235,0.15)',
                border: '1px solid rgba(59,130,246,0.35)', color: '#60a5fa',
                fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', marginBottom: '24px',
              }}>
                <Sparkles size={14} /> Architectural Fenestration & Lighting
              </div>
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
                fontWeight: 700, lineHeight: 1.05,
                color: '#fff', letterSpacing: '-0.02em',
                marginBottom: '22px',
              }}>
                Saalaram <span style={{ color: '#60a5fa' }}>Solutions</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.08rem', lineHeight: '1.78', maxWidth: '520px', marginBottom: '36px' }}>
                Engineered soundproof windows, thermal doors, motorized blinds, and architectural lighting systems built for acoustic isolation and luxury homes in South India.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => navigate('/saalaram/products')}
                  style={{
                    padding: '0 32px', height: '54px',
                    background: '#2563eb', border: 'none', color: '#fff',
                    fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.92rem',
                    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px',
                    boxShadow: '0 8px 24px rgba(37,99,235,0.4)',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Explore Products <ArrowRight size={16} />
                </button>
                <a
                  href="#contact-us"
                  style={{
                    padding: '0 28px', height: '54px',
                    background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: '#fff',
                    fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.92rem',
                    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s ease', textDecoration: 'none',
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right side Logo Display */}
            <div style={{
              background: '#111d33',
              border: '1px solid rgba(59,130,246,0.3)',
              padding: '24px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
              position: 'relative',
            }}>
              <img
                src="/assets/logos/Saalaram.jpeg"
                alt="Saalaram Solutions Logo"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
              <div style={{
                padding: '16px 20px', background: 'rgba(15,25,46,0.9)',
                borderTop: '1px solid rgba(59,130,246,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', fontWeight: 600 }}>ISO 9001:2015 Certified Manufacturing</span>
                <span style={{ color: '#60a5fa', fontSize: '0.8rem', fontWeight: 700 }}>10-Yr Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USP STRIP ── */}
      <section style={{ background: '#0e172a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[
              { icon: ShieldCheck, title: '10-Year Warranty', sub: 'On all installed uPVC & aluminum frames' },
              { icon: Award, title: 'German Hardware', sub: 'Multi-point safety locking systems' },
              { icon: Layers, title: 'Double Glazed', sub: 'Up to 42dB sound reduction' },
              { icon: Check, title: 'Free Installation', sub: 'Certified factory-trained technicians' },
            ].map(({ icon: Icon, title, sub }, i) => (
              <div key={i} style={{
                padding: '32px 24px',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '44px', height: '44px', margin: '0 auto 12px',
                  background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(59,130,246,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa',
                }}>
                  <Icon size={20} />
                </div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>{title}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY QUICK ACCESS ── */}
      <section style={{ padding: '90px 0', background: '#09101f' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 50px auto' }}>
            <div style={{ color: '#60a5fa', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Product Categories
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.4rem', color: '#fff', fontWeight: 600 }}>
              Tailored for modern homes & commercial spaces
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {[
              {
                icon: Square, title: 'Windows', count: 'uPVC & Aluminum',
                desc: 'Acoustic sliding, casement, tilt & turn, and fixed picture window systems.',
                path: '/saalaram/products?cat=windows',
                img: 'https://images.unsplash.com/photo-1601760561441-16420502c7e0?auto=format&fit=crop&w=600&q=80',
              },
              {
                icon: DoorOpen, title: 'Doors', count: 'Entrance & Patio',
                desc: 'Multi-locking main entrance doors, bi-fold patio doors, and French doors.',
                path: '/saalaram/products?cat=doors',
                img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=600&q=80',
              },
              {
                icon: Lightbulb, title: 'Lights & Blinds', count: 'Architectural',
                desc: 'Recessed LED panels, pendant chandeliers, magnetic track lights, motorized blinds.',
                path: '/saalaram/products?cat=lights',
                img: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80',
              },
            ].map(({ icon: Icon, title, count, desc, path, img }, i) => (
              <div
                key={i}
                onClick={() => navigate(path)}
                style={{
                  background: '#111d33', border: '1px solid rgba(59,130,246,0.2)',
                  cursor: 'pointer', overflow: 'hidden', transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #111d33 0%, transparent 60%)' }} />
                </div>
                <div style={{ padding: '24px 28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: '#fff', fontWeight: 600 }}>{title}</h3>
                    <span style={{ color: '#60a5fa', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{count}</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '18px' }}>{desc}</p>
                  <span style={{ color: '#60a5fa', fontSize: '0.82rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Browse {title} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section style={{ padding: '90px 0', background: '#0d172a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
            <div>
              <div style={{ color: '#60a5fa', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Featured Catalogue
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', color: '#fff', fontWeight: 600 }}>
                Top-rated architectural systems
              </h2>
            </div>
            <button
              onClick={() => navigate('/saalaram/products')}
              style={{
                padding: '10px 22px', background: 'transparent', border: '1px solid #2563eb', color: '#60a5fa',
                fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
              }}
            >
              View Full Catalog →
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {staticFeatured.map((prod) => (
              <div key={prod.id} style={{ background: '#111d33', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={prod.images[0]} alt={prod.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '12px', left: '12px', padding: '4px 10px', background: '#2563eb', color: '#fff', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>
                    {prod.category}
                  </span>
                </div>
                <div style={{ padding: '24px', flex: 1 }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: '#fff', fontWeight: 600, marginBottom: '8px' }}>{prod.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.86rem', lineHeight: '1.6', marginBottom: '16px' }}>{prod.description}</p>
                  <div style={{ background: 'rgba(15,25,46,0.6)', padding: '10px 14px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginBottom: '18px' }}>
                    <span style={{ color: '#60a5fa', fontWeight: 700 }}>Material: </span>{prod.material}
                  </div>
                  <button
                    onClick={() => onOpenQuoteModal(`Product Enquiry: ${prod.name}`)}
                    style={{
                      width: '100%', height: '44px', background: '#2563eb', border: 'none', color: '#fff',
                      fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                    }}
                  >
                    Get Price Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT US FORM AT THE END OF THE PAGE ── */}
      <SaalaramContactForm />
    </div>
  );
}
