import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselDemo() {
  const imageInfo = [
    ["/14772577.jpg", "Description for Image 1"],
    ["/battleSpaceMarines.jpg", "Description for Image 2"],
    ["/leiutenantSpaceMarine.jpg", "Description for Image 3"],
  ];

  // State to track the current active index
  const [activeIndex, setActiveIndex] = useState(0);

  // Handler function to go to the next image
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageInfo.length);
  };

  // Handler function to go to the previous image
  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? imageInfo.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-xs m-20">
      <Carousel>
        <CarouselContent>
          {imageInfo.map(([src, text], index) => (
            <CarouselItem
              key={index}
              className={index === activeIndex ? "block" : "hidden"}
            >
              <Card className="w-full h-full">
                <CardContent className="w-full h-full flex items-center justify-center p-0">
                  <img
                    src={src}
                    alt={text}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={handlePrevious} />
        <CarouselNext onClick={handleNext} />
      </Carousel>

      {/* Display text for the current active index outside the carousel */}
      <h1 className="text-center mt-4">{imageInfo[activeIndex][1]}</h1>
    </div>
  );
}
