import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage, AboutPage, ContactPage, NavbarPage } from './index';


function App() {
  

  return (
      <BrowserRouter>
         <NavbarPage />
        <div>
          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route index element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
