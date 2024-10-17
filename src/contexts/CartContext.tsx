import React, { createContext, useState } from 'react';
import { useToast } from '~/hooks/useToast';
import { CartContextType, CartItem } from '~/interfaces/Cart';
import { Product } from '~/interfaces/Product';

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const { showToast } = useToast();

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existingItem = prev.find((item) => item.product.id === product.id);
            let updatedCart;

            if (existingItem) {
                updatedCart = prev.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updatedCart = [...prev, { product, quantity: 1 }];
            }
            showToast(`${product.name} adicionado ao carrinho`, 'success');
            return updatedCart;
        });
    };


    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((item) => item.product.id !== productId));

        showToast('Produto removido do carrinho', 'error');
    };

    const clearCart = () => {
        setCart([]);

        showToast('Carrinho limpo', 'warning');
    };

    const increaseQuantity = (productId: string) => {
        setCart((prev) => {
            return prev.map((item) =>
                item.product.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        });

        showToast('Unidade adicionada', 'success');
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

        showToast('Unidade removida', 'success');
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
