
import { ReactNode, createContext, useCallback, useState } from 'react'
import Toast from '../components/Toast'

type ToastColor = 'info' | 'success' | 'warning' | 'error'

interface ToastContextProps {
    showToast: (message: string, severity: ToastColor) => void
}

interface ToastProps {
    open?: boolean
    message: string
    severity: ToastColor
}

export const ToastContext = createContext<ToastContextProps>(
    {} as ToastContextProps,
)

interface ToastProviderProps {
    children: ReactNode
}

const ToastInitialState: ToastProps = {
    open: true,
    message: '',
    severity: 'info',
}

export default function ToastProvider({ children }: ToastProviderProps) {
    const [toast, setToast] = useState<ToastProps>(ToastInitialState)

    const showToast = useCallback(
        (message: string, severity: ToastColor) => {
            setToast({ message, severity })
        },
        [],
    )

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toast.message && (
                <Toast
                    key={Math.random()}
                    open
                    severity={toast.severity}
                    message={toast.message}
                    onClose={() =>
                        setToast({
                            open: false,
                            message: '',
                            severity: 'info',
                        })
                    }
                />
            )}
        </ToastContext.Provider>
    )
}
