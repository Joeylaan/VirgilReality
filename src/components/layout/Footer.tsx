import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="footer-wrapper"
      style={{
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        width: '100%',
      }}
    >
      {/* Top row */}
      <div
        className="footer-top-row"
        style={{
          display: 'flex',
          width: '100%',
        }}
      >
        {/* Brand column — 300px */}
        <div
          className="footer-brand"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '3px',
              }}
            >
              VIRGIL
            </span>
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '14px',
                fontWeight: 400,
                color: '#666666',
                letterSpacing: '1px',
              }}
            >
              REALITY
            </span>
          </div>

          {/* Tagline */}
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '12px',
              fontWeight: 400,
              color: '#666666',
            }}
          >
            Where your vision becomes reality
          </span>
        </div>

        {/* Links columns */}
        <div className="footer-links" style={{ display: 'flex' }}>
          {/* Navigation column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '10px',
                fontWeight: 600,
                color: '#666666',
                letterSpacing: '2px',
              }}
            >
              NAVIGATIE
            </span>
            {['Werk', 'Diensten', 'Over Ons'].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '10px',
                fontWeight: 600,
                color: '#666666',
                letterSpacing: '2px',
              }}
            >
              CONTACT
            </span>
            {['info@virgilreality.nl', 'WhatsApp', 'Instagram'].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div
        className="footer-bottom-row"
        style={{
          display: 'flex',
          paddingTop: '24px',
          borderTop: '1px solid #333333',
          width: '100%',
        }}
      >
        <span
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '11px',
            fontWeight: 400,
            color: '#666666',
          }}
        >
          © 2024 VirgilReality. All rights reserved.
        </span>
        <a 
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '11px',
            fontWeight: 400,
            color: '#666666',
          }}
          href="https://laanify.com">Gemaakt door Laanify</a>
        <span
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '11px',
            fontWeight: 400,
            color: '#666666',
          }}
        >
          END OF REEL // 00:00:00:00
        </span>
      </div>
    </footer>
  );
};

export default Footer;
