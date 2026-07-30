import React from 'react';
import {
  Phone, Mail, MapPin, Award, Target, Eye,
  Calendar, Users, Building2, CheckCircle, ArrowRight
} from 'lucide-react';

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '300+', label: 'Projects Delivered' },
  { value: '50+', label: 'Expert Engineers' },
  { value: '12', label: 'Districts Served' },
];

const services = [
  'Architectural Design & Planning',
  'Structural Consultation',
  'CAD Blueprints & Drawings',
  'Municipal Plan Approval',
  'Interior Design & Execution',
  'End-to-End Project Management',
];

export default function AboutPage({ onOpenQuoteModal }) {
  return (
    <div style={{ paddingTop: '88px' }}>

      {/* ── HERO BANNER ── */}
      <section style={{
        position: 'relative',
        height: '380px',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(rgba(15,15,15,0.78), rgba(15,15,15,0.78)),
          url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85") center/cover`,
        color: '#fff',
      }}>
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--primary)' }}>Our Story</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            marginBottom: '18px',
          }}>
            About Saalaram
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '560px', lineHeight: 1.7 }}>
            A legacy of engineering excellence, built on trust, precision, and craftsmanship across Tamil Nadu.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: 'var(--primary)', padding: '0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: '32px 28px',
                textAlign: 'center',
                borderLeft: i > 0 ? '1px solid rgba(23,24,23,0.18)' : 'none',
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2.6rem', fontWeight: 700,
                  color: 'var(--dark)', lineHeight: 1,
                }}>{s.value}</div>
                <div style={{ color: 'rgba(23,24,23,0.7)', fontWeight: 600, fontSize: '0.82rem', marginTop: '6px', letterSpacing: '0.05em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MD PROFILE ── */}
      <section style={{ background: '#fff', padding: '110px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '400px 1fr',
            gap: '80px',
            alignItems: 'center',
          }}>
            {/* Photo + badge */}
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '100%',
                aspectRatio: '3/4',
                background: 'var(--light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '1px solid var(--border)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0dc05ae8dd97?auto=format&fit=crop&w=600&q=85"
                  alt="Managing Director - Saalaram"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {/* Experience badge */}
              <div style={{
                position: 'absolute',
                bottom: '-24px',
                right: '-24px',
                background: 'var(--dark)',
                color: '#fff',
                padding: '24px 28px',
                minWidth: '160px',
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2.4rem', fontWeight: 700,
                  color: 'var(--primary)', lineHeight: 1,
                }}>15+</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, marginTop: '6px', color: 'rgba(255,255,255,0.75)' }}>
                  Years of<br />Engineering<br />Excellence
                </div>
              </div>
            </div>

            {/* Text content */}
            <div style={{ paddingBottom: '30px' }}>
              <div className="eyebrow">Leadership</div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 600,
                color: 'var(--dark)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '8px',
              }}>
                [MD Name Placeholder]
              </h2>
              <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '22px' }}>
                Managing Director & Chief Engineer
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.78', marginBottom: '16px' }}>
                With over 15 years of hands-on experience in civil engineering and construction management, [MD Name] has led Saalaram to become one of Tamil Nadu's most trusted engineering and architectural product firms.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.78', marginBottom: '32px' }}>
                A licensed Civil Engineer with a B.E. in Civil Engineering from [University Placeholder], he has overseen the successful delivery of 300+ residential, commercial, and infrastructure projects across 12 districts of Tamil Nadu.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '48px', height: '48px',
                    background: 'rgba(182,140,90,0.1)',
                    border: '1px solid rgba(182,140,90,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)',
                  }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Direct Line</div>
                    <strong style={{ color: 'var(--dark)', fontSize: '0.95rem' }}>+91 XXXXX XXXXX</strong>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '48px', height: '48px',
                    background: 'rgba(182,140,90,0.1)',
                    border: '1px solid rgba(182,140,90,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)',
                  }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Email</div>
                    <strong style={{ color: 'var(--dark)', fontSize: '0.95rem' }}>md@saalaram.com</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY STORY ── */}
      <section style={{ background: 'var(--light)', padding: '110px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}>
            {/* Left — Established */}
            <div>
              <div className="eyebrow">Our Foundation</div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 600,
                color: 'var(--dark)',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}>
                Established in<br />
                <span style={{ color: 'var(--primary)' }}>[Year Placeholder]</span>
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.78', marginBottom: '18px' }}>
                Saalaram was founded with a single mission: to deliver world-class civil engineering and architectural solutions that stand the test of time. What began as a small structural consultancy in Madurai has grown into a full-service engineering and product firm serving clients across Tamil Nadu.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.78', marginBottom: '32px' }}>
                Today, Saalaram is recognized for its dual expertise — combining rigorous civil engineering with premium architectural products (windows, doors, glazing, and blinds) under one trusted roof.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '48px', height: '2px', background: 'var(--primary)' }} />
                <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Madurai, Tamil Nadu
                </span>
              </div>
            </div>

            {/* Right — Vision & Mission */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {/* Vision */}
              <div style={{
                background: '#fff',
                border: '1px solid var(--border)',
                padding: '36px',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '4px', height: '100%',
                  background: 'var(--primary)',
                }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{
                    width: '44px', height: '44px',
                    background: 'rgba(182,140,90,0.1)',
                    border: '1px solid rgba(182,140,90,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)',
                  }}>
                    <Eye size={20} />
                  </div>
                  <h3 style={{ color: 'var(--dark)', fontSize: '1.1rem', fontWeight: 700 }}>Our Vision</h3>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.97rem', lineHeight: '1.72' }}>
                  To be the most trusted engineering and architectural firm in South India — where every structure we build reflects precision, sustainability, and human-centred design.
                </p>
              </div>

              {/* Mission */}
              <div style={{
                background: '#fff',
                border: '1px solid var(--border)',
                padding: '36px',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '4px', height: '100%',
                  background: 'var(--dark)',
                }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{
                    width: '44px', height: '44px',
                    background: 'rgba(23,24,23,0.06)',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--dark)',
                  }}>
                    <Target size={20} />
                  </div>
                  <h3 style={{ color: 'var(--dark)', fontSize: '1.1rem', fontWeight: 700 }}>Our Mission</h3>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.97rem', lineHeight: '1.72' }}>
                  To deliver end-to-end civil engineering, design, and premium product solutions with transparency, quality, and on-time execution — making exceptional construction accessible to every client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section style={{ background: '#fff', padding: '110px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '60px' }}>
            <div className="eyebrow">What We Do</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 600,
              color: 'var(--dark)',
              lineHeight: 1.1,
              marginBottom: '18px',
            }}>A brief overview of our services</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.75' }}>
              From the first blueprint to the final finishing touch, Saalaram provides complete engineering and architectural services.
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }}>
            {services.map((s, i) => (
              <div key={i} style={{
                padding: '32px 28px',
                background: '#fff',
                display: 'flex', alignItems: 'center', gap: '14px',
                transition: 'background 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--light)'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
              >
                <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--dark)', fontWeight: 600, fontSize: '0.95rem' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT DETAILS ── */}
      <section style={{ background: 'var(--dark)', padding: '110px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--primary)' }}>Reach Us</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#fff', fontWeight: 600, lineHeight: 1.1,
            }}>
              Contact Details
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}>
            {[
              {
                icon: Phone,
                label: 'Phone',
                primary: '+91 XXXXX XXXXX',
                secondary: 'Mon–Sat, 9am – 6pm',
              },
              {
                icon: Mail,
                label: 'Email',
                primary: 'info@saalaram.com',
                secondary: 'We respond within 24 hours',
              },
              {
                icon: MapPin,
                label: 'Office',
                primary: 'Madurai, Tamil Nadu',
                secondary: '[Full Address Placeholder]',
              },
            ].map(({ icon: Icon, label, primary, secondary }, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '40px 36px',
                textAlign: 'center',
                transition: 'border-color 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <div style={{
                  width: '56px', height: '56px',
                  background: 'rgba(182,140,90,0.12)',
                  border: '1px solid rgba(182,140,90,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--primary)',
                  margin: '0 auto 20px',
                }}>
                  <Icon size={22} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>
                  {label}
                </div>
                <div style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>{primary}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{secondary}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button onClick={onOpenQuoteModal} className="btn btn-primary" style={{ padding: '0 40px' }}>
              Book a Free Consultation <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
