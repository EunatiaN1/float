import { useUIStore } from "@/stores/uiStore";

export function useToast() {
  const { toasts, addToast, removeToast } = useUIStore();

  const toast = {
    success: (title: string, description?: string) => addToast({ title, description, type: "success" }),
    error: (title: string, description?: string) => addToast({ title, description, type: "error" }),
    warning: (title: string, description?: string) => addToast({ title, description, type: "warning" }),
    info: (title: string, description?: string) => addToast({ title, description, type: "info" }),
  };

  return { toasts, toast, removeToast };
}
