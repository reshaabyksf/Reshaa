import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Our Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="bg-white py-6 px-8 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          {/* Replace this div with an <img /> or <Image /> tag for your logo */}
          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
            R
          </div>
          <span className="text-2xl font-bold text-teal-900">RESHAA</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}