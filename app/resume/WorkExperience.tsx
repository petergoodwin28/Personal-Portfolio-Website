import { Button } from "@/components/ui/button";
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

        <div className="flex flex-row flex-wrap gap-x-20 mt-52 mb-96 work-card-container">
          <div className="gradient-border-wrapper">
            <Card className="work-card h-96 w-96 shadow-workCard ">
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
              {/* link to website
               <CardFooter>
                <p>Card Footer</p>
              </CardFooter> */}
              <CardFooter>
                <Button variant="outline" className="">
                  Website
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card className="work-card h-96 w-96 shadow-workCard ">
            <CardHeader>
              <CardTitle>Web Developer</CardTitle>
              <CardDescription>Serigor Inc.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="prose">
                Wordpress Development <br />
                HTML/CSS/JS Development <br />
                .NET Development <br />
                ASP.NET Development <br />
                Microsoft 365 Admin Consoles <br />
                IT Support <br />
                Networking <br />
                Windows OS <br />
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="">
                Website
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
{
  /* <Card className="work-card w-64 shadow-lg">
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
            </CardFooter> 
          </Card> */
}
