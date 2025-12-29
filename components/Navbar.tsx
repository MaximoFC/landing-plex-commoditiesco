"use client"

import Image from "next/image";
import { useState } from "react";

const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
]

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-stone-200">
            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-6">
                    <Image 
                        src="/images/logo.png"
                        alt="Plex Commodities Co."
                        width={48}
                        height={48}
                        priority
                    />
                    <span className="hidden md:inline text-sm">Plex Commodities Co.</span>
                </a>

                {/* Desktop */}
                <ul className="hidden md:flex items-center gap-12 text-sm text-neutral-700">
                    {links.map(link => (
                        <li key={link.href}>
                            <a 
                                href={link.href}
                                className="relative transition-colors hover:text-neutral-900"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
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
                        {links.map(link => (
                            <li key={link.href}>
                                <a 
                                    href={link.href} 
                                    onClick={() => setOpen(false)}
                                    className="block"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
