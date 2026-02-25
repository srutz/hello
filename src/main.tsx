import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, NavLink, Outlet, RouterProvider, useLocation, useNavigate } from 'react-router'
import { Suspense, lazy, useEffect } from 'react'

const queryClient = new QueryClient()
const App = lazy(() => import('./App.tsx'))

const router = createBrowserRouter([
    { path: "/", element: <Main></Main>, children: [
        { 
            path: "/quote/:id", 
            element: (
                <Suspense fallback={<div className="p-8">Loading...</div>}>
                    <App></App>
                </Suspense>
            ),
        },
        { path: "*", element: <div className="p-8">Seite nicht gefunden.</div>},
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

function useBillGates() {
    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname.endsWith("/4")) {
            alert("bill gates achtung")
        }
    }, [pathname]);
}

function useLoginRedirect() {
    const navigate = useNavigate()
    const { pathname } = useLocation();
    const loggedIn = false
    useEffect(() => {
        if (!loggedIn && pathname !== "/login") {
            navigate("/login")
        }
    }, [pathname, loggedIn, navigate]);
}

function Menubar() {
    const { pathname } = useLocation();
    useBillGates();
    return (
        <div className="flex h-12 bg-zinc-100 px-2 items-center border-b border-gray-300 gap-2">
            <div className="mr-8">HELLO APP</div>
            <NavLink to="/quote/1">Quote 1</NavLink>
            <NavLink to="/quote/2">Quote 2</NavLink>
            <NavLink to="/quote/3">Quote 3</NavLink>
            <NavLink to="/quote/4">Quote 4</NavLink>
            <div className="grow"></div>
            <div>{pathname}</div>
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

