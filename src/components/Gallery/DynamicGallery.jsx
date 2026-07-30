import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Maximize2, 
  Calendar, 
  Maximize, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  X 
} from 'lucide-react';
import { getProjects } from '../../firebase/api';

export default function DynamicGallery() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      const data = await getProjects(activeCategory);
      setProjects(data);
      setLoading(false);
    }
    loadProjects();
  }, [activeCategory]);

  const categories = ['All', 'Civil Engineering', 'Windows & Doors', 'Blinds & Interior'];

  return (
    <section id="gallery" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> Firebase Dynamic Portfolio
          </div>
          <h2 className="section-title heading-serif">
            Project <span className="text-gradient-gold">Showcase & Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Explore structural civil engineering achievements and architectural window/door installation projects delivered with perfection.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat === 'All' ? 'All Portfolio Works' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
            <p>Loading dynamic project gallery from Firebase Cloud Storage...</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {projects.map((proj) => (
              <div 
                key={proj.id} 
                className="glass-card" 
                onClick={() => setActiveLightbox(proj)}
                style={{
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  group: 'true'
                }}
              >
                {/* Image Cover */}
                <div style={{ height: '280px', position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={proj.coverImage} 
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 17, 21, 0.95) 0%, rgba(15, 17, 21, 0.2) 60%, transparent 100%)'
                  }} />

                  <span className="badge badge-gold" style={{ position: 'absolute', top: '15px', left: '15px' }}>
                    {proj.category}
                  </span>

                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFF'
                  }}>
                    <Maximize2 size={16} />
                  </div>

                  {/* Title & Metadata overlay */}
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                    <h3 className="heading-serif" style={{ fontSize: '1.25rem', color: '#FFF', marginBottom: '0.4rem' }}>
                      {proj.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={13} color="var(--accent-gold)" /> {proj.location}
                      </span>
                      {proj.squareFeet && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Maximize size={13} color="var(--accent-gold)" /> {proj.squareFeet}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {activeLightbox && (
          <div className="modal-overlay" onClick={() => setActiveLightbox(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '420px', background: '#000' }}>
                <img 
                  src={activeLightbox.coverImage} 
                  alt={activeLightbox.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <button 
                  onClick={() => setActiveLightbox(null)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(0,0,0,0.7)',
                    color: '#FFF',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ padding: '2.5rem' }}>
                <span className="badge badge-gold" style={{ marginBottom: '0.8rem' }}>{activeLightbox.category}</span>
                <h3 className="heading-serif" style={{ fontSize: '2rem', color: '#FFF', marginBottom: '1rem' }}>
                  {activeLightbox.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {activeLightbox.description}
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '1.5rem',
                  background: 'var(--bg-surface-elevated)',
                  padding: '1.5rem',
                  borderRadius: '12px'
                }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Client / Developer</span>
                    <div style={{ color: '#FFF', fontWeight: 600 }}>{activeLightbox.clientName || 'Private Owner'}</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Site Location</span>
                    <div style={{ color: '#FFF', fontWeight: 600 }}>{activeLightbox.location}</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Project Scale</span>
                    <div style={{ color: '#FFF', fontWeight: 600 }}>{activeLightbox.squareFeet || 'Custom Execution'}</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Completion Year</span>
                    <div style={{ color: '#FFF', fontWeight: 600 }}>{activeLightbox.year || '2025'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
