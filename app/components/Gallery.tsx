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

  // Function to scroll left manually
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  // Function to scroll right manually
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" style={{ padding: '60px 0', maxWidth: '100%', backgroundColor: '#f9fafb' }}>
      <div style={{ textAlign: 'center', marginBottom: '25px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a' }}>Our Gallery</h2>
        <p style={{ color: '#4b5563', marginTop: '8px', fontSize: '16px' }}>
          Explore our recent custom non-woven packaging and bag orders delivered for brands
        </p>
      </div>

      {/* Manual Arrow Controls Header */}
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '15px' }}>
        <button 
          onClick={scrollLeft}
          aria-label="Scroll Left"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #d1d5db',
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            fontSize: '16px',
            color: '#1e3a8a',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
        >
          ❮
        </button>
        <button 
          onClick={scrollRight}
          aria-label="Scroll Right"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #d1d5db',
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            fontSize: '16px',
            color: '#1e3a8a',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
        >
          ❯
        </button>
      </div>

      {/* Manual & Touch Scrollable Track */}
      <div 
        ref={scrollRef}
        style={{ 
          display: 'flex', 
          gap: '24px', 
          overflowX: 'auto', 
          scrollBehavior: 'smooth', 
          padding: '10px 20px 20px 20px',
          scrollbarWidth: 'none', /* Hide scrollbar for Firefox */
          msOverflowStyle: 'none',  /* Hide scrollbar for IE/Edge */
        }}
        className="hide-scrollbar"
      >
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Hide scrollbar for Chrome, Safari and Opera */
          }
        `}</style>

        {galleryImages.map((src, index) => (
          <div 
            key={index}
            style={{ 
              minWidth: '280px',
              maxWidth: '280px',
              height: '340px',
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
    </section>
  );
}