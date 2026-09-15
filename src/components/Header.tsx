import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { products } from '../data/products';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  
  const toggleCart = useCartStore(state => state.toggleCart);
  const items = useCartStore(state => state.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop', path: '/shop', hasMegaMenu: true },
    { name: 'Our Standards', path: '/standards', hasMegaMenu: false },
    { name: 'Ingredients', path: '/ingredients', hasMegaMenu: false },
    { name: 'Learn', path: '/learn', hasMegaMenu: false },
    { name: 'Blog', path: '/blog', hasMegaMenu: false },
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-7 left-0 right-0 z-40 transition-all duration-300",
          isScrolled ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.03)] py-3" : "bg-transparent py-6",
          scrollDirection === 'down' && isScrolled ? "-translate-y-full" : "translate-y-0"
        )}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
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
            <Link to="/" className="text-2xl font-serif font-medium tracking-tight hover:opacity-80 transition-opacity z-10 shrink-0">
              Kin & Clear
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2">
              {navLinks.map(link => (
                <div 
                  key={link.name}
                  onMouseEnter={() => setActiveMegaMenu(link.hasMegaMenu ? link.name : null)}
                  className="h-full py-2"
                >
                  <Link 
                    to={link.path}
                    className="text-[15px] font-medium transition-colors link-underline pb-1"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-2 sm:gap-4 z-10 shrink-0">
              <button className="p-2 text-charcoal hover:text-sage transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden md:block p-2 text-charcoal hover:text-sage transition-colors" aria-label="Account">
                <User className="w-5 h-5" />
              </button>
              <button 
                className="p-2 text-charcoal hover:text-sage transition-colors relative"
                onClick={toggleCart}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                <AnimatePresence>
                  {count > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute top-1 right-1 w-[18px] h-[18px] bg-terracotta text-white text-[10px] font-bold flex items-center justify-center rounded-full"
                    >
                      {count}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        <AnimatePresence>
          {activeMegaMenu === 'Shop' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-sage-light/50"
              onMouseEnter={() => setActiveMegaMenu('Shop')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 flex gap-12 lg:gap-24">
                
                <div className="w-1/4">
                  <h4 className="text-xs font-semibold tracking-widest text-slate uppercase mb-6">Shop by Category</h4>
                  <ul className="space-y-4">
                    {['All Products', 'Bath & Cleansing', 'Skin & Moisture', 'Diaper Care', 'Everyday Essentials', 'Bundles'].map(item => (
                      <li key={item}>
                        <Link to={`/shop?category=${item === 'All Products' ? 'All' : item.split(' ')[0].toLowerCase()}`} className="text-charcoal hover:text-sage transition-colors link-arrow">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-1/4">
                  <h4 className="text-xs font-semibold tracking-widest text-slate uppercase mb-6">Shop by Need</h4>
                  <ul className="space-y-4">
                    {['Dry & Sensitive Skin', 'Newborn', 'Bath Time', 'Diaper Care', 'Bedtime'].map(item => (
                      <li key={item}>
                        <Link to={`/shop?category=${item.split(' ')[0].toLowerCase()}`} className="text-charcoal hover:text-sage transition-colors link-arrow">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-2/4 bg-ivory rounded-2xl p-6 flex gap-6">
                  <div className="w-1/2 aspect-square rounded-xl overflow-hidden relative group bg-sage-light">
                    <img
                      src="https://images.pexels.com/photos/5240623/pexels-photo-5240623.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop"
                      alt="Minimal skincare set for the Newborn Starter Set"
                      loading="eager"
                      onError={(e) => { e.currentTarget.src = products[14]?.image || 'https://images.pexels.com/photos/7691160/pexels-photo-7691160.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop'; }}
                      className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/5 via-transparent to-white/5" />
                  </div>
                  <div className="flex flex-col justify-center w-1/2">
                    <span className="text-xs font-semibold tracking-widest text-sage uppercase mb-2">Featured</span>
                    <h3 className="font-serif text-2xl mb-2">Newborn Starter Set</h3>
                    <p className="text-sm text-slate mb-6">The 4 essentials for their first months.</p>
                    <Link to="/product/newborn-starter-set" className="text-sm font-medium link-arrow">
                      Shop Set <span>→</span>
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop for Mega Menu */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/20 z-30 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

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
    </>
  );
}
