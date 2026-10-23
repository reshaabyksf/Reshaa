'use client';
import React, { useState } from 'react';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    '/Gallery/bag1.jpg',
    '/Gallery/bag2.jpg',
    '/Gallery/bag3.jpg',
    '/Gallery/bag4.jpg',
    '/Gallery/bag5.jpg',
    '/Gallery/bag6.jpg',
    '/Gallery/bag7.jpg',
    '/Gallery/bag8.jpg',
    '/Gallery/bag9.jpg',
    '/Gallery/bag10.jpg',
    '/Gallery/bag11.jpg',
    '/Gallery/bag12.jpg',
    '/Gallery/bag13.jpg',
    '/Gallery/bag14.jpg',
    '/Gallery/bag15.jpg',
    '/Gallery/bag16.jpg',
    '/Gallery/bag17.jpg',
    '/Gallery/bag18.jpg',
    '/Gallery/bag19.jpg',
    '/Gallery/bag20.jpg',
    '/Gallery/bag21.jpg',
    '/Gallery/bag22.jpg',
    '/Gallery/bag23.jpg',
    '/Gallery/bag24.jpg',
    '/Gallery/bag25.jpg',
    '/Gallery/bag26.jpg',
    '/Gallery/bag27.jpg',
    '/Gallery/bag28.jpg',
    '/Gallery/bag29.jpg',
    '/Gallery/bag30.jpg',
    '/Gallery/bag31.jpg',
  ];

  const duplicatedGallery = [...galleryImages, ...galleryImages];

  // Mobile navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" style={{ padding: '60px 0', maxWidth: '100%', overflow: 'hidden', backgroundColor: '#f9fafb' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a' }}>Our Gallery</h2>
        <p style={{ color: '#4b5563', marginTop: '8px', fontSize: '16px' }}>
          Explore our recent custom non-woven packaging and bag orders delivered for brands
        </p>
      </div>

      {/* ==================== DESKTOP VIEW (Original Auto Marquee - Untouched) ==================== */}
      <div className="hidden md:block">
        <style>{`
          @keyframes scrollGallery {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .marquee-track {
            display: flex;
            gap: 24px;
            width: max-content;
            animation: scrollGallery 60s linear infinite;
            will-change: transform;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div style={{ overflow: 'hidden', width: '100%', position: 'relative', padding: '10px 0' }}>
          <div className="marquee-track">
            {duplicatedGallery.map((src, index) => (
              <div 
                key={index}
                style={{ 
                  minWidth: '260px',
                  maxWidth: '260px',
                  height: '320px',
                  overflow: 'hidden', 
                  borderRadius: '12px', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)', 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  flexShrink: 0
                }}
              >
                <img 
                  src={src} 
                  alt="Reshaa Gallery" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== MOBILE VIEW (Stacked Card Deck Viewer) ==================== */}
      <div className="block md:hidden" style={{ padding: '0 20px' }}>
        <div style={{ 
          position: 'relative', 
          maxWidth: '320px', 
          margin: '0 auto',
          height: '380px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          
          {/* Background Stacked Card Effect (Ek ke peeche ek visual) */}
          <div style={{
            position: 'absolute',
            width: '88%',
            height: '340px',
            backgroundColor: '#e5e7eb',
            borderRadius: '16px',
            top: '16px',
            transform: 'scale(0.92)',
            zIndex: 1,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }} />
          <div style={{
            position: 'absolute',
            width: '94%',
            height: '340px',
            backgroundColor: '#f3f4f6',
            borderRadius: '16px',
            top: '8px',
            transform: 'scale(0.96)',
            zIndex: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }} />

          {/* Main Active Card in Front */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '350px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            border: '1px solid #e5e7eb',
            zIndex: 3
          }}>
            <img 
              src={galleryImages[currentIndex]} 
              alt={`Reshaa Gallery Bag ${currentIndex + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Photo"
            style={{
              position: 'absolute',
              left: '-15px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: '#1e3a8a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            ❮
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Photo"
            style={{
              position: 'absolute',
              right: '-15px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: '#1e3a8a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            ❯
          </button>
        </div>

        {/* Counter Indicator */}
        <div style={{ textAlign: 'center', marginTop: '20px', color: '#4b5563', fontSize: '14px', fontWeight: '500' }}>
          Photo {currentIndex + 1} of {galleryImages.length}
        </div>
      </div>
    </section>
  );
}