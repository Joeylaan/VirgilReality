import React from 'react';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from '../animations/variants';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      className={`mb-12 md:mb-16 ${alignmentClasses[align]} ${className}`}
      variants={align === 'right' ? slideInRight : slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold uppercase tracking-wider mb-4 text-brand-primary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-lg md:text-xl text-brand-text-muted font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
