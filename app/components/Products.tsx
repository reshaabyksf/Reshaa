'use client';

import { useState } from 'react';
import Link from 'next/link';
import DcutBag from './products/DcutBag';
import WcutBag from './products/WcutBag';
import LoopBag from './products/LoopBag';
import BOPPBag from './products/BOPPBag';
import StitchedBag from './products/StitchedBag';
import BoxBag from './products/BoxBag';

export default function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const productsList = [
    { id: 'd-cut-bag', title: 'D-Cut Bags', color: '#3b82f6', component: <DcutBag />, imgSrc: '/images/d-cut-bag.png' },
    { id: 'w-cut-bag', title: 'W-Cut Bags', color: '#10b981', component: <WcutBag />, imgSrc: '/images/w-cut-bag.png' },
    { id: 'loop-bag', title: 'Loop Bags', color: '#8b5cf6', component: <LoopBag />, imgSrc: '/images/loop-bag.png' },
    { id: 'bopp-bag', title: 'BOPP Bags', color: '#f59e0b', component: <BOPPBag />, imgSrc: '/images/bopp-bag.png' },
    { id: 'stitched-bag', title: 'Stitched Bags', color: '#ef4444', component: <StitchedBag />, imgSrc: '/images/stitched-bag.png' },
    { id: 'box-bag', title: 'Box Bags', color: '#64748b', component: <BoxBag />, imgSrc: '/images/box-bag.png' }
  ];

  return (
    <section id="products" style={{ padding: '96px 32px', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* ==================================================== */}
        {/* MAIN PORTFOLIO CARD CONTAINER                        */}
        {/* ==================================================== */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          padding: '60px 40px', 
          borderRadius: '24px', 
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e5e7eb',
          marginBottom: '60px',
          textAlign: 'center' 
        }}>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px' }}>
            Our Product Portfolio
          </h2>
          <p style={{ color: '#4b5563', fontSize: '18px', maxWidth: '700px', margin: '0 auto 48px auto', lineHeight: '1.6' }}>
            Engineered non-woven manufacturing solutions tailored for retail, commercial, and heavy industrial utility.
          </p>

          {/* Value Chain Tree Container */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', paddingTop: '10px' }}>
            
            {/* Parent Node */}
            <div style={{ 
              backgroundColor: '#1e3a8a', 
              color: '#ffffff', 
              padding: '16px 36px', 
              borderRadius: '30px', 
              fontSize: '18px', 
              fontWeight: 'bold',
              letterSpacing: '0.5px',
              boxShadow: '0 10px 25px rgba(30, 58, 138, 0.2)',
              zIndex: 2
            }}>
              OUR PACKAGING SOLUTIONS
            </div>

            {/* Vertical Connector Line from Parent */}
            <div style={{ width: '2px', height: '35px', backgroundColor: '#9ca3af' }} />

            {/* Horizontal Branch Bar linking all 6 sub-categories */}
            <div style={{ 
              width: '88%', 
              maxWidth: '1000px', 
              height: '2px', 
              backgroundColor: '#9ca3af',
              position: 'relative',
              marginBottom: '35px'
            }} />

            {/* Sub-Category Nodes Grid (6 items) with anchor links */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(6, 1fr)', 
              gap: '12px', 
              width: '100%',
              maxWidth: '1100px'
            }}>
              {productsList.map((sub, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Vertical drop line down to each card */}
                  <div style={{ width: '2px', height: '25px', backgroundColor: '#9ca3af', marginTop: '-35px' }} />
                  
                  {/* Clickable Sub-node Card */}
                  <Link href={`#${sub.id}`} style={{ width: '100%', textDecoration: 'none' }}>
                    <div style={{ 
                      backgroundColor: '#f9fafb', 
                      border: '1px solid #e5e7eb', 
                      borderRadius: '12px', 
                      padding: '14px 8px', 
                      width: '100%',
                      textAlign: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                      borderTop: `4px solid ${sub.color}`,
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      cursor: 'pointer'
                    }}>
                      <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#1f2937', display: 'block', marginBottom: '4px' }}>
                        {sub.title}
                      </span>
                      <span style={{ fontSize: '11px', color: '#2563eb', fontWeight: '500', fontStyle: 'italic' }}>
                        Click to View ↓
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ==================================================== */}
        {/* INDIVIDUAL BAG CATEGORY CARDS WITH PHOTO ZOOM OVERLAY */}
        {/* ==================================================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {productsList.map((item) => (
            <div 
              key={item.id} 
              id={item.id} 
              style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '20px', 
                padding: '24px', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)', 
                border: '1px solid #e5e7eb', 
                scrollMarginTop: '100px'
              }}
            >
              {/* Wrapper to attach the zoom trigger relative to the component content/photo area */}
              <div style={{ position: 'relative' }}>
                {item.component}

                {/* Click to View & Zoom Badge positioned directly on top of the product photo area */}
                <div style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 10 }}>
                  <button 
                    onClick={() => setSelectedImage(item.imgSrc)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: 'rgba(45, 55, 72, 0.9)',
                      color: '#ffffff',
                      padding: '8px 16px',
                      borderRadius: '50px',
                      fontSize: '13px',
                      fontWeight: '500',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                      backdropFilter: 'blur(4px)',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 32, 44, 0.95)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(45, 55, 72, 0.9)'}
                  >
                    <span style={{ color: '#38bdf8' }}>🔍</span> Click to View & Zoom
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ==================================================== */}
      {/* FULL-SCREEN LIGHTBOX / ZOOM MODAL                    */}
      {/* ==================================================== */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            backdropFilter: 'blur(4px)'
          }}
        >
          <div 
            style={{ position: 'relative', maxWidth: '900px', width: '100%', maxHeight: '90vh', display: 'flex', justifyContent: 'center' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Zoomed Product Portfolio" 
              style={{ maxHeight: '85vh', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}
            />
            <button 
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}