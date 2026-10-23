'use client';
import React from 'react';

export default function Gallery() {
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

  return (
    <section id="gallery" style={{ padding: '60px 0', maxWidth: '100%', overflow: 'hidden', backgroundColor: '#f9fafb' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a' }}>Our Gallery</h2>
        <p style={{ color: '#4b5563', marginTop: '8px', fontSize: '16px' }}>
          Explore our recent custom non-woven packaging and bag orders delivered for brands
        </p>
      </div>

      <style>{`
        @keyframes scrollGallery {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollGallery 60s linear infinite; /* Laptop speed stays safe at 60s */
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        
        /* High-speed, compact layout for mobile phones */
        @media (max-width: 768px) {
          .marquee-track {
            animation-duration: 8s; /* Super fast movement */
            gap: 12px;
          }
          .gallery-card {
            min-width: 200px !important;
            max-width: 200px !important;
            height: 250px !important;
          }
        }
      `}</style>

      <div style={{ overflow: 'hidden', width: '100%', position: 'relative', padding: '10px 0' }}>
        <div className="marquee-track">
          {duplicatedGallery.map((src, index) => (
            <div 
              key={index}
              className="gallery-card"
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
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}