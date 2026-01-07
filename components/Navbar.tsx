"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sections = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-stone-200">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href={isHome ? "#home" : "/"} className="flex items-center gap-6">
          <Image
            src="/images/logo.png"
            alt="Plex Commodities Co."
            width={48}
            height={48}
            priority
          />
          <span className="hidden md:inline text-sm">Plex Commodities Co.</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-12 text-sm text-neutral-700">
          {sections.map(({ label, id }) => {
            const href = isHome ? `#${id}` : `/#${id}`;

            return (
              <li key={id}>
                <Link
                  href={href}
                  className="relative transition-colors hover:text-neutral-900"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-sm text-neutral-700"
        >
          Menu
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <ul className="flex flex-col px-6 py-8 gap-6 text-sm text-neutral-700">
            {sections.map(({ label, id }) => {
              const href = isHome ? `#${id}` : `/#${id}`;

              return (
                <li key={id}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
