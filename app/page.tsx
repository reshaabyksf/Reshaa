import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Tools from './components/Tools';
import Gallery from './components/Gallery';
import MeetOurTeam from './components/MeetOurTeam';
import ConnectWithUs from './components/ConnectWithUs';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* About Section Anchor */}
      <div id="about" style={{ scrollMarginTop: '80px' }}>
        <About />
      </div>

      {/* Products Section Anchor */}
      <div id="products" style={{ scrollMarginTop: '80px' }}>
        <Products />
      </div>

      {/* Services Section Anchor */}
      <div id="services" style={{ scrollMarginTop: '80px' }}>
        <Services />
      </div>

      {/* Bag Yield Calculator / Tools Section Anchor */}
      <div id="tools" style={{ scrollMarginTop: '80px' }}>
        <Tools />
      </div>

      {/* Gallery Section Anchor */}
      <div id="gallery" style={{ scrollMarginTop: '80px' }}>
        <Gallery />
      </div>

      <MeetOurTeam />

      {/* Contact Section Anchor */}
      <div id="contact" style={{ scrollMarginTop: '80px' }}>
        <ConnectWithUs />
      </div>

      <Footer />
    </main>
  );
}