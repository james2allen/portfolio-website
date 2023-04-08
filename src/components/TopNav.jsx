import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const TopNav = () => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <nav className="fixed top-0 z-40 w-full bg-white drop-shadow-md">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-3">
        <a href="#" className="flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-semibold">
            J<span className="text-orange-600">A</span>
          </span>
        </a>
        <button
          onClick={() => setNavToggle((current) => !current)}
          type="button"
          class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className={`mr-16 ${
            navToggle ? "" : "hidden"
          } z-10 w-full text-gray-600 no-underline sm:flex-col sm:bg-white md:block md:w-auto`}
        >
          <div class="mt-4 flex flex-col rounded-lg border p-4 font-bold md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 ">
            <Link className="p-3 hover:text-orange-500" to={"/"}>
              Home
            </Link>
            <Link className="p-3 hover:text-orange-500" to="/projects">
              Projects
            </Link>
            <Link className="p-3 hover:text-orange-500" to="/blog">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
