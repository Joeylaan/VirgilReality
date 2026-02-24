import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { buttonHover } from '../animations/variants';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'variants' | 'initial' | 'whileHover'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold font-mono uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2';

  const variantStyles = {
    primary: 'bg-brand-primary text-brand-dark hover:bg-brand-accent',
    secondary: 'bg-brand-secondary text-white hover:bg-red-600',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-dark',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
