import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image 
        src="/images/hero-bg.jpg" 
        alt="Manufacturing floor" 
        fill 
        className="object-cover" 
        priority 
      />
      
      {/* Dark Overlay for better text contrast (even though there's no text now, it keeps the look consistent) */}
      <div className="absolute inset-0 bg-teal-900/50" />
      
      {/* Empty content area to keep the vertical centering structure */}
      <div className="relative z-10 text-center text-white px-4">
        {/* Text and button removed for a clean look */}
      </div>
    </section>
  );
}