"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";

export function NavLinks() {
  const pathname = usePathname();

  // Hash targets ("/#journey") never match a pathname, so they stay unmarked.
  const active = (href: string) => !href.includes("#") && pathname === href;

  return (
    <>
      {/*
       * Below sm the wordmark and three links cannot share one row without
       * running past the container, so they fold into a native disclosure.
       */}
      <details className="group relative sm:hidden">
        <summary
          aria-label="Menu"
          className="flex cursor-pointer list-none items-center gap-2 rounded-lg border border-line px-3 py-2 font-display text-sm font-bold marker:content-none"
        >
          Menu
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="size-4 transition-transform group-open:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </summary>

        <ul className="absolute top-full right-0 z-10 mt-3 w-56 rounded-xl border border-line bg-white p-2 text-sm font-semibold text-ink-soft shadow-[0_24px_60px_-30px_rgba(7,12,24,0.35)]">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active(item.href) ? "page" : undefined}
                onClick={(e) => {
                  e.currentTarget.closest("details")?.removeAttribute("open");
                }}
                className={`block rounded-lg px-3 py-2.5 transition-colors ${
                  active(item.href)
                    ? "bg-paper text-brand"
                    : "hover:bg-paper hover:text-brand"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-1 border-t border-line pt-1">
            <Link
              href="/contact"
              className="block rounded-lg px-3 py-2.5 font-display font-bold text-brand"
            >
              Book a consultation
            </Link>
          </li>
        </ul>
      </details>

      <nav className="hidden items-center gap-5 sm:flex sm:gap-8">
        <ul className="flex items-center gap-5 text-sm font-semibold text-ink-soft sm:gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active(item.href) ? "page" : undefined}
                className={`whitespace-nowrap border-b-2 pb-0.5 transition-colors ${
                  active(item.href)
                    ? "border-brand text-brand"
                    : "border-transparent hover:text-brand"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-lg bg-brand px-5 py-2.5 font-display text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-deep sm:inline-flex"
        >
          Book a consultation
        </Link>
      </nav>
    </>
  );
}
