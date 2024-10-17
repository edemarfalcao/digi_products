import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ApplicationRouter from '~/routes';
import { renderWithProviders } from '../helper';

describe('ApplicationRouter', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should display FullPageLoading initially', () => {
        render(
            <MemoryRouter>
                <ApplicationRouter />
            </MemoryRouter>
        );

        expect(screen.getByRole('loading')).toBeInTheDocument();
    });

    it('should render NotFound component for unmatched routes', () => {
        render(
            <MemoryRouter initialEntries={['/unknown']}>
                <ApplicationRouter />
            </MemoryRouter>
        );

        expect(screen.getByText(/Voltar para a home/i)).toBeInTheDocument();
    });

    it('should render the correct component for a valid route', async () => {
        renderWithProviders(
            <MemoryRouter>
                <ApplicationRouter />
            </MemoryRouter>
        );


        await await screen.findByText(/Digi/i)
    });
});
