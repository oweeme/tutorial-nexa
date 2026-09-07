export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.pwa.title"),
    description: t("tutorial.pwa.intro"),
    canonical: `/${params.locale}/tutorial/pwa`
};

export default function TutorialPwa() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.pwa.step")}</span>
            <h1>{t("tutorial.pwa.title")}</h1>
            <p>{t("tutorial.pwa.intro")}</p>

            <section>
                <h2>{t("tutorial.pwa.s1Title")}</h2>
                <pre><code>{t("tutorial.pwa.s1Code")}</code></pre>
                <p>{t("tutorial.pwa.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.pwa.s2Title")}</h2>
                <pre><code>{t("tutorial.pwa.s2Code")}</code></pre>
                <p>{t("tutorial.pwa.s2Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/layouts`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/images`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
