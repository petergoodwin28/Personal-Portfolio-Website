import React from "react";

import { ModeToggle } from "./ModeToggle";
import Navbar from "./Navbar";

function Navigation() {
  return (
    <nav className=" w-full h-44 border-2">
      <div className="h-full flex justify-around items-center mt-auto mb-auto">
        <h1 className="prose text-4xl font-extralight w-1/5">Peter Goodwin</h1>
        
        <div className="w-3/5 flex items-center">
<Navbar></Navbar>
        </div>
        

        <ModeToggle className="w-1/5"></ModeToggle>
      </div>
    </nav>
  );
}

export default Navigation;
