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

      {/* ② About Us Section */}
      <div id="about-us">
        <AboutSection onOpenQuoteModal={onOpenQuoteModal} />
      </div>

      {/* ③ Civil Engineering Services */}
      <div id="engineering">
        <EngineeringServices onOpenQuoteModal={onOpenQuoteModal} />
      </div>

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
