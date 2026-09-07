export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.i18n.title"),
    description: t("tutorial.i18n.intro"),
    canonical: `/${params.locale}/tutorial/i18n`
};

export default function TutorialI18n() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.i18n.step")}</span>
            <h1>{t("tutorial.i18n.title")}</h1>
            <p>{t("tutorial.i18n.intro")}</p>

            <section>
                <h2>{t("tutorial.i18n.s1Title")}</h2>
                <pre><code>{t("tutorial.i18n.s1Code")}</code></pre>
                <p>{t("tutorial.i18n.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.i18n.s2Title")}</h2>
                <pre><code>{t("tutorial.i18n.s2Code")}</code></pre>
                <p>{t("tutorial.i18n.s2Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.i18n.s3Title")}</h2>
                <pre><code>{t("tutorial.i18n.s3Code")}</code></pre>
                <p>{t("tutorial.i18n.s3Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/seo`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/styling`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
