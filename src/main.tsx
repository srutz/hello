import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const elem = document.getElementById('root')!
const root = createRoot(elem)
root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
)

