import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="text-3xl font-extrabold text-teal-900 tracking-tight">
          RESHAA
        </Link>

        {/* Using space-x-10 to force a 40px buffer between every child link */}
        <div className="flex items-center space-x-10">
          <Link href="#about" className="text-gray-700 hover:text-teal-600 font-medium transition no-underline">About</Link>
          <Link href="#products" className="text-gray-700 hover:text-teal-600 font-medium transition no-underline">Our Products</Link>
          <Link href="#services" className="text-gray-700 hover:text-teal-600 font-medium transition no-underline">Our Services</Link>
          <Link href="#gallery" className="text-gray-700 hover:text-teal-600 font-medium transition no-underline">Gallery</Link>
          <Link href="#contact" className="text-gray-700 hover:text-teal-600 font-medium transition no-underline">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}