'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '40px 20px 80px 20px', backgroundColor: '#f9fafb', scrollMarginTop: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Section Heading */}
        <h2 style={{ fontSize: '38px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px', textAlign: 'center', letterSpacing: '0.5px' }}>
          CONTACT US
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7280', textAlign: 'center', marginBottom: '40px' }}>
          We would love to hear from you. Reach out for bulk enquiries, partnerships, or support.
        </p>

        {/* Part 1: Interactive Inquiry Form (Fills the Gap) */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '24px', 
          padding: '40px', 
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', 
          border: '1px solid #e5e7eb',
          marginBottom: '40px'
        }}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px' }}>
            Send Us a Message
          </h3>
          <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '24px' }}>
            Fill out the form below and our sales support team will get back to you shortly.
          </p>

          {submitted ? (
            <div style={{ padding: '20px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '12px', color: '#065f46', textAlign: 'center', fontWeight: '600' }}>
              Thank you! Your message has been sent successfully. We will contact you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Your Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '15px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '15px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '15px', outline: 'none' }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Message / Requirements</label>
                <textarea 
                  rows={4}
                  required 
                  placeholder="Tell us about your bag or non-woven fabric requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '15px', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <button 
                  type="submit" 
                  style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '14px 28px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.2s' }}
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Part 2: Connect With Us Grid (Facility Details, Contacts, Socials & Map) */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '24px', 
          padding: '40px', 
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', 
          border: '1px solid #e5e7eb',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Manufacturing Facility & Contact Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Manufacturing Facility */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ fontSize: '20px' }}>📍</span>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e3a8a', margin: 0 }}>
                  Manufacturing Facility
                </h3>
              </div>
              <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                <strong>Reshaa - Bonded for Bags</strong><br />
                C-1, Industrial Area, Growth Center,<br />
                Jamour, Shahjahanpur - 242001 UP
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: 0 }} />

            {/* Contact Points */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ fontSize: '20px' }}>✉️</span>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e3a8a', margin: 0 }}>
                  Contact Points
                </h3>
              </div>
              
              <div style={{ marginBottom: '16px' }}>
                <strong style={{ fontSize: '14px', color: '#1f2937', display: 'block', marginBottom: '4px' }}>Email Enquiries:</strong>
                <a href="mailto:reshaabyksf@gmail.com" style={{ fontSize: '15px', color: '#2563eb', textDecoration: 'none', display: 'block' }}>reshaabyksf@gmail.com</a>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <strong style={{ fontSize: '14px', color: '#1f2937', display: 'block', marginBottom: '4px' }}>Direct Contacts:</strong>
                <span style={{ fontSize: '15px', color: '#4b5563', display: 'block' }}>Sales Support: +91-9217176508</span>
              </div>

              {/* Social Media Profiles with Linked Icons */}
              <div>
                <strong style={{ fontSize: '14px', color: '#1f2937', display: 'block', marginBottom: '10px' }}>Social Profiles:</strong>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  
                  {/* Facebook */}
                  <Link 
                    href="https://www.facebook.com/profile.php?id=61588265550977" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}
                    title="Facebook"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1e3a8a">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </Link>

                  {/* LinkedIn */}
                  <Link 
                    href="https://www.linkedin.com/company/112146919/admin/dashboard/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}
                    title="LinkedIn"
                  >
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="#1e3a8a">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>

                  {/* Instagram */}
                  <Link 
                    href="https://www.instagram.com/reshaabyksf/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}
                    title="Instagram"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1e3a8a">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>

                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Google Map Embed Intact */}
          <div style={{ width: '100%', height: '420px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.441112838027!2d79.907!3d27.882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUyJzU5LjIiTiA3OcKwNTQnMjUuMiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}