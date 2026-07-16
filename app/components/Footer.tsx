import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand Info */}
        <div>
          <h4 className="text-2xl font-bold mb-4">RESHAA</h4>
          <p className="text-gray-400">Quality non-woven manufacturing.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact</h4>
          <a href="mailto:reshaabyksf@gmail.com" className="flex items-center mb-2 hover:text-teal-400 transition">
            <Mail className="mr-2 h-5 w-5" /> reshaabyksf@gmail.com
          </a>
          <a href="tel:+919873402903" className="flex items-center hover:text-teal-400 transition">
            <Phone className="mr-2 h-5 w-5" /> +91 9873402903
          </a>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61588265550977" target="_blank" className="hover:text-teal-400 transition">
              <Facebook className="h-8 w-8" />
            </a>
            <a href="https://www.instagram.com/reshaabyksf/" target="_blank" className="hover:text-teal-400 transition">
              <Instagram className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}