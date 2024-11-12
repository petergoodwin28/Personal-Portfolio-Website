import React from "react";

import { ModeToggle } from "./ModeToggle";
import Navbar from "./Navbar";

function Navigation() {
  return (
    <nav className=" w-full h-32 border-2">
      <div className="flex justify-around mt-10">
        <h1 className="prose font-extrabold">Peter Goodwin</h1>
        
        <Navbar></Navbar>

        <ModeToggle className=""></ModeToggle>
      </div>
    </nav>
  );
}

export default Navigation;
