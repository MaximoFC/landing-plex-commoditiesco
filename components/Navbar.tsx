"use client"

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
        <header className="fixed top-0 w-full z-50 border-b border-neutral-200">
            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#home">
                    Plex Commodities Co.
                </a>

                {/* Desktop */}
                <ul className="hidden md:flex items-center gap-10 text-sm">
                    {links.map(link => (
                        <li key={link.href}>
                            <a href={link.href}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-sm"
                >
                    Menu
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-white">
                    <ul className="flex flex-col px-6 py-6 gap-4 text-sm">
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
