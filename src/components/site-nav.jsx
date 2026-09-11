import { ThemeToggle } from "./theme-toggle";

export function SiteNav() {
    return (
        <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                <a href="#top" className="font-display text-base font-bold tracking-tight">
                    Ankit Pandey<span className="text-primary">.</span>
                </a>
                <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
                    <a href="#work" className="transition-colors hover:text-foreground">
                        Work
                    </a>
                    <a href="#contact" className="transition-colors hover:text-foreground">
                        Contact
                    </a>
                </div>
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <a
                        href="#contact"
                        className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:inline-flex"
                    >
                        Start Your Project
                    </a>
                </div>
            </nav>
        </header>
    );
}