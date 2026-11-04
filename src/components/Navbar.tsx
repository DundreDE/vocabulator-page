"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const items: NavItem[] = [
  { label: "Start", href: "#hero" },
  { label: "Features", href: "#Features" },
  { label: "Get Started", href: "https://vocabulator-cyan.vercel.app" },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-800">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <ul className="hidden gap-6 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-stone-200 hover:text-stone-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded p-2 text-stone-100 hover:bg-stone-700 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
    </header>
  );
}
