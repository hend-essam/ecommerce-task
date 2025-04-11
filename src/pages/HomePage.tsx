import React from "react";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";

const brands = [
  {
    name: "Apple",
    logo: "http://purepng.com/public/uploads/large/purepng.com-apple-logologobrand-logoiconslogos-251519938788qhgdl.png",
  },
  {
    name: "Samsung",
    logo: "https://www.freepnglogos.com/uploads/samsung-smarttv-logo-11.png",
  },
  {
    name: "Sony",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png",
  },
  { name: "Nike", logo: "http://pngimg.com/uploads/nike/nike_PNG12.png" },
  {
    name: "Adidas",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo-1971-present.png",
  },
];

const HomePage: React.FC = () => {
  return (
    <main className="bg-[#F8F5F0]">
      <Categories />
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-[#e8e1d5] mb-20">
        <div className="text-center px-6 max-w-3xl">
          <p className="font-serif text-lg mb-2 tracking-widest">
            The New Cindy collection is live
          </p>
          <h2 className="font-serif text-5xl font-light mb-6">SHOP NOID</h2>
          <p className="font-serif mb-8">
            Part rest with an image to focus on your chosen product, collection,
            or blog post.
          </p>
          <button className="font-serif px-8 py-3 bg-[#A68A64] text-white hover:bg-opacity-90">
            <Link to="/shop-collection">SHOP COLLECTION</Link>
          </button>
        </div>
      </section>

      {/* Section */}
      <section className="container mx-auto px-6 pb-20">
        <section className="container mx-auto px-6 pb-20 border-b-2 border-[#A68A64] border-dotted">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 group relative">
              <div className="aspect-square bg-[#E8E1D5] mb-4 overflow-hidden rounded-lg shadow-md">
                <img
                  src="/ourEthos/ourEthos.jpg"
                  alt="Featured product"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <button
                className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                   bg-white text-[#A68A64] px-8 py-3 border border-[#A68A64] transition-all 
                   duration-300 font-serif hover:bg-[#A68A64] hover:text-white shadow-lg"
              >
                DISCOVER MORE
              </button>
            </div>

            {/* Mission Text */}
            <div className="w-full md:w-1/2">
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-[#3A3A3A]">
                OUR ETHOS
              </h2>
              <p className="font-serif text-lg mb-6 leading-relaxed text-[#3A3A3A]">
                We believe in pieces that hold special meaning. Each piece is
                designed to be a part of your story, crafted with care and
                precision.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-[#A68A64] mr-2">•</span>
                  <span className="font-serif">
                    Handcrafted by skilled artisans
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A68A64] mr-2">•</span>
                  <span className="font-serif">
                    Ethically sourced materials
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A68A64] mr-2">•</span>
                  <span className="font-serif">
                    Lifetime craftsmanship guarantee
                  </span>
                </li>
              </ul>
              <button className="font-serif border border-[#3A3A3A] px-8 py-3 hover:bg-[#E8E1D5] transition-colors">
                OUR STORY
              </button>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="mt-20">
          <h2 className="font-serif text-3xl font-light text-center mb-12">
            FEATURED BRANDS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white p-6 flex justify-center items-center border border-[#E8E1D5]"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <p className="font-serif text-xl mb-6">So many ideas! ON SALE</p>
          <button className="font-serif border border-[#3A3A3A] px-8 py-3 mb-12 hover:bg-[#E8E1D5]">
            <Link to="/shop-collection">SHOP NOW</Link>
          </button>
          <h3 className="font-serif text-2xl mb-4">Choose your Adventure</h3>
          <p className="font-serif max-w-2xl mx-auto">
            Share information about your brand with your customers. Describe a
            product, make announcements, or welcome customers to your store.
          </p>
        </section>
      </section>
    </main>
  );
};

export default HomePage;
