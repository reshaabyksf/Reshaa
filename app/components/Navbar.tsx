"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-md sticky top-0 z-50">
      <a href="/" className="text-3xl font-extrabold text-teal-700 tracking-tighter">RESHAA</a>
      <div className="hidden md:flex items-center space-x-8 text-gray-700 font-semibold">
        <a href="#about" className="hover:text-teal-600 transition">About</a>
        <a href="#products" className="hover:text-teal-600 transition">Our products</a>
        <div className="relative">
          <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center hover:text-teal-600 transition">
            Our services <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {isServicesOpen && (
            <div className="absolute top-full mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-lg py-2 z-50">
              <a href="#screen" className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700">Screen Printing</a>
              <a href="#flexo" className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700">Flexo Printing</a>
            </div>
          )}
        </div>
        <a href="#contact" className="hover:text-teal-600 transition">Contact us</a>
      </div>
    </nav>
  );
}