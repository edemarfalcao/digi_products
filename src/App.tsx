import { BrowserRouter } from "react-router-dom"
import ApplicationRouter from "~/routes"

function App() {
  return (
    <BrowserRouter>
      <ApplicationRouter />
    </BrowserRouter>
  )
}

export default App
