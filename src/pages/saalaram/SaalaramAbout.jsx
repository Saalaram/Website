import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Award, Layers, CheckCircle2, ArrowRight, Building2, MapPin, Phone, Mail } from 'lucide-react';
import SaalaramContactForm from '../../components/Saalaram/SaalaramContactForm';

export default function SaalaramAbout({ onOpenQuoteModal }) {
  const navigate = useNavigate();

  return (
    <div style={{ paddingTop: 'var(--nav-h)', background: '#0a1222', color: '#fff', minHeight: '100vh' }}>

      {/* ── HERO BANNER ── */}
      <section style={{
        position: 'relative',
        padding: '100px 0 90px 0',
        background: `radial-gradient(ellipse 90% 70% at 50% -10%, rgba(37,99,235,0.28) 0%, transparent 80%),
          linear-gradient(180deg, #0d172a 0%, #09101f 100%)`,
        borderBottom: '1px solid rgba(59,130,246,0.15)',
      }}>
        <div className="container">
          <div style={{ maxWidth: '640px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', background: 'rgba(37,99,235,0.15)',
              border: '1px solid rgba(59,130,246,0.3)', color: '#60a5fa',
              fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: '20px',
            }}>
              About Saalaram Solutions
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
              fontWeight: 700, lineHeight: 1.08,
              color: '#fff', letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}>
              Pioneering High-Performance Fenestration & Lighting
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: '1.75' }}>
              Saalaram Solutions is South India’s premier manufacturer and installer of acoustic uPVC windows, architectural aluminum doors, motorized blinds, and luxury lighting systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ── */}
      <section style={{ padding: '100px 0', background: '#09101f' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '70px', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#60a5fa', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Engineering Standard
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.4rem', color: '#fff', fontWeight: 600, lineHeight: 1.15, marginBottom: '24px' }}>
                Combining precision German hardware with ISO-certified fabrication
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: '1.78', marginBottom: '20px' }}>
                Founded with a commitment to elevate fenestration standards, Saalaram Solutions operates state-of-the-art fabrication facilities in Tamil Nadu. Every window, door, and lighting fixture is engineered to withstand tropical heat, monsoon wind loads, and urban noise pollution.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: '1.78', marginBottom: '32px' }}>
                Our in-house installation engineers ensure seamless site measurement, double-glazed sealing, multi-point lock alignment, and zero-leakage guarantee on every project.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  '10,000+ Window Units Installed',
                  'ISO 9001:2015 Certified Plant',
                  'German Multi-Point Locks',
                  'Acoustic STC Rating Up to 42dB',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#60a5fa" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#111d33', border: '1px solid rgba(59,130,246,0.3)', padding: '24px' }}>
              <img
                src="/assets/logos/Saalaram.jpeg"
                alt="Saalaram Solutions"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{ padding: '24px 20px 10px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                <strong style={{ color: '#fff', display: 'block', fontSize: '1.1rem', marginBottom: '8px' }}>Saalaram Solutions Brand Legacy</strong>
                Engineered fenestration and lighting solutions tailored for luxury villas, high-rise apartments, and commercial complexes across Tamil Nadu.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES & QUALITY ── */}
      <section style={{ padding: '90px 0', background: '#0e172a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 50px auto' }}>
            <div style={{ color: '#60a5fa', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Why Choose Saalaram Solutions
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.4rem', color: '#fff', fontWeight: 600 }}>
              Uncompromising quality at every phase
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {[
              {
                icon: ShieldCheck, title: 'Thermal & Acoustic Testing',
                desc: 'Double-glazed air gap insulation reduces air conditioner load by 30% and keeps interior noise under 35dB.',
              },
              {
                icon: Award, title: 'Certified Factory Installation',
                desc: 'No third-party subcontractors. All site measurements and installations are executed by factory-trained Saalaram technicians.',
              },
              {
                icon: Layers, title: '10-Year Comprehensive Warranty',
                desc: 'Comprehensive warranty covering uPVC profile yellowing resistance, gasket elasticity, and locking mechanism integrity.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} style={{ background: '#111d33', border: '1px solid rgba(59,130,246,0.2)', padding: '36px 30px' }}>
                <div style={{
                  width: '48px', height: '48px', marginBottom: '20px',
                  background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(59,130,246,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa',
                }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', color: '#fff', fontWeight: 600, marginBottom: '12px' }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.7' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT US FORM AT THE END OF THE PAGE ── */}
      <SaalaramContactForm defaultSubject="Saalaram Solutions Company Enquiry" />
    </div>
  );
}
