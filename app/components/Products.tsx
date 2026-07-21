import DCutBag from './products/D-cut bag';
import WCutBag from './products/W-cut bag';
import LoopBag from './products/Loop bag';
import BoppBag from './products/BOPP bag';
import StitchedBag from './products/Stitched bag';
import BoxBag from './products/Box bag';

export default function Products() {
  return (
    <section id="products" style={{ padding: '96px 32px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '48px', textAlign: 'center' }}>
          Our Packaging Solutions
        </h2>

        {/* All 6 modular categories rendered cleanly */}
        <DCutBag />
        <WCutBag />
        <LoopBag />
        <BoppBag />
        <StitchedBag />
        <BoxBag />
      </div>
    </section>
  );
}