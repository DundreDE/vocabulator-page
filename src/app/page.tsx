import Feature from "@/components/Feature";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative overflow-x-clip bg-stone-800 text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-amber-800/30 blur-3xl" />
        <div className="absolute right-0 top-[900px] h-[500px] rounded-full bg-amber-700/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Feature />
      </div>
    </main>
  );
}
