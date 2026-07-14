import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
        <div className="text-2xl font-bold text-teal-800 tracking-tight">
          RESHAA
        </div>
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#products" className="hover:text-teal-600 transition">Our Products</a>
          <a href="#manufacturing" className="hover:text-teal-600 transition">Manufacturing</a>
          <a href="#contact" className="hover:text-teal-600 transition">Contact Us</a>
        </div>
        <a href="#contact" className="bg-teal-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-teal-800 transition">
          Get a Quote
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-100">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay for text readability */}
        
        {/* THIS IS THE NEW IMAGE TAG */}
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Reshaa manufacturing floor" 
          fill 
          className="object-cover"
          priority 
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
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
            <div className="h-64 relative bg-gray-100 group">
              <Image 
                src="/images/d-cut.jpg" 
                alt="D-Cut Non-Woven Bag" 
                fill 
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">D-Cut Bags</h3>
              <p className="text-gray-600 text-sm">Classic die-cut handle design. Ideal for retail stores, exhibitions, and everyday carrying.</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-64 relative bg-gray-100">
              <Image src="/images/w-cut.jpg" alt="W-Cut Bag" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">W-Cut (U-Cut) Bags</h3>
              <p className="text-gray-600 text-sm">Grocery style bags with high weight capacity. Perfect for supermarkets and daily utility.</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-64 relative bg-gray-100">
              <Image src="/images/box.jpg" alt="Box and Leader Bag" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Box & Leader Bags</h3>
              <p className="text-gray-600 text-sm">Structured gusseted bags providing extra space and premium presentation for heavier items.</p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-64 relative bg-gray-100 group">
              <Image 
                src="/images/bopp.jpg" 
                alt="Laminated BOPP Bag" 
                fill 
                className="object-cover group-hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Laminated BOPP Bags</h3>
              <p className="text-gray-600 text-sm">High-fidelity printed laminated finishes for maximum brand impact and waterproofing.</p>
            </div>
          </div>

          {/* Product 5 (Loop Handle) */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-64 relative bg-gray-100 group">
              <Image 
                src="/images/loop.jpg" 
                alt="Loop Handle Bag" 
                fill 
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Loop Handle Bags</h3>
              <p className="text-gray-600 text-sm">Features comfortable external soft loop handles, delivering a premium look for high-end retail apparel.</p>
            </div>
          </div>

          {/* Product 6 (Stitched) */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-64 relative bg-gray-100 group">
              <Image 
                src="/images/stitched.jpg" 
                alt="Stitched Bag" 
                fill 
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stitched Bags</h3>
              <p className="text-gray-600 text-sm">Heavy-duty tailored construction with reinforced stitching, maximizing durability for bulky or heavy loads.</p>
            </div>
          </div>

        </div> {/* <-- This closes the grid */}
      </section> {/* <-- This closes the whole products section */}


      {/* MANUFACTURING QUALITY */}
      <section id="manufacturing" className="bg-teal-50 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Uncompromising Quality</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              As a direct manufacturer, we maintain complete control over the production process. Our single S spunbond non-woven fabric offers reliable strength and consistency for standard applications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For clients requiring elevated aesthetics and durability, we offer specialized constructions—such as our premium double-layered fabric bags, which fuse an internal non-woven core with vibrant external colored fabrics for a superior finish.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-3xl font-bold text-teal-600 mb-2">100%</h4>
              <p className="text-sm text-gray-600 font-medium">In-House Production</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-3xl font-bold text-teal-600 mb-2">B2B</h4>
              <p className="text-sm text-gray-600 font-medium">Bulk & Wholesale</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">RESHAA</h3>
            <p className="text-sm text-gray-400">
              Premium non-woven bag manufacturing for retail, wholesale, and enterprise clients.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Sales</h4>
            <p className="text-sm mb-2">Email: sales@reshaabags.com</p>
            <p className="text-sm mb-2">Phone: +91 XXXXX XXXXX</p>
            <p className="text-sm">Location: India</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Business Hours</h4>
            <p className="text-sm mb-2">Monday - Saturday</p>
            <p className="text-sm">9:00 AM - 6:00 PM</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Reshaa. All rights reserved.
        </div>
      </footer>
    </main>
  );
}