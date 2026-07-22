'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function MeetOurTeam() {
  const teamMembers = [
    {
      name: "Ms. Shubhi Gupta",
      role: "Founder",
      image: "/images/team-placeholder-1.jpg",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "Mr. Naman Gupta",
      role: "Managing Director",
      image: "/images/team-placeholder-2.jpg",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "Mrs. Priya Arya",
      role: "Executive Director",
      image: "/images/team-placeholder-3.jpg",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "Team Member 4",
      role: "Designation",
      image: "/images/team-placeholder-4.jpg",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "Team Member 5",
      role: "Designation",
      image: "/images/team-placeholder-5.jpg",
      linkedin: "https://www.linkedin.com"
    }
  ];

  return (
    <section id="team" style={{ padding: '60px 20px', backgroundColor: '#f9fafb', scrollMarginTop: '80px' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Section Header */}
        <h2 style={{ fontSize: '38px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '10px', letterSpacing: '0.5px' }}>
          MEET OUR TEAM
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '40px' }}>
          Leadership driving innovation, quality, and sustainable packaging solutions.
        </p>

        {/* Outer Wrapper to Prevent Layout Shift Clipping on Hover */}
        <div className="team-row-container" style={{ padding: '10px 0', width: '100%' }}>
          
          {/* Expandable Flex Row Container */}
          <div className="team-row" style={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center',
            alignItems: 'stretch',
            height: '460px',
            width: '100%'
          }}>
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="team-card"
                style={{ 
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: '#1f2937',
                  cursor: 'pointer',
                  flex: '1',
                  transition: 'flex 0.5s cubic-bezier(0.25, 1, 0.5, 1), transform 0.5s ease, box-shadow 0.5s ease',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)'
                }}
              >
                {/* Background Image with Scale Zoom */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} 
                    className="team-img"
                  />
                </div>

                {/* Dark Bottom Gradient Overlay */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '70%', 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)',
                  zIndex: 1 
                }} />

                {/* Card Content (Vertical Stack so nothing gets clipped) */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  width: '100%', 
                  padding: '24px 20px', 
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '12px',
                  textAlign: 'left'
                }}>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 4px 0', lineHeight: '1.2' }}>
                      {member.name}
                    </h3>
                    <p style={{ fontSize: '14px', fontWeight: '500', color: '#d1d5db', margin: 0 }}>
                      {member.role}
                    </p>
                  </div>

                  {/* Fully Visible LinkedIn Icon Button */}
                  <Link 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      width: '38px', 
                      height: '38px', 
                      borderRadius: '50%', 
                      backgroundColor: '#ffffff', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      transition: 'transform 0.2s ease, background-color 0.2s',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                    }}
                    title="Connect on LinkedIn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0f172a">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Hover expansion & zoom styling */}
      <style jsx>{`
        .team-row:hover .team-card {
          flex: 0.7;
        }
        .team-row .team-card:hover {
          flex: 2.8;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transform: translateY(-8px);
          z-index: 10;
        }
        .team-card:hover .team-img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}