import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import EngineeringServices from '../components/Services/EngineeringServices';
import DynamicGallery from '../components/Gallery/DynamicGallery';
import QuoteCalculator from '../components/Contact/QuoteCalculator';

export default function HomePage({ onOpenQuoteModal }) {
  return (
    <>
      {/* ① Hero Slider */}
      <div id="home">
        <HeroSection onOpenQuoteModal={onOpenQuoteModal} />
      </div>

      {/* ② Civil Engineering Services */}
      <div id="engineering">
        <EngineeringServices onOpenQuoteModal={onOpenQuoteModal} />
      </div>

      {/* ③ About + Process + CTA + Contact Strip */}
      <AboutSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* ④ Firebase Portfolio Gallery */}
      <div id="gallery">
        <DynamicGallery />
      </div>

      {/* ⑤ Quote Calculator & Contact Form */}
      <div id="calculator">
        <QuoteCalculator defaultSubject="" />
      </div>
    </>
  );
}
