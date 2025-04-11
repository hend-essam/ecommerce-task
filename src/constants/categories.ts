export const CATEGORIES = [
  "Electronics",
  "Clothing",
  "Furniture",
  "Toys",
  "Books",
  "Home Appliances",
] as const;

export type Category = (typeof CATEGORIES)[number];
