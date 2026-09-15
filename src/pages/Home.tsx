import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { products } from '../data/products';
import { ingredients } from '../data/ingredients';
import ProductCard from '../components/ProductCard';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.filter(p => p.rating >= 4.9).slice(0, 4);
  
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  return (
    <div className="bg-ivory overflow-hidden">
      {/* 1. LAYERED HERO */}
      <section ref={heroRef} className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden pt-32 pb-12 lg:pb-24">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Mother and baby" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/80 to-transparent lg:via-ivory/40"></div>
        </motion.div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-sage font-semibold tracking-widest uppercase text-xs sm:text-sm mb-6 block"
            >
              Kin & Clear
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-fluid-hero text-charcoal leading-[1.05] mb-6"
            >
              Nothing hidden.<br/>
              <span className="italic text-sage">Only care.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-fluid-body-lg text-charcoal/80 mb-10 max-w-xl"
            >
              Transparently formulated, radically gentle care for the first years. We explain every ingredient, because you deserve to know what touches their skin.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Link 
                to="/shop" 
                className="inline-flex items-center justify-center bg-charcoal text-ivory px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-sage group"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. START HERE PATHWAYS */}
      <section className="py-12 lg:py-24 border-b border-sage-light">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
          >
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-slate mb-3 block">01 / Discover</span>
              <h2 className="text-fluid-h3">Not sure where to begin?</h2>
            </div>
            <p className="text-slate mt-4 md:mt-0">Choose how you'd like to explore.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { title: 'Shop by Need', desc: 'Find targeted care.', link: '/shop' },
              { title: 'Build a Routine', desc: 'Step-by-step guidance.', link: '/learn' },
              { title: 'Ingredients', desc: 'Understand the label.', link: '/ingredients' },
              { title: 'Newborn Basics', desc: 'Read our parent guides.', link: '/blog' }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <Link to={item.link} className="group block p-8 rounded-[20px] bg-white border border-sage-light hover:border-sage transition-colors h-full flex flex-col">
                  <h3 className="font-serif text-xl mb-2 group-hover:text-sage transition-colors">{item.title}</h3>
                  <p className="text-slate text-sm mb-6 flex-grow">{item.desc}</p>
                  <span className="mt-auto inline-flex items-center text-sm font-medium link-arrow">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HORIZONTAL PRODUCT RAIL - BEST SELLERS */}
      <section className="py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-slate mb-3 block">02 / Essentials</span>
              <h2 className="text-fluid-h2">Parent Favorites</h2>
            </div>
            <Link to="/shop" className="hidden md:inline-flex text-sm font-medium link-arrow link-underline pb-1">
              Shop All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-6 lg:gap-8 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
            {bestSellers.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.1 }}
                className="w-[85vw] sm:w-[350px] flex-shrink-0 snap-start"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL STATEMENT */}
      <section className="py-24 lg:py-36 bg-sage-light text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="text-fluid-h1 leading-tight mb-8"
          >
            You shouldn't need a science degree to understand the label.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-fluid-body-lg text-slate max-w-2xl mx-auto"
          >
            We formulate with intention, testing extensively to ensure every product supports your baby's developing skin barrier.
          </motion.p>
        </div>
      </section>

      {/* 5. INGREDIENT SPOTLIGHT */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 aspect-square rounded-[24px] overflow-hidden bg-sage-light relative"
            >
              <img 
                src={`${window.location.pathname.startsWith('/kin---clear-class-project') ? '/kin---clear-class-project/' : '/'}assets/editorial/oatmeal.svg`} 
                alt="Colloidal Oatmeal texture" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </motion.div>

            <div className="order-1 lg:order-2 lg:pl-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate mb-3 block">03 / Transparency</span>
              <h2 className="text-fluid-h2 mb-8">Ingredients, without the mystery.</h2>
              
              <div className="bg-ivory border border-sage-light rounded-[24px] p-8 lg:p-12 mb-8">
                <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-4 block">{ingredients[0].category}</span>
                <h3 className="text-3xl font-serif mb-4">{ingredients[0].name}</h3>
                <p className="text-slate mb-6 line-clamp-3">{ingredients[0].whatItIs} {ingredients[0].role}</p>
                
                <div className="pt-6 border-t border-sage-light">
                  <span className="text-sm font-medium mb-3 block">Found in:</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 bg-white rounded-full text-xs font-medium border border-sage-light">Daily Moisturising Lotion</span>
                    <span className="px-4 py-1.5 bg-white rounded-full text-xs font-medium border border-sage-light">Head-to-Toe Cleanser</span>
                  </div>
                </div>
              </div>

              <Link to="/ingredients" className="inline-flex items-center text-charcoal font-medium link-underline pb-1 group">
                Explore the Library <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEWBORN SPLIT ROUTINE */}
      <section className="py-24 lg:py-32 bg-white border-t border-sage-light">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            
            <div className="lg:col-span-4 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate mb-3 block">04 / Routine</span>
              <h2 className="text-fluid-h2 mb-6">The Newborn Essentials</h2>
              <p className="text-slate mb-10">Everything you actually need, nothing you don't. A simplified routine for their first months.</p>
              
              <Link to="/shop" className="inline-flex items-center justify-center bg-ivory border border-sage-light text-charcoal px-8 py-4 rounded-full font-medium transition-colors hover:bg-sage-light w-max">
                Shop Newborn
              </Link>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {featuredProducts.slice(0, 2).map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
