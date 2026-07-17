import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Our Products", href: "#products" },
    { name: "Our Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Name */}
        <Link href="/" className="text-3xl font-extrabold text-teal-900 tracking-tight">
          RESHAA
        </Link>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="px-5 py-2 rounded-full text-gray-700 font-medium hover:bg-teal-50 hover:text-teal-700 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}