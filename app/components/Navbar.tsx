"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-md sticky top-0 z-50">
      <a href="/" className="text-3xl font-extrabold text-teal-700">RESHAA</a>
      <div className="flex items-center space-x-8 text-gray-700 font-semibold">
        <a href="#about" className="hover:text-teal-600">About</a>
        <a href="#products" className="hover:text-teal-600">Our products</a>
        <div className="relative">
          <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center hover:text-teal-600">
            Our services <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {isServicesOpen && (
            <div className="absolute top-full mt-2 w-48 bg-white border shadow-xl rounded-lg py-2">
              <a href="#screen" className="block px-4 py-2 hover:bg-teal-50">Screen Printing</a>
              <a href="#flexo" className="block px-4 py-2 hover:bg-teal-50">Flexo Printing</a>
            </div>
          )}
        </div>
        <a href="#contact" className="hover:text-teal-600">Contact us</a>
      </div>
    </nav>
  );
}