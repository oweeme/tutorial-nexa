export default function Layout() {
    return (
        <div class="nx-shell">
            <link rel="stylesheet" href="/static/site.css" />
            <link rel="icon" href="/static/logo.svg" type="image/svg+xml" />
            <link rel="icon" href="/static/favicon-32.png" type="image/png" sizes="32x32" />
            <link rel="apple-touch-icon" href="/static/favicon-180.png" />
            <header class="nx-header">
                <a href="/" class="nx-brand">
                    <img src="/static/logo.svg" alt="Nexa" width="42" />
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
                <img src="/static/logo.svg" alt="Nexa" width="34" />
                <p>{t("footer.madeWith")}</p>
                <p class="nx-footer-license">{t("footer.license")}</p>
            </footer>
        </div>
    );
}
