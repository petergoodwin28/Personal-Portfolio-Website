import { Card, CardHeader, CardContent } from "@/components/ui/card";
import React from "react";

function Certifications() {
  return (
    <section className=" w-full flex flex-col items-center h-[100vh]">
      <h1 className="font-extralight text-3xl prose text-center">
        Certifications
      </h1>

      <div className="scroll-in-left overflow-x-hidden">
        <Card className="w-fit">
          <CardHeader>AWS Cloud Practitioner</CardHeader>
          <CardContent>
            Learned about AWS services, pricing, and responsibility. <br />
            Fundamentals of Compute, Storage, Region, etc.
          </CardContent>
        </Card>
      </div>

      <div className="scroll-in-right overflow-x-hidden">
        <Card className="w-fit">
          <CardHeader>AWS Cloud Practitioner</CardHeader>
          <CardContent>
            Learned about AWS services, pricing, and responsibility. <br />
            Fundamentals of Compute, Storage, Region, etc.
          </CardContent>
        </Card>
      </div>

      <div className="scroll-in-left-delay overflow-x-hidden">
        <Card className="w-fit">
          <CardHeader>Networking / IT </CardHeader>
          <CardContent>
            While I dont have any more certifications, I often watch youtube
            videos on these topics.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Certifications;
