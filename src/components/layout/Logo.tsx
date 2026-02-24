import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeStyles = {
    sm: 'text-xl font-bold',
    md: 'text-2xl font-bold',
    lg: 'text-3xl font-bold',
  };

  return (
    <motion.div
      className={`${sizeStyles[size]} font-mono uppercase tracking-widest text-brand-primary ${className}`}
      whileHover={{ letterSpacing: '0.2em' }}
      transition={{ duration: 0.3 }}
    >
      VIRGIL
      <span className="text-brand-secondary">REALITY</span>
    </motion.div>
  );
};

export default Logo;
