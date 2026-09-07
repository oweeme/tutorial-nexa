export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.performance.title"),
    description: t("tutorial.performance.intro"),
    canonical: `/${params.locale}/tutorial/performance`
};

export default function TutorialPerformance() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.performance.step")}</span>
            <h1>{t("tutorial.performance.title")}</h1>
            <p>{t("tutorial.performance.intro")}</p>

            <section>
                <h2>{t("tutorial.performance.s1Title")}</h2>
                <pre><code>{t("tutorial.performance.s1Code")}</code></pre>
                <p>{t("tutorial.performance.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.performance.s2Title")}</h2>
                <pre><code>{t("tutorial.performance.s2Code")}</code></pre>
                <p>{t("tutorial.performance.s2Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/images`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/native`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
