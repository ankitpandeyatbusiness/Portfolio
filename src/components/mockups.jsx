import { ExternalLink, Smartphone } from "lucide-react";

export function PhoneMockup({
    src,
    href,
    cta,
    label,
}) {
    return (
        <div className="relative mx-auto w-67.5 sm:w-75">
            <div className="absolute -inset-10 -z-10 rounded-full glow-soft" />
            <div className="rounded-[2.6rem] border border-border bg-card p-3 glow-ring">
                <div className="relative overflow-hidden rounded-4xl bg-surface">
                    <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-background/80" />
                    <div className="aspect-9/19 w-full overflow-hidden scrollbar-hide">
                        {src || href ? (
                            <iframe
                                src={src ?? href}
                                title={`${label} interactive demo`}
                                className="h-full w-full border-0 overflow-hidden scrollbar-hide"
                                loading="lazy"
                                allow="fullscreen"
                                scrolling="no"
                            />
                        ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
                                <Smartphone className="h-7 w-7 text-primary" />
                                <p className="font-display text-sm font-semibold">{label}</p>
                                <p className="text-xs text-muted-foreground">
                                    Live in-browser demo slot — Appetize.io embed goes here.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {href && cta && (
                <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                    {cta}
                    <ExternalLink className="h-4 w-4" />
                </a>
            )}
        </div>
    );
}

export function BrowserMockup({
    label,
    url,
    href,
    cta,
    wide = true,
}) {
    return (
        <div className={`relative mx-auto w-full ${wide ? "" : "max-w-md"}`}>
            <div className="absolute -inset-8 -z-10 rounded-3xl glow-soft" />
            <div className="overflow-hidden rounded-2xl border border-border bg-card glow-ring">
                <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                    <div className="ml-3 flex-1 truncate rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                        {url}
                    </div>
                </div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-surface scrollbar-hide">
                    {href ? (
                        <iframe
                            src={href}
                            title={`${label} live website preview`}
                            className="h-full w-full border-0 overflow-hidden scrollbar-hide"
                            loading="lazy"
                            allow="fullscreen"
                            scrolling="no"
                        />
                    ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-3 px-8 text-center">
                            <p className="font-display text-lg font-semibold">{label}</p>
                            <p className="max-w-sm text-sm text-muted-foreground">
                                Live website preview loads here.
                            </p>
                        </div>
                    )}
                </div>
                {href && (
                    <div className="flex justify-center border-t border-border bg-surface px-4 py-3">
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                        >
                            {cta}
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}