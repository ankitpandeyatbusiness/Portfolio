import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const [dark, setDark] = useState(true);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const initial = stored ? stored === "dark" : true;
        setDark(initial);
        setReady(true);
    }, []);

    useEffect(() => {
        if (!ready) return;
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark, ready]);

    return (
        <button
            type="button"
            onClick={() => setDark((v) => !v)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
        >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
    );
}