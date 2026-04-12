"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";

import { BadgeCheckIcon, BriefcaseIcon } from "lucide-react";

export default function Work() {
  return (
    <section id="work" className="resume-section content-page-inner min-h-screen py-16 space-y-16">
      {/* ================================
          SECTION HEADER
      ================================= */}
      <div className="text-center space-y-4 mb-16">
        <p className="content-page-kicker mb-4">Career</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">Work Experience</h2>
        <p className="text-base sm:text-lg opacity-75 max-w-2xl mx-auto">
          A blend of professional IT work and hands-on jobs that shaped my work ethic,
          reliability, and technical foundation.
        </p>
      </div>

      {/* =======================================================
          ⭐ SERIGOR — MAIN TECHNICAL JOB (FEATURED)
      ======================================================== */}
      <Card className="home-card-surface w-full max-w-6xl mx-auto p-5 sm:p-8 rounded-2xl">
        <CardHeader className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between pb-10">
          <div>
            <CardTitle className="text-3xl sm:text-4xl font-light">Serigor Inc.</CardTitle>
            <CardDescription className="text-lg sm:text-xl mt-2">
              Web Developer • IT System Administrator  
            </CardDescription>

            <p className="text-sm opacity-70 mt-2">2023 — Present</p>
          </div>

          <Image
            src="/vercel.svg" // swap for Serigor logo sm
            alt="Serigor Logo"
            width={70}
            height={70}
            className="opacity-90"
          />
        </CardHeader>

        <CardContent className="space-y-12">
          {/* DESCRIPTION */}
          <p className="text-base opacity-85 leading-relaxed max-w-3xl">
            At Serigor, I support enterprise web development, IT operations,
            identity management, and security compliance initiatives. I work across
            Microsoft 365, device management, frontend development, and internal
            tooling — creating solutions that help streamline operations and improve
            the organization's security posture.
          </p>

          {/* TECH STACK */}
          <div>
            <h3 className="text-2xl font-medium mb-4">Technologies & Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ["Microsoft 365 + Intune", "Device compliance, Autopilot, CA policies"],
                [".NET Razor + WordPress", "Custom pages, themes, automation"],
               ["Frontend Engineering", "HTML, CSS, JavaScript, UI/UX, accessibility"],
                ["Azure AD / Entra ID", "Identity, SSO, provisioning workflows"],
                ["IT Support", "Troubleshooting, networking, ticket systems"],
                ["Security & Compliance", "NIST 800-171, device hardening, MFA"],
              ].map(([title, desc], i) => (
                <Item variant="outline" className="content-surface" key={i}>
                  <ItemMedia>
                    <BadgeCheckIcon className="size-5" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemDescription>{desc}</ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </div>
          </div>

          {/* RESPONSIBILITIES */}
          <div>
            <h3 className="text-2xl font-medium mb-4">Key Responsibilities</h3>
            <ul className="space-y-3 text-base opacity-85">
              <li>• Managing Intune device compliance, policies, Autopilot resets, and endpoint security.</li>
              <li>• Developing and maintaining internal websites (Razor, WordPress, HTML/CSS/JS).</li>
              <li>• Creating user onboarding workflows and automation using Microsoft and cloud tools.</li>
              <li>• Troubleshooting hardware, software, identity, and network issues across departments.</li>
              <li>• Supporting security and compliance initiatives including NIST 800-171 documentation.</li>
            </ul>
          </div>

          {/* ACHIEVEMENTS */}
          <div>
            <h3 className="text-2xl font-medium mb-4">Achievements</h3>
            <ul className="space-y-3 text-base opacity-85">
              <li>• Improved device onboarding time through optimized Autopilot profiles and automation.</li>
              <li>• Designed custom UI enhancements and accessibility improvements for internal sites.</li>
              <li>• Helped implement identity governance and device-based conditional access rules.</li>
              <li>• Contributed to compliance and documentation for NIST SP 800-171 readiness.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* =======================================================
          ⭐ GENERAL WORK EXPERIENCE — SECOND CARD
      ======================================================== */}
      <Card className="home-card-surface w-full max-w-6xl mx-auto p-5 sm:p-8 rounded-2xl">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-8">
          <BriefcaseIcon className="size-10 opacity-80" />
          <div>
            <CardTitle className="text-2xl sm:text-3xl font-light">General Work Experience</CardTitle>
            <CardDescription className="text-base sm:text-lg mt-2 opacity-80">
              Jobs that developed discipline, customer service, and physical work ethic.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ["Landscaping", "Mowing lawns, raking leaves, shoveling snow"],
            ["Restaurant Work", "Waiting tables, barbacking, customer service"],
            ["Gym Attendant", "Maintenance, member support, equipment setup"],
          ].map(([title, desc], i) => (
            <Item variant="outline" className="content-surface" key={i}>
              <ItemMedia>
                <BadgeCheckIcon className="size-5" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{desc}</ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
