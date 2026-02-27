import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="over-ons"
      style={{
        backgroundColor: '#000000',
        paddingTop: 'clamp(60px, 8vw, 100px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
        paddingLeft: 'clamp(24px, 4vw, 60px)',
        paddingRight: 'clamp(24px, 4vw, 60px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(40px, 6vw, 64px)',
        width: '100%',
      }}
    >
      {/* Two-column layout — CSS-driven: column on mobile, row on desktop */}
      <div className="section-about-columns">
        {/* Left column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            width: '100%',
            maxWidth: '600px',
          }}
        >
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '14px',
                fontWeight: 400,
                color: '#FF0000',
              }}
            >
              03:
            </span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '3px',
              }}
            >
              OVER ONS
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.5px',
              lineHeight: 1.3,
              margin: 0,
              width: '100%',
            }}
          >
            Wij zijn VirgilReality — een video productie studio waar jouw visie werkelijkheid wordt.
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '14px',
              fontWeight: 400,
              color: '#888888',
              lineHeight: 1.7,
              margin: 0,
              width: '100%',
            }}
          >
            Van concept tot eindproduct, wij verzorgen complete filmproducties die jouw verhaal op de krachtigste manier vertellen. Geen templates, geen standaard oplossingen — alleen maatwerk dat past bij jouw unieke visie.
          </p>
        </div>

        {/* Right: Stats — CSS-driven: row/wrap on mobile, column on desktop */}
        <div className="about-stats">
          {/* Stat 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '80px' }}>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-2px',
              }}
            >
              50+
            </span>
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '12px',
                fontWeight: 400,
                color: '#666666',
                letterSpacing: '2px',
              }}
            >
              PROJECTEN
            </span>
          </div>

          {/* Stat 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '80px' }}>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-2px',
              }}
            >
              5+
            </span>
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '12px',
                fontWeight: 400,
                color: '#666666',
                letterSpacing: '2px',
              }}
            >
              JAAR ERVARING
            </span>
          </div>

          {/* Stat 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '80px' }}>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: 800,
                color: '#FF0000',
                letterSpacing: '-2px',
              }}
            >
              100%
            </span>
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '12px',
                fontWeight: 400,
                color: '#666666',
                letterSpacing: '2px',
              }}
            >
              TEVREDEN KLANTEN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
