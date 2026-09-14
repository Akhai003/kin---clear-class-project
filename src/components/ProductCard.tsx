import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCartStore } from '../store/useCartStore';
import { formatCurrency } from '../lib/utils';
import { Plus } from 'lucide-react';

export default function ProductCard({ product }: { product: Product, key?: React.Key }) {
  const addItem = useCartStore(state => state.addItem);

  return (
    <div className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <Link to={`/product/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-sage-light">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full shadow-sm text-charcoal">
            {product.badge}
          </span>
        )}
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <Link to={`/product/${product.slug}`} className="block">
            <h3 className="font-serif text-lg font-medium group-hover:text-sage transition-colors line-clamp-1">{product.name}</h3>
          </Link>
          <span className="font-medium whitespace-nowrap ml-2">{formatCurrency(product.price)}</span>
        </div>
        
        <p className="text-slate text-sm mb-4 line-clamp-1">{product.shortBenefit}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs text-slate">{product.size}</span>
          <button 
            onClick={() => addItem(product)}
            className="w-8 h-8 rounded-full bg-sage-light text-charcoal flex items-center justify-center hover:bg-sage hover:text-white transition-colors"
            aria-label="Add to cart"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
