import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { formatCurrency } from '../lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import ProductVisual from './ProductVisual';

export default function CartDrawer() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem } = useCartStore();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
    toggleCart();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-charcoal/40 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-sage-light">
              <h2 className="text-xl font-serif font-medium flex items-center gap-2">
                Your Cart <span className="text-sm font-sans text-slate font-normal">({count})</span>
              </h2>
              <button onClick={toggleCart} className="p-2 text-slate hover:text-charcoal transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-slate space-y-4">
                  <ShoppingBag className="w-12 h-12 text-sage opacity-50" />
                  <p>Your cart is empty.</p>
                  <button 
                    onClick={() => {
                      toggleCart();
                      navigate('/shop');
                    }}
                    className="mt-4 px-6 py-2 border border-charcoal text-charcoal rounded-full hover:bg-charcoal hover:text-ivory transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-sage-light flex-shrink-0">
                        <ProductVisual product={item.product} className="w-full h-full" />
                      </div>
                      <div className="flex flex-col flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-charcoal">{item.product.name}</h3>
                            <p className="text-sm text-slate">{item.product.size}</p>
                          </div>
                          <button 
                            onClick={() => removeItem(item.product.id)}
                            className="p-1 text-slate hover:text-terracotta transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-sage-light rounded-full bg-white">
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1.5 text-slate hover:text-charcoal"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1.5 text-slate hover:text-charcoal"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className="font-medium">{formatCurrency(item.product.price * item.quantity)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-sage-light p-5 space-y-4 bg-white">
                <div className="flex justify-between text-slate text-sm">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between font-serif text-lg font-medium">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full py-4 bg-charcoal text-ivory rounded-full font-medium hover:bg-charcoal/90 transition-colors flex justify-center items-center gap-2"
                >
                  Checkout
                </button>
                <div className="text-center text-xs text-slate">
                  <p>Secure checkout • Free shipping on orders over ₹1000</p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}