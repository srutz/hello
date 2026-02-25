import { create } from "zustand";

type FormContent = {
    email: string
    phone: string
}

type FormStore = {
    form: FormContent
    setForm: (content: FormContent) => void
}

export const useFormStore = create<FormStore>((set) => {
    return {
        form: {
            email: "",
            phone: "",
        },
        setForm: (form) => {
            set((state) => {
                return {
                    ...state,
                    form: {...form}
                }
            })
        }
    }
});