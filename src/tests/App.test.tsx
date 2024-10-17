import { render, screen } from '@testing-library/react'
import App from '~/App'

describe('App component', () => {
    it('should display a spinner right away and then a home text', async () => {
        render(<App />)

        const homeText = await screen.findByText(/Digi/i)
        expect(homeText).toBeInTheDocument()
    })

})
