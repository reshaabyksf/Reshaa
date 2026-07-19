'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  // Locked font size for consistency
  const sharedFontSize = '16px';

  return (
    <header style={{ width: '100%', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 100 }}>
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '15px 30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '100px', height: '50px' }}>
            <Image src="/images/logo.png" alt="Reshaa Logo" fill style={{ objectFit: 'contain' }} />
          </div>
        </Link>

        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          {/* About */}
          <Link href="#about" style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none', fontSize: sharedFontSize }}>About</Link>
          
          {/* Products Dropdown */}
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => { setIsProductsOpen(!isProductsOpen); setIsServicesOpen(false); }}
              style={{ color: '#1e3a8a', fontWeight: '600', border: 'none', background: 'none', cursor: 'pointer', fontSize: sharedFontSize, display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              Our Products {isProductsOpen ? '▲' : '▼'}
            </button>
            {isProductsOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '4px', padding: '5px 0', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '200px' }}>
                {["D-cut Bag", "W-cut Bag", "Loop Bag", "Stitched Bag", "BOPP Bag", "Box Bag"].map(item => (
                  <div key={item} style={{ padding: '8px 15px', color: '#374151', cursor: 'pointer', fontSize: sharedFontSize, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#1e3a8a' }}>➔</span> {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => { setIsServicesOpen(!isServicesOpen); setIsProductsOpen(false); }}
              style={{ color: '#1e3a8a', fontWeight: '600', border: 'none', background: 'none', cursor: 'pointer', fontSize: sharedFontSize, display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              Our Services {isServicesOpen ? '▲' : '▼'}
            </button>
            {isServicesOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '4px', padding: '5px 0', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '200px' }}>
                {["Offset Printing", "Screen Printing", "Flexo Printing", "Stitching"].map(item => (
                  <div key={item} style={{ padding: '8px 15px', color: '#374151', cursor: 'pointer', fontSize: sharedFontSize, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#1e3a8a' }}>➔</span> {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="#gallery" style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none', fontSize: sharedFontSize }}>Gallery</Link>
          <Link href="#contact" style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none', fontSize: sharedFontSize }}>Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}