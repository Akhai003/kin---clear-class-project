import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';

const Story = ({ article, compact=false }: {article:any, compact?:boolean}) => (
  <Link to={`/article/${article.slug}`} className={`group ${compact ? 'grid grid-cols-[92px_1fr] sm:grid-cols-[120px_1fr] gap-4 sm:gap-5 items-center' : 'block'}`}>
    <div className={`${compact ? 'aspect-[4/3]' : 'aspect-[4/3] mb-5'} overflow-hidden rounded-[16px] bg-sage-light`}>
      <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
    </div>
    <div><span className="text-sage text-[11px] font-semibold tracking-widest uppercase">{article.category}</span><h3 className={`${compact ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'} font-serif mt-2 mb-2 group-hover:text-sage transition-colors leading-tight`}>{article.title}</h3><div className="flex items-center gap-2 text-xs text-slate"><Clock className="w-3.5 h-3.5" />{article.readTime}</div></div>
  </Link>
);

export default function Blog() {
  const featured = articles[0];
  const editors = articles.slice(1,4);
  const babySkin = articles.filter(a => a.category === 'Baby Skin 101').slice(0,3);
  const ingredients = articles.filter(a => a.category === 'Ingredients Explained').slice(0,4);
  const routines = articles.filter(a => a.category === 'Bath & Routines').slice(0,3);
  const parents = articles.filter(a => a.category === 'First-Time Parent Guides' || a.category === 'Product Guides').slice(0,3);
  const mostRead = articles.slice(0,5);

  return (
    <div className="bg-ivory min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <header className="grid lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16"><div className="lg:col-span-8"><span className="text-sage font-semibold tracking-widest uppercase text-xs sm:text-sm mb-5 block">Kin & Clear Journal</span><h1 className="text-fluid-h1 mb-5">Thoughtful reads for the little questions.</h1><p className="text-fluid-body-lg text-slate max-w-2xl">Baby skin, ingredient context, simple routines and practical guides — written to make the next decision feel clearer.</p></div><div className="lg:col-span-4 lg:text-right text-sm text-slate">New stories, deep dives & quick reads.</div></header>

        {featured && <motion.section initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} className="mb-20 lg:mb-24"><Link to={`/article/${featured.slug}`} className="group grid lg:grid-cols-12 bg-white rounded-[26px] overflow-hidden border border-sage-light"><div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[260px] sm:min-h-[340px] lg:min-h-[420px] overflow-hidden"><img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" /></div><div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center"><span className="text-sage text-xs font-semibold tracking-widest uppercase mb-4">Featured / {featured.category}</span><h2 className="text-fluid-h2 mb-5 group-hover:text-sage transition-colors">{featured.title}</h2><p className="text-fluid-body text-slate mb-8">{featured.excerpt}</p><div className="flex items-center gap-5 text-sm"><span className="font-medium inline-flex items-center gap-1 link-underline pb-1">Read Story <ArrowRight className="w-4 h-4" /></span><span className="text-slate">{featured.readTime}</span></div></div></Link></motion.section>}

        <section className="mb-20 lg:mb-24"><div className="flex items-end justify-between mb-9"><div><span className="text-xs uppercase tracking-widest text-slate font-semibold">Editor's Picks</span><h2 className="text-fluid-h3 mt-2">Start here</h2></div></div><div className="grid md:grid-cols-3 gap-7">{editors.map(a=><Story key={a.id} article={a}/>)}</div></section>

        {babySkin.length > 0 && <section className="py-16 lg:py-20 border-y border-sage-light mb-20 lg:mb-24"><div className="grid lg:grid-cols-12 gap-10"><div className="lg:col-span-3"><span className="text-xs uppercase tracking-widest text-sage font-semibold">Baby Skin 101</span><h2 className="text-fluid-h3 mt-3 mb-4">Understand the barrier.</h2><p className="text-slate">The basics behind dryness, sensitivity and everyday skin support.</p></div><div className="lg:col-span-9 grid md:grid-cols-3 gap-7">{babySkin.map(a=><Story key={a.id} article={a}/>)}</div></div></section>}

        <section className="grid lg:grid-cols-12 gap-12 mb-20 lg:mb-24"><div className="lg:col-span-8"><div className="mb-8"><span className="text-xs uppercase tracking-widest text-sage font-semibold">Ingredient Deep Dives</span><h2 className="text-fluid-h3 mt-2">What's inside, in plain language.</h2></div><div className="grid sm:grid-cols-2 gap-7">{ingredients.map(a=><Story key={a.id} article={a}/>)}</div></div><aside className="lg:col-span-4 bg-sage-light/65 rounded-[24px] p-7 lg:p-9 h-fit lg:sticky lg:top-32"><span className="text-xs uppercase tracking-widest text-slate font-semibold">Most Read</span><div className="mt-6 divide-y divide-sage/25">{mostRead.map((a,i)=><Link key={a.id} to={`/article/${a.slug}`} className="group grid grid-cols-[36px_1fr] gap-3 py-5 first:pt-0"><span className="font-serif text-2xl text-sage">0{i+1}</span><div><h3 className="font-serif text-lg leading-snug group-hover:text-sage transition-colors">{a.title}</h3><span className="text-xs text-slate mt-2 block">{a.readTime}</span></div></Link>)}</div></aside></section>

        {routines.length > 0 && <section className="mb-20 lg:mb-24"><div className="mb-8"><span className="text-xs uppercase tracking-widest text-sage font-semibold">Routines & Care</span><h2 className="text-fluid-h3 mt-2">Small routines, clear reasons.</h2></div><div className="grid md:grid-cols-3 gap-7">{routines.map(a=><Story key={a.id} article={a}/>)}</div></section>}

        {parents.length > 0 && <section className="bg-white rounded-[26px] border border-sage-light p-7 lg:p-10 mb-20 lg:mb-24"><div className="grid lg:grid-cols-12 gap-10"><div className="lg:col-span-4"><span className="text-xs uppercase tracking-widest text-sage font-semibold">New Parent Notes</span><h2 className="text-fluid-h3 mt-3 mb-4">Less noise. Better starting points.</h2><p className="text-slate">Practical guides for choosing what you need without turning baby care into a 12-step routine.</p></div><div className="lg:col-span-8 space-y-6">{parents.map(a=><Story key={a.id} article={a} compact/>)}</div></div></section>}

        <section className="bg-charcoal text-ivory rounded-[26px] p-6 sm:p-8 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8"><div><span className="text-xs uppercase tracking-widest text-sage-light font-semibold">Journal Notes</span><h2 className="text-fluid-h3 mt-3 mb-3">Useful, occasional, and easy to leave.</h2><p className="text-ivory/70 max-w-2xl">New guides and ingredient explainers without turning your inbox into another parenting task.</p></div><div className="flex w-full lg:w-auto"><input aria-label="Email address" placeholder="Email address" className="min-w-0 lg:w-72 bg-white/10 border border-white/20 rounded-l-full px-5 py-4 outline-none focus:border-sage-light"/><button className="bg-ivory text-charcoal px-6 rounded-r-full font-medium hover:bg-sage-light transition-colors">Join</button></div></section>
      </div>
    </div>
  );
}
