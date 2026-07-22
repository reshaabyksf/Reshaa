'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLangName, setSelectedLangName] = useState('Language');

  const sharedFontSize = '16px';

  // Comprehensive language list with Google Translate codes
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी (Hindi)' },
    { code: 'bn', name: 'বাংলা (Bengali)' },
    { code: 'ta', name: 'தமிழ் (Tamil)' },
    { code: 'te', name: 'తెలుగు (Telugu)' },
    { code: 'mr', name: 'मराठी (Marathi)' },
    { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' },
    { code: 'es', name: 'Español (Spanish)' },
    { code: 'fr', name: 'Français (French)' },
    { code: 'de', name: 'Deutsch (German)' },
    { code: 'zh-CN', name: '中文 (Chinese)' },
    { code: 'ar', name: 'العربية (Arabic)' },
    { code: 'ja', name: '日本語 (Japanese)' }
  ];

  // Initialize Google Translate Script
  useEffect(() => {
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          'google_translate_element'
        );
      };
    }
  }, []);

  // Function to switch language globally via Google Translate DOM element
  const handleLanguageSelect = (code: string, name: string) => {
    setSelectedLangName(name);
    setIsLangOpen(false);

    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = code;
      selectElement.dispatchEvent(new Event('change'));
    }
  };

  return (
    <header style={{ width: '100%', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000 }}>
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '15px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo linked to Home Page */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '90px', height: '45px' }}>
            <Image src="/images/logo.png" alt="Reshaa Logo" fill style={{ objectFit: 'contain' }} />
          </div>
        </Link>

        {/* Hidden Google Translate Element required for translation engine backend */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>

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

          {/* Comprehensive Language Dropdown */}
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => { setIsLangOpen(!isLangOpen); setIsProductsOpen(false); setIsServicesOpen(false); }}
              style={{ color: '#1e3a8a', fontWeight: '600', border: 'none', background: 'none', cursor: 'pointer', fontSize: sharedFontSize, display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              🌐 {selectedLangName} {isLangOpen ? '▲' : '▼'}
            </button>
            {isLangOpen && (
              <div style={{ 
                position: 'absolute', 
                top: '100%', 
                right: 0, 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb', 
                borderRadius: '8px', 
                padding: '6px 0', 
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)', 
                width: '210px', 
                maxHeight: '320px', 
                overflowY: 'auto', 
                zIndex: 100 
              }}>
                {languages.map(lang => (
                  <div 
                    key={lang.code} 
                    onClick={() => handleLanguageSelect(lang.code, lang.name)}
                    style={{ padding: '10px 15px', color: '#374151', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background-color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <span style={{ fontSize: '12px', color: '#1e3a8a' }}>➔</span> {lang.name}
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
          
          {/* Mobile Language Selector Sub-section */}
          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '10px', marginTop: '5px' }}>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#6b7280', marginBottom: '8px' }}>Select Language:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => { handleLanguageSelect(lang.code, lang.name); setIsMobileMenuOpen(false); }}
                  style={{ textAlign: 'left', padding: '8px 10px', backgroundColor: '#f3f4f6', border: 'none', borderRadius: '6px', fontSize: '13px', color: '#374151', cursor: 'pointer' }}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// Add TypeScript declarations for Google Translate global hooks
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}