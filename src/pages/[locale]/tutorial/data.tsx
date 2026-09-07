export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.data.title"),
    description: t("tutorial.data.intro"),
    canonical: `/${params.locale}/tutorial/data`
};

export default function TutorialData() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.data.step")}</span>
            <h1>{t("tutorial.data.title")}</h1>
            <p>{t("tutorial.data.intro")}</p>

            <section>
                <h2>{t("tutorial.data.s1Title")}</h2>
                <pre><code>{t("tutorial.data.s1Code")}</code></pre>
                <p>{t("tutorial.data.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.data.s2Title")}</h2>
                <pre><code>{t("tutorial.data.s2Code")}</code></pre>
                <p>{t("tutorial.data.s2Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.data.s3Title")}</h2>
                <pre><code>{t("tutorial.data.s3Code")}</code></pre>
                <p>{t("tutorial.data.s3Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/routing`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/seo`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
