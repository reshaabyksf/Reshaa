export default function Products() {
  return (
    <section id="products" style={{ padding: '96px 32px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Updated heading color to navy blue */}
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '48px', textAlign: 'center' }}>
          Our Packaging Solutions
        </h2>

        {/* D-Cut Bags Section */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          gap: '60px',
          padding: '40px',
          borderRadius: '16px',
          backgroundColor: '#f9fafb'
        }}>
          
          {/* Left: Content (Kept as it is) */}
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px' }}>D-cut Bags</h3>
            <p style={{ color: '#4b5563', fontSize: '18px', marginBottom: '24px', lineHeight: '1.6' }}>
              A simple, strong, and budget-friendly bag with a handle cut directly into the fabric.
            </p>
            
            <h4 style={{ fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px' }}>Uses:</h4>
            <ul style={{ color: '#4b5563', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '24px' }}>
              <li>Clothing and garment shops.</li>
              <li>Pharmacies and medical stores.</li>
              <li>Gift shops and retail outlets.</li>
              <li>Promotional events and exhibitions.</li>
            </ul>

            <h4 style={{ fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px' }}>Specialties:</h4>
            <p style={{ color: '#4b5563', fontSize: '16px' }}>Lightweight, durable construction.</p>
          </div>

          {/* Right: Actual D-Cut Bag Image Container */}
          <div style={{ 
            flex: 1, 
            height: '300px', 
            backgroundColor: '#ffffff', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: '12px',
            border: '2px solid #e5e7eb',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <img 
              src="/images/d-cut-bag.png" 
              alt="D-Cut Bag" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}