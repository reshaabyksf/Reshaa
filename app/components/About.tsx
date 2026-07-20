export default function About() {
  return (
    <section id="about" style={{ padding: '96px 32px', backgroundColor: '#f9fafb' }}>
      {/* Existing Content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', marginBottom: '80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '32px', color: '#1e3a8a' }}>About Reshaa</h2>
        <div style={{ color: '#4b5563', fontSize: '18px', lineHeight: '1.8', textAlign: 'center' }}>
          <p style={{ marginBottom: '24px' }}>
            At Reshaa, we believe a bag is more than just packaging—it's an extension of your brand. 
            With our tagline, <strong>"Bonded for Bags,"</strong> we are committed to manufacturing 
            high-quality non-woven bags that combine durability, functionality, and customization.
          </p>
          <p style={{ marginBottom: '24px' }}>
            From retail shopping bags to promotional and industrial packaging solutions, we offer a 
            wide range of products designed to meet the unique needs of businesses across industries. 
            Every bag is crafted using premium non-woven fabric and can be customized with your 
            preferred size, colour, handle type, and branding to help your business make a lasting impression.
          </p>
          <p>
            Backed by modern manufacturing and a focus on quality, Reshaa delivers reliable packaging 
            solutions that businesses can trust. Whether you're a retailer, wholesaler, distributor, 
            or brand owner, we're here to provide bags that carry not just products—but your brand's identity.
          </p>
        </div>
      </div>

      {/* Side-by-Side Mission & Vision Section - Left Aligned Visuals */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        gap: '60px' 
      }}>
        
        {/* Left: Circular Frame */}
        <div style={{ 
          width: '350px', 
          height: '350px', 
          borderRadius: '50%', 
          overflow: 'hidden',
          position: 'relative',
          border: '4px solid #d1d5db',
          flexShrink: 0
        }}>
          {/* Background Video Layer (Intact) */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              zIndex: 0 
            }}
          >
            <source src="/Videos/visuals-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Bag Graphic Overlay (Scaled to 600px for an extra-large fit) */}
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              backgroundImage: 'url(/images/bag-icon.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '600px auto', 
              mixBlendMode: 'multiply',
              zIndex: 1
            }} 
          />
        </div>

        {/* Right: Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a', margin: '0 0 10px 0' }}>Our Mission</h3>
            <p style={{ color: '#374151', fontSize: '18px', margin: '0' }}>Content coming soon...</p>
          </div>
          <div>
            <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a', margin: '0 0 10px 0' }}>Our Vision</h3>
            <p style={{ color: '#374151', fontSize: '18px', margin: '0' }}>Content coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
}