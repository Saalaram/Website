import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const SERVICES = [
  {
    number: '01',
    category: 'CONSTRUCTION',
    title: 'Turnkey House & Villa Construction',
    description: 'End-to-end residential construction from excavation to premium elevation finishes.',
    features: ['Earthquake-resistant RCC framing', 'M25/M30 grade concrete', 'Daily engineer site supervision'],
    // Workers actively pouring concrete on scaffolding
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '02',
    category: 'STRUCTURAL',
    title: 'Apartment & Multi-Storey Buildings',
    description: 'Large-scale residential and commercial complex execution with safety-first engineering.',
    features: ['Multi-storey column & beam framing', 'Fire safety compliance', 'Basement waterproofing'],
    // Multi-storey apartment building — verified working
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '03',
    category: 'ADVISORY',
    title: 'Structural Consultation & Audit',
    description: 'Independent structural auditing, load-bearing assessment, and retrofitting advisory.',
    features: ['Non-destructive NDT testing', 'Load distribution analysis', 'Structural stability certification'],
    // Engineer reviewing blueprints / inspection
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '04',
    category: 'PLANNING',
    title: 'Blueprint & Sanction Approval',
    description: 'CAD blueprints, 3D elevations, and seamless local government permit facilitation.',
    features: ['2D floor plans & 3D renderings', 'Municipal rule compliance', 'Fast-track permit paperwork'],
    // Architectural blueprints / CAD drawings close-up
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=900&q=85',
  },
];

export default function EngineeringServices({ onOpenQuoteModal }) {
  return (
    <section id="engineering" style={{ background: 'var(--light)', padding: '110px 0' }}>
      <div className="container">

        {/* Section header */}
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '40px', marginBottom: '60px',
          flexWrap: 'wrap',
        }}>
          <div>
            <div className="eyebrow">Civil Engineering</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              color: 'var(--dark)', fontWeight: 600,
              lineHeight: 1.1, letterSpacing: '-0.02em',
              maxWidth: '560px',
            }}>
              Complete structural solutions, built to last
            </h2>
          </div>
          <p style={{ color: 'var(--muted)', maxWidth: '400px', fontSize: '1rem', lineHeight: '1.7' }}>
            From first soil test to roof parapet — we manage every phase of your construction with licensed civil engineers on site, every day.
          </p>
        </div>

        {/* Service cards — dark image cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '22px',
          marginBottom: '60px',
        }}>
          {SERVICES.map((svc) => (
            <div
              key={svc.number}
              style={{
                position: 'relative',
                minHeight: '440px',
                overflow: 'hidden',
                background: 'var(--dark)',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector('.svc-img');
                if (img) { img.style.opacity = '0.75'; img.style.transform = 'scale(1.07)'; }
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector('.svc-img');
                if (img) { img.style.opacity = '0.55'; img.style.transform = 'scale(1)'; }
              }}
            >
              {/* Background photo */}
              <img
                className="svc-img"
                src={svc.image}
                alt={svc.title}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  opacity: 0.55,
                  transition: 'transform 0.7s ease, opacity 0.4s ease',
                }}
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(10,10,10,0.05) 10%, rgba(10,10,10,0.92) 100%)',
              }} />

              {/* Text content */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '36px 32px', zIndex: 2,
              }}>
                <span style={{
                  color: 'var(--primary)',
                  fontSize: '0.76rem', fontWeight: 700,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  display: 'block', marginBottom: '12px',
                }}>
                  {svc.number} / {svc.category}
                </span>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.75rem', color: '#fff',
                  fontWeight: 600, lineHeight: 1.2,
                  marginBottom: '12px',
                }}>
                  {svc.title}
                </h3>

                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: '1.65', marginBottom: '16px' }}>
                  {svc.description}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                  {svc.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem' }}>
                      <CheckCircle size={13} color="var(--primary)" style={{ flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onOpenQuoteModal(svc.title)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: 'var(--primary)',
                    fontSize: '0.78rem', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                  }}
                >
                  Get a Quote <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{
          background: 'var(--dark)',
          padding: '50px 55px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '28px',
        }}>
          <div>
            <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '8px' }}>
              — Free Initial Assessment
            </p>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              color: '#fff', fontWeight: 600, lineHeight: 1.15,
              marginBottom: '10px',
            }}>
              Planning a new house or building?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '560px', fontSize: '0.95rem' }}>
              Consult our licensed structural engineers. Bring your architectural sketch for a free structural evaluation.
            </p>
          </div>
          <button onClick={() => onOpenQuoteModal('Civil Engineering Consultation')} className="btn btn-primary">
            Book Engineer Inspection <ArrowRight size={17} />
          </button>
        </div>

      </div>
    </section>
  );
}
