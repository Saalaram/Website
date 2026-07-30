import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Navbar from './components/Navigation/Navbar';
import Footer from './components/Navigation/Footer';
import QuoteCalculator from './components/Contact/QuoteCalculator';

// ── Main Aram Architecture Pages ─────────────────────────────────────────────
import HomePage     from './pages/HomePage';
import AboutPage    from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';

// ── Saalaram Solutions Sub-Domain Pages ──────────────────────────────────────
import SaalaramHome     from './pages/saalaram/SaalaramHome';
import SaalaramAbout    from './pages/saalaram/SaalaramAbout';
import SaalaramProducts from './pages/saalaram/SaalaramProducts';

import AdminDashboard from './components/Admin/AdminDashboard';

// Hide navbar/footer on /admin
function Layout({ children, onOpenQuoteModal }) {
  const { pathname } = useLocation();
  const isAdmin = pathname === '/admin';
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {!isAdmin && <Navbar onOpenQuoteModal={onOpenQuoteModal} />}
      <main style={{ flex: 1 }}>{children}</main>
      {!isAdmin && <Footer onOpenQuoteModal={onOpenQuoteModal} />}
    </div>
  );
}

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalSubject, setModalSubject]         = useState('');

  const handleOpenQuoteModal = (subject = '') => {
    setModalSubject(subject || '');
    setIsQuoteModalOpen(true);
  };

  return (
    <Layout onOpenQuoteModal={handleOpenQuoteModal}>
      <Routes>
        {/* Redirect bare root to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* ── Aram Architecture Routes ── */}
        <Route path="/home"      element={<HomePage    onOpenQuoteModal={handleOpenQuoteModal} />} />
        <Route path="/aboutus"   element={<AboutPage   onOpenQuoteModal={handleOpenQuoteModal} />} />
        <Route path="/about"     element={<Navigate to="/aboutus" replace />} />
        <Route path="/services"  element={<ServicesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
        <Route path="/projects"  element={<ProjectsPage onOpenQuoteModal={handleOpenQuoteModal} />} />

        {/* ── Saalaram Solutions Sub-Domain Routes ── */}
        <Route path="/saalaram"          element={<SaalaramHome     onOpenQuoteModal={handleOpenQuoteModal} />} />
        <Route path="/saalaram/aboutus"  element={<SaalaramAbout    onOpenQuoteModal={handleOpenQuoteModal} />} />
        <Route path="/saalaram/products" element={<SaalaramProducts onOpenQuoteModal={handleOpenQuoteModal} />} />

        <Route path="/admin"     element={<AdminDashboard />} />

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>

      {/* Global Quote Modal */}
      {isQuoteModalOpen && (
        <QuoteCalculator
          defaultSubject={modalSubject}
          isOpenModal={true}
          onCloseModal={() => setIsQuoteModalOpen(false)}
        />
      )}
    </Layout>
  );
}
