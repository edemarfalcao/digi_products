import { screen } from '@testing-library/react'
import App from '~/App'
import { renderWithCartProvider } from './helper'

describe('App component', () => {
    it('should display a spinner right away and then a home text', async () => {
        renderWithCartProvider(<App />)

        const homeText = await screen.findByText(/Digi/i)
        expect(homeText).toBeInTheDocument()
    })

})
