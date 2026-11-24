import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change & handle hash navigation
  useEffect(() => {
    setMobileOpen(false);
    if (window.location.hash === '#about-us') {
      setTimeout(() => {
        const el = document.getElementById('about-us');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, [pathname]);

  const isSaalaramPortal = pathname.startsWith('/saalaram');

  const aramNavItems = [
    { path: '/home', label: 'Home' },
    { path: 'about-us', label: 'About Us', isAnchor: true },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
  ];

  const saalaramNavItems = [
    { path: '/saalaram', label: 'Home' },
    { path: 'about-us', label: 'About Us', isAnchor: true },
    { path: '/saalaram/products', label: 'Products' },
  ];

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutUs = () => {
    setMobileOpen(false);
    const targetPath = isSaalaramPortal ? '/saalaram' : '/home';
    const el = document.getElementById('about-us');
    if (el && ((isSaalaramPortal && pathname === '/saalaram') || (!isSaalaramPortal && pathname === '/home'))) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`${targetPath}#about-us`);
    }
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

  const [isAboutInView, setIsAboutInView] = useState(false);

  useEffect(() => {
    const el = document.getElementById('about-us');
    if (!el) {
      setIsAboutInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutInView(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: '-88px 0px -15% 0px'
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  const isItemActive = (item) => {
    if (item.isAnchor) {
      return isAboutInView;
    }
    if (isAboutInView && (item.path === '/home' || item.path === '/saalaram')) {
      return false;
    }
    return pathname === item.path;
  };

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
                className="navbar-logo-img"
                style={{
                  height: '52px',
                  width: 'auto',
                  objectFit: 'contain',
                  maxHeight: '52px',
                }}
              />
            ) : (
              <img
                src="/assets/logos/Aram_Logo_Color_Transaparent.png"
                alt="Aram Architecture"
                className="navbar-logo-img"
                style={{ height: '64px', width: 'auto', objectFit: 'contain', maxHeight: '64px' }}
              />
            )}
          </div>

          {/* Desktop Nav */}
          <ul className="nav-links" id="navMenu">
            {isSaalaramPortal ? (
              /* ── SAALARAM NAV ITEMS ── */
              <>
                {saalaramNavItems.map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => item.isAnchor ? handleAboutUs() : goTo(item.path)}
                      className={`nav-link ${isItemActive(item) ? 'active' : ''}`}
                      style={{ color: isItemActive(item) ? '#60a5fa' : 'rgba(255,255,255,0.85)' }}
                    >
                      {item.label}
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
                {aramNavItems.map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => item.isAnchor ? handleAboutUs() : goTo(item.path)}
                      className={`nav-link ${isItemActive(item) ? 'active' : ''}`}
                    >
                      {item.label}
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

                {/* SAALARAM — Highlighted Button matching Saalaram Logo */}
                <li>
                  <button
                    onClick={() => goTo('/saalaram')}
                    id="saalaram-nav-btn"
                    style={{
                      padding: '10px 22px',
                      background: '#1250b5',
                      border: '1px solid #4085f5',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      fontFamily: 'Manrope, sans-serif',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 0 18px rgba(30,41,59,0.5)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#4085f5';
                      e.currentTarget.style.boxShadow = '0 0 26px rgba(51,65,85,0.7)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#1250b5';
                      e.currentTarget.style.boxShadow = '0 0 18px rgba(30,41,59,0.5)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    SAALARAM
                  </button>
                </li>
              </>
            )}
          </ul>

          {/* Mobile-only cross-portal button — shown via CSS class, placed before hamburger */}
          {isSaalaramPortal ? (
            <button
              onClick={() => goTo('/home')}
              className="mobile-portal-btn"
              aria-label="Go to ARAM Architecture"
              style={{
                padding: '7px 14px',
                background: '#b68c5a',
                border: '1px solid #b68c5a',
                color: '#171817',
                fontSize: '0.75rem',
                fontWeight: 800,
                fontFamily: 'Manrope, sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                flexShrink: 0,
                marginLeft: 'auto',
                marginRight: '10px',
                boxShadow: '0 0 12px rgba(182,140,90,0.35)',
              }}
            >
              ARAM
            </button>
          ) : (
            <button
              onClick={() => goTo('/saalaram')}
              className="mobile-portal-btn"
              aria-label="Go to Saalaram Solutions"
              style={{
                padding: '7px 14px',
                background: '#1250b5',
                border: '1px solid #4085f5',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 800,
                fontFamily: 'Manrope, sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                flexShrink: 0,
                marginLeft: 'auto',
                marginRight: '10px',
                boxShadow: '0 0 12px rgba(18,80,181,0.4)',
              }}
            >
              SAALARAM
            </button>
          )}

          {/* Mobile hamburger — shown/hidden via CSS class */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            id="mobile-menu-btn"
            className="mobile-menu-btn"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{
              width: '44px', height: '44px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.18)',
              cursor: 'pointer',
              color: '#fff',
              padding: 0,
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {mobileOpen ? <X size={22} color="#fff" /> : (
              <div>
                <span style={{ display: 'block', width: '22px', height: '2px', margin: '5px auto', background: '#fff', transition: 'all 0.3s' }} />
                <span style={{ display: 'block', width: '22px', height: '2px', margin: '5px auto', background: '#fff', transition: 'all 0.3s' }} />
                <span style={{ display: 'block', width: '14px', height: '2px', margin: '5px auto', background: '#fff', transition: 'all 0.3s' }} />
              </div>
            )}
          </button>
        </div>

        {/* Mobile Slide-in Menu */}
        {mobileOpen && (
          <>
            {/* Click-outside overlay */}
            <div
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                top: '68px',
                background: 'rgba(0,0,0,0.55)',
                zIndex: 998,
                backdropFilter: 'blur(2px)',
              }}
            />
          <div style={{
            position: 'fixed',
            top: '68px', right: 0,
            width: 'min(360px, 88vw)',
            height: 'calc(100dvh - 68px)',
            overflowY: 'auto',
            padding: '40px 28px 40px',
            background: isSaalaramPortal ? 'rgba(10,18,35,0.99)' : 'rgba(14,15,14,0.99)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            zIndex: 999,
            borderLeft: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '-20px 0 60px rgba(0,0,0,0.4)',
          }}>
            {isSaalaramPortal ? (
              <>
                {saalaramNavItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => item.isAnchor ? handleAboutUs() : goTo(item.path)}
                    style={{
                      textAlign: 'left',
                      color: isItemActive(item) ? '#60a5fa' : 'rgba(255,255,255,0.85)',
                      fontSize: '1.05rem', fontWeight: 600,
                      fontFamily: 'Manrope, sans-serif', background: 'none',
                      border: 'none', cursor: 'pointer', padding: 0,
                      textDecoration: isItemActive(item) ? 'underline' : 'none',
                    }}
                  >
                    {item.label}
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
                {aramNavItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => item.isAnchor ? handleAboutUs() : goTo(item.path)}
                    style={{
                      textAlign: 'left',
                      color: isItemActive(item) ? 'var(--primary)' : 'rgba(255,255,255,0.85)',
                      fontSize: '1.05rem', fontWeight: 600,
                      fontFamily: 'Manrope, sans-serif', background: 'none',
                      border: 'none', cursor: 'pointer', padding: 0,
                      textDecoration: isItemActive(item) ? 'underline' : 'none',
                    }}
                  >
                    {item.label}
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
                      padding: '12px 24px', background: '#1250b5', border: '1px solid #4085f5',
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
          </>
        )}
      </header>

      {/* Mobile show/hide handled via .mobile-menu-btn CSS class in index.css */}
    </>
  );
}
