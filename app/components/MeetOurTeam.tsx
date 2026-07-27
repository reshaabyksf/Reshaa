'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MeetOurTeam() {
  const [activeTab, setActiveTab] = useState<'leadership' | 'operations'>('leadership');

  const leadershipTeam = [
    {
      name: "Mr. Rajendra Kumar Gupta",
      role: "Managing Director & Founder",
      bio: "Visionary leader with decades of expertise in industrial manufacturing, strategic growth, and non-woven enterprise expansion.",
      image: "/images/team-placeholder-1.jpeg",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "Mrs. Pushpa Gupta",
      role: "Director",
      bio: "Pioneering guiding force overseeing quality standardization, corporate governance, and sustainable business development.",
      image: "/images/team-placeholder-2.jpeg",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "Mrs. Priya Arya",
      role: "Executive Director",
      bio: "Driving organizational efficiency, cross-functional coordination, and high-performance execution across enterprise divisions.",
      image: "/images/team-placeholder-3.jpeg",
      linkedin: "https://www.linkedin.com/in/priya-gupta-39b77122a"
    },
    {
      name: "Mr. Shubham Gupta",
      role: "Business Manager & Operations Head",
      bio: "Managing digital branding, automated production workflows, supply chain logistics, and scale expansion.",
      image: "/images/team-placeholder-4.jpeg",
      linkedin: "https://www.linkedin.com"
    }
  ];

  const operationsTeam = [
    {
      name: "Plant & Production Unit",
      role: "Industrial Engineering",
      bio: "Our specialized floor technicians, machine operators, and quality controllers dedicated to precision roll and bag manufacturing.",
      image: "/images/team-placeholder-1.jpeg",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "Logistics & Supply Chain",
      role: "Fulfillment & Dispatch",
      bio: "Ensuring timely, safe, and secure delivery of bulk non-woven rolls and finished goods pan-India and globally.",
      image: "/images/team-placeholder-2.jpeg",
      linkedin: "https://www.linkedin.com"
    }
  ];

  const currentTeam = activeTab === 'leadership' ? leadershipTeam : operationsTeam;

  return (
    <section id="team" style={{ padding: '40px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#1e3a8a', marginBottom: '10px' }}>
          Meet Our Team
        </h2>
        <p style={{ fontSize: '16px', color: '#475569', marginBottom: '30px', maxWidth: '600px', marginInline: 'auto' }}>
          The dedicated leaders and professionals driving innovation, quality, and reliability at Reshaa.
        </p>

        {/* Toggle Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
          <button
            onClick={() => setActiveTab('leadership')}
            style={{
              padding: '10px 24px',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '15px',
              cursor: 'pointer',
              border: 'none',
              backgroundColor: activeTab === 'leadership' ? '#1e3a8a' : '#e2e8f0',
              color: activeTab === 'leadership' ? '#ffffff' : '#334155',
              transition: 'all 0.3s ease'
            }}
          >
            Leadership
          </button>
          <button
            onClick={() => setActiveTab('operations')}
            style={{
              padding: '10px 24px',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '15px',
              cursor: 'pointer',
              border: 'none',
              backgroundColor: activeTab === 'operations' ? '#1e3a8a' : '#e2e8f0',
              color: activeTab === 'operations' ? '#ffffff' : '#334155',
              transition: 'all 0.3s ease'
            }}
          >
            Operations & Plant
          </button>
        </div>

        {/* Team Grid */}
        <div className="team-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', textAlign: 'left' }}>
          {currentTeam.map((member, index) => (
            <div 
              key={index} 
              className="team-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '240px', backgroundColor: '#f1f5f9' }}>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>
                  {member.name}
                </h3>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#2563eb', marginBottom: '12px' }}>
                  {member.role}
                </span>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>
                  {member.bio}
                </p>

                <Link 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1e3a8a',
                    textDecoration: 'none',
                    marginTop: 'auto'
                  }}
                >
                  <span>LinkedIn Profile</span> ➔
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}