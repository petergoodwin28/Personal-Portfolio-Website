"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Certifications() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Local scroll timeline for THIS section only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // 0 when section enters, 1 when it leaves
  });

  const prefersReducedMotion = useReducedMotion();

  // Simple mobile detection (you can later extract this to a hook)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 768px)");
    const legacyMq = mq as MediaQueryList & {
      addListener?: (listener: (event: MediaQueryListEvent) => void) => void;
      removeListener?: (listener: (event: MediaQueryListEvent) => void) => void;
    };

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // init
    setIsMobile(mq.matches);

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handleChange);
    } else if (typeof legacyMq.addListener === "function") {
      // Safari / older
      legacyMq.addListener(handleChange);
    }

    return () => {
      if (typeof mq.removeEventListener === "function") {
        mq.removeEventListener("change", handleChange);
      } else if (typeof legacyMq.removeListener === "function") {
        legacyMq.removeListener(handleChange);
      }
    };
  }, []);

  // Shared fade-in for all cards
  const fadeOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Desktop directional transforms
  const card1X = useTransform(scrollYProgress, [0, 0.4], [180, 0]); // from right
  const card2X = useTransform(scrollYProgress, [0.1, 0.55], [-140, 0]); // from left
  const card3Y = useTransform(scrollYProgress, [0.2, 0.65], [160, 0]); // from bottom

  // Mobile: softer vertical rise for all cards
  const mobileY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);

  // Build per-card style based on motion preferences + device
  const card1Style = prefersReducedMotion
    ? {}
    : isMobile
    ? { opacity: fadeOpacity, y: mobileY }
    : { opacity: fadeOpacity, x: card1X };

  const card2Style = prefersReducedMotion
    ? {}
    : isMobile
    ? { opacity: fadeOpacity, y: mobileY }
    : { opacity: fadeOpacity, x: card2X };

  const card3Style = prefersReducedMotion
    ? {}
    : isMobile
    ? { opacity: fadeOpacity, y: mobileY }
    : { opacity: fadeOpacity, y: card3Y };

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="resume-section content-page-inner w-full min-h-screen flex flex-col items-center py-20"
    >
      <p className="content-page-kicker mb-4">Credentials</p>
      <h2 className="font-light text-3xl sm:text-4xl md:text-5xl mb-6 prose text-center tracking-wide">
        Certifications
      </h2>

      <p className="opacity-75 text-base sm:text-lg text-center max-w-2xl mb-14">
        Industry-recognized credentials demonstrating my commitment to
        continuous learning and cloud technologies.
      </p>

      <div className="flex flex-col gap-12 w-full max-w-5xl">
        {/* CARD 1 — From RIGHT */}
        <motion.div style={card1Style}>
          <Card className="home-card-surface rounded-2xl p-5 sm:p-6">
            <CardHeader>
              <CardTitle>Microsoft 365 / Intune</CardTitle>
              <CardDescription>
                Device Mgmt • Identity • Cloud Admin
              </CardDescription>
            </CardHeader>
            <CardContent>
              Practical experience with device compliance, Autopilot
              provisioning, conditional access, Azure AD identity management,
              and Microsoft admin tooling.
            </CardContent>
          </Card>
        </motion.div>

        {/* CARD 2 — From LEFT */}
        <motion.div style={card2Style}>
          <Card className="home-card-surface rounded-2xl p-5 sm:p-6">
            <CardHeader>
              <CardTitle>AWS Cloud Practitioner</CardTitle>
              <CardDescription>Amazon Web Services — 2024</CardDescription>
            </CardHeader>
            <CardContent>
              Foundations of compute, storage, networking, shared responsibility,
              IAM, VPC fundamentals, pricing models, and hands-on labs.
            </CardContent>
          </Card>
        </motion.div>

        {/* CARD 3 — From BOTTOM (UP) */}
        <motion.div style={card3Style}>
          <Card className="home-card-surface rounded-2xl p-5 sm:p-6">
            <CardHeader>
              <CardTitle>Continuous Learning</CardTitle>
              <CardDescription>
                Networking • Security • Web Development
              </CardDescription>
            </CardHeader>
            <CardContent>
              While not formal certifications, I regularly study cloud
              architecture, networking principles, security best practices, and
              DevOps fundamentals through YouTube, labs, and hands-on projects.
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

// export default function Certifications() {
//   return (
//     <section
//       id="certifications"
//       className="w-full min-h-screen flex flex-col items-center py-32"
//     >
//       <h1 className="font-extralight text-5xl mb-6 prose text-center">
//         Certifications
//       </h1>

//       <p className="opacity-70 text-lg text-center max-w-2xl mb-16">
//         Industry-recognized credentials demonstrating my commitment to 
//         continuous learning and cloud technologies.
//       </p>

//       <div className="flex flex-col gap-12 w-full max-w-5xl">

//         {/* CARD 1 — Slides in from RIGHT */}
//         <Card className="cert-anim-right shadow-lg border rounded-2xl p-6">
//           <CardHeader>
//             <CardTitle>Microsoft 365 / Intune</CardTitle>
//             <CardDescription>Device Mgmt • Identity • Cloud Admin</CardDescription>
//           </CardHeader>
//           <CardContent>
//             Practical experience with device compliance, Autopilot provisioning,
//             conditional access, Azure AD identity management, and Microsoft admin tooling.
//           </CardContent>
//         </Card>

//         {/* CARD 2 — Slides in from LEFT */}
//         <Card className="cert-anim-left shadow-lg border rounded-2xl p-6">
//           <CardHeader>
//             <CardTitle>AWS Cloud Practitioner</CardTitle>
//             <CardDescription>Amazon Web Services — 2024</CardDescription>
//           </CardHeader>
//           <CardContent>
//             Foundations of compute, storage, networking, shared responsibility, IAM,
//             VPC fundamentals, pricing models, and hands-on labs.
//           </CardContent>
//         </Card>

//         {/* CARD 3 — Slides UP from bottom */}
//         <Card className="cert-anim-up shadow-lg border rounded-2xl p-6">
//           <CardHeader>
//             <CardTitle>Continuous Learning</CardTitle>
//             <CardDescription>Networking • Security • Web Development</CardDescription>
//           </CardHeader>
//           <CardContent>
//             While not formal certifications, I regularly study cloud architecture,
//             networking principles, security best practices, and DevOps fundamentals
//             through YouTube, labs, and hands-on projects.
//           </CardContent>
//         </Card>

//       </div>
//     </section>
//   );
// }
