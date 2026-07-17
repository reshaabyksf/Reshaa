import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Name */}
        <Link href="/" className="text-3xl font-extrabold text-teal-900 tracking-tight">
          RESHAA
        </Link>

        {/* Navigation Menu with individual padding */}
        <div className="flex items-center">
          <Link href="#about" className="px-5 text-gray-700 hover:text-teal-600 font-medium transition">About</Link>
          <Link href="#products" className="px-5 text-gray-700 hover:text-teal-600 font-medium transition">Our Products</Link>
          <Link href="#services" className="px-5 text-gray-700 hover:text-teal-600 font-medium transition">Our Services</Link>
          <Link href="#gallery" className="px-5 text-gray-700 hover:text-teal-600 font-medium transition">Gallery</Link>
          <Link href="#contact" className="px-5 text-gray-700 hover:text-teal-600 font-medium transition">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}