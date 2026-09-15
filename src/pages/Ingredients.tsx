import React, { useState } from 'react';
import { ingredients } from '../data/ingredients';
import { Search, Info, FlaskConical, Droplets, Heart, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = ['All', 'Soothing', 'Moisturising', 'Barrier Support', 'Cleansing', 'Supporting'];

export default function Ingredients() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isDeepView, setIsDeepView] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const assetBase = typeof window !== 'undefined' && window.location.pathname.startsWith('/kin---clear-class-project') ? '/kin---clear-class-project/' : '/';

  const filteredIngredients = ingredients.filter(ing => {
    const matchesSearch = ing.name.toLowerCase().includes(searchTerm.toLowerCase()) || ing.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || ing.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-ivory min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
          <div className="lg:col-span-7 max-w-3xl">
            <span className="text-sage font-semibold tracking-widest uppercase text-xs sm:text-sm mb-6 block">Ingredient Library</span>
            <h1 className="text-fluid-h1 mb-6">Ingredients, without the mystery.</h1>
            <p className="text-fluid-body-lg text-slate">Know what it is. Why it's here. Where you'll find it — with enough context to make the label useful.</p>
          </div>
          <div className="lg:col-span-5 aspect-[4/3] rounded-[24px] overflow-hidden border border-sage-light bg-sage-light">
            <img src={`${assetBase}assets/editorial/oatmeal.svg`} alt="Ingredient library visual" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-14 lg:mb-16">
          {[
            {name:'Colloidal Oatmeal', visual:'oatmeal', copy:'A soothing oat ingredient used to support dry, easily irritated skin.'},
            {name:'Calendula Extract', visual:'calendula', copy:'A botanical extract presented with its purpose and formulation context.'},
            {name:'Barrier Support', visual:'barrier', copy:'Understand how moisturising and lipid-support ingredients work together.'}
          ].map((item) => (
            <div key={item.name} className="group bg-white border border-sage-light rounded-[20px] overflow-hidden hover:border-sage/60 transition-colors">
              <div className="aspect-[16/10] overflow-hidden"><img src={`${assetBase}assets/editorial/${item.visual}.svg`} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" /></div>
              <div className="p-5"><h3 className="font-serif text-xl mb-2">{item.name}</h3><p className="text-sm text-slate leading-relaxed">{item.copy}</p></div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 sticky top-24 z-20 bg-ivory/95 backdrop-blur-md py-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          {/* Search */}
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
            {searchTerm && (
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-medium text-slate bg-sage-light px-2 py-0.5 rounded-full">
                {filteredIngredients.length}
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto items-start sm:items-center justify-between">
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 sm:pb-0 w-full sm:w-auto">
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

            {/* View Toggle */}
            <div className="flex bg-white rounded-full border border-sage-light p-1 shrink-0">
              <button
                onClick={() => setIsDeepView(false)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${!isDeepView ? 'bg-sage-light text-charcoal' : 'text-slate hover:text-charcoal'}`}
              >
                Simple
              </button>
              <button
                onClick={() => setIsDeepView(true)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${isDeepView ? 'bg-sage-light text-charcoal' : 'text-slate hover:text-charcoal'}`}
              >
                Deep View
              </button>
            </div>
          </div>
        </div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredIngredients.length > 0 ? (
              filteredIngredients.map((ing) => (
                <motion.div
                  key={ing.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[22px] border border-sage-light overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.035)] hover:border-sage/60 transition-all flex flex-col"
                >
                  <div 
                    className="p-8 cursor-pointer group"
                    onClick={() => setExpandedId(expandedId === ing.id ? null : ing.id)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-sage text-xs font-semibold tracking-widest uppercase block bg-sage-light/30 px-3 py-1 rounded-full">{ing.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-medium mb-3 group-hover:text-sage transition-colors">{ing.name}</h3>
                    <p className="text-slate text-sm line-clamp-2">{ing.whatItIs}</p>
                    
                    <div className="mt-6 pt-4 border-t border-sage-light flex justify-between items-center text-sm font-medium text-charcoal">
                      <span className="group-hover:translate-x-1 transition-transform">
                        {expandedId === ing.id ? 'Close Details' : 'Why it\'s here →'}
                      </span>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {(expandedId === ing.id || isDeepView) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-ivory border-t border-sage-light"
                      >
                        <div className="p-8 space-y-6">
                          <div>
                            <h4 className="flex items-center gap-2 text-sm font-semibold text-charcoal mb-2"><Heart className="w-4 h-4 text-terracotta" /> The Role</h4>
                            <p className="text-sm text-slate">{ing.role}</p>
                          </div>
                          <div>
                            <h4 className="flex items-center gap-2 text-sm font-semibold text-charcoal mb-2"><ShieldCheck className="w-4 h-4 text-sage" /> Safety Context</h4>
                            <p className="text-sm text-slate">{ing.safetyContext}</p>
                          </div>
                          
                          {/* Cross-linking to products could be dynamically injected here */}
                          <div className="pt-4 mt-4 border-t border-sage-light/50">
                            <span className="text-xs font-medium text-slate block mb-3 uppercase tracking-wider">Found In</span>
                            <div className="flex flex-wrap gap-2">
                               <span className="px-3 py-1 bg-white rounded-full text-[11px] font-medium border border-sage-light">Related Product</span>
                            </div>
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
    </div>
  );
}
