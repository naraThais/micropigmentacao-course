import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        bg-white p-8 rounded-xl shadow-lg border border-rose-400/10
        ${
          hover
            ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-400/25"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
