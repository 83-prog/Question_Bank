import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} YourWebsite. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
