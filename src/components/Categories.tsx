import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "./icons";
import { CATEGORIES } from "../constants/categories";
import { useEffect, useRef, useState } from "react";

const CategoryLink = ({ category }: { category: string }) => {
  return (
    <NavLink
      to={`/shop-collection?category=${category}`}
      className={({ isActive }) =>
        `text-[#3A3A3A] hover:text-[#A68A64] transition-colors ${
          isActive ? "text-[#A68A64] font-medium" : ""
        }`
      }
    >
      {category}
    </NavLink>
  );
};

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div>
      <ul className="hidden md:flex justify-center gap-4 py-4">
        {CATEGORIES.map((category) => (
          <li key={category}>
            <CategoryLink category={category} />
          </li>
        ))}
      </ul>

      <div className="md:hidden inline-block" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex gap-1 items-center font-serif text-[#3A3A3A] p-4 rounded cursor-pointer"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          Categories
          <ChevronDownIcon
            className={`transition-transform ${
              isOpen ? "rotate-180" : ""
            } w-5 h-5`}
          />
        </button>

        {isOpen && (
          <div
            className="flex flex-col gap-3 absolute bg-white shadow-lg left-0 right-0 mx-4 py-5 px-4 rounded-md z-10 transition-opacity duration-200"
            onClick={() => setIsOpen(false)} // Close when item is clicked
          >
            {CATEGORIES.map((category) => (
              <CategoryLink key={category} category={category} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
