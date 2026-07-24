import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services'; 
import Gallery from './components/Gallery';
import MeetOurTeam from './components/MeetOurTeam';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services /> {/* <-- Positioned directly below Products */}
      <Gallery />
      <MeetOurTeam />
      <Contact />
      <Footer />
    </main>
  );
}