export type ItemStatus = "lost" | "found";

export interface Item {
  id: string;
  title: string;
  category: string;
  location: string;
  status: ItemStatus;
  date: string;
  image?: string;
  icon?: string;
  description: string;
}