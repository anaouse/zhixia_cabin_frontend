import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage.jsx'
import ShopPage from '@/pages/ShopPage.jsx'
import ConsultPage from '@/pages/ConsultPage.jsx'
import ContentsPage from '@/pages/ContentsPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/consult" element={<ConsultPage />} />
        <Route path="/contents" element={<ContentsPage />} />

        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  )
}