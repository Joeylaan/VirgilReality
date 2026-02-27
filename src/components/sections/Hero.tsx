import React, { useState, useEffect } from 'react';
import heroVideo from '../../assets/videos/virgil-video-transcode.mp4';

// Corner bracket component matching the design's viewfinder corners
const CornerBracket: React.FC<{
  position: 'tl' | 'tr' | 'bl' | 'br';
  size: number;
  color: string;
  thickness: number;
}> = ({ position, size, color, thickness }) => {
  const style: React.CSSProperties = {
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    pointerEvents: 'none',
  };

  if (position === 'tl') {
    style.top = 0;
    style.left = 0;
    style.borderTop = `${thickness}px solid ${color}`;
    style.borderLeft = `${thickness}px solid ${color}`;
  } else if (position === 'tr') {
    style.top = 0;
    style.right = 0;
    style.borderTop = `${thickness}px solid ${color}`;
    style.borderRight = `${thickness}px solid ${color}`;
  } else if (position === 'bl') {
    style.bottom = 0;
    style.left = 0;
    style.borderBottom = `${thickness}px solid ${color}`;
    style.borderLeft = `${thickness}px solid ${color}`;
  } else if (position === 'br') {
    style.bottom = 0;
    style.right = 0;
    style.borderBottom = `${thickness}px solid ${color}`;
    style.borderRight = `${thickness}px solid ${color}`;
  }

  return <div style={style} />;
};

const Hero: React.FC = () => {
  const [timecode, setTimecode] = useState('00:00:45:00');

  useEffect(() => {
    let frames = 0;
    let seconds = 45;
    let minutes = 0;
    let hours = 0;

    const interval = setInterval(() => {
      frames++;
      if (frames >= 60) {
        frames = 0;
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
            minutes = 0;
            hours++;
          }
        }
      }
      const h = String(hours).padStart(2, '0');
      const m = String(minutes).padStart(2, '0');
      const s = String(seconds).padStart(2, '0');
      const f = String(frames).padStart(2, '0');
      setTimecode(`${h}:${m}:${s}:${f}`);
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        backgroundColor: '#000000',
        height: 'clamp(550px, 70vh, 820px)',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '80px',
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          zIndex: 1,
        }}
      />

      {/* Viewfinder Frame */}
      <div
        style={{
          position: 'absolute',
          left: 'clamp(16px, 4vw, 60px)',
          top: 'clamp(40px, 5vh, 80px)',
          width: 'calc(100% - clamp(32px, 8vw, 120px))',
          height: 'calc(100% - clamp(60px, 10vh, 160px))',
          zIndex: 2,
        }}
      >
        {/* Corner Brackets */}
        <CornerBracket position="tl" size={50} color="#FFFFFF" thickness={2} />
        <CornerBracket position="tr" size={50} color="#FFFFFF" thickness={2} />
        <CornerBracket position="bl" size={50} color="#FFFFFF" thickness={2} />
        <CornerBracket position="br" size={50} color="#FFFFFF" thickness={2} />

        {/* REC Indicator — top-left */}
        <div
          style={{
            position: 'absolute',
            left: 'clamp(16px, 3vw, 40px)',
            top: 'clamp(16px, 3vh, 40px)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: 'clamp(12px, 1.2vw, 16px)',
              height: 'clamp(12px, 1.2vw, 16px)',
              borderRadius: '50%',
              backgroundColor: '#FF0000',
              animation: 'recBlink 1s infinite',
            }}
          />
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              fontWeight: 700,
              color: '#FF0000',
              letterSpacing: '2px',
            }}
          >
            REC
          </span>
        </div>

        {/* Battery HUD — top-right corner */}
        <div
          style={{
            position: 'absolute',
            right: 'clamp(16px, 3vw, 40px)',
            top: 'clamp(16px, 3vh, 40px)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {/* Battery Icon */}
          <div
            style={{
              width: '28px',
              height: '14px',
              border: '1px solid #FFFFFF',
              borderRadius: '2px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
            }}
          >
            <div
              style={{
                width: '20px',
                height: '8px',
                backgroundColor: '#FFFFFF',
              }}
            />
          </div>
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 'clamp(11px, 1.2vw, 14px)',
              fontWeight: 400,
              color: '#FFFFFF',
            }}
          >
            120m
          </span>
        </div>

        {/* Hero Content — centered */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: 'clamp(80px, 12vh, 130px)',
            width: 'min(900px, 85%)',
            maxWidth: 'calc(100% - 32px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(16px, 3vw, 32px)',
            boxSizing: 'border-box',
          }}
        >
          <h1
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(26px, 6vw, 72px)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: 'clamp(-1px, -0.15vw, -2px)',
              textAlign: 'center',
              margin: 0,
              lineHeight: 1.1,
              width: '100%',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            WHERE YOUR VISION
            <br />
            BECOMES REALITY
          </h1>

          <p
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 'clamp(12px, 1.5vw, 16px)',
              fontWeight: 400,
              color: '#888888',
              textAlign: 'center',
              lineHeight: 1.6,
              width: '100%',
              maxWidth: '600px',
              margin: 0,
              paddingLeft: '8px',
              paddingRight: '8px',
              boxSizing: 'border-box',
            }}
          >
            Complete filmproducties van A tot Z, volledig op maat gemaakt voor jouw visie.
          </p>

          {/* CTA Buttons — CSS-driven layout: column on mobile, row on desktop */}
          <div className="hero-cta-buttons">
            {/* Primary: border white */}
            <div
              className="hero-cta-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: 'clamp(12px, 1.5vh, 16px) clamp(16px, 2.5vw, 32px)',
                border: '1px solid #FFFFFF',
                cursor: 'pointer',
                boxSizing: 'border-box',
                maxWidth: '100%',
              }}
            >
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: 'clamp(11px, 1.2vw, 14px)',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap',
                }}
              >
                &#9654; BEKIJK ONS WERK
              </span>
            </div>

            {/* Secondary: transparent */}
            <div
              className="hero-cta-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: 'clamp(12px, 1.5vh, 16px) clamp(16px, 2.5vw, 32px)',
                cursor: 'pointer',
                boxSizing: 'border-box',
                maxWidth: '100%',
              }}
            >
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: 'clamp(11px, 1.2vw, 14px)',
                  fontWeight: 500,
                  color: '#666666',
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap',
                }}
              >
                START JOUW PROJECT
              </span>
            </div>
          </div>
        </div>

        {/* Timecode HUD — bottom-left */}
        <div
          style={{
            position: 'absolute',
            left: 'clamp(16px, 3vw, 40px)',
            bottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 'clamp(12px, 1.5vw, 18px)',
              fontWeight: 400,
              color: '#FFFFFF',
              letterSpacing: '2px',
            }}
          >
            {timecode}
          </span>
        </div>

        {/* Resolution HUD — bottom-right */}
        <div
          style={{
            position: 'absolute',
            right: 'clamp(16px, 3vw, 40px)',
            bottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 'clamp(10px, 1.2vw, 14px)',
              fontWeight: 400,
              color: '#888888',
              letterSpacing: '1px',
            }}
          >
            HQ 4K / 60p
          </span>
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 'clamp(10px, 1.2vw, 14px)',
              fontWeight: 400,
              color: '#888888',
              letterSpacing: '1px',
            }}
          >
            0 dB
          </span>
        </div>
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

export default Hero;
