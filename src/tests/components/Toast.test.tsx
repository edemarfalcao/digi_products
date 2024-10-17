import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Toast from '~/components/Toast';


describe('Toast Component', () => {
    it('should render the toast when open is true', () => {
        render(
            <Toast
                open={true}
                message="This is a success message"
                severity="success"
                onClose={vi.fn()}
            />
        );

        expect(screen.getByRole('alert')).toBeVisible();
        expect(screen.getByText('This is a success message')).toBeInTheDocument();
    });

    it('should not render the toast when open is false', () => {
        render(
            <Toast
                open={false}
                message="This is a success message"
                severity="success"
                onClose={vi.fn()}
            />
        );

        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });

    it('should display the correct icon and color for success severity', () => {
        render(
            <Toast
                open={true}
                message="This is a success message"
                severity="success"
                onClose={vi.fn()}
            />
        );

        const icon = screen.getByTestId('icon');
        const wrapper = screen.getByTestId('icon-wrapper');
        expect(wrapper).toHaveClass(' inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 dark:text-green-200');
        expect(icon).toHaveAttribute('data-icon', 'check');

    });

    it('should trigger the onClose callback when close button is clicked', () => {
        const mockOnClose = vi.fn();
        render(
            <Toast
                open={true}
                message="This is a success message"
                severity="success"
                onClose={mockOnClose}
            />
        );

        const closeButton = screen.getByRole('button', { name: /close/i });
        fireEvent.click(closeButton);

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});
