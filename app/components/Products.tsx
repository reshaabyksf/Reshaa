import Image from "next/image";

export default function Products() {
  const products = [
    { 
      title: "D-cut Bags", 
      desc: (
        <div className="text-gray-700 text-lg leading-relaxed">
          <p className="mb-4">A simple, strong, and budget-friendly bag with a handle cut directly into the fabric.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2 text-teal-900">Uses:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Clothing and garment shops.</li>
                <li>Pharmacies and medical stores.</li>
                <li>Gift shops and retail outlets.</li>
                <li>Promotional events and exhibitions.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-teal-900">Specialities:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Lightweight yet durable construction.</li>
                <li>Reusable and recyclable, sustainable option.</li>
                <li>Available in multiple GSMs, sizes, and colours.</li>
                <li>Customizable with logos and brand printing.</li>
              </ul>
            </div>
          </div>
        </div>
      ), 
      img: "/images/d-cut.jpg" 
    },
    { 
      title: "W-cut Bags", 
      desc: (
        <div className="text-gray-700 text-lg leading-relaxed">
          <p className="mb-4">Features a W-shaped handle cut, providing extra grip and stability for heavier items.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2 text-teal-900">Uses:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Sweet shops and confectionery stores.</li>
                <li>Medical stores and pharmacies.</li>
                <li>Stationery shops and bookstores.</li>
                <li>Retail stores and supermarkets.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-teal-900">Specialities:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>W-shaped handle for comfortable grip.</li>
                <li>Reusable and recyclable, eco-friendly.</li>
                <li>Available in various sizes, GSMs, and colours.</li>
                <li>Supports custom logo and brand printing.</li>
              </ul>
            </div>
          </div>
        </div>
      ), 
      img: "/images/w-cut.jpg" 
    },
    { title: "Loop Handle Bags", desc: "Content coming soon...", img: "/images/loop.jpg" },
    { title: "Bopp Laminated Bags", desc: "Content coming soon...", img: "/images/bopp.jpg" },
    { title: "Stitched Bags", desc: "Content coming soon...", img: "/images/stitched.jpg" },
    { title: "Box Bags", desc: "Content coming soon...", img: "/images/box.jpg" },
  ];

  return (
    <section id="products" className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-16 text-left text-teal-900">Our Packaging Solutions</h2>
        
        <div className="space-y-20">
          {products.map((item) => (
            <div key={item.title} className="flex flex-col md:flex-row items-start gap-12 border-b border-gray-100 pb-12">
              {/* Text content */}
              <div className="flex-1 text-left">
                <h3 className="text-4xl font-bold mb-6 text-teal-800">{item.title}</h3>
                {typeof item.desc === 'string' ? (
                  <p className="text-xl text-gray-700 leading-relaxed">{item.desc}</p>
                ) : (
                  item.desc
                )}
              </div>
              
              {/* Fixed Image Container */}
              <div className="w-full md:w-[300px] flex-shrink-0">
                <div className="w-[300px] h-[300px] relative rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}