import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Leaf, Heart, Droplets } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-sage-light">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Mother holding baby" 
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6"
            >
              Nothing hidden. <br />
              <span className="italic text-sage">Only care.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-charcoal/80 mb-10 max-w-lg leading-relaxed"
            >
              We believe parents shouldn't need a science degree to know what's safe. Radically transparent, pediatrician-approved baby care for modern families.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/shop" className="px-8 py-4 bg-charcoal text-ivory rounded-full font-medium text-center hover:bg-charcoal/90 transition-colors">
                Shop Essentials
              </Link>
              <Link to="/standards" className="px-8 py-4 border border-charcoal/20 text-charcoal rounded-full font-medium text-center hover:border-charcoal transition-colors">
                Explore Our Standards
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white py-8 border-y border-sage-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center text-sm font-medium text-slate">
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-sage" /> Dermatologist Tested*</div>
            <div className="flex items-center gap-2"><Leaf className="w-5 h-5 text-sage" /> Transparent Ingredients</div>
            <div className="flex items-center gap-2"><Heart className="w-5 h-5 text-sage" /> Sensitive Skin Focus</div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Everyday Essentials</h2>
              <p className="text-slate">Gentle formulations designed for daily care, protecting your baby's delicate skin barrier.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 font-medium hover:text-sage transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
            <Link to="/shop" className="inline-flex items-center gap-2 font-medium hover:text-sage transition-colors">
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Standard Story */}
      <section className="py-24 bg-sage text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1544626053-8985dc34ae63?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Applying lotion" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 leading-tight">
                No guessing games. Just pure clarity.
              </h2>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                We replace complicated chemical jargon with clear, human explanations. Every ingredient has a purpose, and we tell you exactly what it is.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-ivory/20 flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-medium text-xl mb-1">Purposeful Ingredients</h3>
                    <p className="text-ivory/70">If it doesn't nourish or protect, it's not in the bottle.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-ivory/20 flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-medium text-xl mb-1">Safety First</h3>
                    <p className="text-ivory/70">Rigorous third-party testing for sensitive and eczema-prone skin.</p>
                  </div>
                </div>
              </div>
              <Link to="/ingredients" className="inline-flex items-center gap-2 bg-ivory text-charcoal px-6 py-3 rounded-full font-medium hover:bg-white transition-colors">
                Explore Our Ingredient Library
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quiz Teaser */}
      <section className="py-24 bg-peach/30 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Droplets className="w-12 h-12 text-terracotta mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Not sure what your little one needs?</h2>
          <p className="text-slate text-lg mb-8 max-w-xl mx-auto">Take our 2-minute skin profile quiz to find the perfect gentle routine for your baby's unique skin type.</p>
          <Link to="/quiz" className="inline-block px-8 py-4 bg-terracotta text-white rounded-full font-medium hover:bg-terracotta/90 transition-colors shadow-sm">
            Start Skin Quiz
          </Link>
        </div>
      </section>
    </div>
  );
}
