import DcutBag from './products/DcutBag';
import WcutBag from './products/WcutBag';
import LoopBag from './products/LoopBag';
import BOPPBag from './products/BOPPBag';
import StitchedBag from './products/StitchedBag';
import BoxBag from './products/BoxBag';

export default function Products() {
  return (
    <section id="products" style={{ padding: '96px 32px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* ==================================================== */}
        {/* HEADER & VALUE CHAIN HIERARCHY TREE                  */}
        {/* ==================================================== */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px' }}>
            Our Product Portfolio
          </h2>
          <p style={{ color: '#4b5563', fontSize: '18px', maxWidth: '700px', margin: '0 auto 48px auto', lineHeight: '1.6' }}>
            Engineered non-woven manufacturing solutions tailored for retail, commercial, and heavy industrial utility.
          </p>

          {/* Value Chain Tree Container */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', paddingTop: '10px' }}>
            
            {/* Parent Node */}
            <div style={{ 
              backgroundColor: '#1e3a8a', 
              color: '#ffffff', 
              padding: '16px 36px', 
              borderRadius: '30px', 
              fontSize: '18px', 
              fontWeight: 'bold',
              letterSpacing: '0.5px',
              boxShadow: '0 10px 25px rgba(30, 58, 138, 0.2)',
              zIndex: 2,
              marginBottom: '0px'
            }}>
              OUR PACKAGING SOLUTIONS
            </div>

            {/* Vertical Connector Line from Parent */}
            <div style={{ width: '2px', height: '35px', backgroundColor: '#9ca3af' }} />

            {/* Horizontal Branch Bar linking all 6 sub-categories */}
            <div style={{ 
              width: '88%', 
              maxWidth: '1000px', 
              height: '2px', 
              backgroundColor: '#9ca3af',
              position: 'relative',
              marginBottom: '35px'
            }} />

            {/* Sub-Category Nodes Grid (6 items) */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(6, 1fr)', 
              gap: '12px', 
              width: '100%',
              maxWidth: '1100px'
            }}>
              {[
                { title: 'D-Cut Bags', color: '#3b82f6' },
                { title: 'W-Cut Bags', color: '#10b981' },
                { title: 'Loop Bags', color: '#8b5cf6' },
                { title: 'BOPP Bags', color: '#f59e0b' },
                { title: 'Stitched Bags', color: '#ef4444' },
                { title: 'Box Bags', color: '#64748b' }
              ].map((sub, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Vertical drop line down to each card */}
                  <div style={{ width: '2px', height: '25px', backgroundColor: '#9ca3af', marginTop: '-35px' }} />
                  
                  {/* Sub-node Card */}
                  <div style={{ 
                    backgroundColor: '#f9fafb', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '12px', 
                    padding: '14px 8px', 
                    width: '100%',
                    textAlign: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                    borderTop: `4px solid ${sub.color}`
                  }}>
                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#1f2937', display: 'block', marginBottom: '4px' }}>
                      {sub.title}
                    </span>
                    <span style={{ fontSize: '11px', color: '#6b7280', fontStyle: 'italic' }}>
                      Verified Spec ↓
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ==================================================== */}
        {/* DETAILED PRODUCT SECTIONS (Alternating Layout)       */}
        {/* ==================================================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <DcutBag />
          <WcutBag />
          <LoopBag />
          <BOPPBag />
          <StitchedBag />
          <BoxBag />
        </div>

      </div>
    </section>
  );
}