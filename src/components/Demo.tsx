"use client";

import { useState } from "react";

const cards = [
  {
    prompt: "Create or upload your decks",
    answer: "Create your own decks by typing or scanning,",
  },
  {
    prompt: "Space Repetition learning",
    answer: "Learn vocab cards so that they are staying in your mind.",
  },

  {
    prompt: "Share your decks",
    answer: "Share your decks with your friends and class and learn together.",
  },
];

const btn =
  "rounded bg-amber-800 px-4 py-2 text-lg text-white hover:bg-amber-900 " +
  "disabled:opacity-30 disabled:hover:bg-amber-800";

export default function Demo() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = cards[index];

  const go = (delta: number) => {
    setIndex((i) => Math.min(Math.max(i + delta, 0), cards.length - 1));
    setFlipped(false);
  };

  return (
    <section id="demo" className="flex justify-center p-4">
      <div className="flex w-[calc(100vw-2rem)] max-w-xl flex-col gap-4">
        <div className="flex h-56 items-center justify-center overflow-hidden rounded border p-4 text-center sm:h-64">
          <p className="w-full break-words text-2xl font-semibold sm:text-4xl">
            {flipped ? card.answer : card.prompt}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-8">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={index === 0}
            className={btn}
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => setFlipped((f) => !f)}
            className={btn}
          >
            Flip it!
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={index === cards.length - 1}
            className={btn}
          >
            Next
          </button>
        </div>

        <p className="text-center text-lg">
          {index + 1} / {cards.length}
        </p>
      </div>
    </section>
  );
}
