import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-[#0f1115] px-6 py-16 text-white">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Welcome
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            You’re signed up and verified.
          </h1>
          <p className="text-sm text-white/70">
            This is the home screen for new users. From here you can take your
            first steps inside the product.
          </p>
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.65)]">
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
              <div>
                <p className="text-sm font-semibold">Workspace: Atlas Demo</p>
                <p className="text-xs text-white/60">
                  Created moments ago
                </p>
              </div>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Active
              </span>
            </div>

            <button
              type="button"
              className="flex h-12 w-full items-center justify-center rounded-full bg-[#f3c77a] text-sm font-semibold text-[#1a1a1a] transition hover:-translate-y-0.5 hover:bg-[#f1b857]"
            >
              Go to dashboard
            </button>
          </div>
        </section>

        <Link
          href="/"
          className="text-sm font-semibold text-white/60 transition hover:text-white"
        >
          Return to signup
        </Link>
      </div>
    </div>
  );
}
