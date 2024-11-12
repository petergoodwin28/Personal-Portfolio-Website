import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { FaArrowDown } from "react-icons/fa6";

function ProjectCarousel() {
  const projectArray = [
    {
      name: "Stock Dashboard",
      description:
        "A website that allows you to keep a watchlist of your favorite stocks. \
        It lands on a login screen that utilizes Next Auth to allow you to login with Google or Github. \
        If you choose not to login, you can continue as a guest, but a feature flag prevents you \
        from accessing watchlist features. The stock chart itself and the configuration of the chart\
        is dynamic and allows you to change the stock, range of days you wish to see, as well as choose \
        between price and volume charts. It uses next's app router to route you where needed and gives \
        different routes depending on your login status. For instance, logged in users will be sent to a \
        dashboard page where their name is displayed, before accessing the chart page.",
      link: "https://github.com/petergoodwin28/StockDashboard",
      imageURL: "/stockdash-login-page.png",
    },
    {
      name: "ThemeChangeSite",
      description:
        "A website that allows you to change themes. The theme colors themselves have been\
        selected based on the hero image that displays after toggling to a different theme.\
        Using Coolors.io, I ran the images through their image to color palette tool, in order to find themes\
        that I found appealing. It is a Next.js app that uses Tailwind CSS themes, CSS, and some state management\
        to make it all work. The images are revolved around one of my new interests: Warhammer 40,000. Specifically\
        the Space Marines.",
      link: "https://github.com/petergoodwin28/ThemeChangeSite",
      imageURL: "/theme-site-battle-image.png",
    //   my-project/public/theme-site-battle-image.png
    },
  ];

  return (
    <section className="w-full h-fit flex flex-col items-center gap-y-28 mt-48 mb-32 text-center">
      <h1 className="font-extrabold text-3xl">Portfolio</h1>

      <Carousel className="w-[700px] ">
        <CarouselContent>
          {projectArray.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <img
                      className="embla__slide__img"
                      src={project.imageURL}
                      alt={`${project.name} project image`}
                    />
                    <h2 className="text-2xl font-semibold mt-10 mb-10">
                      {project.name}
                    </h2>
                    <p className="text-sm ml-10 mr-10">{project.description}</p>
                    <Button variant={'outline'} asChild className="mt-10">
                      
                      <a
                        href={project.link}
                        className=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Button variant={"outline"}>
        <FaArrowDown />
      </Button>
    </section>
  );
}

export default ProjectCarousel;
