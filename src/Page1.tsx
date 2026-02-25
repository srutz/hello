import { useEffect, useState } from "react"

export function Page1() {
    const [ emailChanged, setEmailChanged] = useState(false)

    const [ email, setEmail] = useState("");
    const [ phone, setPhone ] = useState("")
    
    useEffect(() => {
        console.log("page1 mounted")
        return () => {
            console.log("page1 unmounted")
        }
    }, [])
    return (
        <div className="flex flex-col gap-1 p-2">
            <div className="flex gap-1 items-baseline">
                <label className="w-48" htmlFor="phone">E-Mail</label>
                <input placeholder = "Your mail" 
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setEmailChanged(true)
                    }}
                    type="email"
                    id="email" value={email}></input>
            </div>
            {emailChanged && !email.includes("@") && (
                <div className="text-red-400">
                    Invalid E-Mail
                </div>)}
            <div className="flex gap-1 items-baseline">
                <label className="w-48" htmlFor="phone">Phone</label>
                <input placeholder = "Your number" 
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    id="phone" value={phone}></input>
            </div>
        </div>
    )
}