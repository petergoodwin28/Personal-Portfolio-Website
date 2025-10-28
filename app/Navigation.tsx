import React from "react";

import { ModeToggle } from "./ModeToggle";
import Navbar from "./Navbar";

function Navigation() {
  return (
    <nav className=" w-full h-44 border-2">
      <div className="h-full flex justify-around items-center mt-auto mb-auto">
        <h1 className="prose text-2xl font-extralight">Peter Goodwin</h1>
        
        <Navbar></Navbar>

        <ModeToggle className=""></ModeToggle>
      </div>
    </nav>
  );
}

export default Navigation;
