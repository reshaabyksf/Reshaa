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
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        
        {/* Left Column: Mission & Vision */}
        <div className="flex-1 space-y-6">
          {/* Mission */}
          <div className="bg-blue-900 p-8 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="opacity-90">Content coming soon...</p>
          </div>

          {/* Vision */}
          <div className="bg-blue-900 p-8 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="opacity-90">Content coming soon...</p>
          </div>
        </div>

        {/* Right Column: Space for Visuals */}
        <div className="flex-1 h-[300px] w-full bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-400">
          <p className="text-gray-500">Visuals space</p>
        </div>
        
      </div>
    </section>
  );
}