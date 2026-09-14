import React from 'react';
import { ShieldCheck, Search, BookOpen, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Standards() {
  return (
    <div className="bg-ivory min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">Our Safety Standards</h1>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            We don't just say our products are safe. We have a rigorous 5-step framework that every single product must pass before it reaches your baby's skin.
          </p>
        </div>

        <div className="relative border-l-2 border-sage-light ml-4 md:ml-8 space-y-12">
          
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-sage flex items-center justify-center text-white font-medium shadow-sm">1</div>
            <h3 className="text-2xl font-serif font-medium mb-3">Purposeful Formulations</h3>
            <p className="text-slate leading-relaxed">
              Every ingredient must serve a clear, beneficial purpose. We never use fillers, synthetic dyes, or artificial fragrances. If an ingredient doesn't actively protect, nourish, or cleanse, we leave it out.
            </p>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-sage flex items-center justify-center text-white font-medium shadow-sm">2</div>
            <h3 className="text-2xl font-serif font-medium mb-3">Pediatrician Review*</h3>
            <p className="text-slate leading-relaxed">
              Our initial formulas are reviewed by independent pediatric dermatologists to ensure they are appropriate for developing, sensitive skin barriers.
            </p>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-sage flex items-center justify-center text-white font-medium shadow-sm">3</div>
            <h3 className="text-2xl font-serif font-medium mb-3">Sensitive-Skin Testing</h3>
            <p className="text-slate leading-relaxed">
              We conduct HRIPT (Human Repeat Insult Patch Testing) on diverse panels, specifically focusing on sensitive and eczema-prone skin types, to guarantee our products are non-irritating and hypoallergenic.
            </p>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-sage flex items-center justify-center text-white font-medium shadow-sm">4</div>
            <h3 className="text-2xl font-serif font-medium mb-3">Radical Transparency</h3>
            <p className="text-slate leading-relaxed">
              We publish our complete ingredient library, explaining not just the scientific name, but the plain-English meaning and the exact reason it is in the product.
            </p>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-sage flex items-center justify-center text-white font-medium shadow-sm">5</div>
            <h3 className="text-2xl font-serif font-medium mb-3">Continuous Parent Feedback</h3>
            <p className="text-slate leading-relaxed">
              The final test is the real world. We constantly refine our products based on the experiences of our community of parents.
            </p>
          </div>

        </div>

        <div className="mt-20 p-8 bg-white rounded-3xl border border-sage-light text-center">
          <h3 className="text-2xl font-serif font-medium mb-4">Ready to explore?</h3>
          <p className="text-slate mb-8">See how our standards translate into pure, gentle care.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ingredients" className="px-8 py-3 border border-charcoal text-charcoal rounded-full font-medium hover:bg-ivory transition-colors">
              Ingredient Library
            </Link>
            <Link to="/shop" className="px-8 py-3 bg-charcoal text-ivory rounded-full font-medium hover:bg-charcoal/90 transition-colors">
              Shop Essentials
            </Link>
          </div>
          <p className="text-xs text-slate mt-8 italic">*Claims are for prototype demonstration.</p>
        </div>

      </div>
    </div>
  );
}
