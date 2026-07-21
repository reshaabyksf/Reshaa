'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sharedFontSize = '16px';

  return (
    <header style={{ width: '100%', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000 }}>
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '15px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo linked to Home Page */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '90px', height: '45px' }}>
            <Image src="/images/logo.png" alt="Reshaa Logo" fill style={{ objectFit: 'contain' }} />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          
          {/* About Section Link */}
          <Link href="#about" style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none', fontSize: sharedFontSize }}>
            About
          </Link>
          
          {/* Products Dropdown with Specific Category Anchor Links */}
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => { setIsProductsOpen(!isProductsOpen); setIsServicesOpen(false); setIsLangOpen(false); }}
              style={{ color: '#1e3a8a', fontWeight: '600', border: 'none', background: 'none', cursor: 'pointer', fontSize: sharedFontSize, display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              Our Products {isProductsOpen ? '▲' : '▼'}
            </button>
            {isProductsOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '4px', padding: '5px 0', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '180px', zIndex: 100 }}>
                {[
                  { name: "D-cut Bag", link: "#d-cut-bag" },
                  { name: "W-cut Bag", link: "#w-cut-bag" },
                  { name: "Loop Bag", link: "#loop-bag" },
                  { name: "Stitched Bag", link: "#stitched-bag" },
                  { name: "BOPP Bag", link: "#bopp-bag" },
                  { name: "Box Bag", link: "#box-bag" }
                ].map(item => (
                  <Link 
                    key={item.name} 
                    href={item.link} 
                    onClick={() => setIsProductsOpen(false)}
                    style={{ padding: '8px 15px', color: '#374151', textDecoration: 'none', fontSize: '15px', display: 'block' }}
                  >
                    <span style={{ fontSize: '12px', color: '#1e3a8a', marginRight: '8px' }}>➔</span> {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => { setIsServicesOpen(!isServicesOpen); setIsProductsOpen(false); setIsLangOpen(false); }}
              style={{ color: '#1e3a8a', fontWeight: '600', border: 'none', background: 'none', cursor: 'pointer', fontSize: sharedFontSize, display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              Our Services {isServicesOpen ? '▲' : '▼'}
            </button>
            {isServicesOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '4px', padding: '5px 0', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '180px', zIndex: 100 }}>
                {["Offset Printing", "Screen Printing", "Flexo Printing", "Stitching"].map(item => (
                  <div key={item} style={{ padding: '8px 15px', color: '#374151', cursor: 'pointer', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#1e3a8a' }}>➔</span> {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Gallery Link */}
          <Link href="#gallery" style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none', fontSize: sharedFontSize }}>
            Gallery
          </Link>
          
          {/* Contact Us Link */}
          <Link href="#contact" style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none', fontSize: sharedFontSize }}>
            Contact Us
          </Link>

          {/* Language Dropdown */}
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => { setIsLangOpen(!isLangOpen); setIsProductsOpen(false); setIsServicesOpen(false); }}
              style={{ color: '#1e3a8a', fontWeight: '600', border: 'none', background: 'none', cursor: 'pointer', fontSize: sharedFontSize, display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              Language {isLangOpen ? '▲' : '▼'}
            </button>
            {isLangOpen && (
              <div style={{ position: 'absolute', top: '100%', right: 0, backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '4px', padding: '5px 0', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '160px', zIndex: 100 }}>
                {["English", "हिंदी (Hindi)", "Español", "Français"].map(lang => (
                  <div key={lang} style={{ padding: '8px 15px', color: '#374151', cursor: 'pointer', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#1e3a8a' }}>➔</span> {lang}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-btn"
          style={{ display: 'none', background: 'none', border: 'none', fontSize: '24px', color: '#1e3a8a', cursor: 'pointer' }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

      </nav>

      {/* Mobile Dropdown Menu Drawer */}
      {isMobileMenuOpen && (
        <div style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', boxShadow: '0 10px 15px rgba(0,0,0,0.05)' }}>
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none', fontSize: '18px' }}>About</Link>
          <Link href="#products" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none', fontSize: '18px' }}>Our Products</Link>
          <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none', fontSize: '18px' }}>Our Services</Link>
          <Link href="#gallery" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none', fontSize: '18px' }}>Gallery</Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none', fontSize: '18px' }}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}