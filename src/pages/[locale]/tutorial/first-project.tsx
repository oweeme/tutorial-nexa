export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.firstProject.title"),
    description: t("tutorial.firstProject.intro"),
    canonical: `/${params.locale}/tutorial/first-project`
};

export default function TutorialFirstProject() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.firstProject.step")}</span>
            <h1>{t("tutorial.firstProject.title")}</h1>
            <p>{t("tutorial.firstProject.intro")}</p>

            <section>
                <h2>{t("tutorial.firstProject.s1Title")}</h2>
                <pre><code>{t("tutorial.firstProject.s1Code")}</code></pre>
                <p>{t("tutorial.firstProject.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.firstProject.s2Title")}</h2>
                <pre><code>{t("tutorial.firstProject.s2Code")}</code></pre>
                <p>{t("tutorial.firstProject.s2Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.firstProject.s3Title")}</h2>
                <pre><code>{t("tutorial.firstProject.s3Code")}</code></pre>
                <p>{t("tutorial.firstProject.s3Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/install`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/routing`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
