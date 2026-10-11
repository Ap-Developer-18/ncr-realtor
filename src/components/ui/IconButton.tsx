import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  label: string; children: ReactNode;
}

export function IconButton({ label, className, children, ...rest }: Props) {
  return (
    <button
      type="button" aria-label={label}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
