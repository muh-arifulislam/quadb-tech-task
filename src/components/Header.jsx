import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ cartOpen, setCartOpen }) => {
  const [show, setShow] = useState(false);
  return (
    <nav class="flex items-center justify-between flex-wrap py-6 lg:px-[50px] md:px-[50px] px-[20px] bg-[rgba(3,37,65)]">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-3xl tracking-tight">QuadB Tech</span>
      </div>
      <div class="lg:hidden flex items-center gap-x-[20px]">
        <button onClick={()=>setCartOpen(!cartOpen)} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
        <button
          onClick={() => setShow(!show)}
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          !show && "hidden"
        }`}
      >
        <div class="text-xl lg:flex-grow">
          <Link
            to="/movie"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-400 mr-4"
          >
            Movies
          </Link>
          <Link
            to="/movie"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-400 mr-4"
          >
            Examples
          </Link>
          <Link
            to="/movie"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-400 mr-4"
          >
            About
          </Link>
        </div>
        <div className="lg:block hidden">
          <button onClick={()=>setCartOpen(!cartOpen)} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
