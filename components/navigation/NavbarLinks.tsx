"use client";

// 
// This file defines the mobile 
// 

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "https://github.com/petergoodwin28?tab=repositories", label: "Github" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
  { href: "/work", label: "Work" },
];

export default function NavbarLinks({
  mobile = false,
  onClickLink,
}: {
  mobile?: boolean;
  onClickLink?: () => void;
}) {
  return (
    <div
      className={cn(
        "flex gap-8",
        mobile && "flex-col gap-6 text-xl font-light"
      )}
    >
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={onClickLink}
          className={cn(
            "text-lg font-extralight transition-opacity hover:opacity-60",
            mobile && "text-2xl"
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
