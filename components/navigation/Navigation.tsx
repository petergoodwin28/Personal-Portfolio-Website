'use client';
// import React from "react";

// import { ModeToggle } from "./ModeToggle";
// import Navbar from "./Navbar";

// function Navigation() {
//   return (
//     <nav className=" w-full h-44 border-2">
//       <div className="h-full flex justify-around items-center mt-auto mb-auto">
//         <h1 className="prose text-4xl font-extralight w-1/5">Peter Goodwin</h1>

//         <div className="w-3/5 flex items-center">
//           <Navbar></Navbar>
//         </div>

//         <ModeToggle className="w-1/5"></ModeToggle>
//       </div>
//     </nav>
//   );
// }

// export default Navigation;



// import React from "react";
// import { ModeToggle } from "./ModeToggle";
// import Navbar from "./Navbar";

// export default function Navigation() {
//   return (
//     <nav className="w-full border-b backdrop-blur-sm bg-background/80 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
//         {/* Left — Name */}
//         <h1 className="text-2xl font-light tracking-wide">
//           Peter Goodwin
//         </h1>

//         {/* Center — Navbar */}
//         <div className="hidden md:flex">
//           <Navbar />
//         </div>

//         {/* Right — Toggle */}
//         <div>
//           <ModeToggle className="w-1/5"/>
//         </div>
//       </div>
//     </nav>
//   );
// }

//"use client";

import React, { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import NavbarLinks from "./NavbarLinks";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Left — Name */}
        <h1 className="text-2xl font-light tracking-wide">Peter Goodwin</h1>

        {/* Desktop Navbar */}
        <div className="hidden md:flex">
          <NavbarLinks />
        </div>

        {/* Right — Toggle + Hamburger */}
        <div className="flex items-center gap-10">
          <ModeToggle className="w-1/5"/>
          <button
            className="md:hidden"
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 
          ${open ? "max-h-96" : "max-h-0"}
        `}
      >
        <div className="px-6 py-4 flex flex-col gap-4 border-t">
          <NavbarLinks mobile onClickLink={() => setOpen(false)} />
        </div>
      </div>
    </nav>
  );
}
