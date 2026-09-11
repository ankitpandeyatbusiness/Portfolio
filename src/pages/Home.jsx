import { SiteNav } from "../components/site-nav";
import { Hero } from "../components/hero";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";

export function Home() {
    return (
        <>
            <SiteNav />
            <main>
                <Hero />
                <Projects />
                <Contact />
            </main>
        </>
    );
}