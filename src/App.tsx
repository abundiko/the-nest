import { Route, Routes } from "react-router-dom"
import Index from "./pages/Home/Index"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" index element={<Index />} />
      </Routes>
    </>
  )
}

export default App
