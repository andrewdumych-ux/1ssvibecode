"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Home() {
  const router = useRouter();
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailError = useMemo(() => {
    if (!touched) return "";
    if (!email.trim()) return "Email is required.";
    if (!EMAIL_REGEX.test(email.trim())) return "Enter a valid email address.";
    return "";
  }, [email, touched]);

  const canContinue = !emailError && email.trim().length > 0;

  const handleEmailContinue = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(true);
    if (!canContinue) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push(`/verify?email=${encodeURIComponent(email.trim())}`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0b0b] text-white">
      <div className="pointer-events-none absolute -left-48 top-[-120px] h-[520px] w-[520px] rounded-full bg-[#3b1522] opacity-70 blur-[180px]" />
      <div className="pointer-events-none absolute right-[-160px] top-[-140px] h-[520px] w-[520px] rounded-full bg-[#1a1a1a] opacity-95 blur-[190px]" />
      <div className="pointer-events-none absolute bottom-[-240px] left-1/4 h-[560px] w-[560px] rounded-full bg-[#0b3b30] opacity-70 blur-[200px]" />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
        <section className="flex w-full max-w-[420px] flex-col items-center text-center">
          <h1 className="text-[26px] font-semibold leading-[1.35] tracking-tight sm:text-[30px]">
            Welcome to Andrew.
            <br />
            Build your universe here
          </h1>

          <div className="mt-10 flex w-full max-w-[360px] flex-col gap-4">
            <button
              type="button"
              onClick={() => router.push("/auth/google")}
              className="flex h-11 w-full items-center justify-center gap-3 rounded-full bg-white text-sm font-medium text-[#1a1a1a] shadow-[0_10px_30px_-20px_rgba(255,255,255,0.6)] transition hover:-translate-y-0.5"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#efefef] text-[11px] font-semibold text-[#1a1a1a]">
                G
              </span>
              Continue with Google
            </button>

            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-white/50">
              <span className="h-px w-full bg-white/10" />
              or
              <span className="h-px w-full bg-white/10" />
            </div>

            {!isEmailOpen && (
              <button
                type="button"
                onClick={() => setIsEmailOpen(true)}
                className="flex h-11 w-full items-center justify-center rounded-full bg-[#2a2a2a] text-sm font-medium text-white shadow-[0_6px_18px_-14px_rgba(0,0,0,0.8)] transition hover:-translate-y-0.5 hover:bg-[#333333]"
              >
                Continue with email
              </button>
            )}
          </div>

          {isEmailOpen && (
            <form
              onSubmit={handleEmailContinue}
              className="mt-5 w-full max-w-[360px] space-y-3 text-left"
            >
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={() => setTouched(true)}
                placeholder="Enter your email"
                className="h-11 w-full rounded-xl border border-white/10 bg-[#1c1c1c] px-4 text-sm text-white placeholder:text-white/35 focus:border-white/40 focus:outline-none"
                required
              />
              {emailError ? (
                <p className="text-xs font-medium text-[#fca5a5]">
                  {emailError}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={!canContinue || isSubmitting}
                className="flex h-11 w-full items-center justify-center rounded-xl bg-[#2a2a2a] text-sm font-semibold text-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.7)] transition hover:-translate-y-0.5 hover:bg-[#333333] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Continue"}
              </button>
            </form>
          )}
        </section>
      </main>
    </div>
  );
}
