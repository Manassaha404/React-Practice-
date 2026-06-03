import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Counter.tsx'
import HandelInput from './HandelInput.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <HandelInput/>
  </StrictMode>,
)
