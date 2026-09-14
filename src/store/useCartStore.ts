import { create } from 'zustand';
import { Product, CartItem } from '../types';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (product, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return {
          items: state.items.map(item => 
            item.product.id === product.id 
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
          isOpen: true
        };
      }
      
      return { 
        items: [...state.items, { product, quantity }],
        isOpen: true
      };
    });
  },
  
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.product.id !== productId)
    }));
  },
  
  updateQuantity: (productId, quantity) => {
    if (quantity < 1) return;
    set((state) => ({
      items: state.items.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      )
    }));
  },
  
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  clearCart: () => set({ items: [] })
}));
