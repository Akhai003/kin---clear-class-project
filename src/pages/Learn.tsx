import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Learn() {
  const articles = [
    {
      title: 'Understanding the Baby Skin Barrier',
      excerpt: 'Why newborn skin loses moisture twice as fast as adult skin, and how to protect it.',
      image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Skin Health'
    },
    {
      title: 'How to Read a Baby-Care Ingredient List',
      excerpt: 'A practical guide to cutting through the jargon and spotting hidden irritants.',
      image: 'https://images.unsplash.com/photo-1544626053-8985dc34ae63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Ingredients'
    },
    {
      title: 'Building a Simple, Tear-Free Bath Routine',
      excerpt: 'Step-by-step guidance for making bath time calm, safe, and bonding.',
      image: 'https://images.unsplash.com/photo-1596541604085-f55a153de5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Routines'
    }
  ];

  return (
    <div className="bg-ivory min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">Parenting Journal</h1>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Practical guidance, scientific breakdowns, and honest advice for navigating the big firsts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-sage-light group cursor-pointer hover:shadow-md transition-all">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-sage uppercase tracking-wider mb-2 block">{article.category}</span>
                <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-terracotta transition-colors">{article.title}</h3>
                <p className="text-slate text-sm mb-6">{article.excerpt}</p>
                <button className="text-charcoal font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 max-w-3xl mx-auto bg-sage-light rounded-3xl p-8 md:p-12 text-center">
          <BookOpen className="w-10 h-10 text-sage mx-auto mb-6" />
          <h2 className="text-2xl font-serif font-medium mb-4">Small guidance for the big firsts.</h2>
          <p className="text-slate mb-8 max-w-lg mx-auto">Receive practical baby-care guides, product education, and thoughtful routines directly in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-grow px-6 py-3 rounded-full border-none focus:ring-2 focus:ring-sage outline-none"
            />
            <button type="submit" className="px-6 py-3 bg-charcoal text-ivory rounded-full font-medium hover:bg-charcoal/90 transition-colors">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>

      </div>
    </div>
  );
}
