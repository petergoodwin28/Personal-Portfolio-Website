"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";

import { Calendar } from "@/components/ui/calendar";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FiCopy } from "react-icons/fi";
import { easeOut, motion, useReducedMotion } from "framer-motion";

export default function AboutSiteCards() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [component, setComponent] = useState("Calendar");

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  const prefersReducedMotion = useReducedMotion();

  // Shared variants for the header
  const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeOut
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeOut
    }
  }
};


  // Helper to build motion props per card (for staggered delays)
  const buildCardMotion = (index: number) => {
  if (prefersReducedMotion) {
    return {
      initial: false,
      animate: false,
      viewport: { once: true, amount: 0 },
      variants: undefined,
      transition: undefined,
    };
  }

  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.25 },
    variants: cardVariants,
    transition: {
      duration: 0.45,
      ease: easeOut,
      delay: index * 0.08,
    },
  };
};


  return (
    <section className="home-section relative w-full py-24 sm:py-28 md:py-32 px-4 sm:px-6">
      <div className="home-section-accent home-section-accent--soft" aria-hidden />
      <div className="home-section-inner">
      {/* SECTION TITLE */}
      <motion.div
        className="home-section-header mb-20"
        variants={headingVariants}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.5 }}
      >
        <p className="home-section-kicker">Stack & Craft</p>
        <h2 className="home-section-title">About The Site</h2>
        <p className="home-section-subtitle mt-3">
          A behind-the-scenes look at the tools and technologies powering this
          portfolio.
        </p>
      </motion.div>

      {/* GRID */}
      <div
        className="
          grid 
          grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 
          gap-10 
          max-w-7xl mx-auto
        "
      >
        {/* NEXT JS CARD */}
        <motion.div {...buildCardMotion(0)}>
          <Card className="site-card home-card-surface h-full flex flex-col">
            <CardHeader>
              <CardTitle className="mb-3 text-2xl">Next.js</CardTitle>
              <CardDescription className="leading-relaxed">
                This app was created using:
                <br />
                <br />
                <code>npx create-next-app@latest project-name</code>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="ml-2">
                        <FiCopy />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Copy Command</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <br />
                <br />
                Next.js simplifies routing, supports server & client components,
                and keeps the codebase clean and scalable.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1 opacity-90">
              I highly recommend trying it for full-stack projects.
            </CardContent>

            <CardFooter>
              <Button variant="outline" className="w-full bubble-hover">
                Next.js
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* SHADCN CARD */}
        <motion.div {...buildCardMotion(1)}>
          <Card className="site-card home-card-surface h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">shadcn/ui</CardTitle>
              <CardDescription>
                A copy-paste component system where you own the code.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <Select onValueChange={setComponent}>
                <SelectTrigger className="w-[180px] mx-auto my-6">
                  <SelectValue placeholder="Pick demo" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Calendar">Calendar</SelectItem>
                  <SelectItem value="Skeleton">Skeleton</SelectItem>
                  <SelectItem value="Scroll Area">Scroll Area</SelectItem>
                </SelectContent>
              </Select>

              {/* Dynamic Components */}
              {component === "Calendar" && (
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border shadow mx-auto mt-6"
                />
              )}

              {component === "Skeleton" && (
                <div className="flex items-center space-x-4 mt-10 justify-center">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              )}

              {component === "Scroll Area" && (
                <ScrollArea className="h-72 w-48 rounded-md border mx-auto mt-10">
                  <div className="p-4">
                    <h4 className="text-sm mb-3 font-medium">Tags</h4>
                    {tags.map((tag) => (
                      <div key={tag} className="text-sm">
                        {tag}
                        <Separator className="my-2" />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>

            <CardFooter>
              <Button variant="outline" className="w-full bubble-hover">
                shadcn/ui
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* DARK MODE CARD */}
        <motion.div {...buildCardMotion(2)}>
          <Card className="site-card home-card-surface h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Dark Mode</CardTitle>
              <CardDescription>
                Powered by next-themes and shadcn/ui.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1 text-center">
              <ModeToggle className="my-8 mx-auto" />
              <p className="opacity-90">
                Install it with:
                <br />
                <code>npm install next-themes</code>
                <br />
                <br />
                Then wrap your root layout in the provider and toggle via{" "}
                <code>useTheme()</code>.
              </p>
            </CardContent>

            <CardFooter>
              <Button variant="outline" className="w-full bubble-hover">
                Dark Mode
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* TAILWIND CARD */}
        <motion.div {...buildCardMotion(3)}>
          <Card className="site-card home-card-surface h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">TailwindCSS</CardTitle>
              <CardDescription>
                Utility-first styling that keeps everything fast.
              </CardDescription>
            </CardHeader>

            <CardContent className="prose flex-1">
              <p>Traditional CSS:</p>
              <code>
                &lt;button class="button-red"&gt;Click Me&lt;/button&gt;
              </code>
              <br />
              <code>
                .button-red &#123; color:red; border:4px solid red; &#125;
              </code>

              <p>Tailwind version:</p>
              <code>
                &lt;button className="text-red-600 border-4 border-red-600"&gt;
                Click Me
                &lt;/button&gt;
              </code>
            </CardContent>

            <CardFooter>
              <Button variant="outline" className="w-full bubble-hover">
                TailwindCSS
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* CSS ANIMATIONS CARD */}
        <motion.div className="col-span-full" {...buildCardMotion(4)}>
          <Card className="site-card home-card-surface w-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">CSS Animations</CardTitle>
              <CardDescription>
                Powered entirely by CSS — scroll-timeline, hover effects,
                transitions, and keyframes.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-col gap-6 items-center">
                <Button className="shake">Shake!</Button>

                <div className="border move-left-right">
                  <button aria-label="Hover to see movement"></button>
                </div>

                <div className="border move-right">
                  <button aria-label="Hover to see movement"></button>
                </div>
              </div>
            </CardContent>

            <CardFooter />
          </Card>
        </motion.div>
      </div>
      </div>
    </section>
  );
}


// "use client";
// import React, { useState } from "react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// import { FiCopy } from "react-icons/fi";
// import { ModeToggle } from "./ModeToggle";
// import { Calendar } from "@/components/ui/calendar";
// import { Skeleton } from "@/components/ui/skeleton";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Separator } from "@/components/ui/separator";

// export default function AboutSiteCards() {
//   // Calendar
//   const [date, setDate] = useState<Date | undefined>(new Date());

//   // Dynamic component selection
//   const [component, setComponent] = useState("Calendar");

//   // ScrollArea tags list
//   const tags = Array.from({ length: 50 }).map(
//     (_, i, a) => `v1.2.0-beta.${a.length - i}`
//   );

//   return (
//     <section className="">
//       <h1 className="font-extrabold text-3xl text-center my-20">
//         About the Site
//       </h1>

//       {/* CARD GRID */}
//       <div className="flex flex-wrap justify-center items-stretch gap-10 px-20 pb-32">

//         {/* NEXT.JS CARD */}
//         <Card className="grow w-96 flex flex-col">
//           <CardHeader>
//             <CardTitle className="mb-5">Next.js</CardTitle>
//             <CardDescription>
//               This app was created using:
//               <br /><br />
//               <code className="text-foreground">
//                 npx create-next-app@latest project-name
//               </code>

//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button variant="outline" aria-label="Copy code" className="ml-2">
//                       <FiCopy />
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Copy Code</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>

//               <br /><br />
//               Next.js simplifies routing, enhances server-side capabilities, and
//               provides an efficient development environment while still letting
//               you write React in the same familiar way.
//             </CardDescription>
//           </CardHeader>

//           <CardContent className="flex-1">
//             Highly recommended for building full-stack web apps.
//           </CardContent>

//           <CardFooter className="flex justify-around">
//             <Button variant="outline">Next.js</Button>
//           </CardFooter>
//         </Card>

//         {/* SHADCN CARD */}
//         <Card className="grow w-96 flex flex-col p-6">
//           <CardHeader>
//             <CardTitle>Shadcn/ui</CardTitle>
//             <CardDescription>
//               shadcn/ui is <strong>not</strong> a typical component library—you
//               install only what you need. This site uses many of their components.
//             </CardDescription>
//           </CardHeader>

//           <CardContent className="flex-1 flex flex-col items-center">
//             <Select onValueChange={setComponent}>
//               <SelectTrigger className="w-[180px] mx-auto my-6">
//                 <SelectValue placeholder="Calendar" />
//               </SelectTrigger>

//               <SelectContent>
//                 <SelectItem value="Calendar">Calendar</SelectItem>
//                 <SelectItem value="Skeleton">Skeleton</SelectItem>
//                 <SelectItem value="Scroll Area">Scroll Area</SelectItem>
//               </SelectContent>
//             </Select>

//             {/* Dynamic components */}
//             {component === "Calendar" && (
//               <Calendar
//                 mode="single"
//                 selected={date}
//                 onSelect={setDate}
//                 className="rounded-md border shadow w-fit mx-auto mt-8"
//               />
//             )}

//             {component === "Skeleton" && (
//               <div className="flex items-center space-x-4 mt-16">
//                 <Skeleton className="h-12 w-12 rounded-full" />
//                 <div className="space-y-2">
//                   <Skeleton className="h-4 w-[250px]" />
//                   <Skeleton className="h-4 w-[200px]" />
//                 </div>
//               </div>
//             )}

//             {component === "Scroll Area" && (
//               <ScrollArea className="h-72 w-48 rounded-md border mx-auto mt-10">
//                 <div className="p-4">
//                   <h4 className="mb-4 text-sm font-medium">Tags</h4>
//                   {tags.map((tag) => (
//                     <div key={tag} className="text-sm">
//                       {tag}
//                       <Separator className="my-2" />
//                     </div>
//                   ))}
//                 </div>
//               </ScrollArea>
//             )}
//           </CardContent>

//           <CardFooter className="flex justify-center mt-auto">
//             <Button variant="outline">Shadcn/ui</Button>
//           </CardFooter>
//         </Card>

//         {/* DARK MODE CARD */}
//         <Card className="grow w-96 flex flex-col p-6">
//           <CardHeader>
//             <CardTitle>Dark Mode</CardTitle>
//             <CardDescription>Try it out here or in the navigation menu!</CardDescription>
//           </CardHeader>

//           <CardContent className="flex-1 flex flex-col items-center text-center">
//             <ModeToggle className="my-10" />
//             <p>
//               Dark mode uses <code>next-themes</code>.  
//               Install with: <code>npm install next-themes</code><br/>
//               Wrap your root layout in a theme provider and toggle the theme using{" "}
//               <code>useTheme()</code>.
//             </p>
//           </CardContent>

//           <CardFooter className="flex justify-center">
//             <Button variant="outline">Dark Mode</Button>
//           </CardFooter>
//         </Card>

//         {/* TAILWINDCSS CARD */}
//         <Card className="grow w-96 flex flex-col p-6">
//           <CardHeader>
//             <CardTitle>TailwindCSS</CardTitle>
//             <CardDescription>
//               Tailwind makes styling extremely fast and efficient.
//             </CardDescription>
//           </CardHeader>

//           <CardContent className="prose flex-1">
//             <p>Example in normal HTML/CSS:</p>
//             <code>
//               &lt;button class="button-red"&gt;Click Me&lt;/button&gt;
//             </code>
//             <br />
//             <code>
//               .button-red &#123; color: red; border: solid red 4px; &#125;
//             </code>

//             <p>And the same in Tailwind:</p>
//             <code>
//               &lt;button className="text-red-600 border-4 border-red-600"&gt;  
//               Click Me  
//               &lt;/button&gt;
//             </code>
//           </CardContent>

//           <CardFooter>
//             <Button variant="outline">TailwindCSS</Button>
//           </CardFooter>
//         </Card>

//         {/* CSS ANIMATIONS CARD */}
//         <Card className="grow w-full max-w-5xl flex flex-col p-6 mt-10">
//           <CardHeader>
//             <CardTitle>CSS Animations</CardTitle>
//             <CardDescription>
//               This site uses pure CSS animations (no JS).  
//               Some animations work best in Chrome/Edge on desktop.
//             </CardDescription>
//           </CardHeader>

//           <CardContent className="flex-1">
//             <div className="flex flex-col gap-6 items-center">
//               Button shake:
//               <Button className="shake">Shake!</Button>

//               Move left & right:
//               <div className="border move-left-right">
//                 <button aria-label="Hover to see the effect"></button>
//               </div>

//               Move right:
//               <div className="border move-right">
//                 <button aria-label="Hover to see the effect"></button>
//               </div>
//             </div>
//           </CardContent>

//           <CardFooter />
//         </Card>

//       </div>
//     </section>
//   );
// }
