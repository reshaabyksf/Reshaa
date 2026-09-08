import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Tools from './components/Tools';
import Gallery from './components/Gallery'; // <-- 1. Gallery yahan import kiya
import MeetOurTeam from './components/MeetOurTeam';
import ConnectWithUs from './components/ConnectWithUs';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <div id="tools" style={{ scrollMarginTop: '80px' }}>
        <Tools />
      </div>
      {/* 2. Gallery component ko yahan add kiya taaki navbar link se match ho */}
      <div id="gallery" style={{ scrollMarginTop: '80px' }}>
        <Gallery />
      </div>
      <MeetOurTeam />
      <ConnectWithUs />
      <Footer />
    </main>
  );
}