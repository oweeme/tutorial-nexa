export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.routing.title"),
    description: t("tutorial.routing.intro"),
    canonical: `/${params.locale}/tutorial/routing`
};

export default function TutorialRouting() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.routing.step")}</span>
            <h1>{t("tutorial.routing.title")}</h1>
            <p>{t("tutorial.routing.intro")}</p>

            <section>
                <h2>{t("tutorial.routing.s1Title")}</h2>
                <pre><code>{t("tutorial.routing.s1Code")}</code></pre>
                <p>{t("tutorial.routing.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.routing.s2Title")}</h2>
                <pre><code>{t("tutorial.routing.s2Code")}</code></pre>
                <p>{t("tutorial.routing.s2Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.routing.s3Title")}</h2>
                <pre><code>{t("tutorial.routing.s3Code")}</code></pre>
                <p>{t("tutorial.routing.s3Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/first-project`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/data`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
