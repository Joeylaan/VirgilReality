import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      style={{
        backgroundColor: '#000000',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '60px',
        paddingRight: '60px',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
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

      {/* Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
        {['WERK', 'DIENSTEN', 'OVER ONS'].map((item) => (
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

        {/* CTA Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 24px',
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
    </header>
  );
};

export default Header;
