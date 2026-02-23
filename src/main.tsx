import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const elem = document.getElementById('root')!
const root = createRoot(elem)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
