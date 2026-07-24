'use client';
import { useState } from 'react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const servicesList = [
    {
      title: "Offset Printing",
      tag: "High-Volume Precision",
      description: "Delivering razor-sharp text and rich, high-definition color fidelity tailored for premium brand presentations.",
      detailedDescription: "Offset printing is a widely used mass-production printing technique where the inked image is transferred (or 'offset') from a plate to a rubber blanket, then to the printing surface. It is the premier choice for high-volume runs, offering unmatched color consistency, crisp typography, and extraordinary detail reproduction for corporate catalogues, packaging boxes, and promotional materials.",
      videoUrl: "/videos/offset.mp4", // <-- Your added offset video path inside public/videos/
      isVideoFile: true // Flag to use HTML5 video player instead of iframe
    },
    {
      title: "Screen Printing",
      tag: "Custom Fabric Branding",
      description: "Versatile and long-lasting print applications designed for vibrant, durable logos directly onto textile surfaces.",
      detailedDescription: "Screen printing involves pushing ink through a mesh stencil onto the fabric substrate. This method ensures heavy ink deposition, vibrant color payoff, and exceptional durability, making it ideal for customized branding, reusable non-woven bags, and apparel items.",
      videoUrl: "https://www.youtube.com/embed/placeholder",
      isVideoFile: false
    },
    {
      title: "Flexo Printing",
      tag: "High-Speed Efficiency",
      description: "Adaptable, high-speed printing solutions optimized for continuous rolls and mass-volume non-woven bag production.",
      detailedDescription: "Flexographic printing uses flexible relief plates mounted on rotary cylinders to print at high speeds across diverse packaging materials, including continuous non-woven fabric rolls and plastic films, ensuring high efficiency and cost-effectiveness.",
      videoUrl: "https://www.youtube.com/embed/placeholder",
      isVideoFile: false
    },
    {
      title: "Stitching",
      tag: "Structural Integrity",
      description: "Advanced automated and manual stitching configurations ensuring exceptional load capacity and heavy-duty durability.",
      detailedDescription: "Precision stitching forms the backbone of durable carrying solutions. Using advanced automated sewing machinery alongside skilled manual tailoring, we reinforce handles, gussets, and side seams to ensure superior weight capacity and long-term bag resilience.",
      videoUrl: "https://www.youtube.com/embed/placeholder",
      isVideoFile: false
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
          Advanced industrial manufacturing and specialized finishing techniques built for superior quality and reliability. Click any service to explore details.
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
              onClick={() => setSelectedService(service)}
              className="service-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '32px 24px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                cursor: 'pointer',
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
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: '0 0 16px 0' }}>
                {service.description}
              </p>

              {/* Click to open cue */}
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e3a8a' }}>
                Click to view details & video ↓
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Popup for Details & Video */}
      {selectedService && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '32px',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            textAlign: 'left'
          }}>
            {/* Close Button */}
            <button 
              onClick={() => setSelectedService(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                color: '#334155'
              }}
            >
              ✕
            </button>

            {/* Modal Header */}
            <span style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: '600',
              color: '#2563eb',
              backgroundColor: '#eff6ff',
              padding: '4px 10px',
              borderRadius: '20px',
              marginBottom: '10px'
            }}>
              {selectedService.tag}
            </span>
            <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px' }}>
              {selectedService.title}
            </h3>

            {/* Video Container */}
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              backgroundColor: '#0f172a',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {selectedService.isVideoFile ? (
                <video 
                  src={selectedService.videoUrl} 
                  controls 
                  autoPlay 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <iframe 
                  src={selectedService.videoUrl} 
                  title={selectedService.title}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Detailed Description */}
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>
              Detailed Overview
            </h4>
            <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', margin: 0 }}>
              {selectedService.detailedDescription}
            </p>
          </div>
        </div>
      )}

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