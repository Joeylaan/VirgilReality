import React from 'react';
import { motion } from 'framer-motion';

interface RecIndicatorProps {
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

const RecIndicator: React.FC<RecIndicatorProps> = ({
  size = 'md',
  showLabel = true,
  className = '',
}) => {
  const sizeStyles = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.div
        className={`${sizeStyles[size]} bg-brand-secondary rounded-full animate-blink`}
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      {showLabel && <span className="text-xs font-mono uppercase tracking-widest text-brand-secondary">REC</span>}
    </div>
  );
};

export default RecIndicator;
