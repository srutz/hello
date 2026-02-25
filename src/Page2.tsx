import { useFormStore } from "./hooks/useFormStore";

export function Page2() {
    const { form, setForm } = useFormStore();
    return (
        <div className="flex flex-col gap-1 p-2">
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