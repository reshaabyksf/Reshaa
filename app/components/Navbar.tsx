import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white py-6 px-8 shadow-sm border-b border-gray-100 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-teal-800 rounded-lg flex items-center justify-center text-white font-bold">R</div>
          <span className="text-2xl font-bold text-teal-900 tracking-tight">RESHAA</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-gray-700 hover:text-teal-600 font-medium">About</Link>
          <Link href="#products" className="text-gray-700 hover:text-teal-600 font-medium">Our Products</Link>
          <Link href="#services" className="text-gray-700 hover:text-teal-600 font-medium">Our Services</Link>
          <Link href="#gallery" className="text-gray-700 hover:text-teal-600 font-medium">Gallery</Link>
          <Link href="#contact" className="text-gray-700 hover:text-teal-600 font-medium">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}