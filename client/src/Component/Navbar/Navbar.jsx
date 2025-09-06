import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let links = [
    { title: "Home", path: "/" },
    {title: "CreatePost", path: "/createpost"}, 
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">MyLogo</Link>
          </div>

          {/* Menu Links (Desktop) */}
          <div className="hidden md:flex space-x-6 font-medium">
            {links.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="hover:text-gray-200"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Login Button (Desktop) */}
          <button className="hidden md:block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
            Login
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-500 text-white p-4 space-y-3 mt-2 rounded-lg">
            {links.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block hover:text-gray-200"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <button className="block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
              Login
            </button>
          </div>
        )}
      </nav>

      {/* Content below Navbar needs margin/padding to avoid overlap */}
      <div className="pt-20 px-6">
      <Outlet />
      </div>
    </>
  );
};
