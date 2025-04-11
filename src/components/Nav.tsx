import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/shop-collection", label: "Shop Collection" },
  ];

  return (
    <nav className="bg-[#A68A64] text-white">
      <ul className="flex justify-center space-x-6 py-3 font-serif">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `px-2 py-1 rounded hover:underline ${
                  isActive ? "bg-white bg-opacity-20 font-medium" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
