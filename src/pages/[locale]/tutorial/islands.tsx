export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.islands.title"),
    description: t("tutorial.islands.intro"),
    canonical: `/${params.locale}/tutorial/islands`
};

export default function TutorialIslands() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.islands.step")}</span>
            <h1>{t("tutorial.islands.title")}</h1>
            <p>{t("tutorial.islands.intro")}</p>

            <section>
                <h2>{t("tutorial.islands.s1Title")}</h2>
                <pre><code>{t("tutorial.islands.s1Code")}</code></pre>
                <p>{t("tutorial.islands.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.islands.s2Title")}</h2>
                <pre><code>{t("tutorial.islands.s2Code")}</code></pre>
                <p>{t("tutorial.islands.s2Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.islands.s3Title")}</h2>
                <pre><code>{t("tutorial.islands.s3Code")}</code></pre>
                <p>{t("tutorial.islands.s3Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/forms`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/realtime`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
