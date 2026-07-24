import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
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
      <MeetOurTeam />
      <ConnectWithUs />
      <Footer />
    </main>
  );
}