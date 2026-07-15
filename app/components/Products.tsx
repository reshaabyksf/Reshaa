import Image from "next/image";

export default function Products() {
  const products = [
    { img: "/images/d-cut.jpg", title: "D-Cut Bags" },
    { img: "/images/w-cut.jpg", title: "W-Cut Bags" },
    { img: "/images/box.jpg", title: "Box & Leader Bags" },
    { img: "/images/bopp.jpg", title: "Laminated BOPP" }
  ];
  return (
    <section id="products" className="py-24 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Our Packaging Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <div key={i} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <div className="h-64 relative"><Image src={p.img} alt={p.title} fill className="object-cover" /></div>
            <div className="p-6 bg-white"><h3 className="text-xl font-bold text-teal-800">{p.title}</h3></div>
          </div>
        ))}
      </div>
    </section>
  );
}