"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Home, KeyRound, MapPin, Search, Wallet } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CustomSelect } from "@/components/ui/CustomSelect";
import { SearchInput } from "@/components/home/SearchInput";
import { BUDGET_LABELS, CATEGORIES, LOCATION_OPTIONS, TRANSACTIONS } from "@/data/search";
import { DEFAULTS, Filters, toQuery } from "@/lib/filters";

export function PropertySearch({ initial = DEFAULTS }: { initial?: Filters }) {
  const router = useRouter();
  const [f, setF] = useState<Filters>(initial);
  const [error, setError] = useState("");
  const set = (k: keyof Filters) => (v: string) => setF((p) => ({ ...p, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const q = f.q.trim();
    if (q.length === 1 || /[<>]/.test(q)) {
      setError("Enter at least 2 characters, using letters or numbers.");
      return;
    }
    setError("");
    router.push(`/properties?${toQuery({ ...f, q })}`);
  };

  return (
    <form onSubmit={submit} role="search" aria-label="Property search" noValidate
      className="relative rounded-2xl border border-line bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start">
        <SearchInput value={f.q} onChange={set("q")} error={error} />
        <Button type="submit" icon={<Search className="h-4 w-4" aria-hidden />} className="py-3.5 lg:px-8">
          Search
        </Button>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <CustomSelect label="Transaction" icon={KeyRound} value={f.tx} options={TRANSACTIONS} onChange={set("tx")} />
        <CustomSelect label="Property type" icon={Home} value={f.cat} options={CATEGORIES} onChange={set("cat")} />
        <CustomSelect label="Location" icon={MapPin} value={f.loc} options={LOCATION_OPTIONS} onChange={set("loc")} />
        <CustomSelect label="Budget" icon={Wallet} value={f.budget} options={BUDGET_LABELS} onChange={set("budget")} />
      </div>
    </form>
  );
}
