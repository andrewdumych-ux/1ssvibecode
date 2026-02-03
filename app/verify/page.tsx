import Link from "next/link";

type VerifyPageProps = {
  searchParams?: {
    email?: string;
  };
};

export default function VerifyPage({ searchParams }: VerifyPageProps) {
  const email = searchParams?.email ?? "your email";

  return (
    <div className="min-h-screen bg-[#f7f3ee] px-6 py-16 text-[#1a1a1a]">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/50">
            Verify email
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Check your inbox
          </h1>
          <p className="text-sm text-[#1a1a1a]/65">
            We sent a verification link to{" "}
            <span className="font-semibold text-[#1a1a1a]">{email}</span>.
            Open the email and click the button to finish signing up.
          </p>
        </header>

        <section className="rounded-3xl border border-[#1a1a1a]/10 bg-white/90 p-6 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#1a1a1a]/10 bg-[#f8f5f1] p-4 text-sm text-[#1a1a1a]/70">
              This is a simulated email. In production, the button below would
              live inside the email message.
            </div>

            <Link
              href="/welcome"
              className="flex h-12 w-full items-center justify-center rounded-full bg-[#f3c77a] text-sm font-semibold text-[#1a1a1a] transition hover:-translate-y-0.5 hover:bg-[#f1b857]"
            >
              Verify and continue
            </Link>
          </div>
        </section>

        <Link
          href="/"
          className="text-sm font-semibold text-[#1a1a1a]/60 transition hover:text-[#1a1a1a]"
        >
          Back to signup
        </Link>
      </div>
    </div>
  );
}
