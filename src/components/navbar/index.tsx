"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PCViewport } from "./pcviewport";
import { MobileViewport } from "./mobileviewport";

export const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Works", href: "/works" },
  { name: "News", href: "/news" },
  { name: "About", href: "/about" },
];

export const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 x-auto py-5'>
      <div className='mx-auto max-w-5xl flex w-full items-center justify-center'>
        {/* PC Viewport Component */}
        <PCViewport />
        {/* Mobile Viewport Component */}
        <MobileViewport />
      </div>
    </header>
  );
};
