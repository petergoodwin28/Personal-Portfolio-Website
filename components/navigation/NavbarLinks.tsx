"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
  {
    href: "https://github.com/petergoodwin28?tab=repositories",
    label: "Github",
    external: true,
  },
];

function isActive(pathname: string, href: string) {
  if (!href.startsWith("/")) {
    return false;
  }

  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavbarLinks({
  mobile = false,
  onClickLink,
}: {
  mobile?: boolean;
  onClickLink?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex items-center gap-2 lg:gap-4",
        mobile && "flex-col items-start gap-2 w-full"
      )}
    >
      {links.map(({ href, label, external }) => (
        <Link
          key={href}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer noopener" : undefined}
          onClick={onClickLink}
          aria-current={isActive(pathname, href) ? "page" : undefined}
          className={cn(
            "site-nav-link",
            isActive(pathname, href) && "is-active",
            mobile && "site-nav-link-mobile"
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
