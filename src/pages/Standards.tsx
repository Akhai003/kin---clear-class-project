import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Info, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const STANDARDS = [
  {
    num: '01',
    title: 'Purpose Before Trend',
    desc: 'Every ingredient must serve a clear, beneficial purpose. We never use fillers, synthetic dyes, or artificial fragrances. If an ingredient doesn\'t actively protect, nourish, or cleanse, we leave it out.',
    q: 'Why is this ingredient here?',
    a: 'Because it functionally contributes to the health of the skin barrier, or safely stabilizes the formula.'
  },
  {
    num: '02',
    title: 'Ingredient Context',
    desc: 'An ingredient is only as safe as its concentration and context. We meticulously calculate percentages to ensure maximum efficacy with zero irritation for newborn skin.',
    q: 'Does concentration matter?',
    a: 'Absolutely. Even water can be harmful in the wrong context. We dose every active ingredient specifically for infant tolerance.'
  },
  {
    num: '03',
    title: 'Formula Thinking',
    desc: 'We don\'t formulate around one "hero ingredient" for marketing. We formulate entire ecosystems where ingredients support each other—like ceramides working alongside oat lipids.',
    q: 'Why not just use pure oils?',
    a: 'Pure oils can sometimes sit on top of the skin. A formulated emulsion (lotion) delivers both water for hydration and oil to lock it in.'
  },
  {
    num: '04',
    title: 'Age & Usage Consideration',
    desc: 'A diaper cream requires different barrier properties than a face lotion. We design the texture, absorption rate, and protective qualities specifically for how the product will actually be used.',
    q: 'Who is this for?',
    a: 'We specify exactly when a product is suitable from birth, and when it is better introduced at 3 or 6 months.'
  },
  {
    num: '05',
    title: 'Clear Communication',
    desc: 'We refuse to use fear-based marketing. We explain our labels, provide exact usage instructions, and state our limitations clearly without hiding behind chemical jargon.',
    q: 'What does the label say?',
    a: 'Exactly what\'s inside, accompanied by our digital Ingredient Library for full plain-language translation.'
  },
  {
    num: '06',
    title: 'Feedback & Iteration',
    desc: 'The final test is the real world. We constantly refine our products based on the actual experiences of our community of parents navigating daily care.',
    q: 'Do you change formulas?',
    a: 'When new science emerges or our community identifies a need for better usability (like a pump instead of a cap), we evolve.'
  }
];

const CLAIMS = [
  { term: 'Gentle', meaning: 'Formulated with mild surfactants and low-irritation preservatives. It does not strip the natural acid mantle.' },
  { term: 'Dermatologically Tested', meaning: 'The finished formula has been patch-tested on human volunteers (including sensitive skin groups) under the supervision of a dermatologist to check for reactions.' },
  { term: 'Fragrance-Free', meaning: 'Contains no added synthetic or natural fragrances, and no masking agents used simply to hide the smell of raw ingredients.' },
  { term: 'Hypoallergenic', meaning: 'Formulated without known common allergens (like certain essential oils, nuts, or harsh sulfates) to minimize the risk of allergic response.' }
];

export default function Standards() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeClaim, setActiveClaim] = useState(0);
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const assetBase = typeof window !== 'undefined' && window.location.pathname.startsWith('/kin---clear-class-project') ? '/kin---clear-class-project/' : '/';
  const visuals = ['formulation','oatmeal','formulation','parent-care','clear-labels','parent-care'];

  // Simple scroll spy logic for desktop
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.standard-section');
      let current = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          current = index;
        }
      });
      setActiveStep(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-ivory min-h-screen pt-32 pb-24">
      
      {/* Hero */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 lg:mb-20 text-center">
        <span className="text-sage font-semibold tracking-widest uppercase text-xs sm:text-sm mb-6 block">Our Standards</span>
        <h1 className="text-fluid-h1 mb-6">Safety isn't a badge.<br/>It's a process.</h1>
        <p className="text-fluid-body-lg text-slate max-w-2xl mx-auto">
          We don't just say our products are safe. We follow a rigorous 6-step framework to ensure every formula actively supports your baby's skin barrier.
        </p>
      </div>

      {/* Interactive 6-Step Layout */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mb-32 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 relative items-start">
          
          {/* Sticky Left Navigation (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-40 h-[60vh] flex flex-col justify-center">
            <div className="relative pl-8">
              {/* Progress Line */}
              <div className="absolute left-[3px] top-4 bottom-4 w-[2px] bg-sage-light">
                <motion.div 
                  className="absolute top-0 w-full bg-sage transition-all duration-500"
                  style={{ height: `${(activeStep / (STANDARDS.length - 1)) * 100}%` }}
                />
              </div>
              
              <div className="space-y-6">
                {STANDARDS.map((std, idx) => (
                  <div key={idx} className={`transition-all duration-300 relative ${activeStep === idx ? 'opacity-100 translate-x-1' : 'opacity-65'}`}>
                    {/* Dot */}
                    <div className={`absolute -left-[31px] top-1.5 w-2 h-2 rounded-full transition-colors duration-300 ${activeStep === idx ? 'bg-sage' : 'bg-transparent'}`} />
                    <span className="text-sage text-sm font-semibold tracking-widest mb-1 block">{std.num}</span>
                    <h3 className="text-3xl font-serif">{std.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scrolling Content (Right on Desktop, Stacked on Mobile) */}
          <div className="lg:col-span-7 space-y-16 lg:space-y-24 pb-8">
            {STANDARDS.map((std, idx) => (
              <div key={idx} className="standard-section scroll-mt-36">
                <div className="lg:hidden mb-4">
                  <span className="text-sage text-sm font-semibold tracking-widest mb-1 block">{std.num}</span>
                  <h3 className="text-3xl font-serif">{std.title}</h3>
                </div>
                <div className="aspect-[16/9] rounded-[22px] overflow-hidden bg-sage-light mb-7 border border-sage-light">
                  <img src={`${assetBase}assets/editorial/${visuals[idx]}.svg`} alt={`${std.title} visual guide`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
                </div>
                <p className="text-lg lg:text-xl text-slate leading-relaxed mb-6">{std.desc}</p>
                <button onClick={() => setExpandedStep(expandedStep === idx ? null : idx)} className="w-full bg-white rounded-[18px] p-6 border border-sage-light hover:border-sage/70 transition-colors text-left group">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-medium text-charcoal flex items-center gap-2"><Info className="w-4 h-4 text-sage" /> {std.q}</h4>
                    <ChevronDown className={`w-4 h-4 text-slate transition-transform ${expandedStep === idx ? 'rotate-180' : ''}`} />
                  </div>
                  <AnimatePresence initial={false}>
                    {expandedStep === idx && <motion.p initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="text-sm text-slate overflow-hidden pt-4 leading-relaxed">{std.a}</motion.p>}
                  </AnimatePresence>
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Claim Translator */}
      <div className="bg-white border-y border-sage-light py-20 lg:py-24 mb-20 lg:mb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-fluid-h2 mb-6">What does that claim actually mean?</h2>
          <p className="text-slate mb-12">Marketing terms require context. Here is how we define our terminology.</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CLAIMS.map((claim, idx) => (
              <button
                key={idx}
                onClick={() => setActiveClaim(idx)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeClaim === idx 
                    ? 'bg-sage text-white shadow-md' 
                    : 'bg-ivory text-slate border border-sage-light hover:border-sage'
                }`}
              >
                {claim.term}
              </button>
            ))}
          </div>

          <div className="bg-ivory rounded-[24px] p-8 lg:p-12 border border-sage-light/50 min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeClaim}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-lg text-charcoal/80 leading-relaxed"
              >
                {CLAIMS[activeClaim].meaning}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer / Continue Exploring */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h3 className="text-2xl font-serif font-medium mb-12">Continue Exploring</h3>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/ingredients" className="px-8 py-4 bg-white border border-sage-light text-charcoal rounded-full font-medium hover:border-sage transition-all hover:-translate-y-1">
            Ingredient Library
          </Link>
          <Link to="/shop" className="px-8 py-4 bg-charcoal text-ivory rounded-full font-medium hover:bg-sage transition-all hover:-translate-y-1">
            Shop Essentials
          </Link>
        </div>
        <p className="text-xs text-slate mt-12 italic opacity-60">*Claims are for educational prototype demonstration.</p>
      </div>

    </div>
  );
}
