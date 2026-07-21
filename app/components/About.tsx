export default function About() {
  return (
    <section id="about" style={{ padding: '96px 32px', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* ==================================================== */}
        {/* SECTION 1: CORPORATE OVERVIEW CARD                    */}
        {/* ==================================================== */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          padding: '48px', 
          borderRadius: '20px', 
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e5e7eb',
          marginBottom: '60px'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '24px', color: '#1e3a8a', textAlign: 'center' }}>
            About Reshaa
          </h2>
          <div style={{ color: '#4b5563', fontSize: '18px', lineHeight: '1.8' }}>
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
            <p style={{ margin: 0 }}>
              Backed by modern manufacturing and a focus on quality, Reshaa delivers reliable packaging 
              solutions that businesses can trust. Whether you're a retailer, wholesaler, distributor, 
              or brand owner, we're here to provide bags that carry not just products—but your brand's identity.
            </p>
          </div>
        </div>

        {/* ==================================================== */}
        {/* AESTHETIC THIN SEPARATION LINE                        */}
        {/* ==================================================== */}
        <div style={{ 
          width: '100%', 
          height: '1px', 
          backgroundColor: '#e5e7eb', 
          marginBottom: '60px' 
        }} />

        {/* ==================================================== */}
        {/* SECTION 2: MISSION, VISION & CIRCULAR VISUAL          */}
        {/* ==================================================== */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-start', 
          gap: '60px' 
        }}>
          
          {/* Left: Circular Frame with Video & Bag Overlay */}
          <div style={{ 
            width: '350px', 
            height: '350px', 
            borderRadius: '50%', 
            overflow: 'hidden',
            position: 'relative',
            border: '4px solid #d1d5db',
            flexShrink: 0,
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
          }}>
            {/* Background Video Layer */}
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
            
            {/* Bag Graphic Overlay */}
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

          {/* Right: Vision, Mission & Tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', flex: 1 }}>
            <div>
              <h3 style={{ fontSize: '26px', fontWeight: 'bold', color: '#1e3a8a', margin: '0 0 10px 0' }}>Our Vision</h3>
              <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.6', margin: '0' }}>
                To become a trusted global partner in sustainable packaging by transforming non-woven materials into innovative, reliable, and responsible packaging solutions that help businesses grow.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '26px', fontWeight: 'bold', color: '#1e3a8a', margin: '0 0 10px 0' }}>Our Mission</h3>
              <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.6', margin: '0' }}>
                At Reshaa, we are committed to delivering high-quality non-woven bags and customized packaging solutions that combine functionality, durability, aesthetics, and sustainability. We strive to understand our customers’ unique packaging needs and provide dependable products that add value to their brands while contributing to a more sustainable future.
              </p>
            </div>

            <div style={{ borderTop: '2px solid #f3f4f6', paddingTop: '16px' }}>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e3a8a', margin: '0 0 4px 0' }}>
                Reshaa — Bonded for Bags
              </h4>
              <p style={{ color: '#6b7280', fontSize: '15px', fontStyle: 'italic', margin: '0' }}>
                Where quality, innovation, and reliable packaging solutions come together.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}