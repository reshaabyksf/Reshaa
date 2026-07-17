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
    { title: "W-cut Bags", desc: "Content coming soon...", img: "/images/w-cut.jpg" },
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
              <div className="flex-1 text-left">
                <h3 className="text-4xl font-bold mb-6 text-teal-800">{item.title}</h3>
                {/* Check if desc is a string or JSX/component */}
                {typeof item.desc === 'string' ? (
                  <p className="text-xl text-gray-700 leading-relaxed">{item.desc}</p>
                ) : (
                  item.desc
                )}
              </div>
              
              <div className="w-full md:w-[400px] flex-shrink-0">
                <div className="h-72 relative rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover" 
                    sizes="400px"
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