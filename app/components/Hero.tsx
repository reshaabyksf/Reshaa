export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video - Uses updated factory.mp4 automatically */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/factory.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-6">
        <h1 className="text-6xl font-extrabold mb-4">Welcome to Reshaa</h1>
        <p className="text-2xl font-medium tracking-wide">Bonded for Bags – Quality Packaging Solutions</p>
      </div>
    </section>
  );
}