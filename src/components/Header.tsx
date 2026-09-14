import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleCart = useCartStore(state => state.toggleCart);
  const items = useCartStore(state => state.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Our Standards', path: '/standards' },
    { name: 'Ingredients', path: '/ingredients' },
    { name: 'Learn', path: '/learn' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled ? "bg-ivory/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -ml-2 text-charcoal hover:text-sage transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-medium tracking-tight hover:opacity-80 transition-opacity">
            Kin & Clear
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm font-medium hover:text-sage transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 text-charcoal hover:text-sage transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 text-charcoal hover:text-sage transition-colors relative"
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-terracotta text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-50 bg-ivory flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-sage-light">
              <span className="text-xl font-serif font-medium">Kin & Clear</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-charcoal hover:text-sage transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-6 text-xl font-serif">
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="hover:text-sage transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-sage-light flex flex-col gap-4 text-base font-sans text-slate">
                <Link to="/about">About Us</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
