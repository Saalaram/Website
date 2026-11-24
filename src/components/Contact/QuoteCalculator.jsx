import React, { useState } from 'react';
import { 
  Calculator, 
  Upload, 
  CheckCircle, 
  Send, 
  Phone, 
  Mail, 
  User, 
  Building, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  X 
} from 'lucide-react';
import { submitQuoteInquiry } from '../../firebase/api';

export default function QuoteCalculator({ defaultSubject = '', isOpenModal = false, onCloseModal }) {
  const [category, setCategory] = useState(
    (defaultSubject || '').includes('Product') ? 'Products' : 'Civil Engineering'
  );
  
  // Engineering State
  const [projectType, setProjectType] = useState('House Villa Construction');
  const [sqft, setSqft] = useState(2500);
  const [finishGrade, setFinishGrade] = useState('Luxury'); // Standard, Luxury, Premium

  // Product State
  const [productType, setProductType] = useState('uPVC Windows & Doors');
  const [quantity, setQuantity] = useState(12);

  // Form Contact State
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(defaultSubject ? `Inquiry regarding: ${defaultSubject}` : '');
  const [file, setFile] = useState(null);
  
  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Calculation Logic
  const calculateEstimate = () => {
    if (category === 'Civil Engineering') {
      let ratePerSqft = 1800; // Standard base rate
      if (finishGrade === 'Luxury') ratePerSqft = 2400;
      if (finishGrade === 'Premium') ratePerSqft = 3200;
      
      const total = sqft * ratePerSqft;
      return {
        min: total * 0.95,
        max: total * 1.05,
        unitRate: ratePerSqft
      };
    } else {
      let unitCost = 8500; // avg window/blind unit cost
      if (productType.includes('Doors')) unitCost = 28000;
      if (productType.includes('Blinds')) unitCost = 4500;
      
      const total = quantity * unitCost;
      return {
        min: total * 0.9,
        max: total * 1.1,
        unitRate: unitCost
      };
    }
  };

  const estimate = calculateEstimate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!customerName || !phone) {
      alert("Please provide your name and phone number so our engineers can contact you.");
      return;
    }

    setSubmitting(true);
    const scopeDescription = category === 'Civil Engineering'
      ? `${projectType} - ${sqft} sq.ft (${finishGrade} Grade)`
      : `${productType} - ${quantity} Units`;

    const inquiryPayload = {
      customerName,
      email,
      phone,
      serviceType: category,
      projectScope: scopeDescription,
      estimatedCostRange: `₹${(estimate.min / 100000).toFixed(2)}L - ₹${(estimate.max / 100000).toFixed(2)}L`,
      message
    };

    const res = await submitQuoteInquiry(inquiryPayload, file);
    setSubmitting(false);

    if (res.success) {
      setSubmittedSuccess(true);
    }
  };

  const formContent = (
    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '20px' }}>
      {submittedSuccess ? (
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '2px solid var(--accent-emerald)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
            color: 'var(--accent-emerald)'
          }}>
            <CheckCircle size={36} />
          </div>
          <h3 className="heading-serif" style={{ fontSize: '2rem', color: '#FFF', marginBottom: '0.8rem' }}>
            Inquiry Submitted Successfully!
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
            Thank you, <strong style={{ color: '#FFF' }}>{customerName}</strong>. Our senior civil engineering consultant will review your project requirements and call you at <strong style={{ color: 'var(--accent-gold)' }}>{phone}</strong> within 2 hours.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button 
              onClick={() => {
                setSubmittedSuccess(false);
                if (onCloseModal) onCloseModal();
              }}
              className="btn btn-primary"
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>
                <Calculator size={13} style={{ marginRight: '4px' }} /> Dynamic Estimator Engine
              </span>
              <h3 className="heading-serif" style={{ fontSize: '1.8rem', color: '#FFF' }}>
                Instant Project Quote Estimator
              </h3>
            </div>
            {isOpenModal && (
              <button onClick={onCloseModal} type="button" style={{ color: 'var(--text-muted)', fontSize: '1.5rem' }}>
                <X size={24} />
              </button>
            )}
          </div>

          {/* Toggle Category */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            background: 'var(--bg-surface-elevated)',
            padding: '0.5rem',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            <button
              type="button"
              onClick={() => setCategory('Civil Engineering')}
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                background: category === 'Civil Engineering' ? 'var(--accent-gold)' : 'transparent',
                color: category === 'Civil Engineering' ? '#0F1115' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}
            >
              Civil Engineering & Build
            </button>
            <button
              type="button"
              onClick={() => setCategory('Products')}
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                background: category === 'Products' ? 'var(--accent-gold)' : 'transparent',
                color: category === 'Products' ? '#0F1115' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}
            >
              Windows, Doors & Blinds
            </button>
          </div>

          {/* Interactive Calculator Inputs */}
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid var(--border-subtle)',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            {category === 'Civil Engineering' ? (
              <div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1.25rem',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <label className="form-label">Project Type</label>
                    <select 
                      className="form-select" 
                      value={projectType} 
                      onChange={(e) => setProjectType(e.target.value)}
                    >
                      <option value="House Villa Construction">House / Villa Construction</option>
                      <option value="Apartment Building Execution">Apartment Building Execution</option>
                      <option value="Structural Audit & Renovation">Structural Audit & Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Specification Finish Grade</label>
                    <select 
                      className="form-select" 
                      value={finishGrade} 
                      onChange={(e) => setFinishGrade(e.target.value)}
                    >
                      <option value="Standard">Standard Finish (₹1,800 / sq.ft)</option>
                      <option value="Luxury">Luxury Finish (₹2,400 / sq.ft)</option>
                      <option value="Premium">Ultra Premium Finish (₹3,200 / sq.ft)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label className="form-label">Built-up Area: <strong style={{ color: 'var(--accent-gold)' }}>{sqft} sq.ft</strong></label>
                  </div>
                  <input 
                    type="range" 
                    min="800" 
                    max="15000" 
                    step="100" 
                    value={sqft} 
                    onChange={(e) => setSqft(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-gold)', height: '6px', cursor: 'pointer' }}
                  />
                </div>
              </div>
            ) : (
              <div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1.25rem',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <label className="form-label">Product Category</label>
                    <select 
                      className="form-select" 
                      value={productType} 
                      onChange={(e) => setProductType(e.target.value)}
                    >
                      <option value="uPVC Windows & Doors">uPVC Windows & Doors</option>
                      <option value="Thermal Aluminum Lift Sliding Doors">Thermal Aluminum Sliding Doors</option>
                      <option value="Motorized Sun Blinds">Motorized Exterior Sun Blinds</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Estimated Number of Units/Openings</label>
                    <input 
                      type="number" 
                      className="form-input" 
                      value={quantity} 
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Calculated Estimate Box */}
            <div
              className="estimate-box"
              style={{
                marginTop: '1.5rem',
                padding: '1.25rem',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(197, 168, 128, 0.15) 0%, rgba(30, 35, 45, 0.4) 100%)',
                border: '1px solid var(--border-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Estimated Investment Budget Range
                </div>
                <div className="heading-serif text-gradient-gold estimate-amount" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
                  ₹{(estimate.min / 100000).toFixed(2)} Lakhs – ₹{(estimate.max / 100000).toFixed(2)} Lakhs
                </div>
              </div>
              <span className="badge badge-emerald">Includes Material &amp; Labor</span>
            </div>
          </div>

          {/* Contact Details Form */}
          <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '1rem' }}>Contact Details for Detailed BOQ Proposal:</h4>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Rahul Verma"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input 
                type="tel" 
                className="form-input" 
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Attach Architectural Blueprint / Photo (Optional)</label>
              <input 
                type="file" 
                className="form-input"
                onChange={(e) => setFile(e.target.files[0])}
                accept=".pdf,.png,.jpg,.jpeg,.dwg"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Project Requirements / Notes</label>
            <textarea 
              className="form-textarea" 
              rows="3" 
              placeholder="Tell us about your site location, preferred brands, timeline, etc."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={submitting}
            style={{ width: '100%', padding: '0.9rem', fontSize: '1.05rem' }}
          >
            {submitting ? (
              <span>Uploading to Firebase Cloud Storage...</span>
            ) : (
              <>
                <Send size={18} />
                <span>Submit Quote Request to Firebase</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="modal-overlay" onClick={onCloseModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px' }}>
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="calculator" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {formContent}
      </div>
    </section>
  );
}
