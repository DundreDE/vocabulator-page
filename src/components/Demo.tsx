"use client";

import { useState } from "react";

const cards = [
  {
    prompt: "Create or upload your decks",
    answer: "Create your own decks by typing or scanning",
  },
  {
    prompt: "Share decks",
    answer: "share share",
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
    <section
      id="demo"
      className="flex flex-col min-h-dvh items-center gap-4 p-4 justify-center"
    >
      <div className="flex w-full max-w-sm flex-col gap-4 sm:max-w-xl">
        <div className="flex aspect-[31/20] w-full items-center justify-center rounded border p-4 text-center">
          <p className="text-4xl font-semibold">
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
