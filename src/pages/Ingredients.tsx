import React, { useState } from 'react';
import { ingredients } from '../data/ingredients';
import { Search, Info, FlaskConical, Droplets, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import EditorialVisual from '../components/EditorialVisual';
import Reveal from '../components/Reveal';

const CATEGORIES = ['All', 'Soothing', 'Moisturising', 'Barrier Support', 'Cleansing', 'Supporting'];

export default function Ingredients() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredIngredients = ingredients.filter(ing => {
    const matchesSearch = ing.name.toLowerCase().includes(searchTerm.toLowerCase()) || ing.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || ing.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  
  const featuredIngredients = ingredients.slice(0, 3);
  const libraryIngredients = filteredIngredients.filter(ing => !featuredIngredients.find(f => f.id === ing.id) || searchTerm !== ''); // show all in library if searching



  return (
    <div className="bg-ivory min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* 1. Hero & Visual Composition */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="max-w-2xl">
            <span className="text-sage font-semibold tracking-widest uppercase text-xs sm:text-sm mb-6 block">
              Ingredient Library
            </span>
            <h1 className="text-fluid-h1 mb-6">Ingredients, without the mystery.</h1>
            <p className="text-fluid-body-lg text-slate">Know what it is. Why it's here. Where you'll find it.</p>
          </div>
          <EditorialVisual kind="ingredient" title="Botanicals, textures and formulation context" className="aspect-[3/2] rounded-[24px]" />
        </div>

        {/* 2. Controls (Search & Filter) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-24 sticky top-24 z-20 bg-ivory/95 backdrop-blur-md py-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          <div className="relative w-full lg:w-96">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate" />
            </div>
            <input
              type="text"
              placeholder="Search ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-sage-light focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all bg-white shadow-sm"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 lg:pb-0 w-full lg:w-auto">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-charcoal text-white' 
                    : 'bg-white border border-sage-light text-slate hover:border-sage hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Featured Ingredients (Only show if not searching/filtering) */}
        {searchTerm === '' && activeCategory === 'All' && (
          <div className="mb-24 lg:mb-28">
            <h2 className="text-3xl font-serif mb-12 border-b border-sage-light pb-4">Featured Ingredients</h2>
            <div className="space-y-16 lg:space-y-20">
              {featuredIngredients.map((ing, i) => (
                <div key={ing.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${i % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <EditorialVisual kind="ingredient" title={ing.name} className={`aspect-square sm:aspect-[4/3] rounded-[24px] ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`} />
                  <div className={i % 2 !== 0 ? 'lg:col-start-1' : ''}>
                    <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-4 block">{ing.category}</span>
                    <h3 className="text-4xl lg:text-5xl font-serif mb-6">{ing.name}</h3>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="font-medium text-charcoal mb-2">What it is</h4>
                        <p className="text-slate">{ing.whatItIs}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-charcoal mb-2">Why it's here</h4>
                        <p className="text-slate">{ing.role}</p>
                      </div>
                    </div>
                    
                    <button className="text-sm font-medium link-underline pb-1 text-charcoal group">
                      Explore {ing.name} <ArrowRight className="inline w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Full Library (Compact Cards) */}
        <div className="mb-24 lg:mb-28">
           <h2 className="text-3xl font-serif mb-12 border-b border-sage-light pb-4">Full Library</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {libraryIngredients.length > 0 ? (
                libraryIngredients.map((ing) => (
                  <motion.div
                    key={ing.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-[20px] border border-sage-light overflow-hidden hover:border-sage transition-all group flex flex-col cursor-pointer hover:shadow-[0_4px_20px_rgb(0,0,0,0.02)]"
                    onClick={() => setExpandedId(expandedId === ing.id ? null : ing.id)}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-serif font-medium group-hover:text-sage transition-colors">{ing.name}</h3>
                        <ArrowRight className="w-4 h-4 text-slate opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sage" />
                      </div>
                      <p className="text-slate text-sm line-clamp-2 mb-4">{ing.role}</p>
                      <span className="text-sage text-[10px] font-semibold tracking-widest uppercase block bg-sage-light/30 px-3 py-1 rounded-full w-max">{ing.category}</span>
                    </div>
                    
                    <AnimatePresence>
                      {expandedId === ing.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-ivory border-t border-sage-light"
                        >
                          <div className="p-6 space-y-4">
                            <div>
                              <h4 className="flex items-center gap-2 text-sm font-semibold text-charcoal mb-1"><Droplets className="w-3.5 h-3.5 text-sage" /> What it is</h4>
                              <p className="text-sm text-slate">{ing.whatItIs}</p>
                            </div>
                            <div>
                              <h4 className="flex items-center gap-2 text-sm font-semibold text-charcoal mb-1"><ShieldCheck className="w-3.5 h-3.5 text-sage" /> Safety</h4>
                              <p className="text-sm text-slate">{ing.safetyContext}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-24 text-center"
                >
                  <FlaskConical className="w-12 h-12 text-sage/50 mx-auto mb-4" />
                  <h3 className="text-xl font-serif mb-2">No ingredients found</h3>
                  <p className="text-slate">Try adjusting your search or category filter.</p>
                  <button 
                    onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                    className="mt-6 text-sm font-medium link-underline text-charcoal pb-1"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 5. Continue Exploring */}
        <div className="max-w-4xl mx-auto text-center border-t border-sage-light pt-24">
          <h3 className="text-2xl font-serif font-medium mb-12">Continue Exploring</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/learn" className="px-8 py-4 bg-white border border-sage-light text-charcoal rounded-full font-medium hover:border-sage transition-all hover:-translate-y-1">
              Understand Baby Skin
            </Link>
            <Link to="/blog" className="px-8 py-4 bg-charcoal text-ivory rounded-full font-medium hover:bg-sage transition-all hover:-translate-y-1">
              Read the Journal
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
