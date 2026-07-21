export default function StitchedBag() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '60px', padding: '40px', borderRadius: '16px', backgroundColor: '#f9fafb', marginBottom: '40px' }}>
      {/* Left: Content */}
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px' }}>Stitched Bag</h3>
        <p style={{ color: '#4b5563', fontSize: '18px', marginBottom: '24px', lineHeight: '1.6' }}>
          Precision-stitched with heavy-duty threads for maximum durability and weight capacity.
        </p>
        <h4 style={{ fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px' }}>Uses:</h4>
        <ul style={{ color: '#4b5563', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '24px' }}>
          <li>Heavy shopping and utility storage.</li>
          <li>Industrial and multi-use carrying bags.</li>
          <li>Trade shows and travel utility.</li>
        </ul>
        <h4 style={{ fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px' }}>Specialties:</h4>
        <p style={{ color: '#4b5563', fontSize: '16px' }}>Superior seam strength and long-lasting reusability.</p>
      </div>

      {/* Right: Image Container */}
      <div style={{ flex: 1, height: '300px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', border: '2px solid #e5e7eb', overflow: 'hidden', position: 'relative' }}>
        <img src="/images/stitched-bag.png" alt="Stitched Bag" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  );
}