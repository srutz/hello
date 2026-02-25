import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type FormContent = {
    email: string
    phone: string
    city: string
}

type FormStore = {
    form: FormContent
    setForm: (content: FormContent) => void
}

export const initialState = {
    email: "",
    phone: "",
    city: ""
}

/* generic form store, with a generic setForm method */
export const useFormStore = create<FormStore>()(
    persist(
        (set) => {
            return {
                form: initialState,
                setForm: (form) => {
                    set((state) => {
                        return {
                            ...state,
                            form: { ...form }
                        }
                    })
                }
            }
        },
        {
            name: "form-store",
            storage: createJSONStorage(() => localStorage),
        }
    )
);