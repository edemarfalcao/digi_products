import { BrowserRouter } from "react-router-dom"
import ApplicationRouter from "~/routes"
import { CartProvider } from "./contexts/CartContext"
import ToastProvider from "./contexts/ToastProvider"

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <CartProvider>
          <ApplicationRouter />
        </CartProvider>
      </ToastProvider>
    </BrowserRouter>
  )
}

export default App
