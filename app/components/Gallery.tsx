'use client';
import React from 'react';

export default function Gallery() {
  const galleryImages = [
    '/gallery/bag1.jpg',
    '/gallery/bag2.jpg',
    '/gallery/bag3.jpg',
    '/gallery/bag4.jpg',
    '/gallery/bag5.jpg',
    '/gallery/bag6.jpg',
    '/gallery/bag7.jpg',
    '/gallery/bag8.jpg',
    '/gallery/bag9.jpg',
    '/gallery/bag10.jpg',
    '/gallery/bag11.jpg',
    '/gallery/bag12.jpg',
    '/gallery/bag13.jpg',
    '/gallery/bag14.jpg',
    '/gallery/bag15.jpg',
    '/gallery/bag16.jpg',
    '/gallery/bag17.jpg',
    '/gallery/bag18.jpg',
    '/gallery/bag19.jpg',
    '/gallery/bag20.jpg',
    '/gallery/bag21.jpg',
    '/gallery/bag22.jpg',
    '/gallery/bag23.jpg',
    '/gallery/bag24.jpg',
    '/gallery/bag25.jpg',
    '/gallery/bag26.jpg',
    '/gallery/bag27.jpg',
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
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollGallery 50s linear infinite;
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
                minWidth: '300px',
                maxWidth: '300px',
                height: '350px',
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
    </section>
  );
}