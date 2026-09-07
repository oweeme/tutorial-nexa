export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.production.title"),
    description: t("tutorial.production.intro"),
    canonical: `/${params.locale}/tutorial/production`
};

export default function TutorialProduction() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.production.step")}</span>
            <h1>{t("tutorial.production.title")}</h1>
            <p>{t("tutorial.production.intro")}</p>

            <section>
                <h2>{t("tutorial.production.s1Title")}</h2>
                <pre><code>{t("tutorial.production.s1Code")}</code></pre>
                <p>{t("tutorial.production.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.production.s2Title")}</h2>
                <pre><code>{t("tutorial.production.s2Code")}</code></pre>
                <p>{t("tutorial.production.s2Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.production.s3Title")}</h2>
                <pre><code>{t("tutorial.production.s3Code")}</code></pre>
                <p>{t("tutorial.production.s3Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.production.s4Title")}</h2>
                <p>{t("tutorial.production.s4Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/native`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}`}>{t("nav.home")} →</a>
            </nav>
        </main>
    );
}
