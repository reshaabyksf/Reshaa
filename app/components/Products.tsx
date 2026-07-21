import DcutBag from './products/DcutBag';
import WcutBag from './products/WcutBag';
import LoopBag from './products/LoopBag';
import BOPPBag from './products/BOPPBag';
import StitchedBag from './products/StitchedBag';
import BoxBag from './products/BoxBag';

export default function Products() {
  return (
    <section id="products" style={{ padding: '96px 32px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '48px', textAlign: 'center' }}>
          Our Packaging Solutions
        </h2>

        {/* All 6 modular categories rendered with alternating layouts */}
        <DcutBag />
        <WcutBag />
        <LoopBag />
        <BOPPBag />
        <StitchedBag />
        <BoxBag />
      </div>
    </section>
  );
}