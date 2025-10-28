"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="h-44 flex flex-row space-around items-center bg-background text-foreground p-4 border-t-2"
    >
      <div className="flex flex-col w-1/3 items-center">
        
          <Link href="/resume" className="extra-light ">
          <Button variant="link">
            Resume
            </Button>
          </Link>
        
        
          <Link href="/contact" className="extra-light  ">
          <Button variant="link">
            Contact
            </Button>
          </Link>
        

        
          <Link href="/portfolio" className="extra-light  ">
          <Button variant="link">
            Portfolio
            </Button>
          </Link>
        
        
          <Link href="/#portfolio" className="extra-light  ">
          <Button variant="link">
            Github
            </Button>
          </Link>
        
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
    </footer>
  );
}
