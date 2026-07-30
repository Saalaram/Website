import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { submitQuoteInquiry } from '../../firebase/api';

export default function SaalaramContactForm({ defaultSubject = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultSubject || 'Windows & Doors',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitQuoteInquiry({
        customerName: formData.name,
        phone: formData.phone,
        email: formData.email,
        serviceType: formData.service,
        message: formData.message,
        brand: 'Saalaram Solutions',
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <section id="contact-us" style={{ background: '#09101f', color: '#fff', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '70px',
          alignItems: 'start',
        }}>
          {/* Left Column — Info */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', background: 'rgba(37,99,235,0.15)',
              border: '1px solid rgba(59,130,246,0.3)', color: '#60a5fa',
              fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: '20px',
            }}>
              <Sparkles size={14} /> Get In Touch With Saalaram
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 600, lineHeight: 1.1, color: '#fff',
              marginBottom: '20px',
            }}>
              Let’s discuss your product requirements
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: '40px' }}>
              Whether you need soundproof uPVC windows, aluminum bi-fold doors, or custom architectural lighting — our product engineers are here to assist you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              {[
                { icon: Phone, title: 'Direct Call / WhatsApp', info: '+91 XXXXX XXXXX', sub: 'Mon – Sat, 9:00 AM – 7:00 PM' },
                { icon: Mail, title: 'Product Enquiries', info: 'solutions@saalaram.com', sub: 'Instant email response' },
                { icon: MapPin, title: 'Experience Center & Factory', info: 'Madurai, Tamil Nadu — 625001', sub: 'Visit our window & door showroom' },
              ].map(({ icon: Icon, title, info, sub }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '46px', height: '46px',
                    background: 'rgba(37,99,235,0.12)',
                    border: '1px solid rgba(59,130,246,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#60a5fa', flexShrink: 0,
                  }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>{title}</div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>{info}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Form */}
          <div style={{
            background: '#111d33',
            border: '1px solid rgba(59,130,246,0.25)',
            padding: '44px 40px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.6rem', color: '#fff', fontWeight: 600,
              marginBottom: '8px',
            }}>Send Us a Message</h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginBottom: '28px' }}>
              Fill in your details for a free price estimate & product catalog.
            </p>

            {submitted ? (
              <div style={{
                textAlign: 'center', padding: '40px 20px',
                background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(59,130,246,0.4)',
              }}>
                <CheckCircle2 size={48} color="#60a5fa" style={{ margin: '0 auto 16px' }} />
                <h4 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>Enquiry Received!</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.92rem' }}>
                  Thank you for reaching out to Saalaram Solutions. Our team will contact you within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 700, marginBottom: '8px' }}>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%', height: '50px', padding: '0 16px',
                      background: 'rgba(15,25,46,0.8)', border: '1px solid rgba(255,255,255,0.15)',
                      color: '#fff', outline: 'none', fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 700, marginBottom: '8px' }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%', height: '50px', padding: '0 16px',
                        background: 'rgba(15,25,46,0.8)', border: '1px solid rgba(255,255,255,0.15)',
                        color: '#fff', outline: 'none', fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 700, marginBottom: '8px' }}>Email Address</label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%', height: '50px', padding: '0 16px',
                        background: 'rgba(15,25,46,0.8)', border: '1px solid rgba(255,255,255,0.15)',
                        color: '#fff', outline: 'none', fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 700, marginBottom: '8px' }}>Product Requirement</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%', height: '50px', padding: '0 16px',
                      background: '#0f192e', border: '1px solid rgba(255,255,255,0.15)',
                      color: '#fff', outline: 'none', fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem',
                    }}
                  >
                    <option value="uPVC & Aluminum Windows">uPVC & Aluminum Windows</option>
                    <option value="Entrance & Patio Doors">Entrance & Patio Doors</option>
                    <option value="Architectural Lighting & LED">Architectural Lighting & LED</option>
                    <option value="Motorized Blinds & Glazing">Motorized Blinds & Glazing</option>
                    <option value="Complete Fenestration Package">Complete Fenestration Package</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 700, marginBottom: '8px' }}>Project Details / Message</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your requirements, dimensions, or location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%', padding: '14px 16px',
                      background: 'rgba(15,25,46,0.8)', border: '1px solid rgba(255,255,255,0.15)',
                      color: '#fff', outline: 'none', fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    height: '52px', width: '100%',
                    background: '#2563eb', border: 'none',
                    color: '#fff', fontFamily: 'Manrope, sans-serif',
                    fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(37,99,235,0.4)',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#1d4ed8'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#2563eb'}
                >
                  {loading ? 'Submitting...' : 'Submit Contact Enquiry'}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
