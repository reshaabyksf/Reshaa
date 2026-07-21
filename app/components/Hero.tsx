export default function Hero() {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '85vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center',
      overflow: 'hidden',
      backgroundColor: '#000000'
    }}>
      {/* Background Video Layer pointing directly to root public folder */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          zIndex: 1
        }}
      >
        <source src="/factory.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for crisp text legibility */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundColor: 'rgba(0, 0, 0, 0.55)', 
        zIndex: 2 
      }} />

      {/* Hero Content Container */}
      <div style={{ 
        position: 'relative', 
        zIndex: 3, 
        maxWidth: '900px', 
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <h1 style={{ 
          fontSize: '56px', 
          fontWeight: '800', 
          color: '#ffffff', 
          margin: 0,
          letterSpacing: '1px',
          textShadow: '0 4px 12px rgba(0,0,0,0.4)'
        }}>
          Welcome to Reshaa
        </h1>

        <p style={{ 
          fontSize: '24px', 
          fontWeight: '500', 
          color: '#f3f4f6', 
          margin: 0,
          letterSpacing: '0.5px',
          textShadow: '0 2px 8px rgba(0,0,0,0.4)'
        }}>
          Bonded for Bags – Quality Packaging Solutions
        </p>
      </div>
    </div>
  );
}