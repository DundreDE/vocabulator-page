import Reveal from "@/components/Reveal";

const features = [
  {
    title: "Space Repetition learning",
    text: "Learn vocab cards so that they are staying in your mind.",
  },
  {
    title: "Create or upload your decks",
    text: "Create your own decks by typing or scanning,",
  },
  {
    title: "Share your decks",
    text: "Share your decks with your friends and class and learn together.",
  },
];

export default function Features() {
  return (
    <section id="Features" className="flex min-h-dvh items-center px-6 py-24">
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why should you use Vocabulator?
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6 p-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="rounded-lg bg-stone-900/30 p-2 border border-white/30">
                <h3 className="text-3xl font-semibold text-white">{f.title}</h3>
                <p className="mt-3 text-xl text-white/70">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
