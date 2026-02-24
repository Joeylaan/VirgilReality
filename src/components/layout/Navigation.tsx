import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const navItems = ['work', 'services', 'about', 'contact'];

  const handleClick = (item: string) => {
    onNavigate?.(item);
    const element = document.getElementById(item);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="hidden md:flex gap-8">
      {navItems.map((item) => (
        <motion.button
          key={item}
          onClick={() => handleClick(item)}
          className={`text-sm font-mono uppercase tracking-wider transition-colors ${
            activeSection === item ? 'text-brand-primary' : 'text-brand-text hover:text-brand-primary'
          }`}
          whileHover={{ letterSpacing: '0.15em' }}
          transition={{ duration: 0.3 }}
        >
          {item}
        </motion.button>
      ))}
    </nav>
  );
};

export default Navigation;
