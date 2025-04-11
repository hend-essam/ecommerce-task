import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F5F0] border-t border-[#E8E1D5] py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Us */}
          <div>
            <h3 className="font-serif text-xl mb-4 text-[#3A3A3A]">
              About CHOP NOID
            </h3>
            <p className="font-serif text-[#3A3A3A]">
              We provide boho-luxury products with excellent craftsmanship and
              sustainable materials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-4 text-[#3A3A3A]">
              Quick Links
            </h3>
            <ul className="space-y-2 font-serif">
              <li>
                <a href="#" className="text-[#3A3A3A] hover:text-[#A68A64]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3A3A] hover:text-[#A68A64]">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3A3A] hover:text-[#A68A64]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3A3A] hover:text-[#A68A64]">
                  Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-serif text-xl mb-4 text-[#3A3A3A]">
              Customer Care
            </h3>
            <ul className="space-y-2 font-serif">
              <li>
                <a href="#" className="text-[#3A3A3A] hover:text-[#A68A64]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3A3A] hover:text-[#A68A64]">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3A3A] hover:text-[#A68A64]">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-[#3A3A3A] hover:text-[#A68A64]">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-xl mb-4 text-[#3A3A3A]">
              Newsletter
            </h3>
            <p className="font-serif text-[#3A3A3A] mb-4">
              Subscribe for updates and exclusive offers
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow w-[180px] px-4 py-2 border border-[#E8E1D5] focus:outline-none focus:ring-1 focus:ring-[#A68A64] font-serif"
              />
              <button className="bg-[#A68A64] text-white px-4 py-2 hover:bg-opacity-90 font-serif">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <h4 className="font-serif text-[#3A3A3A] mb-4 text-center">
            Payment Methods
          </h4>
          <div className="flex justify-center space-x-4">
            <div className="bg-white p-2 rounded border border-[#E8E1D5]">
              <img
                src="https://www.freepnglogos.com/uploads/visa-hd-transparent-logo-6.6125175268389285"
                alt="Visa"
                className="h-6 object-contain"
              />
            </div>
            <div className="bg-white p-2 rounded border border-[#E8E1D5]">
              <img
                src="https://logos-world.net/wp-content/uploads/2020/09/MasterCard-Logo-1979-1990.png"
                alt="Mastercard"
                className="h-6 object-contain"
              />
            </div>
            <div className="bg-white p-2 rounded border border-[#E8E1D5]">
              <img
                src="https://www.urbantool.com/wp-content/uploads/2016/12/paypal-logo-png.png"
                alt="PayPal"
                className="h-6 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#E8E1D5] pt-8 text-center">
          <p className="font-serif text-[#3A3A3A]">
            &copy; {new Date().getFullYear()} CHOP NOID. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
