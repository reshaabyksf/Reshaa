import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Our Products", href: "#products" },
    { name: "Our Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header style={{ 
      width: '100%', 
      backgroundColor: 'white', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 50 
    }}>
      <nav style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '15px 30px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}>
        
        {/* Logo Section */}
        <Link href="#about" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '100px', height: '50px' }}>
            <Image 
              src="/images/logo.png" 
              alt="Reshaa Logo" 
              fill 
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>

        {/* Navigation Tabs - Navy Blue */}
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              style={{ 
                color: '#1e3a8a', // Navy Blue
                fontWeight: '600', 
                textDecoration: 'none',
                fontSize: '16px'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}