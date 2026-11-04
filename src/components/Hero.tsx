import Reveal from "@/components/Reveal";
import { APP_URL } from "@/lib/config";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden flex items-center justify-center px-6 min-h-dvh"
    >
      <div className="relative mx-auto grid max-w-3xl text-center">
        <Reveal>
          <div className="text-center">
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Vocabulator
            </h1>
            <p className="mt-6 text-xl text-white/80 sm:text-2xl lg:text-3xl">
              Learn vocabs the new way.
            </p>
            <Link
              href={APP_URL}
              className="mt-8 text-xl font-bold inline-block rounded-md bg-amber-800 px-6 py-3 hover:bg-amber-900"
            >
              Get Started
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
