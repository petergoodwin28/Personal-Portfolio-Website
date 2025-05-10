import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import React from "react";

function WorkExperience() {
  return (
    <section className="mt-48 mb-52" id="work-experience">
      <div className="text-center flex flex-col justify-around items-center">
        <h1 className="text-center font-extralight text-5xl">
          Work Experience
        </h1>
        <div className="relative w-64 h-80 group perspective">
  <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
    {/* Front Side */}
    <div className="absolute inset-0 backface-hidden">
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle>Front Side</CardTitle>
          <CardDescription>Web Developer</CardDescription>
        </CardHeader>
        <CardContent>
          <p>WordPress & ASP.Net</p>
          <p>IT Support in M365</p>
        </CardContent>
      </Card>
    </div>

    {/* Back Side */}
    <div className="absolute inset-0 rotate-y-180 backface-hidden">
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle>Back Side</CardTitle>
          <CardDescription>Serigor Inc.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Admin tasks</p>
          <p>Remote desktop, Windows</p>
        </CardContent>
      </Card>
    </div>
  </div>
</div>







        <div className="flex flex-row gap-x-20 mt-52 mb-96 work-card-container">
          <div className="gradient-border-wrapper">
            <Card className="work-card w-64 ">
              <CardHeader>
                <CardTitle>It Consultant/ Web Developer</CardTitle>
                <CardDescription>Omnia Health</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Plan and Implement tech solutions</p>
                <p>
                  Developing a website for bussiness, implementing payment
                  processing with Stripe API.
                </p>
                <p>Helped with bussiness decisions and marketing plans.</p>
              </CardContent>
              {/* <CardFooter>
                <p>Card Footer</p>
              </CardFooter> */}
            </Card>
          </div>

          <Card className="work-card w-64">
            <CardHeader>
              <CardTitle>Front Desk Attendent</CardTitle>
              <CardDescription>Midway Motion & Fitness</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Sells memberships to new members.</p>
              <p>
                Updates member and account information through a POS system.
              </p>
              <p>
                Maintain the gym facilities and close up without supervision.
              </p>
            </CardContent>
            {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
          </Card>

          <Card className="work-card w-64">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

          <Card className="work-card w-64">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
