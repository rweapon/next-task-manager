"use client";

import { X } from "lucide-react";
import { useCallback, useEffect, memo } from "react";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  onCloseModal: VoidFunction;
  title: string;
  children: React.ReactNode;
};

export const Modal = memo(function Modal({ isOpen, onCloseModal, title, children }: Props) {
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseModal();
      }
    },
    [onCloseModal]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onCloseModal}>
      <div className="w-full max-w-[90%] sm:max-w-md rounded-lg bg-white p-6 dark:bg-gray-800" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onCloseModal}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X/>
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
});
