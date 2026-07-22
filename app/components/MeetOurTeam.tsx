'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function MeetOurTeam() {
  const teamMembers = [
    {
      name: "Ms. Shubhi Gupta",
      role: "FOUNDER",
      image: "/images/team-placeholder-1.jpg",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "Mr. Naman Gupta",
      role: "MANAGING DIRECTOR",
      image: "/images/team-placeholder-2.jpg",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "Mrs. Priya Arya",
      role: "EXECUTIVE DIRECTOR",
      image: "/images/team-placeholder-3.jpg",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "TEAM MEMBER 4",
      role: "DESIGNATION / TITLE",
      image: "/images/team-placeholder-4.jpg",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "TEAM MEMBER 5",
      role: "DESIGNATION / TITLE",
      image: "/images/team-placeholder-5.jpg",
      linkedin: "https://www.linkedin.com"
    }
  ];

  return (
    <section id="contact" style={{ padding: '60px 20px', backgroundColor: '#f9fafb', scrollMarginTop: '80px' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Section Header */}
        <h2 style={{ fontSize: '38px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '10px', letterSpacing: '0.5px' }}>
          MEET OUR TEAM
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '40px' }}>
          Leadership driving innovation, quality, and sustainable packaging solutions.
        </p>

        {/* Grid Container for Team Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '20px', 
          justifyContent: 'center',
          alignItems: 'stretch'
        }}>
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="team-card"
              style={{ 
                position: 'relative',
                height: '420px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
                backgroundColor: '#1f2937',
                cursor: 'pointer'
              }}
            >
              {/* Background Image with Hover Zoom Effect */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  className="team-img"
                />
              </div>

              {/* Dark Gradient Overlay for Readability */}
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                width: '100%', 
                height: '60%', 
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                zIndex: 1 
              }} />

              {/* Card Content (Name, Role & LinkedIn Icon) */}
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                width: '100%', 
                padding: '24px 20px', 
                zIndex: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                textAlign: 'left'
              }}>
                <div>
                  <h4 style={{ fontSize: '12px', fontWeight: '700', color: '#60a5fa', marginBottom: '4px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    {member.role}
                  </h4>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', margin: 0, letterSpacing: '0.3px' }}>
                    {member.name}
                  </h3>
                </div>

                {/* LinkedIn Icon Button */}
                <Link 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                    backdropFilter: 'blur(5px)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    transition: 'background-color 0.2s',
                    flexShrink: 0
                  }}
                  title="Connect on LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Internal CSS for smooth image zoom on hover */}
      <style jsx>{`
        .team-card:hover .team-img {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
}