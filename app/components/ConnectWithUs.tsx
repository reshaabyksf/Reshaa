'use client';
import Link from 'next/link';

export default function ConnectWithUs() {
  return (
    <section style={{ padding: '40px 20px 80px 20px', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Section Heading */}
        <h2 style={{ fontSize: '38px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '40px', textAlign: 'center', letterSpacing: '0.5px' }}>
          CONNECT WITH US
        </h2>

        {/* Main Card Container */}
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

              {/* Social Media Profiles (Icon Only) */}
              <div>
                <strong style={{ fontSize: '14px', color: '#1f2937', display: 'block', marginBottom: '10px' }}>Social Profiles:</strong>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {/* Facebook Icon */}
                  <Link href="https://facebook.com" target="_blank" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e3a8a', fontSize: '18px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                    f
                  </Link>
                  {/* LinkedIn Icon */}
                  <Link href="https://linkedin.com" target="_blank" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e3a8a', fontSize: '16px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                    in
                  </Link>
                  {/* Instagram Icon */}
                  <Link href="https://instagram.com" target="_blank" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e3a8a', fontSize: '16px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                    📷
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