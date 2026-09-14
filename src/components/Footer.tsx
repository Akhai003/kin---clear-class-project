import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage-light pt-16 pb-8 border-t border-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif font-medium mb-4">Kin & Clear</h2>
            <p className="text-slate text-sm mb-6 leading-relaxed">
              Nothing hidden. Only care. Safe, transparent, and gentle baby care products designed for modern parents.
            </p>
            <div className="flex gap-4 text-charcoal">
              <a href="#" className="hover:text-terracotta transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-terracotta transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-terracotta transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Shop</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate">
              <li><Link to="/shop" className="hover:text-charcoal transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=bath" className="hover:text-charcoal transition-colors">Bath Time</Link></li>
              <li><Link to="/shop?category=diaper" className="hover:text-charcoal transition-colors">Diaper Care</Link></li>
              <li><Link to="/shop?category=sensitive" className="hover:text-charcoal transition-colors">Dry & Sensitive</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Discover</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate">
              <li><Link to="/standards" className="hover:text-charcoal transition-colors">Our Standards</Link></li>
              <li><Link to="/ingredients" className="hover:text-charcoal transition-colors">Ingredient Library</Link></li>
              <li><Link to="/learn" className="hover:text-charcoal transition-colors">Parenting Journal</Link></li>
              <li><Link to="/about" className="hover:text-charcoal transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Help</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate">
              <li><Link to="/faq" className="hover:text-charcoal transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-charcoal transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="hover:text-charcoal transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-sage/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate">
          <p>© {new Date().getFullYear()} Kin & Clear. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-charcoal">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-charcoal">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
