import React from 'react';

const CtaCorner: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br' }> = ({ position }) => {
  const s: React.CSSProperties = {
    position: 'absolute',
    width: '40px',
    height: '40px',
    pointerEvents: 'none',
  };
  if (position === 'tl') { s.top = 0; s.left = 0; s.borderTop = '2px solid #FF0000'; s.borderLeft = '2px solid #FF0000'; }
  if (position === 'tr') { s.top = 0; s.right = 0; s.borderTop = '2px solid #FF0000'; s.borderRight = '2px solid #FF0000'; }
  if (position === 'bl') { s.bottom = 0; s.left = 0; s.borderBottom = '2px solid #FF0000'; s.borderLeft = '2px solid #FF0000'; }
  if (position === 'br') { s.bottom = 0; s.right = 0; s.borderBottom = '2px solid #FF0000'; s.borderRight = '2px solid #FF0000'; }
  return <div style={s} />;
};

const CTA: React.FC = () => {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#000000',
        height: '500px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* CTA Viewfinder: 1320x340 at x:60, y:80 */}
      <div
        style={{
          position: 'absolute',
          left: '60px',
          top: '80px',
          width: 'calc(100% - 120px)',
          height: '340px',
        }}
      >
        {/* Corner brackets — red, 40px */}
        <CtaCorner position="tl" />
        <CtaCorner position="tr" />
        <CtaCorner position="bl" />
        <CtaCorner position="br" />

        {/* CTA Content — 800px wide, x:260, y:80 */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {/* READY TO RECORD indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FF0000',
                animation: 'recBlink 1s infinite',
              }}
            />
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '12px',
                fontWeight: 500,
                color: '#FF0000',
                letterSpacing: '2px',
              }}
            >
              READY TO RECORD
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '56px',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-1px',
              textAlign: 'center',
              margin: 0,
            }}
          >
            START JOUW PROJECT
          </h2>

          {/* Subline */}
          <p
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '16px',
              fontWeight: 400,
              color: '#888888',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Neem contact op voor een vrijblijvend gesprek
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {/* Email button — red fill */}
            <a
              href="mailto:info@virgilreality.nl"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 32px',
                backgroundColor: '#FF0000',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                }}
              >
                info@virgilreality.nl
              </span>
            </a>

            {/* WhatsApp — white border */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 32px',
                border: '1px solid #FFFFFF',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FFFFFF',
                }}
              >
                WhatsApp
              </span>
            </div>
          </div>
        </div>

        {/* Timecode bottom left */}
        <span
          style={{
            position: 'absolute',
            left: '40px',
            bottom: '0px',
            fontFamily: 'Space Mono, monospace',
            fontSize: '14px',
            fontWeight: 400,
            color: '#FF0000',
          }}
        >
          REC 00:00:00:00
        </span>
      </div>

      <style>{`
        @keyframes recBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default CTA;
