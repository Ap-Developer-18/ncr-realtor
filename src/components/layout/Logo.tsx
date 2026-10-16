import Link from "next/link";

const PATH =
  "M33.94 14.85 31.3 28.52c-.67 3.46-3.72 5.97-7.25 5.97H12.86c-3.55 0-6.58-2.51-7.25-5.99L2.96 14.83a1.5 1.5 0 0 1 .6-1.5l14.03-9.6a1.9 1.9 0 0 1 1.67 0l14.03 9.6c.48.33.72.92.6 1.5ZM23.63 18.1l-5.17-3.53-5.17 3.53.97 5.01a2.2 2.2 0 0 0 2.18 1.8h4.04a2.2 2.2 0 0 0 2.16-1.8l.97-5.01Z";

export function Logo({ className = "text-white" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={`inline-flex items-center text-3xl font-semibold gap-2 rounded focus-visible:ring-2 focus-visible:ring-brand ${className}`}
    >
      <svg
        viewBox="0 0 37 38"
        className="h-10 w-10"
        aria-hidden
        fill="#FF6415"
        fillRule="evenodd"
      >
        <path d={PATH} />
      </svg>
      <span>NCR Realtor</span>
    </Link>
  );
}
