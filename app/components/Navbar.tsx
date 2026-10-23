'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Automatically switch between laptop and mobile layout based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close mobile dropdown if resizing back to laptop
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Calculator', href: '#tools' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
      borderBottom: '1px solid #e5e7eb'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', letterSpacing: '-0.5px' }}>
            Reshaa
          </span>
          <span style={{ fontSize: '12px', backgroundColor: '#e0e7ff', color: '#3730a3', padding: '2px 8px', borderRadius: '4px', fontWeight: '600' }}>
            Bags
          </span>
        </Link>

        {!isMobile ? (
          /* ==================== LAPTOP / DESKTOP LINKS ==================== */
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: '#4b5563',
                  fontSize: '15px',
                  fontWeight: '500',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#1e3a8a'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}
              >
                {link.name}
              </a>
            ))}
          </div>
        ) : (
          /* ==================== MOBILE HAMBURGER BUTTON ==================== */
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              color: '#1e3a8a',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* ==================== MOBILE DROPDOWN MENU ==================== */}
      {isMobile && isOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e5e7eb',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#1f2937',
                fontSize: '16px',
                fontWeight: '500',
                padding: '8px 0',
                borderBottom: '1px solid #f3f4f6'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}