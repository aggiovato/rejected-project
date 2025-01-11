import { createContext, useState, useContext, ReactNode } from "react";

import { ToastType, ToastContextType } from "../utils/types/types";

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (message: string, type: "success" | "error" = "success") => {
    const isDuplicate = toasts.some(
      (toast) => toast.message === message && toast.type === type
    );
    if (isDuplicate) return;

    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-24 right-10 space-y-4 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`relative px-5 py-3 rounded-lg shadow-lg flex items-center justify-between transition-opacity duration-300 ${
              toast.type === "success"
                ? "bg-green-500/90 text-white hover:bg-green-400/90"
                : "bg-red-700/90 text-white hover:bg-red-600/90"
            }`}
          >
            <span className="text-sm">{toast.message}</span>
            <button
              className="ml-4 text-xl font-bold opacity-75 hover:opacity-100"
              onClick={() => removeToast(toast.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
