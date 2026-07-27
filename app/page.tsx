import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Tools from './components/Tools';
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
      <MeetOurTeam />
      <ConnectWithUs />
      <Footer />
    </main>
  );
}