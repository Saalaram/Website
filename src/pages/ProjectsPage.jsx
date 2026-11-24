import React, { useState, useEffect } from 'react';
import {
  MapPin, Maximize, Calendar, Building2,
  Sofa, X, ArrowRight, Maximize2
} from 'lucide-react';
import { getProjects } from '../firebase/api';

// Static placeholder projects for when Firebase has no data
const staticConstruction = [
  {
    id: 'c1',
    title: 'Modern Villa — Madurai',
    category: 'Construction',
    location: 'KK Nagar, Madurai',
    squareFeet: '3,200 sq ft',
    year: '2024',
    clientName: 'Private Owner',
    description: 'A contemporary G+2 villa featuring open-plan living spaces, double-height ceilings, and a landscaped terrace garden. Delivered in 18 months with zero structural defects.',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'c2',
    title: 'Commercial Complex — Trichy',
    category: 'Construction',
    location: 'Thillai Nagar, Trichy',
    squareFeet: '12,400 sq ft',
    year: '2023',
    clientName: 'Retail Developer',
    description: 'A G+4 commercial complex with retail outlets on ground floor and office spaces above. Reinforced concrete frame with glass facade system.',
    coverImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'c3',
    title: 'Luxury Apartment — Chennai',
    category: 'Construction',
    location: 'Porur, Chennai',
    squareFeet: '22,000 sq ft',
    year: '2023',
    clientName: 'Housing Developer',
    description: 'An 18-unit premium residential apartment block with basement parking, rooftop garden, gym, and modern amenities. RERA registered project.',
    coverImage: 'https://images.unsplash.com/photo-1567360425618-1594206637d2?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'c4',
    title: 'Farmhouse Construction — Theni',
    category: 'Construction',
    location: 'Theni District',
    squareFeet: '4,800 sq ft',
    year: '2024',
    clientName: 'Private Owner',
    description: 'An expansive single-storey farmhouse featuring a large verandah, barn, and natural stone cladding set amidst 2 acres of agricultural land.',
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'c5',
    title: 'Row Houses — Dindigul',
    category: 'Construction',
    location: 'Palani Road, Dindigul',
    squareFeet: '1,200 sq ft each',
    year: '2022',
    clientName: 'Real Estate Developer',
    description: '12 independent row houses with uniform architectural language, shared compound wall, and individual utility connections. Completed in 14 months.',
    coverImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'c6',
    title: 'Hospital Extension — Sivakasi',
    category: 'Construction',
    location: 'Sivakasi, Virudhunagar',
    squareFeet: '8,600 sq ft',
    year: '2022',
    clientName: 'Healthcare Trust',
    description: 'A G+2 hospital extension block with isolation wards, OT rooms, and a dedicated ICU floor. Built with seismic-resistant reinforced framing.',
    coverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=85',
  },
];

const staticInteriors = [
  {
    id: 'i1',
    title: 'Luxury Living Room — Madurai',
    category: 'Interiors',
    location: 'Anna Nagar, Madurai',
    squareFeet: '800 sq ft',
    year: '2025',
    clientName: 'Private Owner',
    description: 'A complete interior transformation featuring custom joinery, LED cove lighting, Italian marble flooring, and designer furniture curation.',
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'i2',
    title: 'Modular Kitchen Design — Chennai',
    category: 'Interiors',
    location: 'Velachery, Chennai',
    squareFeet: '320 sq ft',
    year: '2024',
    clientName: 'Private Client',
    description: 'A sleek handleless modular kitchen with quartz countertops, soft-close cabinets, under-cabinet lighting, and a built-in island with bar seating.',
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'i3',
    title: 'Corporate Office Fitout — Coimbatore',
    category: 'Interiors',
    location: 'RS Puram, Coimbatore',
    squareFeet: '4,200 sq ft',
    year: '2024',
    clientName: 'IT Company',
    description: 'A modern open-plan office with dedicated focus zones, collaborative spaces, biophilic elements, and brand-aligned interior design throughout.',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'i4',
    title: 'Master Bedroom Suite — Trichy',
    category: 'Interiors',
    location: 'Cantonment, Trichy',
    squareFeet: '450 sq ft',
    year: '2025',
    clientName: 'Private Client',
    description: 'A luxurious master suite with custom-built wardrobe wall, upholstered headboard, walk-in dressing area, and spa-inspired en-suite bathroom.',
    coverImage: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'i5',
    title: 'Restaurant Interior — Madurai',
    category: 'Interiors',
    location: 'SS Colony, Madurai',
    squareFeet: '2,800 sq ft',
    year: '2023',
    clientName: 'Restaurant Owner',
    description: 'A full interior fit-out for a fine-dining restaurant featuring warm timber accents, custom lighting fixtures, booth seating, and an open kitchen design.',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'i6',
    title: 'Kids Bedroom & Study — Salem',
    category: 'Interiors',
    location: 'Fairlands, Salem',
    squareFeet: '280 sq ft',
    year: '2025',
    clientName: 'Private Client',
    description: 'A creative and functional children\'s room with custom loft bed, integrated study desk, ample storage, and playful yet elegant decor.',
    coverImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85',
  },
];

function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className="glass-card"
      style={{ overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
    >
      <div style={{ height: '280px', position: 'relative', overflow: 'hidden' }}>
        <img
          src={project.coverImage}
          alt={project.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transition: 'transform 0.5s ease',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.07)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.2) 55%, transparent 100%)',
        }} />
        <span className="badge badge-gold" style={{ position: 'absolute', top: '14px', left: '14px' }}>
          {project.category}
        </span>
        <div style={{
          position: 'absolute', top: '14px', right: '14px',
          width: '34px', height: '34px',
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
        }}>
          <Maximize2 size={15} />
        </div>
        <div style={{ position: 'absolute', bottom: '18px', left: '18px', right: '18px' }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.2rem', color: '#fff', fontWeight: 600,
            marginBottom: '6px',
          }}>{project.title}</h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem' }}>
              <MapPin size={12} color="var(--primary)" /> {project.location}
            </span>
            {project.squareFeet && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem' }}>
                <Maximize size={12} color="var(--primary)" /> {project.squareFeet}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage({ onOpenQuoteModal }) {
  const [activeGroup, setActiveGroup] = useState('construction');
  const [lightbox, setLightbox] = useState(null);
  const [firebaseProjects, setFirebaseProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await getProjects('All');
        setFirebaseProjects(data || []);
      } catch {
        setFirebaseProjects([]);
      }
      setLoading(false);
    }
    load();
  }, []);

  // Merge firebase + static, deduplicate by id
  const allProjects = [...firebaseProjects, ...staticConstruction, ...staticInteriors];
  const constructionProjects = allProjects.filter(p =>
    p.category === 'Construction' || p.category === 'Civil Engineering'
  );
  const interiorProjects = allProjects.filter(p =>
    p.category === 'Interiors' || p.category === 'Interior' ||
    p.category === 'Blinds & Interior'
  );

  const displayed = activeGroup === 'construction' ? constructionProjects : interiorProjects;

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
            url("https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=2000&q=85") center/cover`,
          color: '#fff',
        }}
      >
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--primary)' }}>Our Work</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            marginBottom: '18px',
          }}>
            Projects
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '580px', lineHeight: 1.7 }}>
            Explore our portfolio of completed construction and interior projects across Tamil Nadu.
          </p>
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section style={{ background: 'var(--light)', padding: '110px 0' }}>
        <div className="container">

          {/* Group Toggle */}
          <div
            className="projects-toggle"
            style={{
              display: 'flex',
              gap: '0',
              marginBottom: '50px',
              border: '1px solid var(--border)',
              width: 'fit-content',
            }}
          >
            <button
              onClick={() => setActiveGroup('construction')}
              style={{
                padding: '14px 36px',
                display: 'flex', alignItems: 'center', gap: '10px',
                background: activeGroup === 'construction' ? 'var(--dark)' : '#fff',
                color: activeGroup === 'construction' ? '#fff' : 'var(--muted)',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.04em',
                transition: 'all 0.3s',
              }}
            >
              <Building2 size={17} />
              Construction
            </button>
            <button
              onClick={() => setActiveGroup('interiors')}
              style={{
                padding: '14px 36px',
                display: 'flex', alignItems: 'center', gap: '10px',
                background: activeGroup === 'interiors' ? 'var(--dark)' : '#fff',
                color: activeGroup === 'interiors' ? '#fff' : 'var(--muted)',
                border: 'none',
                borderLeft: '1px solid var(--border)',
                cursor: 'pointer',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.04em',
                transition: 'all 0.3s',
              }}
            >
              <Sofa size={17} />
              Interiors
            </button>
          </div>

          {/* Count */}
          <p style={{ color: 'var(--muted)', fontSize: '0.88rem', fontWeight: 600, marginBottom: '32px', letterSpacing: '0.05em' }}>
            Showing {displayed.length} {activeGroup === 'construction' ? 'Construction' : 'Interior'} Projects
          </p>

          {/* Grid */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <div className="spinner" />
              <p style={{ color: 'var(--muted)', marginTop: '14px' }}>Loading projects...</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '28px',
            }}>
              {displayed.map(proj => (
                <ProjectCard key={proj.id} project={proj} onClick={setLightbox} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--dark)', padding: '80px 0' }}>
        <div className="container">
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '28px',
          }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--primary)' }}>Your Project Awaits</div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                color: '#fff', fontWeight: 600, lineHeight: 1.1,
              }}>
                Ready to start your project?
              </h2>
            </div>
            <button onClick={onOpenQuoteModal} className="btn btn-primary" style={{ padding: '0 44px' }}>
              Get a Quote <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className="modal-overlay" onClick={() => setLightbox(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '380px' }} className="lightbox-image">
              <img
                src={lightbox.coverImage}
                alt={lightbox.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 60%)',
              }} />
              <button
                onClick={() => setLightbox(null)}
                style={{
                  position: 'absolute', top: '18px', right: '18px',
                  width: '40px', height: '40px',
                  background: 'rgba(0,0,0,0.65)',
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff',
                }}
              ><X size={20} /></button>
              <div style={{ position: 'absolute', bottom: '22px', left: '28px', right: '28px' }}>
                <span className="badge badge-gold" style={{ marginBottom: '10px', display: 'inline-block' }}>{lightbox.category}</span>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2rem', color: '#fff', fontWeight: 600,
                }}>{lightbox.title}</h3>
              </div>
            </div>
            <div style={{ padding: '2.5rem', background: 'var(--dark)' }} className="lightbox-body">
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.97rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                {lightbox.description}
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1.2rem',
                background: 'rgba(255,255,255,0.05)',
                padding: '1.4rem',
                marginBottom: '2rem',
              }}>
                {[
                  { label: 'Client', value: lightbox.clientName || 'Private Owner' },
                  { label: 'Location', value: lightbox.location },
                  { label: 'Project Scale', value: lightbox.squareFeet || 'Custom' },
                  { label: 'Year', value: lightbox.year || '2024' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>{value}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => { setLightbox(null); onOpenQuoteModal(`Project Enquiry: ${lightbox.title}`); }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Enquire About a Similar Project <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
