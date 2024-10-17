import { render } from '@testing-library/react';
import React from 'react';
import { CartProvider } from '~/contexts/CartContext';


const renderWithCartProvider = (ui: React.ReactNode) => {
    return render(<CartProvider>{ui}</CartProvider>);
};

export { renderWithCartProvider };
