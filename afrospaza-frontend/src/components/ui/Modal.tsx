import React, { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          "relative w-full max-w-lg glass-card p-6 md:p-8 border border-white/10 shadow-2xl z-10",
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="mb-5">
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          {description && (
            <p className="text-sm text-zinc-400 mt-1">{description}</p>
          )}
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}
