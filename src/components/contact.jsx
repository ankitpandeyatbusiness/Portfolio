import { useState } from "react";
import { Clock, Lock, Send, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { useReveal } from "../hooks/use-reveal";

const badges = [
    { icon: Lock, label: "100% Secure" },
    { icon: Clock, label: "Fast Turnaround" },
    { icon: ShieldCheck, label: "Your Code, Your Ownership" },
];

export function Contact() {
    const reveal = useReveal();
    const [sent, setSent] = useState(false);

    return (
        <section id="contact" className="border-t border-border bg-surface">
            <div
                ref={reveal.ref}
                className={`${reveal.className} mx-auto max-w-3xl px-5 py-24 sm:py-32`}
                style={reveal.style}
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Ready to build a system that works this hard for your business?
                    </h2>
                    <p className="mt-4 text-base text-muted-foreground">
                        Send me a message and let&apos;s discuss your requirements.
                    </p>
                </div>

                <form
                    className="mt-12 space-y-5 rounded-3xl border border-border bg-card p-6 sm:p-8 glow-ring"
                    onSubmit={(e) => {
                        e.preventDefault();
                        setSent(true);
                        toast.success("Message ready to send", {
                            description: "Connect an inbox and I'll deliver these enquiries straight to you.",
                        });
                    }}
                >
                    <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block">
                            <span className="text-sm font-medium">Name</span>
                            <input
                                required
                                name="name"
                                placeholder="Your name"
                                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                            />
                        </label>
                        <label className="block">
                            <span className="text-sm font-medium">Email</span>
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="you@company.com"
                                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                            />
                        </label>
                    </div>
                    <label className="block">
                        <span className="text-sm font-medium">What are you looking to build?</span>
                        <textarea
                            required
                            name="brief"
                            rows={5}
                            placeholder="Tell me about your business and what you need."
                            className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                        />
                    </label>
                    <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
                    >
                        {sent ? "Message sent" : "Send message"}
                        <Send className="h-4 w-4" />
                    </button>
                </form>

                <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                    {badges.map((b) => (
                        <li key={b.label} className="flex items-center gap-2">
                            <b.icon className="h-4 w-4 text-accent" />
                            {b.label}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}