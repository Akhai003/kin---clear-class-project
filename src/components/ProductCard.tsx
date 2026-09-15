import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCartStore } from '../store/useCartStore';
import { formatCurrency } from '../lib/utils';
import { Plus, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductCard({ product }: { product: Product, key?: React.Key }) {
  const addItem = useCartStore(state => state.addItem);
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent triggering link
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group relative flex flex-col h-full bg-white rounded-[20px] overflow-hidden border border-transparent transition-all duration-400 hover:shadow-[0_10px_32px_rgb(0,0,0,0.055)] hover:border-sage/30">
      <Link to={`/product/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-sage-light">
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          onError={(e) => { e.currentTarget.src = 'https://images.pexels.com/photos/8172121/pexels-photo-8172121.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1250&fit=crop'; }}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
        {/* Optional alternate image reveal on hover if provided */}
        {product.alternateImages && product.alternateImages.length > 0 && (
          <img 
            src={product.alternateImages[0]} 
            alt={`${product.name} alternate`} 
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
          />
        )}
        
        {product.badge && (
          <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-widest rounded-full shadow-sm text-charcoal z-10">
            {product.badge}
          </span>
        )}
      </Link>
      
      <div className="p-6 flex flex-col flex-grow relative bg-white">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.slug}`} className="block pr-4">
            <h3 className="text-xl font-serif font-medium group-hover:text-sage transition-colors line-clamp-2 leading-tight">{product.name}</h3>
          </Link>
          <span className="font-medium whitespace-nowrap text-charcoal">{formatCurrency(product.price)}</span>
        </div>
        
        <p className="text-slate text-sm mb-6 line-clamp-2 leading-relaxed">{product.shortBenefit}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs font-medium tracking-wide uppercase text-slate/70">{product.size}</span>
          <button 
            onClick={handleQuickAdd}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative z-10 overflow-hidden ${
              added ? 'bg-sage text-white scale-110' : 'bg-sage-light text-charcoal hover:bg-sage hover:text-white group-hover:shadow-md'
            }`}
            aria-label="Add to cart"
          >
            <AnimatePresence mode="wait">
              {added ? (
                <motion.div
                  key="check"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="plus"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </div>
  );
}
