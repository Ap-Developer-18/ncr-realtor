"use client";
import { useSearchParams } from "next/navigation";
import { properties } from "@/data/properties";
import { filterProperties, parseFilters } from "@/lib/filters";

export function usePropertyFilters() {
  const params = useSearchParams();
  const filters = parseFilters(params);
  return { filters, results: filterProperties(properties, filters) };
}
