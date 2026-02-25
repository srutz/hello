import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Main } from './App.tsx'
import { Page1 } from './Page1.tsx'
import { Page2 } from './Page2.tsx'
import { Page3 } from './Page3.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
    { path: "/", element: <Main></Main>, children: [
        { path: "/page1", element: <Page1></Page1> },
        { path: "/page2", element: <Page2></Page2> },
        { path: "/page3", element: <Page3></Page3> },
        { path: "*", element: <div className="p-8">Seite nicht gefunden.</div>},
    ] },
])


const root = createRoot(document.getElementById('root')!)
const all = (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
        </RouterProvider>
    </QueryClientProvider>)

root.render(all)

