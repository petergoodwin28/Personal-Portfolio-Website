"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/work", label: "Work" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <footer id="footer" className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-surface">
          <div className="site-footer-grid">
            <section className="space-y-3">
              <p className="site-footer-kicker">Peter Goodwin</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-14 w-14 border border-border/60">
                  <AvatarImage src="/meImage1.jpg" alt="@petergoodwin" />
                  <AvatarFallback>PG</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-medium tracking-wide">
                    Web Developer
                  </h2>
                  <p className="site-footer-muted">Ellicott City, Maryland</p>
                </div>
              </div>
              <p className="site-footer-muted max-w-sm">
                Building modern, theme-aware interfaces with polished
                interaction and clean frontend architecture.
              </p>
            </section>

            <nav aria-label="Footer navigation">
              <h3 className="site-footer-heading">Quick Links</h3>
              <ul className="site-footer-list">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="site-footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section>
              <h3 className="site-footer-heading">Connect</h3>
              <div className="site-footer-list">
                <a
                  href="mailto:petergoodwin28@gmail.com"
                  className="site-footer-link"
                >
                  petergoodwin28@gmail.com
                </a>
                <a
                  href="https://github.com/petergoodwin28?tab=repositories"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="site-footer-link"
                >
                  GitHub
                </a>
                <Button asChild variant="outline" className="bubble-hover mt-1 w-full sm:w-fit">
                  <Link href="/contact">Start a Conversation</Link>
                </Button>
              </div>
            </section>
          </div>
        </div>

        <div className="site-footer-meta">
          <p>© {year} Peter Goodwin</p>
          <p>Built with Next.js, Tailwind CSS, and shadcn/ui.</p>
        </div>
      </div>
    </footer>
  );
}
