'use client';
import { useState } from 'react';

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const subCategories = [
    "Offset Printing",
    "Screen Printing",
    "Flexo Printing",
    "Stitching"
  ];

  return (
    <section id="services" style={{ padding: '60px 30px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Main Heading: Our Services */}
        <div 
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '10px',
            padding: '20px',
            backgroundColor: '#f9fafb',
            borderRadius: '10px',
            border: '1px solid #e5e7eb'
          }}
        >
          {/* Heading set to Navy Blue */}
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a', margin: 0 }}>
            Our Services
          </h2>
          <span style={{ fontSize: '20px', color: '#1e3a8a' }}>{isOpen ? '▲' : '▼'}</span>
        </div>

        {/* Dropdown Content */}
        {isOpen && (
          <div style={{ 
            marginTop: '10px', 
            padding: '20px', 
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {subCategories.map((item, index) => (
                <li key={index} style={{ 
                  padding: '15px 0', 
                  fontSize: '18px', 
                  color: '#374151',
                  borderBottom: index !== subCategories.length - 1 ? '1px solid #f3f4f6' : 'none'
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}