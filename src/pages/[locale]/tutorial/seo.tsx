export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.seo.title"),
    description: t("tutorial.seo.intro"),
    canonical: `/${params.locale}/tutorial/seo`
};

export default function TutorialSeo() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.seo.step")}</span>
            <h1>{t("tutorial.seo.title")}</h1>
            <p>{t("tutorial.seo.intro")}</p>

            <section>
                <h2>{t("tutorial.seo.s1Title")}</h2>
                <pre><code>{t("tutorial.seo.s1Code")}</code></pre>
                <p>{t("tutorial.seo.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.seo.s2Title")}</h2>
                <pre><code>{t("tutorial.seo.s2Code")}</code></pre>
                <p>{t("tutorial.seo.s2Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.seo.s3Title")}</h2>
                <pre><code>{t("tutorial.seo.s3Code")}</code></pre>
                <p>{t("tutorial.seo.s3Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/data`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/i18n`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
