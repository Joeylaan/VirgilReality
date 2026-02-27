import React, { useState, useEffect } from 'react';

const NAV_ITEMS = ['WERK', 'DIENSTEN', 'OVER ONS'] as const;

const HamburgerIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="5" width="20" height="2" fill="#FFFFFF" />
    <rect x="2" y="11" width="20" height="2" fill="#FFFFFF" />
    <rect x="2" y="17" width="20" height="2" fill="#FFFFFF" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <line x1="4" y1="4" x2="20" y2="20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="4" x2="4" y2="20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          backgroundColor: '#000000',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 'clamp(16px, 4vw, 60px)',
          paddingRight: 'clamp(16px, 4vw, 60px)',
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '24px',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '4px',
            }}
          >
            VIRGIL
          </span>
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '16px',
              fontWeight: 400,
              color: '#666666',
              letterSpacing: '2px',
            }}
          >
            REALITY
          </span>
        </div>

        {/* Desktop Navigation — hidden below 1024px */}
        <div className="header-desktop-nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '12px',
                fontWeight: 500,
                color: '#FFFFFF',
                letterSpacing: '2px',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              {item}
            </a>
          ))}

          {/* Desktop CTA Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px clamp(12px, 1.5vw, 24px)',
              cursor: 'pointer',
            }}
          >
            <div
              className="animate-rec"
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#FF0000',
              }}
            />
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '12px',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '1px',
              }}
            >
              GET IN TOUCH
            </span>
          </div>
        </div>

        {/* Hamburger Button — hidden above 1024px */}
        <button
          className="header-hamburger-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Sluit menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          style={{
            background: 'none',
            border: 'none',
            padding: '8px',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </header>

      {/* Mobile overlay — hidden on desktop via .mobile-nav-overlay CSS class */}
      <div
        id="mobile-nav"
        className="mobile-nav-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Navigatiemenu"
        style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#000000',
          zIndex: 49,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: menuOpen ? 1 : 0,
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '20px',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '3px',
              textDecoration: 'none',
            }}
          >
            {item}
          </a>
        ))}

        {/* Divider */}
        <div style={{ width: '40px', height: '1px', backgroundColor: '#333333' }} />

        {/* Mobile CTA */}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 32px',
            backgroundColor: '#FF0000',
            textDecoration: 'none',
          }}
        >
          <div
            className="animate-rec"
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
            }}
          />
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '14px',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '2px',
            }}
          >
            GET IN TOUCH
          </span>
        </a>
      </div>
    </>
  );
};

export default Header;
