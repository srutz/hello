import { initialState, useFormStore } from "./hooks/useFormStore";

export function Page3() {
    const { form, setForm } = useFormStore();
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Page 3</h1>
            <pre>{JSON.stringify(form, null, 4)}</pre>
            <button onClick={() => {
                setForm(initialState)
            }}>Reset Form</button>
        </div>
    )
}