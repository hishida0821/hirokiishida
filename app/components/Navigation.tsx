'use client';
import { useState, useEffect } from "react";
import NavLink from "@/components/NavLink";

export default function Navigation() {
  const [open, setOpen] = useState(false);

    useEffect(() => {
      if (open) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
      return () => {
        document.body.classList.remove('overflow-hidden');
      };
    }, [open]);

  return (
    <nav>
      <button
        className="md:hidden block relative w-12 h-2"
        onClick={() => setOpen(!open)}
        aria-label="Open Menu"
      >
        <span className={`block absolute top-0 left-0 w-full h-0.5 bg-black  ${open ? "bottom-0 m-auto rotate-[12deg]" : "rotate-0"}`}></span>
        <span className={`block absolute bottom-0 left-0 w-full h-0.5 bg-black  ${open ? "top-0 m-auto rotate-[-12deg]" : "rotate-0"}`}></span>
      </button>
      <ul className={`
        flex
        flex-col md:flex-row
        fixed md:static
        md:gap-4
        top-[50px]
        left-0
        right-0
        h-[calc(100vh_-_50px)] md:h-auto
        py-12 md:py-0
        px-4 md:px-0
        bg-white md:bg-transparent
        border-[3px] md:border-0
        border-solid
        border-black
        z-50
        transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"} md:opacity-100 md:visible
      `}>
        <li><NavLink href="/about">ABOUT</NavLink></li>
        <li><NavLink href="/works">WORKS</NavLink></li>
        <li><NavLink href="/products">PRODUCTS</NavLink></li>
      </ul>
    </nav>
  )
}