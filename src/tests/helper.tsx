import { render } from '@testing-library/react';
import React from 'react';
import { CartProvider } from '~/contexts/CartContext';
import ToastProvider from '~/contexts/ToastProvider';


const renderWithProviders = (ui: React.ReactNode) => {
    return render(
        <ToastProvider>
            <CartProvider>
                {ui}
            </CartProvider>
        </ToastProvider>);
};

export { renderWithProviders };
