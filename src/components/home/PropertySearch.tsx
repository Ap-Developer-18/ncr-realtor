"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  KeyRound,
  MapPin,
  Search,
  SearchIcon,
  Wallet,
} from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { CustomSelect } from "@/components/ui/CustomSelect";
import { SearchInput } from "@/components/home/SearchInput";
import {
  BUDGET_LABELS,
  CATEGORIES,
  LOCATION_OPTIONS,
  TRANSACTIONS,
} from "@/data/search";
import { DEFAULTS, Filters, toQuery } from "@/lib/filters";

// Zod validation schema
const searchSchema = z.object({
  q: z
    .string()
    .refine((val) => val.trim().length === 0 || val.trim().length >= 2, {
      message: "Enter at least 2 characters.",
    })
    .refine((val) => !/[<>]/.test(val), {
      message: "Special characters < and > are not allowed.",
    }),
  tx: z.string(),
  cat: z.string(),
  loc: z.string(),
  budget: z.string(),
});

export function PropertySearch({ initial = DEFAULTS }: { initial?: Filters }) {
  const router = useRouter();
  const [f, setF] = useState<Filters>(initial);
  const [error, setError] = useState("");

  const set = (k: keyof Filters) => (v: string) =>
    setF((p) => ({ ...p, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();

    // Parse using Zod
    const result = searchSchema.safeParse(f);

    if (!result.success) {
      // Extract the first validation error
      setError(result.error.message);
      return;
    }

    setError("");
    router.push(
      `/properties?${toQuery({ ...result.data, q: result.data.q.trim() })}`,
    );
  };

  return (
    <form
      onSubmit={submit}
      role="search"
      aria-label="Property search"
      noValidate
      className="relative rounded-[2rem] border border-line/40 bg-white p-4 backdrop-blur-xl shadow-[0_8px_30px_rgb(9,38,29,0.04)] sm:p-5"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        <SearchInput value={f.q} onChange={set("q")} error={error} />
        <Button>
          <SearchIcon /> Search
        </Button>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CustomSelect
          label="Transaction"
          icon={KeyRound}
          value={f.tx}
          options={TRANSACTIONS}
          onChange={set("tx")}
        />
        <CustomSelect
          label="Property type"
          icon={Home}
          value={f.cat}
          options={CATEGORIES}
          onChange={set("cat")}
        />
        <CustomSelect
          label="Location"
          icon={MapPin}
          value={f.loc}
          options={LOCATION_OPTIONS}
          onChange={set("loc")}
        />
        <CustomSelect
          label="Budget"
          icon={Wallet}
          value={f.budget}
          options={BUDGET_LABELS}
          onChange={set("budget")}
        />
      </div>
    </form>
  );
}
