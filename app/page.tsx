import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import MeetOurTeam from './components/MeetOurTeam';
import ContactSection from './components/ContactSection'; // <-- Import here
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div id="about"><About /></div>
      <Products />
      <MeetOurTeam />
      <ContactSection /> {/* <-- Render here */}
      <Footer />
    </main>
  );
}