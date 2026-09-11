import { useEffect, useState } from "react";
import { CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";
import { BrowserMockup, PhoneMockup } from "./Mockups";

function useIsMobile() {
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        const update = () => setMobile(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);
    return mobile;
}

const projects = [
    {
        name: "WorkEdumusic",
        tag: "Smart Office & Staff Management",
        visual: "browser",
        url: "workedumusicindia.com",
        href: "https://www.workedumusicindia.com",
        cta: "View Live App",
        problem:
            "Business owners waste hours tracking staff attendance, losing important work files in messy WhatsApp groups, and struggling to see who is actually working hard.",
        gainsTitle: "How it Boosts Profit & Productivity",
        gains: [
            {
                title: "Healthy Competition",
                body: 'Features a live "Leaderboard" and easy-to-read graphs showing every employee’s daily performance. When staff see their rank, they work harder, increasing your company’s daily output.',
            },
            {
                title: "No More Lost Files",
                body: "Staff can upload and seamlessly view work documents, images, and media files directly in the app. Everything is securely saved in one place.",
            },
            {
                title: "Saves Management Time",
                body: "With live attendance, voice calls, and automated tracking for 40-50 daily users, the business owner can manage the whole office from their phone while traveling.",
            },
        ],
        hire: "I build private, secure systems that put your business on autopilot, cutting down management costs and squeezing more productivity out of your team.",
    },
    {
        name: "NepalTrip",
        tag: "24/7 Sales & Booking Machine",
        visual: "browser",
        url: "nepaltrip.in",
        href: "https://www.nepaltrip.in",
        cta: "View Live Website",
        problem:
            "Most travel websites are just digital brochures. Visitors look and leave, meaning you lose money on potential bookings.",
        gainsTitle: "How it Boosts Profit",
        gains: [
            { title: 'Captures "Hot" Leads', body: "Instantly, via real-time inquiries." },
            { title: "Stops Customer Leakage", body: "By enabling fast responses." },
            { title: "Works While You Sleep", body: "By collecting data 24/7." },
        ],
        hire: "If you run a service business, I build you a platform designed specifically to multiply your daily inquiries and increase your monthly revenue.",
    },
    {
        name: "LocalAwaaz",
        tag: "Smart Location Tracking App",
        visual: "browser",
        url: "localawaaz.in",
        href: "https://www.localawaaz.in",
        cta: "View Live App",
        problem:
            "Companies lose massive amounts of money and time sending staff to incorrect locations or manually checking fake reports.",
        gainsTitle: "How it Boosts Profit",
        gains: [
            { title: "Zero Wasted Trips", body: "Using smart location verification." },
            { title: "Cuts Manual Labor Costs", body: "By automating the checking process." },
        ],
        hire: "I build highly accurate, map-based apps for delivery businesses, logistics, or local services guaranteeing your staff takes the fastest routes.",
    },
    {
        name: "CinePlay",
        tag: "Live Video App — Ready for Your Business",
        visual: "phone",
        src: "https://appetize.io/embed/b_bwrbph3d6fr3w5d7zyxv3a4moi",
        problem:
            "Customers and students get distracted quickly. If they leave your app or website, you lose money.",
        gainsTitle: "How it Boosts Profit",
        gains: [
            { title: "Multiply Your Income", body: "By broadcasting live classes to hundreds of students." },
            {
                title: "Keep Customers Hooked",
                body: 'Using the "watch together" feature to increase ad/subscription value.',
            },
        ],
        hire: "I know how to build heavy, fast-loading video applications that handle multiple users at once without crashing or lagging.",
    },
    {
        name: "Loomzo",
        tag: "Your Personal E-Commerce Store",
        visual: "browser",
        url: "loomzoindia.netlify.app",
        href: "https://loomzoindia.netlify.app/",
        cta: "View Live Store",
        problem:
            "Selling on Amazon or Swiggy means giving away 20% to 30% of your profit and losing customer data.",
        gainsTitle: "How it Boosts Profit",
        gains: [
            { title: "Keep 100% of the Money", body: "Directly in your bank account." },
            {
                title: "Build Direct Customer Loyalty",
                body: "By collecting phone numbers for free repeat sales.",
            },
        ],
        hire: "I can take your physical shop online quickly with a premium store that makes buying effortless.",
    },
];

function ProjectBlock({ project, index }) {
    const text = useReveal(0);
    const visual = useReveal(120);
    const flipped = index % 2 === 1;
    const isMobile = useIsMobile();
    const usePhone = isMobile || project.name === "CinePlay";

    const phoneProps = { label: project.name };
    if (project.src) phoneProps.src = project.src;
    if (project.href) phoneProps.href = project.href;
    if (project.cta) phoneProps.cta = project.cta;

    const browserProps = {
        label: project.name,
        url: project.url ?? "",
        cta: project.cta ?? "View Live",
        wide: true,
    };
    if (project.href) browserProps.href = project.href;

    return (
        <article className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div
                ref={text.ref}
                className={`${text.className} ${flipped ? "lg:order-2" : ""}`}
                style={text.style}
            >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    0{index + 1} — {project.tag}
                </p>
                <h3 className="mt-3 text-3xl font-bold sm:text-4xl">{project.name}</h3>

                <div className="mt-7 rounded-2xl border border-border bg-card p-5">
                    <p className="flex items-center gap-2 font-display text-sm font-semibold">
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                        The Problem it Solves
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
                </div>

                <div className="mt-5">
                    <p className="flex items-center gap-2 font-display text-sm font-semibold">
                        <TrendingUp className="h-4 w-4 text-accent" />
                        {project.gainsTitle}
                    </p>
                    <ul className="mt-3 space-y-3">
                        {project.gains.map((g) => (
                            <li key={g.title} className="flex gap-3 text-sm leading-relaxed">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                <span>
                                    <span className="font-semibold">{g.title}:</span>{" "}
                                    <span className="text-muted-foreground">{g.body}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6 border-l-2 border-primary pl-4">
                    <p className="font-display text-sm font-semibold">Why Hire Me</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.hire}</p>
                </div>
            </div>

            <div
                ref={visual.ref}
                className={`${visual.className} ${flipped ? "lg:order-1" : ""}`}
                style={visual.style}
            >
                {usePhone ? (
                    <PhoneMockup {...phoneProps} />
                ) : (
                    <BrowserMockup {...browserProps} />
                )}
            </div>
        </article>
    );
}

export function Projects() {
    const head = useReveal();

    return (
        <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
            <div ref={head.ref} className={`${head.className} max-w-2xl`} style={head.style}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Selected work
                </p>
                <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                    Systems built to make money, not just look good.
                </h2>
                <p className="mt-4 text-base text-muted-foreground">
                    Every project below solves a real business problem. Try the demos yourself.
                </p>
            </div>

            <div className="mt-20 space-y-28 sm:mt-24 sm:space-y-36">
                {projects.map((p, i) => (
                    <ProjectBlock key={p.name} project={p} index={i} />
                ))}
            </div>
        </section>
    );
}