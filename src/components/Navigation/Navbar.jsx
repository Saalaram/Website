import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const navigate    = useNavigate();
  const { pathname } = useLocation();
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const navItems = [
    { path: '/home',     label: 'Home'     },
    { path: '/aboutus',  label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
  ];

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuote = () => {
    setMobileOpen(false);
    onOpenQuoteModal();
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      <header className={`navbar-fixed ${scrolled ? 'navbar-scrolled' : ''}`} id="header">
        <div className="container nav-container">

          {/* Logo */}
          <div className="logo-brand" onClick={() => goTo('/home')} style={{ cursor: 'pointer' }}>
            <div className="logo-icon">S</div>
            <div>
              <div className="logo-text">Saalaram</div>
              <span className="logo-subtitle">Engineering & Architectural Products</span>
            </div>
          </div>

          {/* Desktop nav */}
          <ul className="nav-links" id="navMenu">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <button
                  onClick={() => goTo(path)}
                  className={`nav-link ${isActive(path) ? 'active' : ''}`}
                >
                  {label}
                </button>
              </li>
            ))}

            {/* Get a Quote — text link style */}
            <li>
              <button
                onClick={handleQuote}
                className="nav-link"
                style={{ whiteSpace: 'nowrap' }}
              >
                Get a Quote
              </button>
            </li>

            {/* SAALARAM — highlighted standout button */}
            <li>
              <button
                onClick={() => goTo('/saalaram')}
                id="saalaram-nav-btn"
                style={{
                  position: 'relative',
                  padding: '10px 22px',
                  background: isActive('/saalaram') ? 'var(--primary)' : 'transparent',
                  border: '1px solid var(--primary)',
                  color: isActive('/saalaram') ? 'var(--dark)' : 'var(--primary)',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  fontFamily: 'Manrope, sans-serif',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive('/saalaram')
                    ? '0 0 20px rgba(182,140,90,0.45)'
                    : '0 0 12px rgba(182,140,90,0.18)',
                  animation: isActive('/saalaram') ? 'none' : 'saalaramPulse 3s ease-in-out infinite',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background   = 'var(--primary)';
                  e.currentTarget.style.color        = 'var(--dark)';
                  e.currentTarget.style.boxShadow    = '0 0 28px rgba(182,140,90,0.55)';
                  e.currentTarget.style.transform    = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  if (!isActive('/saalaram')) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color      = 'var(--primary)';
                    e.currentTarget.style.boxShadow  = '0 0 12px rgba(182,140,90,0.18)';
                  }
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                SAALARAM
              </button>
            </li>
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
            {mobileOpen
              ? <X size={24} color="#fff" />
              : (
                <div>
                  <span style={{ display: 'block', width: '25px', height: '2px', margin: '6px auto', background: '#fff', transition: '0.3s ease' }} />
                  <span style={{ display: 'block', width: '25px', height: '2px', margin: '6px auto', background: '#fff', transition: '0.3s ease' }} />
                  <span style={{ display: 'block', width: '25px', height: '2px', margin: '6px auto', background: '#fff', transition: '0.3s ease' }} />
                </div>
              )
            }
          </button>
        </div>

        {/* Mobile slide-in menu */}
        {mobileOpen && (
          <div style={{
            position: 'fixed',
            top: '88px', right: 0,
            width: 'min(380px, 88%)',
            height: 'calc(100vh - 88px)',
            padding: '45px 35px',
            background: 'rgba(17,18,17,0.98)',
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
            zIndex: 999,
            borderLeft: '1px solid rgba(255,255,255,0.06)',
          }}>
            {navItems.map(({ path, label }) => (
              <button
                key={path}
                onClick={() => goTo(path)}
                style={{
                  textAlign: 'left',
                  color: isActive(path) ? 'var(--primary)' : 'rgba(255,255,255,0.85)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  fontFamily: 'Manrope, sans-serif',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.3s',
                }}
              >
                {label}
              </button>
            ))}

            <button
              onClick={handleQuote}
              style={{
                textAlign: 'left',
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1.05rem',
                fontWeight: 600,
                fontFamily: 'Manrope, sans-serif',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Get a Quote
            </button>

            <div style={{ paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <button
                onClick={() => goTo('/saalaram')}
                style={{
                  padding: '12px 24px',
                  background: 'var(--primary)',
                  border: '1px solid var(--primary)',
                  color: 'var(--dark)',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  fontFamily: 'Manrope, sans-serif',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  width: '100%',
                  boxShadow: '0 0 20px rgba(182,140,90,0.35)',
                }}
              >
                SAALARAM Products
              </button>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 1100px) {
          .nav-links { display: none !important; }
          #mobile-menu-btn { display: flex !important; }
        }
        @keyframes saalaramPulse {
          0%, 100% { box-shadow: 0 0 12px rgba(182,140,90,0.18); }
          50%       { box-shadow: 0 0 22px rgba(182,140,90,0.45), 0 0 40px rgba(182,140,90,0.15); }
        }
      `}</style>
    </>
  );
}
