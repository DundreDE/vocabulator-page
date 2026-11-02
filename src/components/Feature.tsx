export default function Features() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-amber-700/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight md:text-7xl">
            Create or upload your decks.
          </h2>
        </div>
      </div>
    </section>
  );
}
