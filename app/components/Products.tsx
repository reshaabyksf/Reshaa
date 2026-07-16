export default function Products() {
  const categories = [
    "D-cut Bags",
    "W-cut Bags",
    "Loop Handle Bags",
    "Bopp Laminated Bags",
    "Stitched Bags",
    "Box Bags"
  ];

  return (
    <section id="products" className="py-24 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12 text-teal-800">Our Packaging Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {categories.map((category) => (
          <div key={category} className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}