export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.install.title"),
    description: t("tutorial.install.intro"),
    canonical: `/${params.locale}/tutorial/install`
};

export default function TutorialInstall() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.install.step")}</span>
            <h1>{t("tutorial.install.title")}</h1>
            <p>{t("tutorial.install.intro")}</p>

            <section>
                <h2>{t("tutorial.install.s1Title")}</h2>
                <pre><code>{t("tutorial.install.s1Code")}</code></pre>
                <p>{t("tutorial.install.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.install.s2Title")}</h2>
                <pre><code>{t("tutorial.install.s2Code")}</code></pre>
                <p>{t("tutorial.install.s2Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.install.s3Title")}</h2>
                <pre><code>{t("tutorial.install.s3Code")}</code></pre>
                <p>{t("tutorial.install.s3Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/first-project`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
