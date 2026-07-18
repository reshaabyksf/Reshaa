export default function About() {
  return (
    <section id="about" className="py-24 px-8 bg-gray-50">
      {/* Existing Content */}
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <h2 className="text-4xl font-bold mb-8 text-teal-800">About Reshaa</h2>
        <div className="text-gray-600 text-lg leading-relaxed space-y-6">
          <p>
            At Reshaa, we believe a bag is more than just packaging—it's an extension of your brand. 
            With our tagline, <strong>"Bonded for Bags,"</strong> we are committed to manufacturing 
            high-quality non-woven bags that combine durability, functionality, and customization.
          </p>
          <p>
            From retail shopping bags to promotional and industrial packaging solutions, we offer a 
            wide range of products designed to meet the unique needs of businesses across industries. 
            Every bag is crafted using premium non-woven fabric and can be customized with your 
            preferred size, colour, handle type, and branding to help your business make a lasting impression.
          </p>
          <p>
            Backed by modern manufacturing and a focus on quality, Reshaa delivers reliable packaging 
            solutions that businesses can trust. Whether you're a retailer, wholesaler, distributor, 
            or brand owner, we're here to provide bags that carry not just products—but your brand's identity.
          </p>
        </div>
      </div>

      {/* New Mission & Vision Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Visuals/Logo */}
        <div className="flex justify-center md:justify-start">
          {/* Replace this div with your actual Logo Image component */}
          <div className="w-[400px] h-[400px] bg-gray-200 rounded-full flex items-center justify-center border-4 border-gray-300">
            <span className="text-gray-500 font-bold">Your Logo/Visual Here</span>
          </div>
        </div>

        {/* Right Column: Mission & Vision Text */}
        <div className="space-y-10">
          <div>
            <h3 className="text-3xl font-bold text-teal-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Content coming soon...
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-teal-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Content coming soon...
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}