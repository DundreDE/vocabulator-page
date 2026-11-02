"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef, useState } from "react";

const sections = [
  {
    id: "hero",
    title: "Hero",
    text: "Learn vocabs the new way.",
    bg: "bg-slate-950",
  },
  {
    id: "features",
    title: "Features",
    text: "Learn and create your vocab decks",
    bg: "bg-indigo-950",
  },
];

export default function FullpageSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  const goTo = (i: number) =>
    document
      .getElementById(sections[i].id)
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="relative">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-white"
      />
    </main>
  );
}
