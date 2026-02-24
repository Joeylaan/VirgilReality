import React from 'react';

// Corner bracket for project cards
const CardCorner: React.FC<{
  position: 'tl' | 'tr' | 'bl' | 'br';
  size: number;
}> = ({ position, size }) => {
  const s: React.CSSProperties = {
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    pointerEvents: 'none',
  };
  if (position === 'tl') { s.top = 0; s.left = 0; s.borderTop = '1px solid #FFFFFF'; s.borderLeft = '1px solid #FFFFFF'; }
  if (position === 'tr') { s.top = 0; s.right = 0; s.borderTop = '1px solid #FFFFFF'; s.borderRight = '1px solid #FFFFFF'; }
  if (position === 'bl') { s.bottom = 0; s.left = 0; s.borderBottom = '1px solid #FFFFFF'; s.borderLeft = '1px solid #FFFFFF'; }
  if (position === 'br') { s.bottom = 0; s.right = 0; s.borderBottom = '1px solid #FFFFFF'; s.borderRight = '1px solid #FFFFFF'; }
  return <div style={s} />;
};

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  width: number;
  height: number;
  dotSize: number;
  cornerSize: number;
  labelFontSize: number;
  titleFontSize: number;
  labelOffset: number;
  titleOffset: number;
  labelGap: number;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title, category, imageUrl, width, height,
  dotSize, cornerSize, labelFontSize, titleFontSize,
  labelOffset, titleOffset, labelGap, className,
}) => (
  <div
    className={className}
    style={{
      position: 'relative',
      width: `${width}px`,
      height: `${height}px`,
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flexShrink: 0,
      overflow: 'hidden',
    }}
  >
    {/* Gradient overlay */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7) 100%)',
      }}
    />

    {/* Corner brackets */}
    <CardCorner position="tl" size={cornerSize} />
    <CardCorner position="tr" size={cornerSize} />
    <CardCorner position="bl" size={cornerSize} />
    <CardCorner position="br" size={cornerSize} />

    {/* Category label */}
    <div
      style={{
        position: 'absolute',
        left: `${labelOffset}px`,
        top: `${labelOffset}px`,
        display: 'flex',
        alignItems: 'center',
        gap: `${labelGap}px`,
        zIndex: 1,
      }}
    >
      <div
        style={{
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          borderRadius: '50%',
          backgroundColor: '#FF0000',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: `${labelFontSize}px`,
          fontWeight: 400,
          color: '#FFFFFF',
          letterSpacing: '1px',
        }}
      >
        {category}
      </span>
    </div>

    {/* Title */}
    <span
      style={{
        position: 'absolute',
        left: `${labelOffset}px`,
        bottom: `${titleOffset}px`,
        fontFamily: 'Inter, sans-serif',
        fontSize: `${titleFontSize}px`,
        fontWeight: 600,
        color: '#FFFFFF',
        zIndex: 1,
      }}
    >
      {title}
    </span>
  </div>
);

const Projects: React.FC = () => {
  const row1 = [
    { title: 'Kunstbende Aftermovie', category: 'HQ 4K', imageUrl: 'https://images.unsplash.com/photo-1760539619581-ee7bc9bf810e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5NDI1ODJ8&ixlib=rb-4.1.0&q=80&w=1080' },
    { title: 'Laup Music Collab', category: 'MUSIC VIDEO', imageUrl: 'https://images.unsplash.com/photo-1637840104422-1a66a2953660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5NDI1ODJ8&ixlib=rb-4.1.0&q=80&w=1080' },
    { title: 'Brand Commercial V3', category: 'COMMERCIAL', imageUrl: 'https://images.unsplash.com/photo-1694811476784-643691a7925e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5NDI1ODN8&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  const row2 = [
    { title: 'Online Course Content', category: 'COURSE', imageUrl: 'https://images.unsplash.com/photo-1672194243504-6ec07f599b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5NDI2MDF8&ixlib=rb-4.1.0&q=80&w=1080' },
    { title: 'Social Media Campaign', category: 'SOCIAL', imageUrl: 'https://images.unsplash.com/photo-1758522488804-268ef5d2d6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5NDI2MDF8&ixlib=rb-4.1.0&q=80&w=1080' },
    { title: 'Original Content Series', category: 'ORIGINAL', imageUrl: 'https://images.unsplash.com/photo-1632670467450-bc8f70fe5ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5NDI2MTZ8&ixlib=rb-4.1.0&q=80&w=1080' },
    { title: 'Full Production Reel', category: 'FULL PROD', imageUrl: 'https://images.unsplash.com/photo-1556299695-c17a3ebf6fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5NDI2MTd8&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  return (
    <section
      id="werk"
      style={{
        backgroundColor: '#000000',
        paddingTop: '100px',
        paddingBottom: '100px',
        paddingLeft: '60px',
        paddingRight: '60px',
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
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
            01:
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
            FEATURED WORK
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
          7 PROJECTS
        </span>
      </div>

      {/* Row 1: 3 large cards, 420x280 */}
      <div className="projects-row">
        {row1.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            category={p.category}
            imageUrl={p.imageUrl}
            width={420}
            height={280}
            dotSize={8}
            cornerSize={24}
            labelFontSize={10}
            titleFontSize={18}
            labelOffset={16}
            titleOffset={16}
            labelGap={8}
            className="projects-card-large"
          />
        ))}
      </div>

      {/* Row 2: 4 smaller cards, 305x200 */}
      <div className="projects-row">
        {row2.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            category={p.category}
            imageUrl={p.imageUrl}
            width={305}
            height={200}
            dotSize={6}
            cornerSize={20}
            labelFontSize={9}
            titleFontSize={14}
            labelOffset={12}
            titleOffset={12}
            labelGap={6}
            className="projects-card-small"
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
