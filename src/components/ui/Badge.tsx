import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseClasses = "inline-block px-5 py-2 rounded-full text-sm font-medium";

  const variants = {
    default: "bg-white/20 border border-white/30 text-white",
    outline: "border border-rose-400 text-rose-600 bg-white",
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
