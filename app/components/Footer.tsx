import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0b1329', color: '#9ca3af', padding: '60px 20px 30px 20px', borderTop: '1px solid #1e293b' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Main Footer Grid Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '40px', 
          marginBottom: '50px',
          alignItems: 'start'
        }}>
          
          {/* Column 1: Brand & Tagline */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px', letterSpacing: '0.5px' }}>
              Reshaa
            </h3>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#9ca3af', margin: 0 }}>
              Bonded for Bags. Premium non-woven bag manufacturing and sustainable packaging solutions.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px', letterSpacing: '0.5px' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link href="#about" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                  Products Portfolio
                </Link>
              </li>
              <li>
                <Link href="#team" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="#contact" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Facility Information */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px', letterSpacing: '0.5px' }}>
              Facility Information
            </h4>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#9ca3af', margin: '0 0 10px 0' }}>
              <strong style={{ color: '#ffffff' }}>Reshaa - Bonded for Bags</strong>
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#9ca3af', margin: 0 }}>
              C-1, Industrial Area, Growth Center,<br />
              Jamour, Shahjahanpur - 242001 UP
            </p>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div style={{ 
          borderTop: '1px solid #1e293b', 
          paddingTop: '25px', 
          textAlign: 'center', 
          fontSize: '14px', 
          color: '#6b7280' 
        }}>
          © 2026 Reshaa. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}