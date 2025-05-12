"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div
    suppressHydrationWarning
      id="footer"
      className="flex flex-row space-around items-center bg-background text-foreground p-4 border-t-2"
    >
      <div className="flex flex-col w-1/3 items-center">
        <Button variant="link">
          <Link href="/resume" className="extra-light ">
            Resume
          </Link>
        </Button>
        <Button variant="link">
          <Link href="/contact" className="extra-light  ">
            Contact
          </Link>
        </Button>

        <Button variant="link">
          <Link href="/portfolio" className="extra-light  ">
            Portfolio
          </Link>
        </Button>

        <Button variant="link">
          <Link href="/#portfolio" className="extra-light  ">
            Github
          </Link>
        </Button>
      </div>
      <div className="flex flex-col w-1/3 items-center">
        <Avatar className="w-32 h-32">
          <AvatarImage src="/meImage1.jpg" alt="@petergoodwin" />
          <AvatarFallback>PG</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col w-1/3 items-center">
        <ul>
          <li>Phone: 123-456-7890</li>
          <li>petergoodwin28@gmail.com</li>
          <li>Ellicot City, Maryland</li>
        </ul>
      </div>
    </div>
  );
}
