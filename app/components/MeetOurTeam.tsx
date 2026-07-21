import Image from 'next/image';

export default function MeetOurTeam() {
  const teamMembers = [
    {
      name: "TEAM MEMBER 1",
      role: "DESIGNATION / TITLE",
      description: "Brief professional summary or description highlighting core responsibilities and strategic focus.",
      image: "/images/team-placeholder-1.jpg"
    },
    {
      name: "TEAM MEMBER 2",
      role: "DESIGNATION / TITLE",
      description: "Brief professional summary or description highlighting core responsibilities and strategic focus.",
      image: "/images/team-placeholder-2.jpg"
    },
    {
      name: "TEAM MEMBER 3",
      role: "DESIGNATION / TITLE",
      description: "Brief professional summary or description highlighting core responsibilities and strategic focus.",
      image: "/images/team-placeholder-3.jpg"
    },
    {
      name: "TEAM MEMBER 4",
      role: "DESIGNATION / TITLE",
      description: "Brief professional summary or description highlighting core responsibilities and strategic focus.",
      image: "/images/team-placeholder-4.jpg"
    },
    {
      name: "TEAM MEMBER 5",
      role: "DESIGNATION / TITLE",
      description: "Brief professional summary or description highlighting core responsibilities and strategic focus.",
      image: "/images/team-placeholder-5.jpg"
    }
  ];

  return (
    <section id="contact" style={{ padding: '30px 20px 80px 20px', backgroundColor: '#f9fafb', scrollMarginTop: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Section Header */}
        <h2 style={{ fontSize: '38px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '40px', letterSpacing: '0.5px' }}>
          MEET OUR TEAM
        </h2>

        {/* Grid Container for 5 Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px', 
          justifyContent: 'center',
          alignItems: 'stretch'
        }}>
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '20px', 
                padding: '40px 30px', 
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', 
                border: '1px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              {/* Circular Image Container */}
              <div style={{ 
                position: 'relative', 
                width: '130px', 
                height: '130px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                marginBottom: '24px',
                border: '3px solid #f3f4f6',
                boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
              }}>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>

              {/* Name */}
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', letterSpacing: '0.5px' }}>
                {member.name}
              </h3>

              {/* Role / Designation */}
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#2563eb', marginBottom: '16px', letterSpacing: '1px' }}>
                {member.role}
              </h4>

              {/* Description */}
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                {member.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}