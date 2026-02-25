import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, Link, NavLink, Outlet, RouterProvider } from 'react-router'

const queryClient = new QueryClient()

const router = createBrowserRouter([
    { path: "/", element: <Main></Main>, children: [
        { path: "/quote/:id", element: <App></App> }
    ] },
])

function Main() {
    return (
        <div className="w-screen h-screen flex flex-col ">
            <Menubar></Menubar>
            <Outlet></Outlet>
        </div>
    )
}

function Menubar() {
    return (
        <div className="flex h-12 bg-zinc-100 px-2 items-center border-b border-gray-300 gap-2">
            <div className="mr-8">HELLO APP</div>
            <NavLink to="/quote/1">Quote 1</NavLink>
            <NavLink to="/quote/2">Quote 2</NavLink>
            <NavLink to="/quote/3">Quote 3</NavLink>
            <NavLink to="/quote/4">Quote 4</NavLink>
        </div>
    )
}

const root = createRoot(document.getElementById('root')!)
const all = (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
        </RouterProvider>
    </QueryClientProvider>)

root.render(all)

