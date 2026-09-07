export const seo = {
    title: "Nexa — HTML-first framework",
    description: "Elegí tu idioma / Choose your language",
    canonical: "/"
};

export default function LanguageGate() {
    return (
        <main class="nx-gate">
            <img src="/static/logo.svg" alt="Nexa" width="96" height="96" />
            <h1>nexa</h1>
            <div class="nx-gate-links">
                <a class="nx-btn nx-btn-primary" href="/es">Español</a>
                <a class="nx-btn nx-btn-primary" href="/en">English</a>
            </div>
        </main>
    );
}
