import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Service from './components/Service'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Banner />
    <Service />
    <h2>Banner Section</h2>
    <h2>Services section</h2>
    <h2>Footer</h2>
  </StrictMode>,
)
