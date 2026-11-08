import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-stone-800">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex gap-8 md:grid-cols-4">
          <div className="text-center">
            <Link
              href="https://vocabulator-cyan.vercel.app"
              className="text-lg font-bold text-white rounded bg-amber-800 hover:bg-amber-900 p-2"
            >
              Check Vocabulator out.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
