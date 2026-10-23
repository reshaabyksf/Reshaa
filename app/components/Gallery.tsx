'use client';
import React, { useRef } from 'react';

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  // Mobile scroll functions (snaps to the next centered card)
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
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

      {/* ==================== MOBILE VIEW (Centered Peek Carousel with Side Arrows) ==================== */}
      <div className="block md:hidden" style={{ position: 'relative', padding: '0 5px' }}>
        {/* Left Arrow Button */}
        <button
          onClick={scrollLeft}
          aria-label="Previous Image"
          style={{
            position: 'absolute',
            left: '4px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 20,
            backgroundColor: '#1e3a8a',
            color: '#ffffff',
            border: 'none',
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
          }}
        >
          ❮
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={scrollRight}
          aria-label="Next Image"
          style={{
            position: 'absolute',
            right: '4px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 20,
            backgroundColor: '#1e3a8a',
            color: '#ffffff',
            border: 'none',
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
          }}
        >
          ❯
        </button>

        {/* Snap-Scrolling Carousel Track */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            padding: '10px 48px', // Leaves room on left/right for the arrows and peeking images
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          className="hide-scrollbar"
        >
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {galleryImages.map((src, index) => (
            <div
              key={index}
              style={{
                minWidth: '250px',
                maxWidth: '250px',
                height: '340px',
                scrollSnapAlign: 'center',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                flexShrink: 0
              }}
            >
              <img
                src={src}
                alt={`Reshaa Gallery Bag ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}