import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function AboutSection({ onOpenQuoteModal }) {
  const navigate = useNavigate();
  const checkItems = [
    'Licensed civil engineers on every project site',
    'Firebase cloud-synced project updates in real time',
    'Acoustic uPVC & aluminum products installed by certified technicians',
    'ISO-standard material testing at every phase',
    'Transparent milestone-based billing — no hidden costs',
  ];

  return (
    <>
      {/* ──────────── ABOUT SECTION ──────────── */}
      <section style={{ background: '#fff', padding: '110px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: '85px',
            alignItems: 'center',
          }}>
            {/* Left — overlapping images */}
            <div style={{ position: 'relative', minHeight: '630px' }}>
              {/* Main image — construction site with workers */}
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=85"
                alt="Civil engineering construction site"
                style={{ width: '82%', height: '560px', objectFit: 'cover', display: 'block' }}
              />
              {/* Overlapping secondary image — structural steel frame */}
              <img
                src="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=600&q=85"
                alt="Active site supervision and construction"
                style={{
                  position: 'absolute', right: 0, bottom: 0,
                  width: '53%', height: '310px',
                  objectFit: 'cover',
                  border: '10px solid #fff',
                  boxShadow: '0 24px 60px rgba(22,24,22,0.14)',
                }}
              />
              {/* Third accent image — finished interior/exterior */}
              <div style={{
                position: 'absolute', bottom: '340px', right: 0,
                width: '52%',
                border: '10px solid #fff',
                boxShadow: '0 12px 40px rgba(22,24,22,0.12)',
                overflow: 'hidden',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=85"
                  alt="Building under construction — structural phase"
                  style={{
                    width: '100%', height: '180px',
                    objectFit: 'cover', display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '10px 14px',
                  background: 'linear-gradient(transparent, rgba(10,10,10,0.82))',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                  <span style={{ width: '18px', height: '1px', background: 'var(--primary)', display: 'block', flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Structural Phase</span>
                </div>
              </div>
              {/* Experience badge */}
              <div style={{
                position: 'absolute', top: '40px', right: 0,
                width: '185px', padding: '24px',
                background: 'var(--primary)',
                color: 'var(--dark)',
              }}>
                <strong style={{
                  display: 'block',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '3.2rem', lineHeight: 1, fontWeight: 700,
                }}>
                  15
                </strong>
                <span style={{ display: 'block', marginTop: '8px', fontWeight: 700, lineHeight: 1.4, fontSize: '0.88rem' }}>
                  Years of<br />Engineering Excellence
                </span>
              </div>
            </div>

            {/* Right — text content */}
            <div>
              <div className="eyebrow">About Saalaram</div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'var(--dark)', fontWeight: 600,
                lineHeight: 1.1, letterSpacing: '-0.02em',
                marginBottom: '22px',
              }}>
                Engineering trust, one structure at a time
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: '12px' }}>
                Saalaram is a dual-expertise firm delivering civil engineering construction and premium architectural products — windows, doors, blinds, and glazing systems — under one roof.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: '32px' }}>
                Founded by licensed civil engineers, we combine structural rigor with aesthetic craftsmanship across every project we deliver in Tamil Nadu.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '38px' }}>
                {checkItems.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--dark)', fontWeight: 600, fontSize: '0.95rem' }}>
                    <span style={{
                      width: '22px', height: '22px', flexShrink: 0,
                      background: 'var(--light)', color: 'var(--primary-dark)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem',
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button onClick={() => navigate('/projects')} className="btn btn-primary">
                  View Portfolio <ArrowRight size={17} />
                </button>
                <button onClick={onOpenQuoteModal} className="btn btn-ghost">
                  Talk to an Engineer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── PROCESS SECTION ──────────── */}
      <section style={{ background: 'var(--light)', padding: '110px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 60px auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>How We Work</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: 'var(--dark)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em',
            }}>
              Our engineering process, simplified
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}>
            {[
              { n: '01', title: 'Site Assessment', desc: 'Free site visit, soil testing, structural feasibility, and load analysis by our senior engineers.' },
              { n: '02', title: 'Design & Approval', desc: 'CAD blueprints, 3D elevations, BOQ preparation, and municipal permit facilitation.' },
              { n: '03', title: 'Construction Execution', desc: 'Daily on-site engineer supervision, milestone billing, and Firebase real-time progress updates.' },
              { n: '04', title: 'Handover & Warranty', desc: 'Quality inspection, snag-list closure, structural warranty certificate, and product installation.' },
            ].map((step, i) => (
              <div key={i} style={{
                padding: '0 32px',
                borderLeft: '1px solid var(--border)',
                borderRight: i === 3 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '3.5rem', lineHeight: 1,
                  color: 'var(--primary)', opacity: 0.7, fontWeight: 700,
                }}>
                  {step.n}
                </div>
                <h3 style={{ color: 'var(--dark)', fontSize: '1.15rem', fontWeight: 700, margin: '22px 0 13px' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: '1.65' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── CTA SECTION ──────────── */}
      <section style={{
        position: 'relative', padding: '110px 0',
        background: `
          linear-gradient(rgba(15,15,15,0.84), rgba(15,15,15,0.84)),
          url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85") center/cover fixed
        `,
        color: '#fff', textAlign: 'center',
      }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--primary)' }}>
              Start Your Project Today
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 600, lineHeight: 1.08,
              letterSpacing: '-0.02em', marginBottom: '22px',
            }}>
              Ready to build something extraordinary?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.68)', maxWidth: '560px', margin: '0 auto 36px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Whether it's a dream villa, a structural audit, or a set of premium soundproof windows — our engineers are ready to make it happen.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={onOpenQuoteModal} className="btn btn-primary" style={{ padding: '0 36px' }}>
                Book Free Consultation <ArrowRight size={18} />
              </button>
              <button onClick={() => navigate('/projects')} className="btn btn-secondary" style={{ padding: '0 28px' }}>
                Explore Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── CONTACT INFO STRIP ──────────── */}
      <section style={{ background: 'var(--dark)', padding: '0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            {[
              { icon: Phone, label: 'Call Us', value: '+91 98765 43210' },
              { icon: Mail, label: 'Email Us', value: 'info@saalaram.com' },
              { icon: MapPin, label: 'Visit Us', value: 'Madurai, Tamil Nadu' },
            ].map(({ icon: Icon, label, value }, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '20px',
                padding: '36px 40px',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{
                  width: '48px', height: '48px',
                  background: 'rgba(182,140,90,0.12)',
                  border: '1px solid rgba(182,140,90,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, color: 'var(--primary)',
                }}>
                  <Icon size={20} />
                </div>
                <div>
                  <small style={{ display: 'block', color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>
                    {label}
                  </small>
                  <strong style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>{value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
