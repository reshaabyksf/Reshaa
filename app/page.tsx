"use client"; 
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from "next/image";

export default function Home() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-teal-800 tracking-tight">
          RESHAA
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          <a href="#about" className="hover:text-teal-600 transition">About</a>
          <a href="#products" className="hover:text-teal-600 transition">Our Products</a>
          
          {/* Dropdown Services */}
          <div className="relative">
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center hover:text-teal-600 transition"
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-md py-2 z-50">
                <a href="#screen" className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700">Screen Printing</a>
                <a href="#flexo" className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700">Flexo Printing</a>
                <a href="#offset" className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700">Offset Printing</a>
              </div>
            )}
          </div>
        </div>

        <a href="#contact" className="bg-teal-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-teal-800 transition">
          Get a Quote
        </a>
      </nav>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-4 text-teal-800">About Reshaa</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Welcome to Reshaa. We specialize in high-quality non-woven manufacturing and premium printing solutions for your business needs.
        </p>
      </section>

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" /> 
        
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Reshaa manufacturing floor" 
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          priority 
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Premium Non-Woven Fabric & Carry Bags
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Direct from the manufacturer. From standard D-Cut to premium double-layered and BOPP laminated bags, engineered for durability and retail excellence.
          </p>
          <a href="#products" className="bg-white text-teal-800 px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition shadow-lg">
            Explore Our Catalog
          </a>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Packaging Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We manufacture a versatile range of non-woven bags customized to your brand's specifications, using high-grade spunbond fabric.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="bg-gray-100 group flex justify-center">
              <Image src="/images/d-cut.jpg" alt="D-Cut Non-Woven Bag" width={400} height={300} className="w-full h-64 object-cover group-hover:scale-105 transition duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">D-Cut Bags</h3>
            </div>
          </div>
          {/* Product 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="bg-gray-100 flex justify-center">
              <Image src="/images/w-cut.jpg" alt="W-Cut Bag" width={400} height={300} className="w-full h-64 object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">W-Cut (U-Cut) Bags</h3>
            </div>
          </div>
          {/* Product 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="bg-gray-100 flex justify-center">
              <Image src="/images/box.jpg" alt="Box and Leader Bag" width={400} height={300} className="w-full h-64 object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Box & Leader Bags</h3>
            </div>
          </div>
          {/* Product 4 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="bg-gray-100 group flex justify-center">
              <Image src="/images/bopp.jpg" alt="Laminated BOPP Bag" width={400} height={300} className="w-full h-64 object-cover group-hover:scale-105 transition duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Laminated BOPP Bags</h3>
            </div>
          </div>
        </div> 
      </section> 

      {/* FOOTER & CONTACT */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Reshaa. All rights reserved.
        </div>
      </footer>
    </main>
  );
}