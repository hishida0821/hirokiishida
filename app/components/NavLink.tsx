import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a className="block font-bold p-4 border-b-[2px] md:border-0 border-solid border-black" href={href}>
      {children}
    </a>
  );
}
