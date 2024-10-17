import { act, screen } from '@testing-library/react';
import React from 'react';
import { CartContext } from '~/contexts/CartContext';
import { Product } from '~/interfaces/Product';

import { renderWithProviders } from '../helper';

const sampleProduct: Product = {
    id: Math.random().toString(),
    name: 'Sample Product',
    price: "100",
    image: '/sample.jpg',
    offer: '20% OFF',
    hero: "true",
    detail: "This is the latest and greatest product from Derp corp.",
};

const TestComponent: React.FC = () => {
    const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, getTotalQuantity } = React.useContext(CartContext)!;

    return (
        <div>
            <button onClick={() => addToCart(sampleProduct)}>Add to cart</button>
            <button onClick={() => increaseQuantity(sampleProduct.id)}>Increase Quantity</button>
            <button onClick={() => decreaseQuantity(sampleProduct.id)}>Decrease Quantity</button>
            <button onClick={() => removeFromCart(sampleProduct.id)}>Remove from Cart</button>
            <button onClick={clearCart}>Clear Cart</button>
            <span data-testid="total-quantity">{getTotalQuantity()}</span>
        </div>
    );
};

describe('CartProvider', () => {
    it('should add a product to the cart', async () => {
        renderWithProviders(<TestComponent />);

        expect(screen.getByTestId('total-quantity').textContent).toBe('0');

        await act(() => {
            screen.getByText('Add to cart').click();
        });

        expect(screen.getByTestId('total-quantity').textContent).toBe('1');
    });

    it('should increase the quantity of a product in the cart', async () => {
        renderWithProviders(<TestComponent />);

        await act(() => {
            screen.getByText('Add to cart').click();
        });

        expect(screen.getByTestId('total-quantity').textContent).toBe('1');


        await act(() => {
            screen.getByText('Increase Quantity').click();
            screen.getByText('Increase Quantity').click();
        });

        expect(screen.getByTestId('total-quantity').textContent).toBe('3');
    });

    it('should decrease the quantity of a product in the cart', async () => {
        renderWithProviders(<TestComponent />);

        await act(() => {
            screen.getByText('Add to cart').click();
            screen.getByText('Add to cart').click();
            screen.getByText('Add to cart').click();
        });

        expect(screen.getByTestId('total-quantity').textContent).toBe('3');

        await act(() => {
            screen.getByText('Decrease Quantity').click();
        });

        expect(screen.getByTestId('total-quantity').textContent).toBe('2');
    });

    it('should remove a product from the cart', async () => {
        renderWithProviders(<TestComponent />);

        await act(() => {
            screen.getByText('Add to cart').click();
            screen.getByText('Add to cart').click();
        });

        expect(screen.getByTestId('total-quantity').textContent).toBe('2');

        await act(() => {
            screen.getByText('Remove from Cart').click();
        });

        expect(screen.getByTestId('total-quantity').textContent).toBe('0');
    });

    it('should clear the cart', async () => {
        renderWithProviders(<TestComponent />);

        await act(() => {
            screen.getByText('Add to cart').click();
            screen.getByText('Add to cart').click();
        });

        expect(screen.getByTestId('total-quantity').textContent).toBe('2');

        await act(() => {
            screen.getByText('Clear Cart').click();
        });

        expect(screen.getByTestId('total-quantity').textContent).toBe('0');
    });
});
