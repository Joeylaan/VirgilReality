import React from 'react';

interface ServiceItemProps {
  number: string;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ number, title, description }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      paddingTop: '24px',
      paddingBottom: '24px',
      borderTop: '1px solid #333333',
      width: '100%',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <span
        style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '14px',
          fontWeight: 700,
          color: '#FF0000',
        }}
      >
        {number}
      </span>
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '20px',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '1px',
        }}
      >
        {title}
      </span>
    </div>
    <p
      style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: '13px',
        fontWeight: 400,
        color: '#888888',
        lineHeight: 1.6,
        margin: 0,
        width: '100%',
        maxWidth: '380px',
      }}
    >
      {description}
    </p>
  </div>
);

const Services: React.FC = () => {
  const col1 = [
    {
      number: '01:',
      title: "MUZIEKVIDEO'S",
      description: "Creatieve muziekvideo's die jouw sound en artistieke visie naar een hoger niveau tillen.",
    },
    {
      number: '02:',
      title: 'AFTERMOVIES',
      description: 'Energieke aftermovies die de sfeer en hoogtepunten van jouw evenement vastleggen.',
    },
    {
      number: '03:',
      title: 'ONLINE CURSUSSEN',
      description: 'Professionele video-content voor online cursussen en educatieve platforms.',
    },
  ];

  const col2 = [
    {
      number: '04:',
      title: 'SOCIAL MEDIA VIDEO',
      description: 'Scrollstoppende video-content die engagement boost op alle socials.',
    },
    {
      number: '05:',
      title: 'ORIGINAL CONTENT',
      description: 'Unieke content-series en formats die jouw merk laten opvallen.',
    },
    {
      number: '06:',
      title: 'FULL PRODUCTION',
      description: 'Complete filmproducties van concept tot eindproduct, volledig op maat.',
    },
  ];

  return (
    <section
      id="diensten"
      style={{
        backgroundColor: '#0A0A0A',
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
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '14px',
              fontWeight: 400,
              color: '#FF0000',
            }}
          >
            02:
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
            DIENSTEN
          </span>
        </div>
        <span
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '12px',
            fontWeight: 400,
            color: '#666666',
            letterSpacing: '2px',
          }}
        >
          WHAT WE CREATE
        </span>
      </div>

      {/* Services grid — CSS-driven: column on mobile, row on desktop */}
      <div className="services-columns">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', flex: 1 }}>
          {col1.map((s) => (
            <ServiceItem key={s.number} {...s} />
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', flex: 1 }}>
          {col2.map((s) => (
            <ServiceItem key={s.number} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
