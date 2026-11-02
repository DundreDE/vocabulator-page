import stats from "@/assets/Stats.png";
import Image from "next/image";

export default function Features() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24">
      <div className="relative mx-auto flex flex-col max-w-6xl items-center gap-40 md:grid-cols-2">
        <div className="grid gap-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-7xl">
            Create or upload your decks.
          </h2>
        </div>
        <div className="flex gap-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-7xl">
            Look at your stats.
          </h2>
          <Image
            src={stats}
            alt="Stats Heatmap"
            width={200}
            height={100}
            className="rounded-lg border border-stone-700"
          />
        </div>
        <div className="grid gap-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-7xl">
            Share your decks with friends or your class.
          </h2>
        </div>
      </div>
    </section>
  );
}
