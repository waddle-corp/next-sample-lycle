'use client';

import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) => 
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                );
            } else {
                return [...prev, {...product, quantity: 1}];
            }
        });
    };

    const updateCart = (productId, quantity) => {
        setCartItems((prev) => 
            prev.map((item) => 
                item.id === productId ? {...item, quantity} : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => 
            prev.filter((item) => item.id !== productId)
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);