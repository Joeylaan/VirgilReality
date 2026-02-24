import React from 'react';
import { motion } from 'framer-motion';
import { viewfinderCorners } from '../animations/variants';

interface CornerBracketsProps {
  color?: 'green' | 'red';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CornerBrackets: React.FC<CornerBracketsProps> = ({
  color = 'green',
  size = 'md',
  className = '',
}) => {
  const colorClass = color === 'red' ? 'border-brand-secondary' : 'border-brand-primary';

  const sizeStyles = {
    sm: {
      bracket: 'w-4 h-4',
      width: '2px',
    },
    md: {
      bracket: 'w-6 h-6',
      width: '3px',
    },
    lg: {
      bracket: 'w-8 h-8',
      width: '4px',
    },
  };

  const style = sizeStyles[size];

  const CornerBracket = ({ corner }: { corner: 'tl' | 'tr' | 'bl' | 'br' }) => {
    const rotations: Record<string, string> = {
      tl: 'rotateY(0) rotateX(0)',
      tr: 'scaleX(-1)',
      bl: 'scaleY(-1)',
      br: 'scaleX(-1) scaleY(-1)',
    };

    return (
      <div
        className={`absolute ${style.bracket} ${colorClass}`}
        style={{
          borderTop: `${style.width} solid currentColor`,
          borderLeft: `${style.width} solid currentColor`,
          transform: rotations[corner],
        }}
      />
    );
  };

  return (
    <motion.div
      className={`absolute inset-0 ${colorClass} ${className}`}
      variants={viewfinderCorners}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <CornerBracket corner="tl" />
      <CornerBracket corner="tr" />
      <CornerBracket corner="bl" />
      <CornerBracket corner="br" />
    </motion.div>
  );
};

export default CornerBrackets;
