"use client";

import { useEffect } from "react";
import { initBubbleEffect } from "@/lib/bubble-effect";

export default function BubbleEffectInitializer() {
  useEffect(() => {
    const cleanupBubbleEffect = initBubbleEffect();
    return cleanupBubbleEffect;
  }, []);

  return null;
}
