import { fireEvent, screen } from '@testing-library/react';
import { Mock } from 'vitest';
import CartBox from '~/components/CartBox';
import { useCart } from '~/hooks/useCart';
import { renderWithCartProvider } from '../helper';


vi.mock('~/hooks/useCart');

describe('CartBox', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should display a message when the cart is empty', () => {
        (useCart as Mock).mockReturnValue({
            cart: [],
            increaseQuantity: vi.fn(),
            decreaseQuantity: vi.fn(),
            removeFromCart: vi.fn(),
        });

        renderWithCartProvider(<CartBox onClose={() => { }} />);
        expect(screen.getByText(/você ainda não possui nenhum produto no carrinho/i)).toBeInTheDocument();
    });

    it('should call removeFromCart when the remove button is clicked', () => {
        const mockRemoveFromCart = vi.fn();
        (useCart as Mock).mockReturnValue({
            cart: [
                { product: { id: '1', name: 'Product 1', price: '10.00', image: 'product1.jpg' }, quantity: 1 },
            ],
            increaseQuantity: vi.fn(),
            decreaseQuantity: vi.fn(),
            removeFromCart: mockRemoveFromCart,
        });

        renderWithCartProvider(<CartBox onClose={() => { }} />);
        const removeButton = screen.getByLabelText(/Deletar item/i);
        fireEvent.click(removeButton);

        expect(mockRemoveFromCart).toHaveBeenCalledWith('1');
    });

    it('should call increaseQuantity when the increase button is clicked', () => {
        const mockIncreaseQuantity = vi.fn();
        (useCart as Mock).mockReturnValue({
            cart: [
                { product: { id: '1', name: 'Product 1', price: '10.00', image: 'product1.jpg' }, quantity: 1 },
            ],
            decreaseQuantity: vi.fn(),
            removeFromCart: vi.fn(),
            increaseQuantity: mockIncreaseQuantity,
        });

        renderWithCartProvider(<CartBox onClose={() => { }} />);
        const increaseButton = screen.getByLabelText(/Adicionar unidade/i);
        fireEvent.click(increaseButton);

        expect(mockIncreaseQuantity).toHaveBeenCalledWith('1');
    });

    it('should call decreaseQuantity when the decrease button is clicked', () => {
        const mockDecreaseQuantity = vi.fn();
        (useCart as Mock).mockReturnValue({
            cart: [
                { product: { id: '1', name: 'Product 1', price: '10.00', image: 'product1.jpg' }, quantity: 1 },
            ],
            increaseQuantity: vi.fn(),
            removeFromCart: vi.fn(),
            decreaseQuantity: mockDecreaseQuantity,
        });

        renderWithCartProvider(<CartBox onClose={() => { }} />);
        const decreaseButton = screen.getByLabelText(/Remover unidade/i);
        fireEvent.click(decreaseButton);

        expect(mockDecreaseQuantity).toHaveBeenCalledWith('1');
    });

    it('should close the cart when close button is clicked', () => {
        const onClose = vi.fn();
        renderWithCartProvider(<CartBox onClose={onClose} />);

        const closeButton = screen.getByLabelText(/Fechar carrinho/i);
        fireEvent.click(closeButton);

        expect(onClose).toHaveBeenCalled();
    });
});
