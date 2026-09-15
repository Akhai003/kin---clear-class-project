import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { articles } from '../data/articles';

const TOPICS = [
  { id: 'skin', label: 'Baby Skin 101', desc: 'Barrier basics, dryness, and sensitive skin.', categories: ['Baby Skin 101'] },
  { id: 'routines', label: 'Routines', desc: 'Bath, moisture, diaper, and bedtime guides.', categories: ['Bath & Routines'] },
  { id: 'ingredients', label: 'Ingredients 101', desc: 'Reading labels, fragrance, and formulation.', categories: ['Ingredients Explained'] },
  { id: 'parents', label: 'First-Time Parents', desc: 'What you actually need and how to choose.', categories: ['First-Time Parent Guides','Product Guides'] },
];

const GUIDES = [
  { title: 'Baby Skin', image: 'baby-skin', slug: 'understanding-baby-skin-barrier' },
  { title: 'Ingredient Lists', image: 'ingredient-label', slug: 'how-to-read-ingredient-list' },
  { title: 'Bath Time', image: 'bath-routine', slug: 'building-tear-free-bath-routine' },
  { title: 'Diaper Care', image: 'diaper-care', slug: 'simple-diaper-care-routine' },
  { title: 'Simple Routines', image: 'simple-routine', slug: 'newborn-care-kit' },
];

export default function Learn() {
  const [activeTopic, setActiveTopic] = useState(TOPICS[0].id);
  const guideVisual = (name: string) => ({
    'baby-skin': 'https://images.pexels.com/photos/16865225/pexels-photo-16865225.jpeg?auto=compress&cs=tinysrgb&w=1200&h=750&fit=crop',
    'ingredient-label': 'https://images.pexels.com/photos/12035712/pexels-photo-12035712.jpeg?auto=compress&cs=tinysrgb&w=1200&h=750&fit=crop',
    'bath-routine': 'https://images.pexels.com/photos/6849418/pexels-photo-6849418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=750&fit=crop',
    'diaper-care': 'https://images.pexels.com/photos/8432197/pexels-photo-8432197.jpeg?auto=compress&cs=tinysrgb&w=1200&h=750&fit=crop',
    'simple-routine': 'https://images.pexels.com/photos/20509002/pexels-photo-20509002.jpeg?auto=compress&cs=tinysrgb&w=1200&h=750&fit=crop',
    'parent-care': 'https://images.pexels.com/photos/6969089/pexels-photo-6969089.jpeg?auto=compress&cs=tinysrgb&w=1200&h=750&fit=crop',
  } as Record<string,string>)[name] || 'https://images.pexels.com/photos/20509002/pexels-photo-20509002.jpeg?auto=compress&cs=tinysrgb&w=1200&h=750&fit=crop';
  const topic = TOPICS.find(t => t.id === activeTopic)!;
  const topicArticles = articles.filter(a => topic.categories.includes(a.category)).slice(0, 4);

  return (
    <div className="bg-ivory min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 lg:mb-24">
          <div className="lg:col-span-7 max-w-3xl">
            <span className="text-sage font-semibold tracking-widest uppercase text-xs sm:text-sm mb-6 block">Knowledge Hub</span>
            <h1 className="text-fluid-h1 mb-6">Learn without the overwhelm.</h1>
            <p className="text-fluid-body-lg text-slate">Clear explanations for the questions that show up between the big firsts — from baby skin and labels to simple everyday routines.</p>
          </div>
          <div className="lg:col-span-5 aspect-[4/3] rounded-[24px] overflow-hidden border border-sage-light">
            <img src={guideVisual('parent-care')} alt="Kin & Clear learning hub" className="w-full h-full object-cover" />
          </div>
        </div>

        <section className="grid lg:grid-cols-12 gap-8 lg:gap-14 mb-24 lg:mb-28">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-slate mb-2">Choose a learning path</span>
            {TOPICS.map((t) => (
              <button key={t.id} onClick={() => setActiveTopic(t.id)} className={`text-left p-5 rounded-[18px] transition-all duration-300 border ${activeTopic === t.id ? 'bg-white border-sage shadow-[0_4px_20px_rgb(0,0,0,0.03)]' : 'bg-transparent border-sage-light/60 hover:bg-white/60 hover:border-sage/60'}`}>
                <h3 className={`text-xl font-serif mb-1 ${activeTopic === t.id ? 'text-charcoal' : 'text-slate'}`}>{t.label}</h3>
                <p className="text-sm text-slate">{t.desc}</p>
              </button>
            ))}
          </div>
          <div className="lg:col-span-8 bg-white rounded-[28px] p-7 lg:p-10 border border-sage-light">
            <AnimatePresence mode="wait">
              <motion.div key={activeTopic} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.25}}>
                <div className="flex items-center gap-3 mb-7 pb-6 border-b border-sage-light">
                  <div className="w-11 h-11 rounded-full bg-sage-light flex items-center justify-center text-sage"><BookOpen className="w-5 h-5" /></div>
                  <div><h2 className="text-2xl font-serif">{topic.label}</h2><span className="text-sm text-slate">Selected guides</span></div>
                </div>
                <div className="divide-y divide-sage-light">
                  {topicArticles.map((article) => (
                    <Link key={article.id} to={`/article/${article.slug}`} className="group grid sm:grid-cols-[110px_1fr_auto] gap-5 items-center py-5 first:pt-0 last:pb-0">
                      <img src={article.image} alt="" className="w-full aspect-[4/3] object-cover rounded-[12px] bg-sage-light" />
                      <div><span className="text-[11px] uppercase tracking-widest text-sage font-semibold">{article.category}</span><h4 className="font-serif text-xl mt-1 group-hover:text-sage transition-colors">{article.title}</h4><p className="text-sm text-slate mt-1 line-clamp-1">{article.excerpt}</p></div>
                      <ChevronRight className="w-5 h-5 text-slate group-hover:text-sage group-hover:translate-x-1 transition-all hidden sm:block" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="mb-24 lg:mb-28">
          <div className="flex items-end justify-between mb-10">
            <div><span className="text-xs font-semibold tracking-widest uppercase text-slate mb-3 block">Quick learning</span><h2 className="text-fluid-h2 mb-3">5-Minute Guides</h2><p className="text-slate">Visual starting points when you want the useful part first.</p></div>
          </div>
          <div className="flex gap-6 overflow-x-auto hide-scrollbar snap-x pb-4">
            {GUIDES.map((guide, i) => (
              <motion.div key={guide.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="min-w-[82vw] sm:min-w-[360px] lg:min-w-[390px] snap-start bg-white rounded-[22px] overflow-hidden border border-sage-light group hover:border-sage/60 transition-colors">
                <div className="aspect-[16/10] overflow-hidden"><img src={guideVisual(guide.image)} alt={`${guide.title} visual guide`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" /></div>
                <div className="p-6"><div className="flex items-center gap-2 text-xs text-slate mb-3"><Clock className="w-4 h-4" /> 5 min</div><h3 className="text-2xl font-serif mb-5">{guide.title} in 5 Minutes</h3><Link to={`/article/${guide.slug}`} className="inline-flex items-center gap-1 text-sm font-medium link-underline pb-1">Read Guide <ArrowRight className="w-4 h-4" /></Link></div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-charcoal text-ivory rounded-[28px] p-9 lg:p-16 border border-charcoal/20 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10"><div><span className="text-xs uppercase tracking-widest text-sage-light font-semibold">Plain-language glossary</span><h2 className="text-fluid-h2 mt-4 mb-5">Confused by a term?</h2><p className="text-lg text-ivory/75 max-w-xl">Humectant, occlusive, surfactant, ceramide — learn what common skincare terms mean and why they show up on a label.</p></div><div className="grid grid-cols-2 gap-3 text-sm">{['Humectant','Emollient','Occlusive','Surfactant','Ceramide','Fragrance-free'].map(x=><div key={x} className="border border-white/15 rounded-[14px] p-4 hover:bg-white/5 transition-colors">{x}</div>)}</div></div>
        </section>
      </div>
    </div>
  );
}
