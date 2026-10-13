"use client";

import { useState } from "react";
import { nav, site } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 bg-bg">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-[6vw] py-6 lg:px-[5vw] lg:py-10">
        <a href="#top" className="block" aria-label={`${site.name}, back to top`}>
          <span className="block font-heading text-[clamp(1.9rem,1.2rem+1.9vw,3.1rem)] leading-none">
            {site.name}
          </span>
          <span className="label-caps mt-3 block text-[clamp(0.55rem,0.45rem+0.35vw,0.85rem)] tracking-[0.42em] text-primary">
            {site.role}
          </span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-[2.6vw] lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="label-caps transition-colors hover:text-primary">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-oval label-caps !py-3.5 transition-colors hover:bg-primary hover:text-on-primary">
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg width="32" height="22" viewBox="0 0 32 22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M0 2h32M0 11h32M0 20h32" />
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg px-[6vw] py-6 lg:hidden">
          <div className="flex justify-end">
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3l22 22M25 3L3 25" />
              </svg>
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-10 flex flex-col gap-7">
            {[...nav, { label: "Contact", href: "#contact" }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-heading text-[2rem] leading-tight"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
