import React, { useState } from 'react';
import { ingredients } from '../data/ingredients';
import { Search } from 'lucide-react';

export default function Ingredients() {
  const [searchTerm, setSearchTerm] = useState('');

  const ingredientsList = ingredients.filter(ing => 
    ing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ing.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-ivory min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">Ingredient Transparency Library</h1>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            We believe parents shouldn't need a science degree to understand what goes on their baby's skin. 
            Here is a complete, plain-English breakdown of every ingredient we use.
          </p>
        </div>

        <div className="relative mb-12">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate" />
          </div>
          <input
            type="text"
            placeholder="Search ingredients (e.g. Zinc Oxide, Shea Butter)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-full border border-sage-light focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage shadow-sm text-lg bg-white"
          />
        </div>

        <div className="space-y-6">
          {ingredientsList.length > 0 ? (
            ingredientsList.map((ing, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-sage-light hover:border-sage transition-colors">
                <h3 className="text-2xl font-serif font-medium mb-4 text-charcoal">{ing.name}</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-medium text-sage uppercase tracking-wider mb-2">What it is</h4>
                    <p className="text-charcoal/80 leading-relaxed">{ing.whatItIs}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-sage uppercase tracking-wider mb-2">Why it's here</h4>
                    <p className="text-charcoal/80 leading-relaxed">{ing.role}</p>
                  </div>
                  <div className="md:col-span-2 pt-6 border-t border-sage-light">
                    <h4 className="text-sm font-medium text-sage uppercase tracking-wider mb-2">Safety Context</h4>
                    <p className="text-charcoal/80 leading-relaxed">{ing.safetyContext}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate">
              No ingredients found matching your search.
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
