import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Info } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import EditorialVisual from '../components/EditorialVisual';
import Reveal from '../components/Reveal';

const STANDARDS = [
  ['01','Purpose Before Trend','Every ingredient must earn its place. We start with the job the formula needs to do, then choose ingredients for function rather than fashion.','Why does every ingredient need a purpose?','A shorter, purposeful formula is easier to understand and lets parents see the reason behind each component.'],
  ['02','Ingredient Context','An ingredient name alone tells only part of the story. Concentration, format, the rest of the formula and how the product is used all matter.','Why does concentration matter?','The same ingredient can behave differently depending on dose and the system around it. Context is more useful than a simple good/bad list.'],
  ['03','Formula Thinking','We evaluate the finished formula, not just a hero ingredient. Cleansers, creams and balms need different balances of water, oils and supporting ingredients.','Why is one hero ingredient not enough?','A product is a system. Texture, preservation, cleansing strength and barrier support have to work together.'],
  ['04','Age & Usage','Where a product is used, how often it is used and the age it is intended for shape the formula and the instructions around it.','Who is this designed for?','Every product states its intended age and routine role so the user is not left guessing.'],
  ['05','Clear Communication','We prefer plain-language explanations over fear-based labels. Usage, limitations and ingredient roles should be easy to find.','What should a clear label tell me?','What the product is for, how to use it, who it is for and where to learn more about what is inside.'],
  ['06','Feedback & Iteration','A product does not stop evolving when the prototype is finished. Usability feedback can reveal better packaging, clearer instructions and simpler routines.','Why does feedback matter?','Because good care is not only formulation; it is also whether the product is understandable and easy to use in real life.'],
];
const CLAIMS = [
  ['Gentle','A useful claim only when the formula, intended use and instructions support it. We explain what makes the experience mild instead of treating the word as proof by itself.'],
  ['Fragrance-Free','No intentionally added fragrance for scent. The formula may still have a natural raw-material smell.'],
  ['Natural','Origin alone does not determine suitability. We focus on purpose, formulation context and clear communication.'],
  ['Dermatologically Tested','A testing phrase needs method and context. In this academic prototype, such claims are demonstration content rather than verified certification.'],
  ['Hypoallergenic','Not a promise that nobody can react. It should be understood as a formulation approach intended to reduce common triggers, with context.'],
];

export default function Standards(){
 const [active,setActive]=useState(0); const [open,setOpen]=useState<number|null>(0); const [claim,setClaim]=useState(0);
 useEffect(()=>{ const fn=()=>{let c=0; document.querySelectorAll('.standard-section').forEach((el,i)=>{if(el.getBoundingClientRect().top<innerHeight*.52)c=i}); setActive(c)}; addEventListener('scroll',fn,{passive:true}); fn(); return()=>removeEventListener('scroll',fn)},[]);
 return <div className="bg-ivory min-h-screen pt-32 pb-24">
  <Reveal className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28 text-center">
   <span className="text-sage font-semibold tracking-[.2em] uppercase text-xs sm:text-sm mb-5 block">Our Standards</span>
   <h1 className="text-fluid-h1 mb-6">Safety isn't a badge.<br/><span className="italic text-sage">It's a process.</span></h1>
   <p className="text-fluid-body-lg text-slate max-w-3xl mx-auto">Confidence comes from understanding purpose, formulation context, age, usage and communication — not from a wall of badges.</p>
  </Reveal>

  <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mb-28">
   <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
    <aside className="hidden lg:block lg:col-span-4 sticky top-32 py-6">
     <p className="text-xs tracking-[.2em] uppercase text-slate mb-8">Our six-part framework</p>
     <div className="relative pl-7 border-l border-sage-light space-y-6">
      {STANDARDS.map((s,i)=><a href={`#standard-${i}`} key={s[0]} className={`block transition-all duration-300 ${active===i?'text-charcoal translate-x-1':'text-slate/70 hover:text-charcoal'}`}><span className="text-xs text-sage tracking-widest block mb-1">{s[0]}</span><span className="font-serif text-[clamp(1.25rem,1.6vw,1.75rem)]">{s[1]}</span>{active===i&&<motion.span layoutId="std-dot" className="absolute -left-[5px] w-[9px] h-[9px] rounded-full bg-sage mt-3"/>}</a>)}
     </div>
    </aside>
    <div className="lg:col-span-8 space-y-20 lg:space-y-28">
     {STANDARDS.map((s,i)=><Reveal key={s[0]}><section id={`standard-${i}`} className="standard-section scroll-mt-36 grid md:grid-cols-2 gap-8 lg:gap-12 items-center border-b border-sage-light pb-16 lg:pb-20">
       <EditorialVisual kind={i===3?'baby':i===4?'label':'standards'} title={s[1]} className="aspect-[4/3] rounded-[22px]"/>
       <div><span className="text-sage text-xs font-semibold tracking-[.2em] uppercase">{s[0]} / Standard</span><h2 className="text-fluid-h3 mt-3 mb-5">{s[1]}</h2><p className="text-fluid-body text-slate mb-7">{s[2]}</p>
       <button onClick={()=>setOpen(open===i?null:i)} className="w-full text-left border-y border-sage-light py-4 flex items-center justify-between gap-4 group"><span className="flex items-center gap-2 font-medium"><Info className="w-4 h-4 text-sage"/>{s[3]}</span><ChevronDown className={`w-4 h-4 transition-transform ${open===i?'rotate-180':''}`}/></button>
       <AnimatePresence>{open===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden text-slate pt-4">{s[4]}</motion.p>}</AnimatePresence>
       </div>
     </section></Reveal>)}
    </div>
   </div>
  </div>

  <section className="bg-white border-y border-sage-light py-20 lg:py-28 mb-24"><div className="max-w-5xl mx-auto px-4 sm:px-6">
   <Reveal><span className="text-xs tracking-[.2em] uppercase text-sage font-semibold">Claim translator</span><h2 className="text-fluid-h2 mt-3 mb-5">Words you see. <span className="italic text-sage">Context you deserve.</span></h2><p className="text-slate text-lg mb-10 max-w-2xl">Marketing language is most useful when it comes with an explanation.</p></Reveal>
   <div className="flex gap-6 overflow-x-auto hide-scrollbar border-b border-sage-light mb-8">{CLAIMS.map((c,i)=><button key={c[0]} onClick={()=>setClaim(i)} className={`pb-4 whitespace-nowrap text-sm transition-colors ${claim===i?'text-charcoal border-b-2 border-charcoal':'text-slate hover:text-charcoal'}`}>{c[0]}</button>)}</div>
   <AnimatePresence mode="wait"><motion.div key={claim} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12"><h3 className="font-serif text-3xl">{CLAIMS[claim][0]}</h3><p className="text-fluid-body text-slate">{CLAIMS[claim][1]}</p></motion.div></AnimatePresence>
  </div></section>

  <div className="max-w-[1200px] mx-auto px-4 sm:px-6"><span className="text-xs tracking-[.2em] uppercase text-slate">Continue exploring</span><div className="mt-5 border-t border-sage-light">{[['Ingredients without the mystery','Understand what goes into a formula.','/ingredients'],['Learn the basics','Explore clear, five-minute guides.','/learn'],['Read the Journal','Go deeper with editorial stories.','/blog']].map((x,i)=><Link key={x[0]} to={x[2]} className="group grid sm:grid-cols-[60px_1fr_auto] gap-3 items-center py-6 border-b border-sage-light"><span className="text-sage text-sm">0{i+1}</span><div><h3 className="font-serif text-2xl group-hover:text-sage transition-colors">{x[0]}</h3><p className="text-slate text-sm mt-1">{x[1]}</p></div><ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1"/></Link>)}</div><p className="text-xs text-slate mt-8 italic">*Educational prototype content; not medical advice or verified certification.</p></div>
 </div>
}
