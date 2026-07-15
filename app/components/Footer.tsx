import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div><h4 className="text-2xl font-bold mb-4">RESHAA</h4><p className="text-gray-400">Quality non-woven manufacturing.</p></div>
        <div><h4 className="text-xl font-bold mb-4">Contact</h4><p className="flex items-center mb-2"><Mail className="mr-2" /> sales@reshaabags.com</p></div>
        <div><h4 className="text-xl font-bold mb-4">Location</h4><p className="flex items-center"><MapPin className="mr-2" /> India</p></div>
      </div>
    </footer>
  );
}