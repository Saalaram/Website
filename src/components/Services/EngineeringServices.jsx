import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  return (
    <section id="engineering" style={{
      position: 'relative',
      background: `linear-gradient(rgba(12, 12, 12, 0.88), rgba(12, 12, 12, 0.88)), url("/assets/images/Civil.png") center/cover fixed`,
      color: '#fff',
      padding: 'clamp(60px, 8vw, 110px) 0',
    }}>
      <div className="container">

        {/* Section header */}
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '40px', marginBottom: '60px',
          flexWrap: 'wrap',
        }}>
          <div>
            <div className="eyebrow" style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '18px', color: 'var(--primary)' }}>
              Civil Engineering
            </div>
            <h2 style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              color: '#fff', fontWeight: 700,
              lineHeight: 1.12, letterSpacing: '-0.02em',
              maxWidth: '620px',
            }}>
              Complete structural solutions, built to last
            </h2>
          </div>
          <p style={{ color: 'rgba(255, 255, 255, 0.75)', maxWidth: '440px', fontSize: '1.03rem', lineHeight: '1.7' }}>
            From first soil test to roof parapet — we manage every phase of your construction with licensed civil engineers on site, every day.
          </p>
        </div>

        {/* Service cards — solid dark cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '22px',
          marginBottom: '50px',
        }}>
          {SERVICES.map((svc) => (
            <div
              key={svc.number}
              style={{
                background: '#1c1e1c',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <span style={{
                  color: 'var(--primary)',
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.78rem', fontWeight: 800,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  display: 'block', marginBottom: '14px',
                }}>
                  {svc.number} / {svc.category}
                </span>

                <h3 style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '1.4rem', color: '#fff',
                  fontWeight: 700, lineHeight: 1.25,
                  marginBottom: '14px',
                }}>
                  {svc.title}
                </h3>

                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.92rem', lineHeight: '1.68', marginBottom: '20px' }}>
                  {svc.description}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {svc.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.85)', fontSize: '0.84rem' }}>
                      <CheckCircle size={14} color="var(--primary)" style={{ flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  onClick={() => onOpenQuoteModal(svc.title)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: 'var(--primary)',
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.82rem', fontWeight: 700,
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

        {/* Explore all services button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '55px' }}>
          <button
            onClick={() => {
              navigate('/services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bouncing-services-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              padding: '18px 42px',
              backgroundColor: '#b68c5a',
              color: '#171817',
              fontFamily: "'Lato', sans-serif",
              fontSize: '1.15rem',
              fontWeight: 700,
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(182, 140, 90, 0.35)',
              letterSpacing: '0.02em',
              transition: 'all 0.3s ease',
            }}
          >
            <span>Explore all services</span>
            <ArrowRight size={22} style={{ strokeWidth: 2.2 }} />
          </button>
        </div>

        {/* CTA Banner */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(rgba(12, 12, 12, 0.85), rgba(12, 12, 12, 0.85)), url("/assets/images/Civil.png") center/cover`,
          padding: '50px 55px',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '28px',
        }}>
          <div>
            <p style={{ color: 'var(--primary)', fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '8px' }}>
              — Free Initial Assessment
            </p>
            <h3 style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              color: '#fff', fontWeight: 700, lineHeight: 1.15,
              marginBottom: '10px',
            }}>
              Planning a new house or building?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '560px', fontSize: '1rem', lineHeight: '1.65' }}>
              Consult our licensed structural engineers. Bring your architectural sketch for a free structural evaluation.
            </p>
          </div>
          <button onClick={() => onOpenQuoteModal('Civil Engineering Consultation')} className="btn btn-primary" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
            Book Engineer Inspection <ArrowRight size={17} />
          </button>
        </div>

      </div>
    </section>
  );
}
