"use client";
import React, { useState } from "react";
// import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function Interests() {
  // const allInterests = [
  //   "Gaming",
  //   "Programming",
  //   "Reading",
  //   "Learning",
  //   "Working out",
  // ];

  const [backgroundImage, setBackgroundImage] = useState("");

  const handleToggleClick = (value: string) => {
    // Map values to background images
    const backgroundMap: Record<string, string> = {
      videoGames: "url('/battleSpaceMarines.jpg')",
      cars: "url('/stockdash-login-page.png')",
      stocks: "url('/meImage1.jpg')",
    };

    setBackgroundImage(backgroundMap[value] || "");
  };
  return (
    <div
      id="interests"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Adjust as needed
        transition: "background-image 0.5s ease-in-out", // Smooth transition
      }}
    >
        <div className="bg-foreground text-background">
        <ToggleGroup type="multiple">
        <ToggleGroupItem
          className="bg-background text-foreground"
          value="videoGames"
          aria-label="Video Games toggle"
          onClick={() => handleToggleClick("videoGames")}
        >
          Video Games
        </ToggleGroupItem>
        <ToggleGroupItem
          value="cars"
          aria-label="cars button"
          onClick={() => handleToggleClick("cars")}
        >
          Cars
        </ToggleGroupItem>
        <ToggleGroupItem
          value="stocks"
          aria-label="Stocks Button"
          onClick={() => handleToggleClick("stocks")}
        >
          Stocks
        </ToggleGroupItem>
      </ToggleGroup>
        </div>
      
      <h1 className="black">Interests</h1>
      <p>This is the Interests component.</p>
    </div>
  );
}

export default Interests;
