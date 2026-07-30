import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    // Construction workers on a building site with scaffolding
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=90',
    kicker: 'Turnkey Civil Engineering',
    headline: ['We engineer', 'spaces that', 'last generations.'],
    sub: 'From foundation to rooftop — structural precision, luxury finish.',
    cta: '/services',
    ctaLabel: 'Our Engineering Services',
    // Right-side floating preview image
    sideImage: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=700&q=85',
    sideCaption: 'Active Site Supervision',
  },
  {
    id: 2,
    // Modern high-rise apartment under construction with cranes
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2000&q=90',
    kicker: 'Premium Architectural Products',
    headline: ['Elevate every', 'opening with', 'precision craft.'],
    sub: 'Soundproof windows, thermal doors & motorized blinds — built different.',
    cta: '/saalaram',
    ctaLabel: 'Browse Our Catalog',
    sideImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=85',
    sideCaption: 'Premium Fenestration',
  },
  {
    id: 3,
    // Luxury completed villa exterior — verified working
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90',
    kicker: 'Portfolio of Excellence',
    headline: ['150+ projects.', 'One standard —', 'perfection.'],
    sub: 'Explore our delivered projects across Tamil Nadu and beyond.',
    cta: '/projects',
    ctaLabel: 'View Portfolio',
    sideImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=700&q=85',
    sideCaption: 'Delivered Projects',
  },
];

const STATS = [
  { value: '150+', label: 'Projects Completed' },
  { value: '15 Yrs', label: 'Engineering Experience' },
  { value: '10,000+', label: 'Windows & Blinds Installed' },
];

export default function HeroSection({ onOpenQuoteModal }) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((idx) => {
    if (animating) return;
    setAnimating(true);
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setVisible(true);
      setAnimating(false);
    }, 600);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  // Auto-advance every 6s
  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '700px', overflow: 'hidden' }}>

      {/* Background image with cross-fade */}
      {SLIDES.map((s, i) => (
        <div key={s.id} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${s.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'opacity 0.9s ease',
          opacity: i === current ? 1 : 0,
          zIndex: 0,
        }} />
      ))}

      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(105deg, rgba(12,12,12,0.88) 0%, rgba(12,12,12,0.65) 55%, rgba(12,12,12,0.25) 100%)',
      }} />

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      {/* Hero text content */}
      <div className="container" style={{
        position: 'relative', zIndex: 3,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '130px',   /* navbar ~88px + 42px breathing room */
        paddingBottom: '140px',
        gap: '40px',
      }}>
        <div style={{ maxWidth: '640px', flexShrink: 0 }}>

          {/* Kicker */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            marginBottom: '28px',
            color: 'var(--primary)',
            fontSize: '0.78rem', fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
          }}>
            <span style={{ width: '40px', height: '1px', background: 'var(--primary)', display: 'block' }} />
            {slide.kicker}
          </div>

          {/* Headline — Manrope ExtraLight, 75% of previous size */}
          <h1 style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 'clamp(2.4rem, 5.25vw, 5.85rem)',
            fontWeight: 200,
            lineHeight: 1.12,
            letterSpacing: '0.06em',
            color: '#fff',
            marginBottom: '22px',
            textTransform: 'uppercase',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
          }}>
            {slide.headline.map((line, i) => (
              <span key={i} style={{
                display: 'block',
                color: i === 1 ? 'var(--primary)' : '#fff',
                fontWeight: i === 1 ? 300 : 200,
              }}>
                {line}
              </span>
            ))}
          </h1>

          {/* Sub copy */}
          <p style={{
            color: 'rgba(255,255,255,0.72)',
            fontSize: '1.08rem',
            lineHeight: '1.7',
            maxWidth: '540px',
            marginBottom: '40px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
          }}>
            {slide.sub}
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '14px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
          }}>
            <button onClick={() => navigate(slide.cta)} className="btn btn-primary">
              {slide.ctaLabel} <ArrowRight size={18} />
            </button>
            <button onClick={onOpenQuoteModal} className="btn btn-secondary">
              Book Free Consultation
            </button>
          </div>
        </div>

        {/* Right-side floating construction image panel */}
        <div style={{
          display: 'none',
          flexDirection: 'column',
          gap: '16px',
          flexShrink: 0,
          width: '320px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(30px)',
          transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
        }} className="hero-side-panel">
          {/* Main side image */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={slide.sideImage}
              alt={slide.sideCaption}
              style={{
                width: '100%',
                height: '260px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Caption overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              padding: '12px 16px',
              background: 'linear-gradient(transparent, rgba(10,10,10,0.85))',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{ width: '24px', height: '1px', background: 'var(--primary)', display: 'block', flexShrink: 0 }} />
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                {slide.sideCaption}
              </span>
            </div>
          </div>

          {/* Two smaller thumbnail images */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80"
                alt="Construction foundation work"
                style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', top: '8px', left: '8px',
                background: 'var(--primary)',
                color: 'var(--dark)', fontSize: '0.6rem', fontWeight: 800,
                padding: '3px 7px', letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>Structure</div>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=400&q=80"
                alt="Architectural blueprint"
                style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', top: '8px', left: '8px',
                background: 'var(--primary)',
                color: 'var(--dark)', fontSize: '0.6rem', fontWeight: 800,
                padding: '3px 7px', letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>Blueprint</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide navigation arrows */}
      <button onClick={prev} style={{
        position: 'absolute', left: '32px', top: '50%', transform: 'translateY(-50%)',
        zIndex: 4, width: '52px', height: '52px',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.2)',
        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease',
      }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
      >
        <ArrowLeft size={22} />
      </button>

      <button onClick={next} style={{
        position: 'absolute', right: '32px', top: '50%', transform: 'translateY(-50%)',
        zIndex: 4, width: '52px', height: '52px',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.2)',
        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease',
      }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
      >
        <ArrowRight size={22} />
      </button>

      {/* Slide dots + counter */}
      <div style={{
        position: 'absolute', left: '50%', bottom: '140px',
        transform: 'translateX(-50%)',
        zIndex: 4, display: 'flex', alignItems: 'center', gap: '10px',
      }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === current ? '32px' : '8px',
            height: '2px',
            background: i === current ? 'var(--primary)' : 'rgba(255,255,255,0.35)',
            border: 'none', cursor: 'pointer',
            transition: 'all 0.4s ease',
          }} />
        ))}
      </div>

      {/* Bottom stats bar — dark glassmorphic panel */}
      <div style={{
        position: 'absolute', bottom: 0, right: 0,
        zIndex: 4,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        width: 'min(680px, 58%)',
        background: 'rgba(15, 15, 15, 0.92)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderLeft: '1px solid rgba(255,255,255,0.06)',
      }}>
        {STATS.map((stat, i) => (
          <div key={i} style={{
            padding: '28px 32px',
            borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
          }}>
            <strong style={{
              display: 'block',
              color: 'var(--primary)',
              fontFamily: "'Playfair Display', serif",
              fontSize: '2.4rem', fontWeight: 700, lineHeight: 1,
            }}>
              {stat.value}
            </strong>
            <span style={{
              display: 'block', marginTop: '8px',
              color: 'rgba(255,255,255,0.55)',
              fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600,
            }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '16px', left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 4, display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '6px',
        color: 'rgba(255,255,255,0.4)', fontSize: '0.62rem',
        letterSpacing: '0.18em', textTransform: 'uppercase',
        animation: 'scrollBounce 2s ease-in-out infinite',
      }}>
        <ChevronDown size={20} />
      </div>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @media (min-width: 1100px) {
          .hero-side-panel { display: flex !important; }
        }
        @media (max-width: 800px) {
          section { height: auto !important; min-height: 100vh !important; }
        }
      `}</style>
    </section>
  );
}
