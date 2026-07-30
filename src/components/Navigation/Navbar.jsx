import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isSaalaramPortal = pathname.startsWith('/saalaram');

  const aramNavItems = [
    { path: '/home',     label: 'Home'     },
    { path: '/aboutus',  label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
  ];

  const saalaramNavItems = [
    { path: '/saalaram',          label: 'Home'     },
    { path: '/saalaram/aboutus',  label: 'About Us' },
    { path: '/saalaram/products', label: 'Products' },
  ];

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactUs = () => {
    setMobileOpen(false);
    const element = document.getElementById('contact-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/saalaram#contact-us');
    }
  };

  const handleQuote = () => {
    setMobileOpen(false);
    onOpenQuoteModal();
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      <header
        className={`navbar-fixed ${scrolled ? 'navbar-scrolled' : ''}`}
        id="header"
        style={{
          background: isSaalaramPortal ? 'rgba(13, 23, 42, 0.96)' : 'rgba(17, 18, 17, 0.96)',
          borderBottom: isSaalaramPortal ? '1px solid rgba(59, 130, 246, 0.25)' : '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <div className="container nav-container">

          {/* Logo */}
          <div
            className="logo-brand"
            onClick={() => goTo(isSaalaramPortal ? '/saalaram' : '/home')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            {isSaalaramPortal ? (
              <img
                src="/assets/logos/Saalaram_Transparent.png"
                alt="Saalaram Solutions"
                style={{
                  height: '56px',
                  width: 'auto',
                  objectFit: 'contain',
                  maxHeight: '56px',
                }}
              />
            ) : (
              <img
                src="/assets/logos/Aram_Logo_Color_Transaparent.png"
                alt="Aram Architecture"
                style={{ height: '68px', width: 'auto', objectFit: 'contain', maxHeight: '68px' }}
              />
            )}
          </div>

          {/* Desktop Nav */}
          <ul className="nav-links" id="navMenu">
            {isSaalaramPortal ? (
              /* ── SAALARAM NAV ITEMS ── */
              <>
                {saalaramNavItems.map(({ path, label }) => (
                  <li key={path}>
                    <button
                      onClick={() => goTo(path)}
                      className={`nav-link ${isActive(path) ? 'active' : ''}`}
                      style={{ color: isActive(path) ? '#60a5fa' : 'rgba(255,255,255,0.85)' }}
                    >
                      {label}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    onClick={handleContactUs}
                    className="nav-link"
                    style={{ color: 'rgba(255,255,255,0.85)', whiteSpace: 'nowrap' }}
                  >
                    Contact Us
                  </button>
                </li>

                {/* ARAM — Highlighted Standout Gold Button */}
                <li>
                  <button
                    onClick={() => goTo('/home')}
                    id="aram-nav-btn"
                    style={{
                      padding: '10px 22px',
                      background: '#b68c5a',
                      border: '1px solid #b68c5a',
                      color: '#171817',
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      fontFamily: 'Manrope, sans-serif',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 0 16px rgba(182,140,90,0.4)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#d4a86a';
                      e.currentTarget.style.boxShadow = '0 0 26px rgba(182,140,90,0.6)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#b68c5a';
                      e.currentTarget.style.boxShadow = '0 0 16px rgba(182,140,90,0.4)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    ARAM
                  </button>
                </li>
              </>
            ) : (
              /* ── ARAM ARCHITECTURE NAV ITEMS ── */
              <>
                {aramNavItems.map(({ path, label }) => (
                  <li key={path}>
                    <button
                      onClick={() => goTo(path)}
                      className={`nav-link ${isActive(path) ? 'active' : ''}`}
                    >
                      {label}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    onClick={handleQuote}
                    className="nav-link"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    Get a Quote
                  </button>
                </li>

                {/* SAALARAM — Highlighted Sapphire Blue Button */}
                <li>
                  <button
                    onClick={() => goTo('/saalaram')}
                    id="saalaram-nav-btn"
                    style={{
                      padding: '10px 22px',
                      background: '#2563eb',
                      border: '1px solid #3b82f6',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      fontFamily: 'Manrope, sans-serif',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 0 18px rgba(37,99,235,0.45)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#1d4ed8';
                      e.currentTarget.style.boxShadow = '0 0 28px rgba(37,99,235,0.65)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#2563eb';
                      e.currentTarget.style.boxShadow = '0 0 18px rgba(37,99,235,0.45)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    SAALARAM
                  </button>
                </li>
              </>
            )}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            id="mobile-menu-btn"
            aria-label="Open menu"
            style={{
              display: 'none',
              width: '45px', height: '45px',
              background: 'transparent',
              border: 0,
              cursor: 'pointer',
              color: '#fff',
              padding: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mobileOpen ? <X size={24} color="#fff" /> : (
              <div>
                <span style={{ display: 'block', width: '25px', height: '2px', margin: '6px auto', background: '#fff' }} />
                <span style={{ display: 'block', width: '25px', height: '2px', margin: '6px auto', background: '#fff' }} />
                <span style={{ display: 'block', width: '25px', height: '2px', margin: '6px auto', background: '#fff' }} />
              </div>
            )}
          </button>
        </div>

        {/* Mobile Slide-in Menu */}
        {mobileOpen && (
          <div style={{
            position: 'fixed',
            top: '88px', right: 0,
            width: 'min(380px, 88%)',
            height: 'calc(100vh - 88px)',
            padding: '45px 35px',
            background: isSaalaramPortal ? 'rgba(13,23,42,0.98)' : 'rgba(17,18,17,0.98)',
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
            zIndex: 999,
            borderLeft: '1px solid rgba(255,255,255,0.06)',
          }}>
            {isSaalaramPortal ? (
              <>
                {saalaramNavItems.map(({ path, label }) => (
                  <button
                    key={path}
                    onClick={() => goTo(path)}
                    style={{
                      textAlign: 'left',
                      color: isActive(path) ? '#60a5fa' : 'rgba(255,255,255,0.85)',
                      fontSize: '1.05rem', fontWeight: 600,
                      fontFamily: 'Manrope, sans-serif', background: 'none',
                      border: 'none', cursor: 'pointer', padding: 0,
                    }}
                  >
                    {label}
                  </button>
                ))}
                <button
                  onClick={handleContactUs}
                  style={{
                    textAlign: 'left', color: 'rgba(255,255,255,0.85)',
                    fontSize: '1.05rem', fontWeight: 600,
                    fontFamily: 'Manrope, sans-serif', background: 'none',
                    border: 'none', cursor: 'pointer', padding: 0,
                  }}
                >
                  Contact Us
                </button>
                <div style={{ paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <button
                    onClick={() => goTo('/home')}
                    style={{
                      padding: '12px 24px', background: '#b68c5a', border: '1px solid #b68c5a',
                      color: '#171817', fontSize: '0.9rem', fontWeight: 800,
                      fontFamily: 'Manrope, sans-serif', letterSpacing: '0.12em',
                      textTransform: 'uppercase', cursor: 'pointer', width: '100%',
                    }}
                  >
                    ARAM Architecture
                  </button>
                </div>
              </>
            ) : (
              <>
                {aramNavItems.map(({ path, label }) => (
                  <button
                    key={path}
                    onClick={() => goTo(path)}
                    style={{
                      textAlign: 'left',
                      color: isActive(path) ? 'var(--primary)' : 'rgba(255,255,255,0.85)',
                      fontSize: '1.05rem', fontWeight: 600,
                      fontFamily: 'Manrope, sans-serif', background: 'none',
                      border: 'none', cursor: 'pointer', padding: 0,
                    }}
                  >
                    {label}
                  </button>
                ))}
                <button
                  onClick={handleQuote}
                  style={{
                    textAlign: 'left', color: 'rgba(255,255,255,0.85)',
                    fontSize: '1.05rem', fontWeight: 600,
                    fontFamily: 'Manrope, sans-serif', background: 'none',
                    border: 'none', cursor: 'pointer', padding: 0,
                  }}
                >
                  Get a Quote
                </button>
                <div style={{ paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <button
                    onClick={() => goTo('/saalaram')}
                    style={{
                      padding: '12px 24px', background: '#2563eb', border: '1px solid #3b82f6',
                      color: '#fff', fontSize: '0.9rem', fontWeight: 800,
                      fontFamily: 'Manrope, sans-serif', letterSpacing: '0.12em',
                      textTransform: 'uppercase', cursor: 'pointer', width: '100%',
                    }}
                  >
                    SAALARAM Solutions
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 1100px) {
          .nav-links { display: none !important; }
          #mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
