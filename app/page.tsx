"use client";

import { useEffect, useState } from "react";

// Cycles through an array's indexes on its own timer
function useCycle(length: number, delay: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, delay);

    return () => clearInterval(interval);
  }, [length, delay]);

  return index;
}

// Full class strings must stay literal so Tailwind can detect them
const comingOWidths = ["w-[1.172em]", "w-[0.321em]"]; // O in COMING
const comingIWidths = ["w-[0.15em]", "w-[1em]"]; // I in COMING
const soonWidths = ["w-[0.321em]", "w-[1.95em]"]; // double O in SOON

export default function Home() {
  const comingOIndex = useCycle(comingOWidths.length, 2000);
  const comingIIndex = useCycle(comingIWidths.length, 2000);
  const soonIndex = useCycle(soonWidths.length, 2000);

  // Offset lets a second shape run "opposite" the first, for any array length
  const pick = (widths: string[], index: number, offset = 0) =>
    widths[(index + offset) % widths.length];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans dark:bg-[#0C0C0C]">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-[#0C0C0C] sm:items-center">
        <div className="flex flex-col items-center justify-center gap-6 text-center sm:items-start sm:text-left">
          {/* COMING */}
          <div className="flex items-center text-[clamp(4rem,14vw,10rem)] font-black text-black dark:text-white leading-3.5">
            <span className="mt-4">C</span>
            {/* O */}
            <span
              className={`mx-[0.03em] h-[0.74em] rounded-4xl border-[0.13em] border-black transition-[width] duration-700 ease-in-out dark:border-white ${pick(comingOWidths, comingOIndex)}`}
            />
            <span className="mt-4">M</span>
            {/* I */}
            <span
              className={`mx-[0.03em] h-[0.735em] bg-black dark:bg-white transition-[width] duration-700 ease-in-out ${pick(comingIWidths, comingIIndex)}`}
            />
            <span className="mt-4">NG</span>
          </div>

          {/* SOON */}
          <div className="flex items-center text-[clamp(4rem,14vw,10rem)] font-black text-black dark:text-white leading-3.5">
            <span className="mt-4">S</span>
            {/* first O */}
            <span
              className={`mx-[0.03em] h-[0.74em] rounded-4xl border-[0.13em] border-black transition-[width] duration-700 ease-in-out dark:border-white ${pick(soonWidths, soonIndex)}`}
            />
            {/* second O */}
            <span
              className={`mx-[0.03em] h-[0.74em] rounded-4xl border-[0.13em] border-black transition-[width] duration-700 ease-in-out dark:border-white ${pick(soonWidths, soonIndex, 1)}`}
            />
            <span className="mt-4">N</span>
          </div>
        </div>
      </main>
    </div>
  );
}
