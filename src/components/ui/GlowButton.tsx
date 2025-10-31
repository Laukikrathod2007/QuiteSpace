import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const GlowButton = ({ children, variant = "primary", className, onClick, disabled, type }: GlowButtonProps) => {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={cn(
        "neuro-button px-8 py-4 rounded-xl text-white font-medium transition-all duration-300",
        variant === "secondary" && "bg-gradient-to-r from-purple-400 to-purple-600",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </motion.button>
  );
};
