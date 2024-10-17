import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ProductCard from '~/components/ProductCard';
import { Product } from '~/interfaces/Product';
import { renderWithProviders } from '../helper';

vi.mock('~/utils/formatters', () => ({
    formatCurrency: (value: string) => `R$ ${Number(value).toFixed(2)}`,
}));

describe('ProductCard Component', () => {
    const mockProduct: Product = {
        id: Math.random().toString(),
        name: 'Sample Product',
        detail: 'This is a sample product',
        price: "100",
        image: '/sample.jpg',
        offer: '20% OFF'
    };

    it('should display loading state when no product is passed', () => {
        renderWithProviders(<ProductCard index={0} />);

        expect(screen.getByRole('loading')).toBeInTheDocument();
    });

    it('should display product details when product is passed', () => {
        renderWithProviders(<ProductCard product={mockProduct} index={1} />);

        expect(screen.getByText('Sample Product')).toBeInTheDocument();
        expect(screen.getByText('This is a sample product')).toBeInTheDocument();
        expect(screen.getByText('R$ 100.00')).toBeInTheDocument();
        expect(screen.getByText('20% OFF')).toBeInTheDocument();
    });

    it('should conditionally render "hero" class when product is hero', () => {
        const heroProduct = { ...mockProduct, hero: "just came out" };
        const { container } = renderWithProviders(<ProductCard product={heroProduct} index={2} />);

        expect(container.firstChild).toHaveClass('sm:col-span-2 lg:col-span-3 xl:col-span-4');
    });

    it('should not render offer text if offer is not present', () => {
        const noOfferProduct = { ...mockProduct, offer: '' };
        renderWithProviders(<ProductCard product={noOfferProduct} index={3} />);

        expect(screen.queryByText(/% OFF/)).toBeNull();
    });
});
