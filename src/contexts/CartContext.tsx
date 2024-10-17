import React, { createContext, useState } from 'react';
import { CartContextType, CartItem } from '~/interfaces/Cart';
import { Product } from '~/interfaces/Product';


export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existingItem = prev.find((item) => item.product.id === product.id);
            if (existingItem) {
                return prev.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((item) => item.product.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const increaseQuantity = (productId: string) => {
        setCart((prev) => {
            return prev.map((item) =>
                item.product.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        });
    };

    const decreaseQuantity = (productId: string) => {
        setCart((prev) => {
            return prev
                .map((item) =>
                    item.product.id === productId
                        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
                        : item
                )
                .filter((item) => item.quantity > 0);
        });
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, getTotalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
