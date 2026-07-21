export default function LoopBag() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '60px', padding: '40px', borderRadius: '16px', backgroundColor: '#f9fafb', marginBottom: '40px' }}>
      {/* Left: Content */}
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px' }}>Loop Bag</h3>
        <p style={{ color: '#4b5563', fontSize: '18px', marginBottom: '24px', lineHeight: '1.6' }}>
          Crafted with attached soft loop handles for a premium feel and comfortable carrying experience.
        </p>
        <h4 style={{ fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px' }}>Uses:</h4>
        <ul style={{ color: '#4b5563', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '24px' }}>
          <li>Apparel and boutique stores.</li>
          <li>Exhibitions and corporate giveaways.</li>
          <li>Lifestyle and footwear retail.</li>
        </ul>
        <h4 style={{ fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px' }}>Specialties:</h4>
        <p style={{ color: '#4b5563', fontSize: '16px' }}>Enhanced grip comfort and elegant aesthetic look.</p>
      </div>

      {/* Right: Image Container */}
      <div style={{ flex: 1, height: '300px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', border: '2px solid #e5e7eb', overflow: 'hidden', position: 'relative' }}>
        <img src="/images/loop-bag.png" alt="Loop Bag" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  );
}