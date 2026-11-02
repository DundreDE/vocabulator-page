export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-amber-800/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Vocabulator
          </h1>
          <p className="mt-6 text-xl text-white/80 sm:text-2xl lg:text-3xl">
            Learn vocabs the new way.
          </p>
        </div>
      </div>
    </section>
  );
}
