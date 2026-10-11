export type ProjectType = "Residential" | "Commercial";

export interface Project {
  slug: string; name: string; developer: string; location: string;
  price: string; status: string; type: ProjectType; image: string;
}
