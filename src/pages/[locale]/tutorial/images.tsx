export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.images.title"),
    description: t("tutorial.images.intro"),
    canonical: `/${params.locale}/tutorial/images`
};

export default function TutorialImages() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.images.step")}</span>
            <h1>{t("tutorial.images.title")}</h1>
            <p>{t("tutorial.images.intro")}</p>

            <section>
                <h2>{t("tutorial.images.s1Title")}</h2>
                <pre><code>{t("tutorial.images.s1Code")}</code></pre>
                <p>{t("tutorial.images.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.images.s2Title")}</h2>
                <pre><code>{t("tutorial.images.s2Code")}</code></pre>
                <p>{t("tutorial.images.s2Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/pwa`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/performance`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
