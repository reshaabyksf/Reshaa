import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <Image src="/images/hero-bg.jpg" alt="Manufacturing floor" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-teal-900/50" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Premium Non-Woven Solutions</h1>
        <a href="#products" className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-full font-bold text-lg transition shadow-lg">Explore Catalog</a>
      </div>
    </section>
  );
}