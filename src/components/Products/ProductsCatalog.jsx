import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  Check, 
  Star, 
  Volume2, 
  ShieldCheck, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  Eye 
} from 'lucide-react';
import { getProducts } from '../../firebase/api';

export default function ProductsCatalog({ onOpenQuoteModal }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await getProducts(activeCategory);
      setProducts(data);
      setLoading(false);
    }
    loadData();
  }, [activeCategory]);

  const categories = ['All', 'Windows', 'Doors', 'Blinds'];

  return (
    <section id="products" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Grid size={14} /> Architectural Products
          </div>
          <h2 className="section-title heading-serif">
            Premium <span className="text-gradient-gold">Windows, Doors & Blinds</span>
          </h2>
          <p className="section-subtitle">
            Engineered for high acoustic insulation, thermal efficiency, security locking, and sleek modern architecture.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat === 'All' ? 'All Products' : cat}
            </button>
          ))}
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
            <div className="spinner" style={{
              width: '40px',
              height: '40px',
              border: '3px solid rgba(197, 168, 128, 0.2)',
              borderTopColor: 'var(--accent-gold)',
              borderRadius: '50%',
              margin: '0 auto 1rem auto',
              animation: 'spin 0.8s linear infinite'
            }} />
            <p>Fetching dynamic product catalog from Firebase API...</p>
          </div>
        ) : (
          /* Products Grid */
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '2rem'
          }}>
            {products.map((prod) => (
              <div key={prod.id} className="glass-card" style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}>
                <div>
                  {/* Image Container */}
                  <div style={{
                    height: '230px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#111'
                  }}>
                    <img 
                      src={prod.images ? prod.images[0] : prod.image} 
                      alt={prod.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      display: 'flex',
                      gap: '6px'
                    }}>
                      <span className="badge badge-gold">{prod.category}</span>
                      {prod.rating && (
                        <span className="badge badge-blue" style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <Star size={11} fill="var(--accent-blue)" /> {prod.rating}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div style={{ padding: '1.5rem' }}>
                    <h3 className="heading-serif" style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: '#FFF' }}>
                      {prod.name}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.2rem', minHeight: '42px' }}>
                      {prod.description}
                    </p>

                    {/* Specs preview */}
                    <div style={{
                      background: 'rgba(0,0,0,0.25)',
                      padding: '0.85rem',
                      borderRadius: '8px',
                      marginBottom: '1.2rem',
                      fontSize: '0.82rem',
                      color: 'var(--text-main)'
                    }}>
                      <div style={{ color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '0.3rem' }}>
                        Key Specifications:
                      </div>
                      <div>• Material: {prod.material}</div>
                      <div>• Glass/Finish: {prod.glassType || 'Custom Architectural Grade'}</div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', display: 'flex', gap: '0.75rem' }}>
                  <button 
                    onClick={() => setSelectedProduct(prod)}
                    className="btn btn-secondary"
                    style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem' }}
                  >
                    <Eye size={15} />
                    <span>Details</span>
                  </button>
                  <button 
                    onClick={() => onOpenQuoteModal(`Product Quote: ${prod.name}`)}
                    className="btn btn-primary"
                    style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem' }}
                  >
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Product Modal Lightbox */}
        {selectedProduct && (
          <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>{selectedProduct.category}</span>
                  <h3 className="heading-serif" style={{ fontSize: '1.8rem', color: '#FFF' }}>{selectedProduct.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  style={{ color: 'var(--text-muted)', fontSize: '1.5rem', lineHeight: 1 }}
                >
                  ✕
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <img 
                  src={selectedProduct.images ? selectedProduct.images[0] : selectedProduct.image} 
                  alt={selectedProduct.name} 
                  style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px' }}
                />
                <div>
                  <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.8rem' }}>Product Overview</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {selectedProduct.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#FFF', marginBottom: '0.5rem' }}>Technical Features & Engineering Highlights:</h5>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                      {selectedProduct.specs ? selectedProduct.specs.map((spec, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Check size={16} color="var(--accent-gold)" /> {spec}
                        </li>
                      )) : (
                        <li>High acoustic insulation and weather sealant gasket system.</li>
                      )}
                    </ul>
                  </div>

                  <button 
                    onClick={() => {
                      const name = selectedProduct.name;
                      setSelectedProduct(null);
                      onOpenQuoteModal(`Product Quote: ${name}`);
                    }}
                    className="btn btn-primary" 
                    style={{ width: '100%', padding: '0.85rem' }}
                  >
                    <span>Request Price & Installation Quote</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
