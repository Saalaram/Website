import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenQuoteModal }) {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#111210', color: 'rgba(255,255,255,0.65)', paddingTop: '75px' }}>
      <div className="container">
        {/* 4-col grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 0.7fr 0.85fr 1fr',
          gap: '55px',
          paddingBottom: '55px',
        }}>
          {/* Col 1 — Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
              <div style={{
                width: '42px', height: '42px',
                border: '1px solid var(--primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--primary)',
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.4rem', fontWeight: 700,
              }}>S</div>
              <div>
                <strong style={{ display: 'block', fontFamily: "'Playfair Display', serif", fontSize: '1.18rem', color: '#fff', lineHeight: 1 }}>Saalaram</strong>
                <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Engineering & Architectural Products</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', maxWidth: '340px', marginBottom: '28px' }}>
              Premier civil engineering consultancy and construction firm, paired with luxury windows, doors, blinds, and architectural glazing solutions across Tamil Nadu.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['Fb', 'Ig', 'Li', 'Yt'].map((s) => (
                <div key={s} style={{
                  width: '40px', height: '40px',
                  border: '1px solid rgba(255,255,255,0.14)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '0.72rem', fontWeight: 700,
                  cursor: 'pointer', transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = '#111'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = '#fff'; }}
                >{s}</div>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '22px' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '11px', listStyle: 'none' }}>
              {[
                { label: 'Home',      path: '/home'     },
                { label: 'About Us',  path: '/aboutus'  },
                { label: 'Services',  path: '/services' },
                { label: 'Projects',  path: '/projects' },
                { label: 'SAALARAM',  path: '/saalaram' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <button onClick={() => goTo(path)} style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: path === '/saalaram' ? 'var(--primary)' : 'rgba(255,255,255,0.65)',
                    fontSize: '0.92rem',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: path === '/saalaram' ? 700 : 400,
                    padding: 0, textAlign: 'left',
                    transition: 'all 0.3s ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = path === '/saalaram' ? 'var(--primary)' : 'rgba(255,255,255,0.65)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={onOpenQuoteModal} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'rgba(255,255,255,0.65)', fontSize: '0.92rem',
                  fontFamily: 'Manrope, sans-serif',
                  padding: 0, textAlign: 'left',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.paddingLeft = '4px'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; e.currentTarget.style.paddingLeft = '0'; }}
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '22px' }}>Our Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '11px', listStyle: 'none' }}>
              {[
                'Architectural Design',
                'Consultation',
                'Blueprints & Drawings',
                'Plan Approval',
                'Interior Design',
                'Project Management',
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => goTo('/services')}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem',
                      fontFamily: 'Manrope, sans-serif',
                      padding: 0, textAlign: 'left',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '22px' }}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
              {[
                { Icon: MapPin, text: 'Saalaram Office, Madurai, Tamil Nadu — 625001' },
                { Icon: Phone, text: '+91 XXXXX XXXXX' },
                { Icon: Mail,  text: 'contact@saalaram.com' },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '40px', height: '40px', flexShrink: 0,
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)',
                  }}>
                    <Icon size={17} />
                  </div>
                  <span style={{ fontSize: '0.88rem', lineHeight: '1.5', paddingTop: '10px' }}>{text}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onOpenQuoteModal}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '12px 20px', width: '100%',
                background: 'transparent', border: '1px solid var(--primary)',
                color: '#fff', fontFamily: 'Manrope, sans-serif',
                fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                justifyContent: 'center', transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#111'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}
            >
              Get a Quote <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          padding: '22px 0',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '20px', fontSize: '0.82rem', flexWrap: 'wrap',
        }}>
          <span>© {new Date().getFullYear()} Saalaram Engineering & Architectural Products. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <button onClick={() => goTo('/admin')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.45)', cursor: 'pointer', fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem' }}>Admin Console</button>
            <span style={{ color: 'rgba(255,255,255,0.45)', cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ color: 'rgba(255,255,255,0.45)', cursor: 'pointer' }}>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
