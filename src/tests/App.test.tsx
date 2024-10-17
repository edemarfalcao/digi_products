import { screen } from '@testing-library/react'
import App from '~/App'
import { renderWithProviders } from './helper'

describe('App component', () => {
    it('should display a spinner right away and then a home text', async () => {
        renderWithProviders(<App />)

        const homeText = await screen.findByText(/Digi/i)
        expect(homeText).toBeInTheDocument()
    })

})
