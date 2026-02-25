import { useEffect, useState } from "react"


export function useWindowSize() {
    const [ size, setSize ] = useState({
        width: -1,
        height: .1
    })
    useEffect(() => {
        (async () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        })()
    }, [])
    
    useEffect(() => {
        const listener = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener("resize", listener);
        return () => {
            window.removeEventListener("resize", listener);
        }
    }, [])

    return size
}