import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router'

const queryClient = new QueryClient()

const router = createBrowserRouter([
    { path: "/quote/:id", element: <App></App> }
])

const root = createRoot(document.getElementById('root')!)
const all = (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
        </RouterProvider>
    </QueryClientProvider>)

root.render(all)

