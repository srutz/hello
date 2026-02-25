import { useState } from "react"
import { useFormStore } from "./hooks/useFormStore"

export function Page1() {
    const [ emailChanged, setEmailChanged] = useState(false)

    const { form, setForm } = useFormStore();
    console.log("Page1 rendered")

    return (
        <div className="flex flex-col gap-1 p-2">
            <div className="flex gap-1 items-baseline">
                <label className="w-48" htmlFor="phone">E-Mail</label>
                <input placeholder = "Your mail" 
                    onChange={(e) => {
                        const newForm = structuredClone(form);
                        newForm.email = e.target.value;
                        setForm(newForm);
                        setEmailChanged(true)
                    }}
                    type="email"
                    id="email" value={form.email}></input>
            </div>
            {emailChanged && !form.email.includes("@") && (
                <div className="text-red-400">
                    Invalid E-Mail
                </div>)}
            <div className="flex gap-1 items-baseline">
                <label className="w-48" htmlFor="phone">Phone</label>
                <input placeholder = "Your number" 
                    onChange={(e) => setForm({
                        ...form,
                        phone: e.target.value
                    })
                    }
                    type="tel"
                    id="phone" value={form.phone}></input>
            </div>
        </div>
    )
}