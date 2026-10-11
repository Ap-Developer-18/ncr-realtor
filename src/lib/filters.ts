import { BUDGETS } from "@/data/search";
import { Property } from "@/types/property";

export interface Filters { q: string; tx: string; cat: string; loc: string; budget: string }

export const DEFAULTS: Filters = {
  q: "", tx: "All", cat: "All types", loc: "All locations", budget: "Any budget",
};

type Params = { get(key: string): string | null };
const keys = Object.keys(DEFAULTS) as (keyof Filters)[];

export function parseFilters(sp: Params): Filters {
  const f = { ...DEFAULTS };
  keys.forEach((k) => {
    const v = sp.get(k);
    if (v) f[k] = v;
  });
  return f;
}

export function toQuery(f: Filters): string {
  const p = new URLSearchParams();
  keys.forEach((k) => {
    if (f[k] && f[k] !== DEFAULTS[k]) p.set(k, f[k]);
  });
  return p.toString();
}

export function filterProperties(list: Property[], f: Filters): Property[] {
  const q = f.q.toLowerCase();
  const b = BUDGETS.find((x) => x.label === f.budget);
  return list.filter((p) => {
    if (f.tx !== "All" && p.transaction !== f.tx) return false;
    if (f.cat !== DEFAULTS.cat && p.type !== f.cat) return false;
    if (f.loc !== DEFAULTS.loc && p.city !== f.loc) return false;
    if (b && (p.priceLakh < b.min || p.priceLakh >= b.max)) return false;
    return !q || [p.name, p.locality, p.city, p.type].join(" ").toLowerCase().includes(q);
  });
}
