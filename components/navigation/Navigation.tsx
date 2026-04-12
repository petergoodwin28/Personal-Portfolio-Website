"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../ModeToggle";
import NavbarLinks from "./NavbarLinks";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const mobileMenuId = "site-mobile-menu";

  return (
    <nav className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-brand" aria-label="Go to homepage">
          Peter Goodwin
        </Link>

        <div className="hidden md:flex">
          <NavbarLinks />
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <ModeToggle className="site-theme-toggle" />
          <button
            className="site-nav-trigger md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={mobileMenuId}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        id={mobileMenuId}
        className={cn(
          "site-mobile-menu md:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-96 is-open" : "max-h-0"
        )}
      >
        <div className="px-4 sm:px-6 py-4 flex flex-col gap-4">
          <NavbarLinks mobile onClickLink={() => setOpen(false)} />
        </div>
      </div>
    </nav>
  );
}
