import Reveal from "@/components/Reveal";
import { APP_URL } from "@/lib/config";
import Link from "next/link";
import Demo from "./Demo";

export default function Features() {
  return (
    <section id="Features" className="flex min-h-dvh items-center px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-24 h-64 w-64 rounded-full bg-amber-600/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 -right-24 h-64 w-64 rounded-full bg-amber-600/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why should you use Vocabulator?
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6 p-4">
          <Reveal>
            <Demo />
          </Reveal>
        </div>
        <Reveal>
          <div className="mt-24 flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-white">
              So why are you waiting?
            </h2>
            <Link
              href={APP_URL}
              className="rounded-xl p-6 text-4xl font-bold bg-amber-800 hover:bg-amber-900"
            >
              Get Started now
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
