export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.styling.title"),
    description: t("tutorial.styling.intro"),
    canonical: `/${params.locale}/tutorial/styling`
};

export default function TutorialStyling() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.styling.step")}</span>
            <h1>{t("tutorial.styling.title")}</h1>
            <p>{t("tutorial.styling.intro")}</p>

            <section>
                <h2>{t("tutorial.styling.s1Title")}</h2>
                <pre><code>{t("tutorial.styling.s1Code")}</code></pre>
                <p>{t("tutorial.styling.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.styling.s2Title")}</h2>
                <pre><code>{t("tutorial.styling.s2Code")}</code></pre>
                <p>{t("tutorial.styling.s2Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.styling.s3Title")}</h2>
                <pre><code>{t("tutorial.styling.s3Code")}</code></pre>
                <p>{t("tutorial.styling.s3Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/i18n`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/forms`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
