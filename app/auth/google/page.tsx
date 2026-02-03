"use client";

import { useRouter } from "next/navigation";

export default function GoogleAuthPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f7f3ee] px-6 py-16 text-[#1a1a1a]">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/50">
            Google SSO
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Sign up with Google
          </h1>
          <p className="text-sm text-[#1a1a1a]/60">
            This is a simulated Google OAuth screen. In production, you’d
            redirect to Google’s hosted sign-in.
          </p>
        </header>

        <section className="rounded-3xl border border-[#1a1a1a]/10 bg-white/90 p-6 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4f4] text-lg font-semibold">
                G
              </div>
              <div>
                <p className="text-sm font-semibold">Google Account</p>
                <p className="text-xs text-[#1a1a1a]/50">
                  Use your Google identity to continue.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#1a1a1a]/10 bg-[#f8f5f1] p-4 text-sm text-[#1a1a1a]/70">
              Atlas will receive your name, email address, and profile photo.
            </div>

            <button
              type="button"
              onClick={() => router.push("/welcome")}
              className="flex h-12 w-full items-center justify-center rounded-full bg-[#1a1a1a] text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-18px_rgba(26,26,26,0.7)]"
            >
              Continue as sam@google.com
            </button>
          </div>
        </section>

        <button
          type="button"
          onClick={() => router.push("/")}
          className="text-sm font-semibold text-[#1a1a1a]/60 transition hover:text-[#1a1a1a]"
        >
          Back to signup
        </button>
      </div>
    </div>
  );
}
