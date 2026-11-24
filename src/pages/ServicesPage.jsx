import React, { useState } from 'react';
import {
  Ruler, MessageSquare, FileText, ClipboardCheck,
  Sofa, BarChart3, ArrowRight, CheckCircle, ChevronDown
} from 'lucide-react';

const services = [
  {
    id: 'design',
    icon: Ruler,
    number: '01',
    title: 'Design',
    subtitle: 'Architectural & Structural Design',
    description:
      'Our in-house team of licensed architects and structural engineers create bespoke designs tailored to your vision, site conditions, and budget. From conceptual sketches to full-scale 3D renderings and structural drawings.',
    highlights: [
      'Conceptual design & ideation',
      '3D architectural renderings',
      'Structural & foundation design',
      'Facade and elevation design',
      'Space planning & flow optimization',
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'consultation',
    icon: MessageSquare,
    number: '02',
    title: 'Consultation',
    subtitle: 'Expert Site & Structural Consultation',
    description:
      'Get professional guidance from our senior engineers before breaking ground. We conduct free site visits, soil testing analysis, structural feasibility assessments, and cost-benefit evaluations to ensure your project is built on a solid foundation.',
    highlights: [
      'Free initial site assessment',
      'Soil testing & analysis',
      'Structural feasibility study',
      'Cost estimation & BOQ',
      'Regulatory compliance review',
    ],
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'blueprint',
    icon: FileText,
    number: '03',
    title: 'Blueprint',
    subtitle: 'CAD Blueprints & Technical Drawings',
    description:
      'Precision is at the heart of everything we build. Our CAD team produces detailed, engineer-stamped technical drawings for every project — from working drawings and section details to MEP coordination drawings and as-built documentation.',
    highlights: [
      'AutoCAD & Revit working drawings',
      'Structural drawing sets',
      'MEP (plumbing, electrical) plans',
      'Section & detail drawings',
      'As-built documentation',
    ],
    image: 'https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'plan-approval',
    icon: ClipboardCheck,
    number: '04',
    title: 'Plan Approval',
    subtitle: 'Municipal Plan Approval Facilitation',
    description:
      'Navigating municipal regulations and government approvals can be complex. Our experienced team handles the entire approval process on your behalf — from preparing DTCP/CMDA/panchayat submission sets to liaising with relevant authorities.',
    highlights: [
      'DTCP / CMDA approval drawings',
      'Panchayat building permit documentation',
      'Setback & FSI compliance review',
      'Fire NOC coordination',
      'Completion certificate assistance',
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'interiors',
    icon: Sofa,
    number: '05',
    title: 'Interiors',
    subtitle: 'Interior Design & Execution',
    description:
      'Transform your space with Saalaram\'s premium interior design service. Our interior specialists work with you to create functional, beautiful interiors that reflect your personality — from modular kitchens and wardrobes to false ceilings and flooring solutions.',
    highlights: [
      'Concept moodboards & 3D interiors',
      'Modular kitchen & wardrobe design',
      'False ceiling & lighting design',
      'Flooring, tiling & wall finishes',
      'Furniture & décor procurement',
    ],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'project-management',
    icon: BarChart3,
    number: '06',
    title: 'Project Management',
    subtitle: 'End-to-End Project Management',
    description:
      'Saalaram provides complete project management services — ensuring your project is delivered on time, within budget, and to the highest quality standards. Our dedicated site engineers provide daily supervision, progress tracking, and milestone-based billing.',
    highlights: [
      'Dedicated site engineer supervision',
      'Daily progress tracking & reporting',
      'Milestone-based billing system',
      'Quality control & inspection',
      'Post-construction warranty support',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
  },
];

export default function ServicesPage({ onOpenQuoteModal }) {
  const [activeService, setActiveService] = useState(null);

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>

      {/* ── HERO ── */}
      <section
        className="page-hero-banner"
        style={{
          position: 'relative',
          height: '360px',
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(rgba(15,15,15,0.80), rgba(15,15,15,0.80)),
            url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85") center/cover`,
          color: '#fff',
        }}
      >
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--primary)' }}>What We Offer</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            marginBottom: '18px',
          }}>
            Our Services
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '580px', lineHeight: 1.7 }}>
            From conceptual design to final handover — comprehensive engineering and architectural services tailored to every project type.
          </p>
        </div>
      </section>

      {/* ── SERVICE CARDS GRID ── */}
      <section style={{ background: 'var(--light)', padding: '110px 0' }}>
        <div className="container">
          <div className="services-cards-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
            background: 'rgba(23,24,23,0.12)',
          }}>
            {services.map((svc) => {
              const Icon = svc.icon;
              const isOpen = activeService === svc.id;
              return (
                <div
                  key={svc.id}
                  style={{
                    background: isOpen ? 'var(--dark)' : '#fff',
                    transition: 'background 0.35s ease',
                    cursor: 'pointer',
                  }}
                  onClick={() => setActiveService(isOpen ? null : svc.id)}
                >
                  {/* Card header */}
                  <div style={{ padding: '40px 36px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                      <div style={{
                        width: '52px', height: '52px',
                        background: isOpen ? 'rgba(182,140,90,0.15)' : 'rgba(182,140,90,0.1)',
                        border: '1px solid rgba(182,140,90,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--primary)',
                        flexShrink: 0,
                      }}>
                        <Icon size={22} />
                      </div>
                      <span style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '2.8rem', lineHeight: 1,
                        color: isOpen ? 'rgba(182,140,90,0.25)' : 'rgba(23,24,23,0.1)',
                        fontWeight: 700,
                      }}>{svc.number}</span>
                    </div>

                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.45rem', fontWeight: 600,
                      color: isOpen ? '#fff' : 'var(--dark)',
                      marginBottom: '8px',
                      transition: 'color 0.3s',
                    }}>{svc.title}</h3>
                    <p style={{
                      color: isOpen ? 'rgba(255,255,255,0.5)' : 'var(--muted)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      marginBottom: '16px',
                      transition: 'color 0.3s',
                    }}>{svc.subtitle}</p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{
                        color: 'var(--primary)',
                        fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}>
                        {isOpen ? 'Show Less' : 'Learn More'}
                      </span>
                      <ChevronDown
                        size={18}
                        color="var(--primary)"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </div>
                  </div>

                  {/* Expanded panel */}
                  {isOpen && (
                    <div style={{
                      borderTop: '1px solid rgba(255,255,255,0.1)',
                      padding: '28px 36px 36px',
                      animation: 'fadeIn 0.3s ease',
                    }}>
                      {/* Image */}
                      <div style={{
                        height: '200px',
                        overflow: 'hidden',
                        marginBottom: '24px',
                      }}>
                        <img
                          src={svc.image}
                          alt={svc.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </div>
                      <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: '1.75', marginBottom: '22px' }}>
                        {svc.description}
                      </p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                        {svc.highlights.map((h, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <CheckCircle size={15} color="var(--primary)" style={{ flexShrink: 0 }} />
                            <span style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.88rem', fontWeight: 600 }}>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={(e) => { e.stopPropagation(); onOpenQuoteModal(`Service Enquiry: ${svc.title}`); }}
                        className="btn btn-primary"
                        style={{ width: '100%' }}
                      >
                        Get a Quote <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY SAALARAM CTA ── */}
      <section style={{
        background: `linear-gradient(rgba(15,15,15,0.84), rgba(15,15,15,0.84)),
          url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85") center/cover`,
        backgroundAttachment: 'scroll',
        padding: '90px 0',
        color: '#fff',
        textAlign: 'center',
      }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--primary)' }}>
              Start Your Project
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 600, lineHeight: 1.1,
              letterSpacing: '-0.02em', marginBottom: '20px',
            }}>
              Ready to build with us?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '36px' }}>
              Let's talk about your project. Our engineers are available for a free initial consultation — no obligation.
            </p>
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn btn-primary"
              style={{ padding: '0 44px', fontSize: '1rem' }}
            >
              Book Free Consultation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
