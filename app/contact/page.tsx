import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function page() {
  return (
    <main className="w-full h-[100vh] contact-container prose">
      <div className="scroll-watcher"></div>

      <div className="w-70% h-[80vh] flex flex-col items-center ">
        <h1 className=" font-extralight text-3xl prose mt-28 ">Contact Me</h1>
        <div className="flex flex-col gap-4 mt-24 p-10 rounded-lg  w-[50%] ">
          <div className="flex flex-row gap-x-10 ">
            <Input type="text" placeholder="Name" className=""></Input>
            <Input type="email" placeholder="Email" className=""></Input>
            <Input type="text" placeholder="Phone" className=""></Input>
          </div>
          <div className="flex flex-col   justify-around">
            <Input type="text" placeholder="Subject" className="mb-4"></Input>

            <Input type="text" placeholder="Message" className="h-32"></Input>
          </div>
          <Button variant="outline">Submit</Button>
        </div>
      </div>
    </main>
  );
}

export default page;
