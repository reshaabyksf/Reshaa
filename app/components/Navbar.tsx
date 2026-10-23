'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    handleResize();
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
        {/* Logo / Brand */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            backgroundColor: '#1e3a8a',
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '18px',
            width: '38px',
            height: '38px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(30,58,138,0.2)'
          }}>
            R
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e3a8a', lineHeight: '1.2' }}>
              Reshaa
            </span>
            <span style={{ fontSize: '11px', color: '#6b7280', fontWeight: '500', letterSpacing: '0.5px' }}>
              NON-WOVEN BAGS
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        {!isMobile ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: '#374151',
                  fontSize: '15px',
                  fontWeight: '500',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#1e3a8a'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
              >
                {link.name}
              </a>
            ))}
          </div>
        ) : (
          /* Mobile Hamburger Button */
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

      {/* Mobile Dropdown Menu */}
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