import { useEffect, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  align: "center" | "right";
  children: ReactNode;
}

const POSITION_CLASSES: Record<NavMenuProps["align"], string> = {
  center: "left-1/2 -translate-x-1/2 origin-top",
  right: "right-4 sm:right-6 origin-top-right",
};

export default function NavMenu({ isOpen, onClose, align, children }: NavMenuProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -8, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, backdropFilter: "blur(12px)" }}
          exit={{ opacity: 0, scale: 0.95, y: -8, backdropFilter: "blur(0px)" }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className={`absolute top-full mt-2 w-48 z-40 rounded-2xl overflow-hidden glass-card p-3 flex flex-col gap-1 ${POSITION_CLASSES[align]}`}
        >
          <div ref={ref}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
