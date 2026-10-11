import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (v: string) => void;
  error?: string;
}

export function SearchInput({ value, onChange, error }: Props) {
  return (
    <div className="flex-1">
      <label className="flex items-center gap-3 rounded-2xl border border-line/50 bg-white px-5 py-3.5 transition-all duration-300 focus-within:border-forest/20 focus-within:bg-forest/[0.02] focus-within:shadow-sm focus-within:ring-4 focus-within:ring-forest/5 hover:border-line">
        <Search
          className="h-5 w-5 shrink-0 text-muted/70 transition-colors group-focus-within:text-forest"
          aria-hidden
        />
        <span className="sr-only">
          Search by city, locality, project or keyword
        </span>
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search city, locality, project or keyword"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "search-error" : undefined}
          className="w-full bg-transparent text-sm text-forest placeholder:text-muted/70 focus:outline-none"
        />
      </label>
      {error && (
        <p
          id="search-error"
          role="alert"
          className="mt-2 ml-2 text-sm text-red-500/90 font-medium"
        >
          {error}
        </p>
      )}
    </div>
  );
}
