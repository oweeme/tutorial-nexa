export const seo = {
    title: "Nexa — HTML-first framework",
    description: "Elegí tu idioma / Choose your language",
    canonical: "/"
};

export default function LanguageGate() {
    return (
        <main class="nx-gate">
            <p class="nx-kicker">HTML-first · SEO-first</p>
            <img src="/static/logo.svg" alt="Nexa" width="150" />
            <h1>nexa</h1>
            <p class="nx-gate-tagline">
                HTML real. Cero JavaScript de más. <span class="nx-gate-sep">/</span> Real HTML. Zero JavaScript you didn't ask for.
            </p>
            <p class="nx-gate-label">Elegí tu idioma · Choose your language</p>
            <div class="nx-gate-links">
                <a class="nx-btn nx-btn-primary" href="/es">Español</a>
                <a class="nx-btn nx-btn-primary" href="/en">English</a>
            </div>
        </main>
    );
}
