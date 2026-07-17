import Image from "next/image";

export default function Products() {
  const products = [
    { 
      title: "D-cut Bags", 
      desc: "A simple, strong, and budget-friendly bag with a handle cut directly into the fabric.",
      uses: ["Clothing and garment shops.", "Pharmacies and medical stores.", "Gift shops and retail outlets.", "Promotional events and exhibitions."],
      specialties: ["Lightweight yet durable construction.", "Reusable and recyclable, sustainable option.", "Available in multiple GSMs, sizes, and colours.", "Customizable with logos and brand printing."],
      img: "/images/d-cut.jpg" 
    },
    // Add other bags here using the same structure
  ];

  return (
    <section id="products" className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-16 text-left text-teal-900">Our Packaging Solutions</h2>
        
        {products.map((item) => (
          <div key={item.title} className="flex flex-col md:flex-row items-start gap-12 border-b border-gray-100 pb-12 mb-12">
            
            {/* Left side: Content */}
            <div className="flex-1">
              <h3 className="text-4xl font-bold mb-6 text-teal-800">{item.title}</h3>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">{item.desc}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-teal-900">Uses:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {item.uses.map((u, i) => <li key={i}>{u}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-teal-900">Specialities:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {item.specialties.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right side: Image (Right Aligned) */}
            <div className="w-full md:w-[400px] flex justify-end">
              <div className="w-[400px] h-[300px] relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
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
    </section>
  );
}