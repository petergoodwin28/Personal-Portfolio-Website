import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { ModeToggle } from "./ModeToggle";
import { Calendar } from "@/components/ui/calendar";
import { Skeleton } from "@/components/ui/skeleton";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function AboutSiteCards() {
  // calander
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // select component - shadcn card
  const [component, setComponent] = useState("Calendar");
  // scroll area
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <section className="border-2">
      <h1 className="font-extrabold text-3xl text-center m-20">
        About the Site
      </h1>
      <div className="flex flex-row flex-wrap gap-x-20 gap-y-20 m-20 items-baseline">
        <Card className="min-w-40 h-fit p-10 prose grow">
          <CardHeader>
            <CardTitle>Next.js</CardTitle>
            <CardDescription>
              The app itself was created in a powershell terminal, uing the
              command <br />
              <br />
              <code className="text-white light:text-red mr-3">
                npx create-next-app@latest project-name
                {/* --tailwindcss --eslint.{" "} */}
              </code>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <FiCopy />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy Code</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <br />
              <br />I have found next.js to be very useful as the app router
              simplifies routes and reduces the amount of code neccesary. You
              can still use everything you would in react, with some bonus
              features!
            </CardDescription>
          </CardHeader>
          <CardContent>I recomend trying it out ...</CardContent>
          <CardFooter className="flex justify-around">
            <Button variant="outline">Next.js</Button>
          </CardFooter>
        </Card>

        {/* SHADCN/UI */}
        <Card className="w-[500px] h-[700px] p-10 flex flex-col items-center">
          <CardHeader>
            <CardTitle>Shadcn/ui</CardTitle>
            <CardDescription>
              Shadcn/ui is{" "}
              <em>
                <strong>Not a component library</strong>{" "}
              </em>{" "}
              <br />
              They say this because you only download what you need. <br />
              This site uses a variety of their components like <br />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Select onValueChange={(value) => setComponent(value)}>
              <SelectTrigger className="w-[180px] ml-auto mr-auto mt-auto mb-auto">
                <SelectValue placeholder="Calendar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Calendar">Calendar</SelectItem>
                <SelectItem value="Skeleton">Skeleton</SelectItem>
                <SelectItem value="Scroll Area">Scroll Area</SelectItem>
              </SelectContent>
            </Select>
            <div className="">
              {component == "Calendar" && (
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border shadow w-fit h-fit ml-auto mr-auto mt-12 mb-auto"
                />
              )}
              {component == "Skeleton" && (
                <div className="flex items-center space-x-4 space-y-32 ">
                  <Skeleton className="h-12 w-12 mt-28 rounded-full " />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              )}
              {component == "Scroll Area" && (
                <ScrollArea className="h-72 w-48 rounded-md border ml-auto mr-auto mt-10 mb-auto">
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">
                      Tags
                    </h4>
                    {tags.map((tag) => (
                      <div key={tag} className="text-sm">
                        {tag}
                        <Separator className="my-2" />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}

              {/* {component == "Scroll Area" && (
                <ScrollArea className="h-72 w-48 rounded-md border mt-4">
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">
                      Tags
                    </h4>
                    {tags.map((tag) => (
                      <>
                        <div key={tag} className="text-sm">
                          {tag}
                        </div>
                        <Separator className="my-2" />
                      </>
                    ))}
                  </div>
                </ScrollArea>
              )} */}
            </div>
          </CardContent>
          <CardFooter className="flex justify-around ml-auto mr-auto mt-auto mb-1">
            <Button variant="outline">Shadcn/ui</Button>
          </CardFooter>
        </Card>

        {/* Dark Mode */}
        <Card className="w-[350px] grow h-fit p-10 ">
          <CardHeader>
            <CardTitle>Dark Mode</CardTitle>
            <CardDescription>
              Try it out here or in the navigation menu!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center text-left prose">
              <ModeToggle className="m-10"></ModeToggle>
              This is created using Shadcn/ui's DarkMode which uses next-themes.
              Simply enter <code className="">npm install next-themes</code>
              into your console, then wrap your root layout in a theme provider
              and finally, create a toggle button that uses{" "}
              <code> useTheme() </code> to communicate with the theme provider.
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">DarkMode</Button>
          </CardFooter>
        </Card>

        {/* TAILWINDCSS */}
        <Card className="w-[500px] h-fit p-10">
          <CardHeader>
            <CardTitle>Tailwindcss</CardTitle>
            <CardDescription>
              Tailwindcss makes creating projects a lot quicker.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose">
              Instead of writing out seperate <code>.css</code> files, you
              simply write your css directly with your html tags. Here is an
              example in css and html:
              <br />
              <strong>HTML : </strong> <br />
              <code>
                &lt;button class="button-red"&gt; <br />{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;Click Me <br /> &lt;/button&gt;
              </code>{" "}
              <br />
              <br />
              <strong>CSS : </strong> <br />
              <code>
                .button-red &#123; <br />
                &nbsp;&nbsp;&nbsp;color: red; <br />
                &nbsp;&nbsp;&nbsp;border: solid red 4px <br /> &#125;
              </code>
              <br /> <br />
              <strong>In Tailwind : </strong> <br />
              <code>
                &lt;button className="text-red-600 border-4 border-red-600" &gt;
                Click Me &lt;/button&gt;
              </code>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col justify-between ">
            As you can see, it makes development quicker as you don't need to
            create more files or remember class or id names. <br />
            <Button variant="outline">Tailwindcss</Button>
          </CardFooter>
        </Card>

        {/* NEXT-THEMES */}
        <Card className="w-[350px] grow">
          <CardHeader>
            <CardTitle>Next-Themes</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}