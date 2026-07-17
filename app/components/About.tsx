export default function About() {
  return (
    <section id="about" className="relative w-full h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/factory.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-8 text-center text-white">
        <h2 className="text-5xl font-bold mb-8">About Reshaa</h2>
        
        <div className="text-lg leading-relaxed space-y-6">
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
    </section>
  );
}