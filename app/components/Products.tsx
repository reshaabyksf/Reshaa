import Image from "next/image";

export default function Products() {
  const products = [
    { 
      title: "D-cut Bags", 
      desc: (
        <div className="text-gray-600 text-lg leading-relaxed">
          <p className="mb-4">A simple, strong, and budget-friendly bag with a handle cut directly into the fabric.</p>
          <strong className="block mb-2">Uses:</strong>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Clothing and garment shops.</li>
            <li>Pharmacies and medical stores.</li>
            <li>Gift shops and retail outlets.</li>
            <li>Promotional events and exhibitions.</li>
          </ul>
          <strong className="block mb-2">Specialities:</strong>
          <ul className="list-disc list-inside space-y-1">
            <li>Lightweight yet durable construction.</li>
            <li>Reusable and recyclable, sustainable option.</li>
            <li>Available in multiple GSMs, sizes, and colours.</li>
            <li>Customizable with logos and brand printing.</li>
          </ul>
        </div>
      ), 
      img: "/images/d-cut.jpg" 
    },
    // Add your other bags here following the same pattern
  ];

  return (
    <section id="products" className="py-24 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-teal-800">Our Packaging Solutions</h2>
        
        <div className="space-y-12">
          {products.map((item) => (
            <div key={item.title} className="flex flex-col md:flex-row items-center gap-8 border-b pb-12">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-teal-900">{item.title}</h3>
                {item.desc}
              </div>
              {/* Image Container with fixed size recommendation */}
              <div className="w-full md:w-1/3 h-64 relative rounded-lg overflow-hidden shadow-lg border border-gray-100">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}