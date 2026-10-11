import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface Props extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  variant?: Variant;
  href?: string;
  arrow?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  children: ReactNode;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 lg:text-lg font-semibold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const styles: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "bg-forest text-white hover:bg-forest-light",
  outline:
    "border border-current bg-transparent hover:border-brand hover:text-brand",
  ghost: "bg-transparent hover:bg-forest/5",
};

export function Button({
  variant = "primary",
  href,
  arrow,
  icon,
  loading,
  className,
  children,
  disabled,
  ...rest
}: Props) {
  const cls = cn(base, styles[variant], className);
  const content = (
    <>
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
      ) : (
        icon
      )}
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );
  if (href)
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  return (
    <button
      type="button"
      className={cls}
      disabled={disabled || loading}
      {...rest}
    >
      {content}
    </button>
  );
}
