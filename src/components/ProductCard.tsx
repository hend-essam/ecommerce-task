import { HeartIcon } from "./icons";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="aspect-square bg-[#E8E1D5] mb-4 overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="font-serif text-lg font-light text-[#3A3A3A]">
        {product.title}
      </h3>
      <p className="font-serif text-[#A68A64]">{product.price}</p>
      <button className="absolute top-3 right-3 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
        <HeartIcon className="text-[#A68A64]" />
      </button>
    </div>
  );
};

export default ProductCard;
