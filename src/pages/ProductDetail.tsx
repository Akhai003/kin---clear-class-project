import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCartStore } from '../store/useCartStore';
import { formatCurrency } from '../lib/utils';
import { ShieldCheck, Plus, Minus, Info, Star } from 'lucide-react';
import { motion } from 'motion/react';
import ProductVisual from '../components/ProductVisual';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'usage' | 'safety'>('ingredients');

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-serif mb-4">Product not found</h1>
        <p className="text-slate mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <button onClick={() => navigate('/shop')} className="px-6 py-2 bg-charcoal text-ivory rounded-full">
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="bg-ivory pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-slate mb-8 flex gap-2">
          <button onClick={() => navigate('/')} className="hover:text-charcoal">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/shop')} className="hover:text-charcoal">Shop</button>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Gallery */}
          <div className="relative aspect-[4/5] md:aspect-square bg-sage-light rounded-2xl overflow-hidden">
<ProductVisual product={product} className="w-full h-full" />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-full shadow-sm text-charcoal">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-serif font-medium mb-3">{product.name}</h1>
            <p className="text-lg text-slate mb-4">{product.shortBenefit}</p>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-medium">{formatCurrency(product.price)}</span>
              <span className="text-sm text-slate px-3 py-1 bg-white rounded-full border border-sage-light">{product.size}</span>
            </div>

            <div className="flex items-center gap-2 mb-8">
              <div className="flex text-terracotta">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className={`w-4 h-4 ${star <= Math.floor(product.rating) ? 'fill-current' : 'fill-transparent'}`} />
                ))}
              </div>
              <span className="text-sm text-slate">{product.rating} ({product.reviewsCount} reviews)</span>
            </div>

            <p className="text-charcoal/80 leading-relaxed mb-8">{product.description}</p>

            <ul className="space-y-3 mb-10 text-sm">
              {product.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-sage shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white p-6 rounded-2xl mb-8 border border-sage-light">
              <div className="flex items-center justify-between mb-6">
                <span className="font-medium">Quantity</span>
                <div className="flex items-center border border-sage-light rounded-full">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-slate hover:text-charcoal"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-slate hover:text-charcoal"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="w-full py-4 bg-charcoal text-ivory rounded-full font-medium hover:bg-charcoal/90 transition-colors"
              >
                Add to Cart — {formatCurrency(product.price * quantity)}
              </button>
            </div>

            {/* Reassurance */}
            <div className="flex items-center justify-center gap-6 text-xs text-slate">
              <span className="flex items-center gap-1"><Info className="w-4 h-4" /> Secure checkout</span>
              <span className="flex items-center gap-1"><Info className="w-4 h-4" /> Dermatologist tested*</span>
              <span className="flex items-center gap-1"><Info className="w-4 h-4" /> Free returns</span>
            </div>
          </div>
        </div>

        {/* Deep Dive Tabs */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-12 border border-sage-light shadow-sm">
          <div className="flex gap-8 border-b border-sage-light mb-8 overflow-x-auto pb-4 hide-scrollbar">
            {['ingredients', 'usage', 'safety'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`text-lg font-serif whitespace-nowrap transition-colors relative ${
                  activeTab === tab ? 'text-charcoal' : 'text-slate hover:text-charcoal'
                }`}
              >
                {tab === 'ingredients' && 'Transparent Ingredients'}
                {tab === 'usage' && 'How to Use'}
                {tab === 'safety' && 'Safety & Testing'}
                {activeTab === tab && (
                  <motion.div layoutId="activeTab" className="absolute -bottom-4 left-0 right-0 h-0.5 bg-charcoal" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[250px]">
            {activeTab === 'ingredients' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <p className="text-slate mb-6">We believe you have the right to know exactly what's inside and why it's there. No hidden terminology.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {(product.ingredients || []).map((ing, idx) => (
                    <div key={idx} className="bg-ivory p-5 rounded-xl border border-sage-light/50">
                      <h4 className="font-medium text-lg mb-2">{ing?.name}</h4>
                      <p className="text-sm text-slate mb-3"><span className="font-medium text-charcoal">What it is:</span> {ing?.whatItIs}</p>
                      <p className="text-sm text-slate"><span className="font-medium text-charcoal">Why it's here:</span> {ing?.role}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'usage' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h4 className="text-xl font-serif mb-4">Directions</h4>
                <p className="text-slate leading-relaxed mb-6">{product.usage}</p>
                <div className="bg-sage-light/50 p-6 rounded-xl inline-block">
                  <span className="block text-sm font-medium mb-1">Age Suitability</span>
                  <span className="text-charcoal">{product.ageSuitability}</span>
                </div>
              </motion.div>
            )}

            {activeTab === 'safety' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-sage shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Dermatologist & Pediatrician Reviewed*</h4>
                      <p className="text-sm text-slate">Formulated under the guidance of pediatric dermatology experts for sensitive skin.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-sage shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Hypoallergenic Promise</h4>
                      <p className="text-sm text-slate">Free from known common allergens, synthetic fragrances, and harsh sulfates.</p>
                    </div>
                  </li>
                </ul>
                <p className="text-xs text-slate mt-8 italic">*For prototype demonstration purposes only. Not actual medical advice.</p>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
