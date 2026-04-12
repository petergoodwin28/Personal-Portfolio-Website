"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import "./contact.css";
import { initBubbleEffect } from "@/lib/bubble-effect";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const reveal = revealRef.current;


    if (!container || !reveal) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      reveal.style.setProperty("--x", `${x}px`);
      reveal.style.setProperty("--y", `${y}px`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const cleanupBubbleEffect = initBubbleEffect();
    return cleanupBubbleEffect;
  }, []);
  
  return (
    <main className="content-page-shell contact-page text-foreground">
      <section className="content-page-inner">
        <header className="content-page-header">
          <p className="content-page-kicker">Get In Touch</p>
          <h1 className="content-page-title">Contact</h1>
          <p className="content-page-subtitle">
            Have a project, collaboration, or opportunity in mind? Send me a
            message and I will get back to you soon.
          </p>
        </header>

        <div
          ref={containerRef}
          className="line-container content-surface relative w-full max-w-5xl mx-auto p-5 md:p-8"
        >
          <div ref={revealRef} className="line-reveal-layer"></div>

          <form
            className="contact-form-grid relative z-10 flex flex-col gap-4 md:gap-5"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Name"
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="sr-only">
                  Phone
                </label>
                <Input
                  id="contact-phone"
                  type="text"
                  placeholder="Phone"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="contact-subject" className="sr-only">
                  Subject
                </label>
                <Input
                  id="contact-subject"
                  type="text"
                  placeholder="Subject"
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="Message"
                  className="min-h-32 resize-y"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="flex justify-start pt-2">
              <Button type="submit" variant="outline" className="bubble-hover w-full sm:w-auto px-8">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
