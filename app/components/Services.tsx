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
      videoUrl: "/Videos/offset-printing.mp4",
      isVideoFile: true
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
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        
        {/* Section Header */}
        <h2 className="services-title">
          Our Core Services
        </h2>
        <p className="services-subtitle">
          Advanced industrial manufacturing and specialized finishing techniques built for superior quality and reliability. Click any service to explore details.
        </p>

        {/* Services Grid Layout */}
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              onClick={() => setSelectedService(service)}
              className="service-card"
            >
              {/* Top Accent Gradient Bar */}
              <div className="gradient-bar" />

              {/* Tag / Category Badge */}
              <span className="service-tag">
                {service.tag}
              </span>

              {/* Service Title */}
              <h3 className="card-title">
                {service.title}
              </h3>

              {/* Description */}
              <p className="card-description">
                {service.description}
              </p>

              {/* Click to open cue */}
              <span className="card-cta">
                Click to view details & video ↓
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Popup for Details & Video */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={() => setSelectedService(null)}
              className="close-btn"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Header */}
            <span className="service-tag">
              {selectedService.tag}
            </span>
            <h3 className="modal-title">
              {selectedService.title}
            </h3>

            {/* Video Container */}
            <div className="video-container">
              {selectedService.isVideoFile ? (
                <video 
                  controls 
                  autoPlay 
                  muted
                  playsInline
                  className="video-player"
                >
                  <source src={selectedService.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe 
                  src={selectedService.videoUrl} 
                  title={selectedService.title}
                  className="iframe-player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Detailed Description */}
            <h4 className="overview-heading">
              Detailed Overview
            </h4>
            <p className="overview-text">
              {selectedService.detailedDescription}
            </p>
          </div>
        </div>
      )}

      {/* Comprehensive Responsive Styles with Reduced Top Spacing */}
      <style jsx>{`
        .services-section {
          padding: 30px 20px 80px 20px; /* Reduced top padding from 80px to 30px */
          background-color: #f8fafc;
          scroll-margin-top: 80px;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .services-title {
          font-size: 38px;
          font-weight: 700;
          color: #1e3a8a;
          margin-bottom: 8px; /* Tightened gap below title */
          letter-spacing: 0.5px;
        }

        .services-subtitle {
          font-size: 16px;
          color: #64748b;
          margin-bottom: 30px; /* Reduced gap below subtitle */
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          text-align: left;
        }

        .service-card {
          background-color: #ffffff;
          border-radius: 16px;
          padding: 32px 24px;
          position: relative;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: #cbd5e1;
        }

        .gradient-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #1e3a8a 0%, #3b82f6 100%);
        }

        .service-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          color: #2563eb;
          background-color: #eff6ff;
          padding: 4px 10px;
          border-radius: 20px;
          margin-bottom: 16px;
          letter-spacing: 0.3px;
        }

        .card-title {
          font-size: 22px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .card-description {
          font-size: 15px;
          color: #475569;
          line-height: 1.6;
          margin: 0 0 16px 0;
        }

        .card-cta {
          font-size: 14px;
          font-weight: 600;
          color: #1e3a8a;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          box-sizing: border-box;
        }

        .modal-content {
          background-color: #ffffff;
          border-radius: 20px;
          max-width: 750px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 32px;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          text-align: left;
          box-sizing: border-box;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #f1f5f9;
          border: none;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          color: #334155;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-title {
          font-size: 28px;
          font-weight: 700;
          color: #1e3a8a;
          margin-bottom: 16px;
          padding-right: 40px;
        }

        .video-container {
          width: 100%;
          background-color: #090d16;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.4);
        }

        .video-player {
          width: 100%;
          max-height: 480px;
          object-fit: contain;
          display: block;
          margin: 0 auto;
        }

        .iframe-player {
          width: 100%;
          height: 380px;
          border: none;
        }

        .overview-heading {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .overview-text {
          font-size: 16px;
          color: #475569;
          line-height: 1.7;
          margin: 0;
        }

        /* --- Mobile Responsiveness Breakpoints --- */
        @media (max-width: 640px) {
          .services-section {
            padding: 24px 16px 48px 16px;
          }

          .services-title {
            font-size: 28px;
          }

          .services-subtitle {
            font-size: 14px;
            margin-bottom: 24px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .service-card {
            padding: 24px 18px;
          }

          .card-title {
            font-size: 20px;
          }

          .modal-overlay {
            padding: 12px;
          }

          .modal-content {
            padding: 20px 16px;
            border-radius: 16px;
            max-height: 94vh;
          }

          .close-btn {
            top: 14px;
            right: 14px;
            width: 34px;
            height: 34px;
            font-size: 16px;
          }

          .modal-title {
            font-size: 22px;
            margin-bottom: 12px;
          }

          .video-player {
            max-height: 320px;
          }

          .iframe-player {
            height: 220px;
          }

          .overview-heading {
            font-size: 16px;
          }

          .overview-text {
            font-size: 14px;
            line-height: 1.6;
          }
        }
      `}</style>
    </section>
  );
}