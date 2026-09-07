import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h2>Navbar</h2>
    <h2>Banner Section</h2>
    <h2>Services section</h2>
    <h2>Footer</h2>
  </StrictMode>,
)
