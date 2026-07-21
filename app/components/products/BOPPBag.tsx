export default function BoppBag() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '60px', padding: '40px', borderRadius: '16px', backgroundColor: '#f9fafb', marginBottom: '40px' }}>
      {/* Left: Image Container (Alternated) */}
      <div style={{ flex: 1, height: '300px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', border: '2px solid #e5e7eb', overflow: 'hidden', position: 'relative' }}>
        <img src="/images/bopp-bag.png" alt="BOPP Bag" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Right: Content */}
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px' }}>BOPP Bag</h3>
        <p style={{ color: '#4b5563', fontSize: '18px', marginBottom: '24px', lineHeight: '1.6' }}>
          Laminated with BOPP film providing a glossy, photographic-quality print finish and extra protection.
        </p>
        <h4 style={{ fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px' }}>Uses:</h4>
        <ul style={{ color: '#4b5563', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '24px' }}>
          <li>Luxury brand packaging.</li>
          <li>Seed, rice, and heavy retail goods.</li>
          <li>High-end gift bags.</li>
        </ul>
        <h4 style={{ fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px' }}>Specialties:</h4>
        <p style={{ color: '#4b5563', fontSize: '16px' }}>Glossy surface finish, water-resistant, and high visual appeal.</p>
      </div>
    </div>
  );
}