import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = ['All', 'Bath & Cleansing', 'Skin & Moisture', 'Diaper Care', 'Everyday Essentials', 'Bundles'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  const categoryParam = searchParams.get('category');
  const activeCategory = categoryParam 
    ? CATEGORIES.find(c => c.toLowerCase().includes(categoryParam.toLowerCase())) || 'All'
    : 'All';

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: category.split(' ')[0].toLowerCase() });
    }
    setIsMobileFiltersOpen(false);
  };

  return (
    <div className="bg-ivory min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Shop Collection</h1>
          <p className="text-slate text-lg">Gentle, safe, and transparently formulated care for your baby's delicate skin barrier.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Desktop Filters */}
          <div className="hidden md:block w-64 flex-shrink-0 sticky top-24">
            <h3 className="font-medium text-lg mb-6">Categories</h3>
            <ul className="space-y-3">
              {CATEGORIES.map(category => (
                <li key={category}>
                  <button 
                    onClick={() => handleCategoryChange(category)}
                    className={`text-left w-full text-sm transition-colors ${
                      activeCategory === category ? 'text-charcoal font-medium' : 'text-slate hover:text-charcoal'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Filter Button */}
          <div className="md:hidden w-full flex justify-between items-center mb-4 border-b border-sage-light pb-4">
            <span className="font-medium">{filteredProducts.length} Products</span>
            <button 
              onClick={() => setIsMobileFiltersOpen(true)}
              className="flex items-center gap-2 text-sm border border-sage-light px-4 py-2 rounded-full"
            >
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>

          {/* Product Grid */}
          <div className="flex-grow w-full">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-24 text-slate">
                <p>No products found for this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersOpen(false)}
              className="fixed inset-0 bg-charcoal/40 z-50 md:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed bottom-0 left-0 right-0 h-[70vh] bg-ivory rounded-t-3xl z-50 md:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-sage-light">
                <h2 className="text-xl font-serif font-medium">Filter by Need</h2>
                <button 
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-2 text-slate hover:text-charcoal bg-white rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto">
                <ul className="space-y-4">
                  {CATEGORIES.map(category => (
                    <li key={category}>
                      <button 
                        onClick={() => handleCategoryChange(category)}
                        className={`text-left w-full text-lg py-2 border-b border-sage-light/50 transition-colors ${
                          activeCategory === category ? 'text-charcoal font-medium' : 'text-slate'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
