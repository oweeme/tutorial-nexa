export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.layouts.title"),
    description: t("tutorial.layouts.intro"),
    canonical: `/${params.locale}/tutorial/layouts`
};

export default function TutorialLayouts() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.layouts.step")}</span>
            <h1>{t("tutorial.layouts.title")}</h1>
            <p>{t("tutorial.layouts.intro")}</p>

            <section>
                <h2>{t("tutorial.layouts.s1Title")}</h2>
                <pre><code>{t("tutorial.layouts.s1Code")}</code></pre>
                <p>{t("tutorial.layouts.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.layouts.s2Title")}</h2>
                <pre><code>{t("tutorial.layouts.s2Code")}</code></pre>
                <p>{t("tutorial.layouts.s2Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/realtime`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/pwa`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
