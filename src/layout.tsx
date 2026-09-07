export default function Layout() {
    return (
        <div class="nx-shell">
            <link rel="stylesheet" href="/static/site.css" />
            <link rel="icon" href="/static/logo.svg" type="image/svg+xml" />
            <header class="nx-header">
                <a href={`/${params.locale}`} class="nx-brand">
                    <img src="/static/logo.svg" alt="Nexa" width="36" height="36" />
                    <span class="nx-brand-word">nexa</span>
                </a>
                <nav class="nx-nav">
                    <a href={`/${params.locale}`}>{t("nav.home")}</a>
                    <a href={`/${params.locale}/tutorial`}>{t("nav.tutorial")}</a>
                    <a href={`/${params.locale}/compatibility`}>{t("nav.compat")}</a>
                    <a href="https://github.com/oweeme/tutorial-nexa" class="nx-nav-github">{t("nav.github")}</a>
                    <span class="nx-lang-switch">
                        <a href="/es">ES</a>
                        <span>/</span>
                        <a href="/en">EN</a>
                    </span>
                </nav>
            </header>

            <div data-nexa-slot></div>

            <footer class="nx-footer">
                <img src="/static/logo.svg" alt="Nexa" width="28" height="28" />
                <p>{t("footer.madeWith")}</p>
                <p class="nx-footer-license">{t("footer.license")}</p>
            </footer>
        </div>
    );
}
