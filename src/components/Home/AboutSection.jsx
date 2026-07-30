import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function AboutSection({ onOpenQuoteModal }) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const whyChooseUsItems = [
    'Architecture, Engineering & Construction under one roof',
    'Premium Windows, Doors, Blinds & Glazing Systems',
    'Thoughtful Design Backed by Structural Expertise',
    'End-to-End Project Delivery',
    'Technology-Driven, Detail-Oriented Approach',
    'Based in Coimbatore, Serving Clients Across Tamil Nadu',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ──────────── ABOUT SECTION ──────────── */}
      <section
        id="about-us"
        ref={sectionRef}
        style={{
          background: '#fff',
          padding: '110px 0',
          overflow: 'hidden',
        }}
      >
        <div className="container">

          {/* ── TOP HEADER & STORY BLOCK (Centered Header + Justified Text with Staggered Scroll Animations) ── */}
          <div
            style={{
              textAlign: 'center',
              width: '100%',
              maxWidth: '100%',
              margin: '0 0 65px 0',
            }}
          >
            {/* 1. About Us tag - Scroll Animated */}
            <div
              className="eyebrow"
              style={{
                fontSize: '1.1rem',
                fontWeight: 800,
                marginBottom: '18px',
                justifyContent: 'center',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
                transition: 'all 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
              }}
            >
              About Us
            </div>

            {/* 2. Crafting Landmarks. Defining Legacies - Scroll Animated */}
            <h2
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                color: 'var(--dark)',
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                marginBottom: '32px',
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(25px)',
                transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
              }}
            >
              Crafting Landmarks. Defining Legacies
            </h2>

            {/* 3. Text Paragraphs - Staggered Scroll Animated */}
            <div
              style={{
                textAlign: 'justify',
                color: 'var(--muted)',
                fontSize: '1.03rem',
                lineHeight: '1.8',
              }}
            >
              <p
                style={{
                  marginBottom: '16px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(25px)',
                  transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
                }}
              >
                Founded in <strong style={{ color: 'var(--dark)', fontWeight: 700 }}>2023</strong> by <strong style={{ color: 'var(--dark)', fontWeight: 700 }}>Er. Kumaravel Muthusamy, ARAM Architecture</strong> is a contemporary architecture and design studio based in Coimbatore, specializing in architecture, structural engineering, interior design, and construction. We create spaces that balance functionality, aesthetics, and lasting value.
              </p>
              <p
                style={{
                  marginBottom: '16px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(25px)',
                  transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.55s',
                }}
              >
                Our multidisciplinary approach combines <strong style={{ color: 'var(--dark)', fontWeight: 700 }}>engineering precision, architectural creativity, technology, and meticulous craftsmanship</strong> to deliver projects that are thoughtfully designed and expertly executed. Every space reflects our commitment to innovation, quality, and enduring design.
              </p>
              <p
                style={{
                  marginBottom: 0,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(25px)',
                  transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s',
                }}
              >
                Together with our sister concern,{' '}
                <button
                  onClick={() => {
                    navigate('/saalaram');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    font: 'inherit',
                    color: 'var(--dark)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    borderBottom: '2px dotted var(--dark)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#2563eb';
                    e.currentTarget.style.borderColor = '#2563eb';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--dark)';
                    e.currentTarget.style.borderColor = 'var(--dark)';
                  }}
                >
                  SAALARAM
                </button>
                , we provide a complete solution under one roof - offering <strong style={{ color: 'var(--dark)', fontWeight: 700 }}>premium windows, doors, blinds, glazing systems, and façade solutions</strong> alongside our design and construction services. This integrated expertise ensures a seamless journey from concept to completion, delivering spaces built to inspire and endure.
              </p>
            </div>
          </div>

          {/* ── LOWER DUAL BLOCK: LEFT IMAGE | RIGHT WHY CHOOSE US ── */}
          <div className="about-lower-grid">

            {/* Left side — Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-45px)',
                transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
              }}
            >
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.18)',
                  background: '#f8fafc',
                }}
              >
                <img
                  src="/assets/images/About-us.png"
                  alt="About Saalaram Engineering"
                  style={{
                    width: '100%',
                    maxHeight: '540px',
                    height: 'auto',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.8s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              {/* Experience badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  width: 'min(200px, 60%)',
                  padding: '22px 24px',
                  background: 'var(--primary)',
                  color: 'var(--dark)',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.18)',
                  borderRadius: '4px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.55s',
                }}
              >
                <strong
                  style={{
                    display: 'block',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '3.2rem',
                    lineHeight: 1,
                    fontWeight: 700,
                  }}
                >
                  15
                </strong>
                <span
                  style={{
                    display: 'block',
                    marginTop: '8px',
                    fontWeight: 700,
                    lineHeight: 1.35,
                    fontSize: '0.88rem',
                  }}
                >
                  Years of<br />Engineering Excellence
                </span>
              </div>
            </div>

            {/* Right side — Why Choose Us Content */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(45px)',
                transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ marginBottom: '22px' }}>
                <h3
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: 'var(--dark)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Why Choose Us
                </h3>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  marginBottom: '38px',
                  padding: 0,
                }}
              >
                {whyChooseUsItems.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      color: 'var(--dark)',
                      fontWeight: 600,
                      fontSize: '0.98rem',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                      transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.45 + i * 0.12}s`,
                    }}
                  >
                    <span
                      style={{
                        width: '24px',
                        height: '24px',
                        flexShrink: 0,
                        background: 'var(--light)',
                        color: 'var(--primary-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        borderRadius: '4px',
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ lineHeight: '1.5', paddingTop: '1px' }}>{item}</span>
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

          <div className="process-grid">
            {[
              { n: '01', title: 'Site Assessment', desc: 'Free site visit, soil testing, structural feasibility, and load analysis by our senior engineers.' },
              { n: '02', title: 'Design & Approval', desc: 'CAD blueprints, 3D elevations, BOQ preparation, and municipal permit facilitation.' },
              { n: '03', title: 'Construction Execution', desc: 'Daily on-site engineer supervision, milestone billing, and Firebase real-time progress updates.' },
              { n: '04', title: 'Handover & Warranty', desc: 'Quality inspection, snag-list closure, structural warranty certificate, and product installation.' },
            ].map((step, i) => (
              <div key={i} className="process-card">
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
          <div className="contact-strip-grid">
            {[
              { icon: Phone, label: 'Call Us', value: '+91 98765 43210' },
              { icon: Mail, label: 'Email Us', value: 'info@saalaram.com' },
              { icon: MapPin, label: 'Visit Us', value: 'Madurai, Tamil Nadu' },
            ].map(({ icon: Icon, label, value }, i) => (
              <div key={i} className="contact-strip-item">
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

      {/* Responsive Styles */}
      <style>{`
        .about-lower-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 75px;
          align-items: center;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .process-card {
          padding: 0 32px;
          border-left: 1px solid var(--border);
        }
        .process-card:last-child {
          border-right: 1px solid var(--border);
        }

        .contact-strip-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .contact-strip-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 36px 40px;
          border-left: 1px solid rgba(255,255,255,0.06);
        }
        .contact-strip-item:first-child {
          border-left: none;
        }

        @media (max-width: 992px) {
          .about-lower-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
          .process-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 30px !important;
          }
          .process-card {
            border: 1px solid var(--border) !important;
            padding: 24px !important;
          }
          .contact-strip-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-strip-item {
            border-left: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            padding: 24px 20px !important;
          }
        }

        @media (max-width: 576px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
