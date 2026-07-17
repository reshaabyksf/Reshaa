import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Name */}
        <Link href="/" className="text-3xl font-extrabold text-teal-900 tracking-tight">
          RESHAA
        </Link>

        {/* Navigation Menu with increased gap */}
        <div className="flex items-center gap-10">
          <Link href="#about" className="text-gray-700 hover:text-teal-600 font-medium transition whitespace-nowrap">About</Link>
          <Link href="#products" className="text-gray-700 hover:text-teal-600 font-medium transition whitespace-nowrap">Our Products</Link>
          <Link href="#services" className="text-gray-700 hover:text-teal-600 font-medium transition whitespace-nowrap">Our Services</Link>
          <Link href="#gallery" className="text-gray-700 hover:text-teal-600 font-medium transition whitespace-nowrap">Gallery</Link>
          <Link href="#contact" className="text-gray-700 hover:text-teal-600 font-medium transition whitespace-nowrap">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}