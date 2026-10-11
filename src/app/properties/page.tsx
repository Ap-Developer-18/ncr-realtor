import { Suspense } from "react";
import { PropertyResults } from "@/components/property/PropertyResults";

export const metadata = { title: "Properties" };

export default function PropertiesPage() {
  return (
    <Suspense fallback={<p className="p-8 text-muted">Loading properties…</p>}>
      <PropertyResults />
    </Suspense>
  );
}
