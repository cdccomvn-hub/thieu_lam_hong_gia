import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import type { CartItem, Product } from "../types";

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: number, quantity: number) => void;
  cartTotal: number;
  cartCount: number;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const raw = localStorage.getItem("cart");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(i => i.id !== id));
    } else {
      setCart(prev => prev.map(i => i.id === id ? { ...i, quantity } : i));
    }
  };

  const clearCart = () => setCart([]);

  const { cartTotal, cartCount } = useMemo(() => {
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const count = cart.reduce((s, i) => s + i.quantity, 0);
    return { cartTotal: total, cartCount: count };
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, cartTotal, cartCount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
