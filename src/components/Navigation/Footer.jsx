import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenQuoteModal }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isSaalaramPortal = pathname.startsWith('/saalaram');

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactUs = () => {
    const element = document.getElementById('contact-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/saalaram#contact-us');
    }
  };

  return (
    <footer
      style={{
        background: isSaalaramPortal ? '#070d19' : '#111210',
        color: 'rgba(255,255,255,0.65)',
        paddingTop: '75px',
        borderTop: isSaalaramPortal ? '1px solid rgba(59,130,246,0.2)' : 'none',
      }}
    >
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
              {isSaalaramPortal ? (
                <img
                  src="/assets/logos/Saalaram_Transparent.png"
                  alt="Saalaram Solutions"
                  style={{ height: '56px', width: 'auto', objectFit: 'contain', maxHeight: '56px' }}
                />
              ) : (
                <img
                  src="/assets/logos/Aram_Logo_Color_Transaparent.png"
                  alt="Aram Architecture"
                  style={{ height: '68px', width: 'auto', objectFit: 'contain', maxHeight: '68px' }}
                />
              )}
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', maxWidth: '340px', marginBottom: '28px' }}>
              {isSaalaramPortal
                ? 'South India’s premier manufacturer and installer of acoustic uPVC windows, aluminum entrance doors, motorized blinds, and architectural lighting systems.'
                : 'Premier civil engineering consultancy and construction firm, paired with luxury windows, doors, blinds, and architectural glazing solutions across Tamil Nadu.'
              }
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['Fb', 'Ig', 'Li', 'Yt'].map((s) => (
                <div
                  key={s}
                  style={{
                    width: '40px', height: '40px',
                    border: '1px solid rgba(255,255,255,0.14)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: '0.72rem', fontWeight: 700,
                    cursor: 'pointer', transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = isSaalaramPortal ? '#2563eb' : 'var(--primary)'; e.currentTarget.style.borderColor = isSaalaramPortal ? '#2563eb' : 'var(--primary)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = '#fff'; }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '22px' }}>
              {isSaalaramPortal ? 'Saalaram Portal' : 'Quick Links'}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '11px', listStyle: 'none' }}>
              {isSaalaramPortal ? (
                <>
                  <li><button onClick={() => goTo('/saalaram')} style={linkStyle}>Home</button></li>
                  <li><button onClick={() => goTo('/saalaram/aboutus')} style={linkStyle}>About Us</button></li>
                  <li><button onClick={() => goTo('/saalaram/products')} style={linkStyle}>Products</button></li>
                  <li><button onClick={handleContactUs} style={linkStyle}>Contact Us</button></li>
                  <li>
                    <button
                      onClick={() => goTo('/home')}
                      style={{ ...linkStyle, color: '#d4a86a', fontWeight: 700 }}
                    >
                      ARAM Architecture →
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li><button onClick={() => goTo('/home')} style={linkStyle}>Home</button></li>
                  <li><button onClick={() => goTo('/aboutus')} style={linkStyle}>About Us</button></li>
                  <li><button onClick={() => goTo('/services')} style={linkStyle}>Services</button></li>
                  <li><button onClick={() => goTo('/projects')} style={linkStyle}>Projects</button></li>
                  <li><button onClick={onOpenQuoteModal} style={linkStyle}>Get a Quote</button></li>
                  <li>
                    <button
                      onClick={() => goTo('/saalaram')}
                      style={{ ...linkStyle, color: '#60a5fa', fontWeight: 700 }}
                    >
                      SAALARAM Solutions →
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Col 3 — Offerings */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '22px' }}>
              {isSaalaramPortal ? 'Product Solutions' : 'Our Services'}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '11px', listStyle: 'none' }}>
              {(isSaalaramPortal ? [
                'uPVC Acoustic Windows',
                'Aluminium French Doors',
                'Bi-Fold Patio Doors',
                'Recessed LED Panels',
                'Pendant Chandeliers',
                'Motorized Window Blinds',
              ] : [
                'Architectural Design',
                'Consultation',
                'Blueprints & Drawings',
                'Plan Approval',
                'Interior Design',
                'Project Management',
              ]).map((item) => (
                <li key={item}>
                  <button
                    onClick={() => goTo(isSaalaramPortal ? '/saalaram/products' : '/services')}
                    style={{ ...linkStyle, fontSize: '0.9rem' }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact Info */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '22px' }}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
              {[
                { Icon: MapPin, text: 'Saalaram Office & Showroom, Madurai, Tamil Nadu — 625001' },
                { Icon: Phone, text: '+91 XXXXX XXXXX' },
                { Icon: Mail, text: isSaalaramPortal ? 'solutions@saalaram.com' : 'contact@saalaram.com' },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '40px', height: '40px', flexShrink: 0,
                    background: isSaalaramPortal ? 'rgba(37,99,235,0.12)' : 'rgba(255,255,255,0.05)',
                    border: isSaalaramPortal ? '1px solid rgba(59,130,246,0.25)' : 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: isSaalaramPortal ? '#60a5fa' : 'var(--primary)',
                  }}>
                    <Icon size={17} />
                  </div>
                  <span style={{ fontSize: '0.88rem', lineHeight: '1.5', paddingTop: '10px' }}>{text}</span>
                </div>
              ))}
            </div>
            <button
              onClick={isSaalaramPortal ? handleContactUs : onOpenQuoteModal}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '12px 20px', width: '100%',
                background: isSaalaramPortal ? '#2563eb' : 'transparent',
                border: isSaalaramPortal ? 'none' : '1px solid var(--primary)',
                color: '#fff', fontFamily: 'Manrope, sans-serif',
                fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                justifyContent: 'center', transition: 'all 0.3s ease',
              }}
            >
              {isSaalaramPortal ? 'Contact Saalaram Team' : 'Get a Quote'} <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          padding: '22px 0',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '20px', fontSize: '0.82rem', flexWrap: 'wrap',
        }}>
          <span>© {new Date().getFullYear()} {isSaalaramPortal ? 'Saalaram Solutions' : 'Saalaram Engineering & Architectural Products'}. All rights reserved.</span>
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

const linkStyle = {
  background: 'none', border: 'none', cursor: 'pointer',
  color: 'rgba(255,255,255,0.65)', fontSize: '0.92rem',
  fontFamily: 'Manrope, sans-serif', padding: 0, textAlign: 'left',
  transition: 'all 0.3s ease',
};
