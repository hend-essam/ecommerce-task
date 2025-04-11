export const DUMMY_DATA = [
  {
    id: 1,
    title: "Boho Wireless Headphones",
    price: "€120.00",
    category: "Electronics",
    image: "/products/headphones.jpg",
  },
  {
    id: 2,
    title: "Linen Summer Dress",
    price: "€89.00",
    category: "Clothing",
    image: "/products/dress.jpg",
  },
  {
    id: 3,
    title: "Handcrafted Wooden Chair",
    price: "€220.00",
    category: "Furniture",
    image: "/products/chair.jpg",
  },
  {
    id: 4,
    title: "Organic Cotton Throw Pillow",
    price: "€45.00",
    category: "Home Decor",
    image: "/products/pillow.jpg",
  },
  {
    id: 5,
    title: "Artisan Ceramic Mug",
    price: "€32.00",
    category: "Home Decor",
    image: "/products/mug.jpg",
  },
  {
    id: 6,
    title: "Handwoven Basket",
    price: "€65.00",
    category: "Home Decor",
    image: "/products/basket.jpg",
  },
  {
    id: 7,
    title: "Vintage Desk Lamp",
    price: "€78.00",
    category: "Electronics",
    image: "/products/lamp.jpg",
  },
  {
    id: 8,
    title: "Organic Cotton Blanket",
    price: "€110.00",
    category: "Home Decor",
    image: "/products/blanket.jpg",
  },
] as const;

export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
};

export type Category = (typeof DUMMY_DATA)[number]["category"];
