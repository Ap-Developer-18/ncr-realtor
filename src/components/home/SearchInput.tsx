import { Search } from "lucide-react";

interface Props { value: string; onChange: (v: string) => void; error?: string }

export function SearchInput({ value, onChange, error }: Props) {
  return (
    <div className="flex-1">
      <label className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 focus-within:border-brand">
        <Search className="h-4 w-4 shrink-0 text-brand" aria-hidden />
        <span className="sr-only">Search by city, locality, project or keyword</span>
        <input
          type="search" value={value} onChange={(e) => onChange(e.target.value)}
          placeholder="Search city, locality, project or keyword"
          aria-invalid={Boolean(error)} aria-describedby={error ? "search-error" : undefined}
          className="w-full bg-transparent text-sm text-forest placeholder:text-muted focus:outline-none"
        />
      </label>
      {error && <p id="search-error" role="alert" className="mt-2 text-sm text-brand-dark">{error}</p>}
    </div>
  );
}
