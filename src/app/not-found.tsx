import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-start justify-center px-6 py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-lg text-base text-ink/55">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/en"
        className="mt-8 rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-soft dark:text-paper"
      >
        Back to home
      </Link>
    </div>
  );
}
