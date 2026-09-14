import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCartStore } from '../store/useCartStore';
import { formatCurrency } from '../lib/utils';
import { Plus, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ProductVisual from './ProductVisual';

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
    <div className="group relative flex flex-col h-full bg-transparent rounded-[24px] overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-3 -m-3">
      <Link to={`/product/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-sage-light rounded-[18px] mb-5">
        <ProductVisual product={product} className="w-full h-full" />
        {product.badge && (
          <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-widest rounded-full shadow-sm text-charcoal z-10">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden md:block z-20">
          <button onClick={handleQuickAdd} className={`w-full py-3 rounded-full flex items-center justify-center font-medium transition-colors ${added ? 'bg-sage text-white' : 'bg-white/95 backdrop-blur-md text-charcoal hover:bg-charcoal hover:text-white shadow-sm'}`}>
            {added ? 'Added to Cart' : 'Quick Add'}
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col flex-grow relative px-2">
        <div className="flex justify-between items-start mb-2 gap-4">
          <Link to={`/product/${product.slug}`} className="block group/link">
            <h3 className="text-[clamp(1.15rem,1.35vw,1.45rem)] font-serif font-medium text-charcoal transition-colors line-clamp-2 leading-tight group-hover/link:text-sage">
              {product.name}
            </h3>
          </Link>
          <span className="font-medium whitespace-nowrap text-charcoal mt-1">{formatCurrency(product.price)}</span>
        </div>
        
        <p className="text-slate text-[15px] mb-4 line-clamp-2 leading-relaxed">{product.shortBenefit}</p>
        
        <div className="mt-auto flex items-center justify-between border-t border-sage-light/50 pt-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-slate">{product.size}</span>
          
          <Link to={`/product/${product.slug}`} className="hidden md:flex items-center text-sm font-medium link-underline pb-1 group/link">
            Details <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
          </Link>
          
          {/* Mobile Quick Add (Icon only) */}
          <button 
            onClick={handleQuickAdd}
            className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative z-10 ${
              added ? 'bg-sage text-white scale-110' : 'bg-sage-light text-charcoal hover:bg-sage hover:text-white'
            }`}
            aria-label="Add to cart"
          >
            <AnimatePresence mode="wait">
              {added ? (
                <motion.div key="check" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }}>
                  <Check className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="plus" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }}>
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
