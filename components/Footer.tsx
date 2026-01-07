import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Plex Commodities Co."
                width={40}
                height={40}
              />
              <span className="text-sm font-medium text-neutral-900">
                Plex Commodities Co.
              </span>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
              Independent agricultural commodities brokerage connecting producers
              and buyers across North America through transparent and reliable
              trading.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-900">
              Company
            </h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                <li>
                    <Link href="#home" className="hover:text-neutral-900">
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="#about" className="hover:text-neutral-900">
                    About us
                    </Link>
                </li>
                <li>
                    <Link href="#products" className="hover:text-neutral-900">
                    Products
                    </Link>
                </li>
                <li>
                    <Link href="#services" className="hover:text-neutral-900">
                    Services
                    </Link>
                </li>
                <li>
                    <Link href="#contact" className="hover:text-neutral-900">
                    Contact
                    </Link>
                </li>
                </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-900">
              Contact
            </h3>

            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-green-700" />
                <span>
                  Winnipeg, Manitoba<br />
                  Canada
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-green-700" />
                <a
                  href="mailto:info@plexcommodities.com"
                  className="hover:text-neutral-900"
                >
                  info@plexcommodities.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-green-700" />
                <a
                  href="tel:+14318661737"
                  className="hover:text-neutral-900"
                >
                  +1 (431) 866-1737
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-green-700" />
                <a
                  href="https://www.linkedin.com/company/plex-commodities"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-stone-200 pt-8 text-sm text-neutral-500 md:flex-row">
          <span>
            © {new Date().getFullYear()} Plex Commodities Co. All rights reserved.
          </span>

          <span className="text-xs">
            Serving clients across Canada and the United States
          </span>
        </div>
      </div>
    </footer>
  );
}


