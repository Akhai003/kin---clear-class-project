import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug } from '../data/articles';
import { motion, useScroll } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import EditorialVisual from '../components/EditorialVisual';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = slug ? getArticleBySlug(slug) : null;
  const { scrollYProgress } = useScroll();
  const [activeHeading, setActiveHeading] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen pt-32 pb-24 text-center">
        <h1 className="text-3xl font-serif">Article not found</h1>
        <Link to="/blog" className="text-sage mt-4 inline-block">Return to Journal</Link>
      </div>
    );
  }

  return (
    <div className="bg-ivory min-h-screen relative">
      {/* Reading Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-sage z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="pt-32 pb-24">
        {/* Article Header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-12 text-center">
          <span className="text-sage text-sm font-semibold tracking-widest uppercase mb-4 block">{article.category}</span>
          <h1 className="text-fluid-h1 mb-6 leading-tight">{article.title}</h1>
          <div className="flex items-center justify-center gap-4 text-sm text-slate">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-[24px] overflow-hidden bg-sage-light">
            <EditorialVisual kind={article.category === 'Ingredients' ? 'ingredient' : article.category === 'Routines' ? 'bath' : article.category === 'Baby Skin' ? 'baby' : 'journal'} title={article.title} className="w-full h-full" />
          </div>
        </div>

        {/* Article Content Area */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Table of Contents - Sticky Left (Desktop) */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-32">
              <h4 className="text-xs font-semibold tracking-widest text-slate uppercase mb-6">On this page</h4>
              <ul className="space-y-4 text-sm text-slate">
                {/* Simplified TOC for demo. In real app, parse markdown headings */}
                <li className="hover:text-charcoal cursor-pointer transition-colors">Introduction</li>
                <li className="hover:text-charcoal cursor-pointer transition-colors">Why It Matters</li>
                <li className="hover:text-charcoal cursor-pointer transition-colors">How to Protect the Barrier</li>
              </ul>
              
              <Link to="/blog" className="inline-flex items-center gap-2 mt-12 text-sm text-charcoal hover:text-sage transition-colors link-underline pb-1">
                <ArrowLeft className="w-4 h-4" /> Back to Journal
              </Link>
            </div>
          </div>

          {/* Main Body */}
          <div className="flex-grow max-w-2xl">
            <div className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:font-medium prose-h2:text-3xl prose-h2:mt-12 prose-a:text-sage hover:prose-a:text-sage-dark prose-img:rounded-2xl">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-sage-light flex gap-2 flex-wrap">
              {article.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-white border border-sage-light rounded-full text-xs font-medium text-slate">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
        </div>

        {/* Continue Exploring */}
        <div className="max-w-4xl mx-auto text-center border-t border-sage-light pt-24 mt-24 px-4">
          <h3 className="text-2xl font-serif font-medium mb-12">Continue Exploring</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/learn" className="px-8 py-4 bg-white border border-sage-light text-charcoal rounded-full font-medium hover:border-sage transition-all hover:-translate-y-1">
              Knowledge Hub
            </Link>
            <Link to="/shop" className="px-8 py-4 bg-charcoal text-ivory rounded-full font-medium hover:bg-sage transition-all hover:-translate-y-1">
              Shop Essentials
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
