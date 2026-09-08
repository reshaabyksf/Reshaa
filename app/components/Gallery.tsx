import React from 'react';

export default function Gallery() {
  // Yahan path ko update kar diya gaya hai (/gallery/...)
  // Make sure karein ki file names (jaise bag1.jpg, bag2.png) aapki actual files se match karein
  const bagOrdersGallery = [
    { id: 1, src: '/gallery/bag1.jpg', alt: 'Reshaa Non-Woven Bag Order 1' },
    { id: 2, src: '/gallery/bag2.jpg', alt: 'Reshaa Non-Woven Bag Order 2' },
    { id: 3, src: '/gallery/bag3.jpg', alt: 'Reshaa Non-Woven Bag Order 3' },
    { id: 4, src: '/gallery/bag4.jpg', alt: 'Reshaa Non-Woven Bag Order 4' },
  ];

  return (
    <section id="gallery" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a' }}>Our Gallery</h2>
        <p style={{ color: '#4b5563', marginTop: '8px', fontSize: '16px' }}>
          Explore our recent custom non-woven packaging and bag orders delivered for brands
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px' 
      }}>
        {bagOrdersGallery.map((item) => (
          <div 
            key={item.id} 
            style={{ 
              overflow: 'hidden', 
              borderRadius: '12px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)', 
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb'
            }}
          >
            <img 
              src={item.src} 
              alt={item.alt} 
              style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}