import { ExternalLink, Smartphone, Wifi, BatteryFull, SignalHigh } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function PhoneMockup({ src, href, cta, label }) {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [time, setTime] = useState("9:41");

    const MOBILE_WIDTH = 375;

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).replace(' AM', '').replace(' PM', ''));
        };
        updateTime();
        const interval = setInterval(updateTime, 30000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (entry.contentRect.width > 0) {
                    setScale(entry.contentRect.width / MOBILE_WIDTH);
                }
            }
        });

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    const safeScale = scale > 0 ? scale : 1;
    const isVideo = src?.endsWith(".mp4");

    return (
        <div className="relative mx-auto w-67.5 sm:w-75">
            <div className="absolute -inset-10 -z-10 rounded-full glow-soft" />
            <div className="rounded-[2.6rem] border-[5px] border-border bg-card p-1.5 glow-ring">
                <div className="relative flex flex-col overflow-hidden rounded-[2.1rem] bg-background aspect-9/19">

                    <div className="relative z-20 flex w-full shrink-0 items-center justify-between bg-background px-4 pb-2 pt-3 text-[11px] font-semibold tracking-wider text-foreground pointer-events-none">
                        <span className="pl-1 w-10 text-left">{time}</span>
                        <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground shadow-sm" />
                        <div className="flex w-10 items-center justify-end gap-1.5 pr-1">
                            <SignalHigh className="h-3.5 w-3.5" />
                            <Wifi className="h-3 w-3" />
                            <BatteryFull className="h-4 w-4" />
                        </div>
                    </div>

                    <div
                        ref={containerRef}
                        className="relative flex-1 w-full overflow-hidden bg-surface z-10"
                    >
                        {src || href ? (
                            <div
                                style={{
                                    width: `${MOBILE_WIDTH}px`,
                                    height: `${100 / safeScale}%`,
                                    transform: `scale(${safeScale})`,
                                    transformOrigin: "top left",
                                    overflow: "hidden",
                                    WebkitOverflowScrolling: "touch",
                                }}
                            >
                                {isVideo ? (
                                    <video
                                        src={src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            pointerEvents: "auto",
                                        }}
                                    />
                                ) : (
                                    <iframe
                                        src={src ?? href}
                                        title={`${label} interactive demo`}
                                        style={{
                                            width: `calc(100% + 20px)`,
                                            height: "100%",
                                            border: "none",
                                            pointerEvents: "auto",
                                            touchAction: "auto",
                                        }}
                                        scrolling="yes"
                                        loading="lazy"
                                        allow="fullscreen"
                                    />
                                )}
                            </div>
                        ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
                                <Smartphone className="h-7 w-7 text-primary" />
                                <p className="font-display text-sm font-semibold">{label}</p>
                                <p className="text-xs text-muted-foreground">
                                    Live in-browser demo slot goes here.
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
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                    {cta}
                    <ExternalLink className="h-4 w-4" />
                </a>
            )}
        </div>
    );
}

export function BrowserMockup({ label, url, href, src, cta, wide = true }) {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);

    // Explicit 16:10 desktop dimensions to prevent black bars
    const DESKTOP_WIDTH = 1024;
    const DESKTOP_HEIGHT = 640;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (entry.contentRect.width > 0) {
                    setScale(entry.contentRect.width / DESKTOP_WIDTH);
                }
            }
        });

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    const safeScale = scale > 0 ? scale : 1;
    const isVideo = src?.endsWith(".mp4");

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

                <div
                    ref={containerRef}
                    className="relative aspect-16/10 w-full overflow-hidden bg-surface z-10"
                >
                    {src || href ? (
                        <div
                            style={{
                                width: `${DESKTOP_WIDTH}px`,
                                height: `${DESKTOP_HEIGHT}px`, // Fixed height forces the perfect 16:10 box
                                transform: `scale(${safeScale})`,
                                transformOrigin: "top left",
                                overflow: "hidden",
                                WebkitOverflowScrolling: "touch",
                            }}
                        >
                            {isVideo ? (
                                <video
                                    src={src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover", // Ensures the video scales up to crop out any black bars
                                        pointerEvents: "auto",
                                    }}
                                />
                            ) : (
                                <iframe
                                    src={href}
                                    title={`${label} live website preview`}
                                    style={{
                                        width: `${DESKTOP_WIDTH + 20}px`,
                                        height: "100%",
                                        border: "none",
                                        pointerEvents: "auto",
                                        touchAction: "auto",
                                    }}
                                    scrolling="yes"
                                    loading="lazy"
                                    allow="fullscreen"
                                />
                            )}
                        </div>
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