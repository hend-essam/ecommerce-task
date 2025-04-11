import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ChevronDownIcon } from "../components/icons";
import { CATEGORIES } from "../constants/categories";
import { DUMMY_DATA } from "../constants/dummyData";

const ShopCollection: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory
  );
  const [priceRange, setPriceRange] = React.useState<[number, number]>([
    0, 500,
  ]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const products = DUMMY_DATA;

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    const matchesPrice =
      parseFloat(product.price.replace("€", "")) >= priceRange[0] &&
      parseFloat(product.price.replace("€", "")) <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  const handleCategoryChange = (category: string) => {
    const newCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newCategory);
    // Only update URL with category (no price range)
    newCategory
      ? setSearchParams({ category: newCategory })
      : setSearchParams({});
  };

  return (
    <div className="bg-[#F8F5F0] min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#E8E1D5] py-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">
          Shop Collection
        </h1>
        <p className="font-serif max-w-2xl mx-auto px-4">
          Discover our curated selection of boho-luxury products
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="md:w-64 lg:w-72 shrink-0">
            {/* Mobile Filters Button */}
            <button
              className="md:hidden flex items-center justify-between w-full bg-white p-4 rounded-lg border border-[#E8E1D5] mb-4"
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            >
              <span className="font-serif text-lg text-[#3A3A3A]">Filters</span>
              <ChevronDownIcon
                className={`transition-transform ${
                  isFiltersOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Filters Panel */}
            <div className={`${isFiltersOpen ? "block" : "hidden"} md:block`}>
              <div className="bg-white p-6 rounded-lg border border-[#E8E1D5] md:sticky md:top-24">
                <h2 className="font-serif text-xl mb-6 text-[#3A3A3A] border-b border-[#E8E1D5] pb-2">
                  Filters
                </h2>

                {/* Category Filter */}
                <div className="mb-8">
                  <h3 className="font-serif text-lg mb-4 text-[#3A3A3A]">
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {CATEGORIES.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => handleCategoryChange(category)}
                          className={`font-serif w-full text-left px-3 py-2 rounded transition-colors ${
                            selectedCategory === category
                              ? "bg-[#A68A64] text-white"
                              : "text-[#3A3A3A] hover:bg-[#E8E1D5]"
                          }`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Filter */}
                <div className="mb-8">
                  <h3 className="font-serif text-lg mb-4 text-[#3A3A3A]">
                    Price Range
                  </h3>
                  <div className="px-2">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full accent-[#A68A64] mb-4"
                    />
                    <div className="flex justify-between font-serif text-[#3A3A3A]">
                      <span>€{priceRange[0]}</span>
                      <span>€{priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setPriceRange([0, 500]);
                    setSearchParams({});
                  }}
                  className="font-serif text-[#A68A64] hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Filter Status */}
            <div className="mb-6 flex justify-between items-center">
              <p className="font-serif text-[#3A3A3A]">
                {filteredProducts.length} products
                {selectedCategory && ` in ${selectedCategory}`}
              </p>
              <div className="relative">
                <select className="font-serif appearance-none bg-white border border-[#E8E1D5] px-4 py-2 pr-8 rounded focus:outline-none focus:ring-1 focus:ring-[#A68A64]">
                  <option>Sort by</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#3A3A3A]">
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={{
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="font-serif text-xl text-[#3A3A3A]">
                  No products match your filters
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setPriceRange([0, 500]);
                    setSearchParams({});
                  }}
                  className="font-serif mt-4 text-[#A68A64] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCollection;
