import { ArrowRight, Zap } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

export function Hero() {
    const a = useReveal(0);

    return (
        <section id="top" className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10 grid-backdrop opacity-60" />
            <div
                ref={a.ref}
                className={`${a.className} mx-auto max-w-4xl px-5 pb-12 pt-12 text-center sm:pb-12 sm:pt-16`}
                style={a.style}
            >
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
                    <Zap className="h-3.5 w-3.5 text-accent" />
                    Full-Stack &amp; Android Developer
                </span>
                <h1 className="mt-7 text-4xl font-bold leading-[1.08] sm:text-6xl">
                    <span className="text-gradient">
                        I build fast, beautiful web and mobile apps that engage your users and grow your business.
                    </span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                    From custom Android applications to automated business platforms.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] glow-soft"
                    >
                        Start Your Project
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#work"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                    >
                        See the work
                    </a>
                </div>
            </div>
        </section>
    );
}