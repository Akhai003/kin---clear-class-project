import React, { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { formatCurrency } from '../lib/utils';
import { Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Checkout() {
  const { items, clearCart } = useCartStore();
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  if (items.length === 0 && !isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-ivory">
        <h1 className="text-3xl font-serif mb-4">Your cart is empty</h1>
        <Link to="/shop" className="px-8 py-3 bg-charcoal text-ivory rounded-full">Return to Shop</Link>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-ivory px-4 text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mb-6">
          <CheckCircle2 className="w-20 h-20 text-sage mx-auto" />
        </motion.div>
        <h1 className="text-4xl font-serif font-medium mb-4">Order Confirmed</h1>
        <p className="text-slate mb-8 max-w-md">Thank you for trusting Kin & Clear. Your gentle baby care essentials are being prepared for shipping.</p>
        <Link to="/shop" className="px-8 py-3 bg-charcoal text-ivory rounded-full">Continue Shopping</Link>
      </div>
    );
  }

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setIsSuccess(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Checkout Form */}
        <div className="flex-grow">
          <div className="flex items-center gap-2 text-sm text-slate mb-8 border-b border-sage-light pb-4">
            <span className={step >= 1 ? 'text-charcoal font-medium' : ''}>Information</span>
            <ArrowRight className="w-3 h-3" />
            <span className={step >= 2 ? 'text-charcoal font-medium' : ''}>Shipping</span>
            <ArrowRight className="w-3 h-3" />
            <span className={step >= 3 ? 'text-charcoal font-medium' : ''}>Payment</span>
          </div>

          <form onSubmit={step === 3 ? handleComplete : (e) => { e.preventDefault(); setStep(step + 1); }}>
            
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-serif mb-6">Contact & Delivery</h2>
                <div className="space-y-4 mb-8">
                  <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 border border-sage-light rounded-xl focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" required className="w-full px-4 py-3 border border-sage-light rounded-xl focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all" />
                    <input type="text" placeholder="Last Name" required className="w-full px-4 py-3 border border-sage-light rounded-xl focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all" />
                  </div>
                  <input type="text" placeholder="Address" required className="w-full px-4 py-3 border border-sage-light rounded-xl focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" required className="w-full px-4 py-3 border border-sage-light rounded-xl focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all" />
                    <input type="text" placeholder="Postal Code" required className="w-full px-4 py-3 border border-sage-light rounded-xl focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all" />
                  </div>
                </div>
                <button type="submit" className="w-full py-4 bg-charcoal text-ivory rounded-full font-medium hover:bg-charcoal/90 transition-colors">
                  Continue to Shipping
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-serif mb-6">Shipping Method</h2>
                <div className="space-y-4 mb-8 border border-sage-light rounded-xl p-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="shipping" defaultChecked className="text-sage focus:ring-sage" />
                      <span>Standard Delivery (3-5 days)</span>
                    </div>
                    <span className="font-medium">Free</span>
                  </label>
                </div>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setStep(1)} className="w-1/3 py-4 border border-charcoal text-charcoal rounded-full font-medium hover:bg-ivory transition-colors">
                    Back
                  </button>
                  <button type="submit" className="w-2/3 py-4 bg-charcoal text-ivory rounded-full font-medium hover:bg-charcoal/90 transition-colors">
                    Continue to Payment
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-serif mb-6">Payment</h2>
                <div className="space-y-4 mb-8">
                  <div className="border border-sage-light rounded-xl p-6">
                    <div className="flex items-center gap-2 text-slate mb-6">
                      <Lock className="w-4 h-4" /> <span>Secure connection (Prototype only, do not enter real data)</span>
                    </div>
                    <div className="space-y-4">
                      <input type="text" placeholder="Card Number" className="w-full px-4 py-3 border border-sage-light rounded-xl focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all" />
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 border border-sage-light rounded-xl focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all" />
                        <input type="text" placeholder="CVC" className="w-full px-4 py-3 border border-sage-light rounded-xl focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setStep(2)} className="w-1/3 py-4 border border-charcoal text-charcoal rounded-full font-medium hover:bg-ivory transition-colors">
                    Back
                  </button>
                  <button type="submit" className="w-2/3 py-4 bg-charcoal text-ivory rounded-full font-medium hover:bg-charcoal/90 transition-colors flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4" /> Pay {formatCurrency(subtotal)}
                  </button>
                </div>
              </motion.div>
            )}

          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[400px] flex-shrink-0 bg-ivory p-8 rounded-3xl h-fit sticky top-24">
          <h3 className="text-xl font-serif font-medium mb-6">Order Summary</h3>
          <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
            {items.map(item => (
              <div key={item.product.id} className="flex gap-4">
                <div className="w-16 h-16 rounded-lg bg-sage-light overflow-hidden flex-shrink-0 relative">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain p-3" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-charcoal text-white text-[10px] flex items-center justify-center rounded-full z-10">{item.quantity}</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-sm text-charcoal">{item.product.name}</h4>
                  <span className="text-sm font-medium">{formatCurrency(item.product.price * item.quantity)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-sage-light pt-6 space-y-3 text-sm">
            <div className="flex justify-between text-slate">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between text-slate">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-serif font-medium text-lg pt-3 border-t border-sage-light text-charcoal">
              <span>Total</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
