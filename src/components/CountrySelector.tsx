import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "./icons";

const CountrySelector: React.FC = () => {
  const countries = [
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
    { code: "FR", name: "France", flag: "🇫🇷" },
    { code: "DE", name: "Germany", flag: "🇩🇪" },
    { code: "ES", name: "Spain", flag: "🇪🇸" },
    { code: "IT", name: "Italy", flag: "🇮🇹" },
    { code: "AU", name: "Australia", flag: "🇦🇺" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const dropdown = document.querySelector(".country-dropdown");
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative country-dropdown">
      <button
        className="flex items-center space-x-1 font-serif text-[#3A3A3A]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedCountry.flag}</span>
        <span>{selectedCountry.name}</span>
        <ChevronDownIcon />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md p-2 w-48 z-10 border border-[#E8E1D5]">
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => {
                setSelectedCountry(country);
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 w-full p-2 hover:bg-[#F8F5F0] rounded font-serif text-[#3A3A3A]"
            >
              <span>{country.flag}</span>
              <span>{country.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
