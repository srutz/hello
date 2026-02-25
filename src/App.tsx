import { NavLink, Outlet, } from "react-router"



export default App




export function Main() {
    return (
        <div className="w-screen h-screen flex flex-col ">
            <Menubar></Menubar>
            <Outlet></Outlet>
        </div>
    )
}


export function Menubar() {
    return (
        <div className="flex h-12 bg-zinc-100 px-2 items-center border-b border-gray-300 gap-2">
            <div className="mr-8">FORM APP</div>
            <NavLink to="/page1">Page 1</NavLink>
            <NavLink to="/page2">Page 2</NavLink>
            <NavLink to="/page3">Page 3</NavLink>
        </div>
    )
}

export function App() {
  return (
    <div className="p-3 flex flex-col items-center">
    </div>
  )
}
