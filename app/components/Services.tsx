'use client';

export default function Services() {
  const servicesList = [
    {
      title: "Offset Printing",
      tag: "High-Volume Precision",
      description: "Delivering razor-sharp text and rich, high-definition color fidelity tailored for premium brand presentations."
    },
    {
      title: "Screen Printing",
      tag: "Custom Fabric Branding",
      description: "Versatile and long-lasting print applications designed for vibrant, durable logos directly onto textile surfaces."
    },
    {
      title: "Flexo Printing",
      tag: "High-Speed Efficiency",
      description: "Adaptable, high-speed printing solutions optimized for continuous rolls and mass-volume non-woven bag production."
    },
    {
      title: "Stitching",
      tag: "Structural Integrity",
      description: "Advanced automated and manual stitching configurations ensuring exceptional load capacity and heavy-duty durability."
    }
  ];

  return (
    <section id="services" style={{ padding: '80px 20px', backgroundColor: '#f8fafc', scrollMarginTop: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Section Header */}
        <h2 style={{ fontSize: '38px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '12px', letterSpacing: '0.5px' }}>
          Our Core Services
        </h2>
        <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '50px', maxWidth: '600px', marginInline: 'auto' }}>
          Advanced industrial manufacturing and specialized finishing techniques built for superior quality and reliability.
        </p>

        {/* Services Grid Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '24px',
          textAlign: 'left'
        }}>
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="service-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '32px 24px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease'
              }}
            >
              {/* Top Accent Gradient Bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 100%)'
              }} />

              {/* Tag / Category Badge */}
              <span style={{
                display: 'inline-block',
                fontSize: '12px',
                fontWeight: '600',
                color: '#2563eb',
                backgroundColor: '#eff6ff',
                padding: '4px 10px',
                borderRadius: '20px',
                marginBottom: '16px',
                letterSpacing: '0.3px'
              }}>
                {service.tag}
              </span>

              {/* Service Title */}
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px' }}>
                {service.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Hover Effects Styling */}
      <style jsx>{`
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: #cbd5e1;
        }
      `}</style>
    </section>
  );
}