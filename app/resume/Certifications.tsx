"use client";

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="w-full min-h-screen flex flex-col items-center py-32"
    >
      <h1 className="font-extralight text-5xl mb-6 prose text-center">
        Certifications
      </h1>

      <p className="opacity-70 text-lg text-center max-w-2xl mb-16">
        Industry-recognized credentials demonstrating my commitment to 
        continuous learning and cloud technologies.
      </p>

      <div className="flex flex-col gap-12 w-full max-w-5xl">

        {/* CARD 1 — Slides in from RIGHT */}
        <Card className="cert-anim-right shadow-lg border rounded-2xl p-6">
          <CardHeader>
            <CardTitle>Microsoft 365 / Intune</CardTitle>
            <CardDescription>Device Mgmt • Identity • Cloud Admin</CardDescription>
          </CardHeader>
          <CardContent>
            Practical experience with device compliance, Autopilot provisioning,
            conditional access, Azure AD identity management, and Microsoft admin tooling.
          </CardContent>
        </Card>

        {/* CARD 2 — Slides in from LEFT */}
        <Card className="cert-anim-left shadow-lg border rounded-2xl p-6">
          <CardHeader>
            <CardTitle>AWS Cloud Practitioner</CardTitle>
            <CardDescription>Amazon Web Services — 2024</CardDescription>
          </CardHeader>
          <CardContent>
            Foundations of compute, storage, networking, shared responsibility, IAM,
            VPC fundamentals, pricing models, and hands-on labs.
          </CardContent>
        </Card>

        {/* CARD 3 — Slides UP from bottom */}
        <Card className="cert-anim-up shadow-lg border rounded-2xl p-6">
          <CardHeader>
            <CardTitle>Continuous Learning</CardTitle>
            <CardDescription>Networking • Security • Web Development</CardDescription>
          </CardHeader>
          <CardContent>
            While not formal certifications, I regularly study cloud architecture,
            networking principles, security best practices, and DevOps fundamentals
            through YouTube, labs, and hands-on projects.
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
