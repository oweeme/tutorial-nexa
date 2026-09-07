export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.realtime.title"),
    description: t("tutorial.realtime.intro"),
    canonical: `/${params.locale}/tutorial/realtime`
};

export default function TutorialRealtime() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.realtime.step")}</span>
            <h1>{t("tutorial.realtime.title")}</h1>
            <p>{t("tutorial.realtime.intro")}</p>

            <section>
                <h2>{t("tutorial.realtime.s1Title")}</h2>
                <pre><code>{t("tutorial.realtime.s1Code")}</code></pre>
                <p>{t("tutorial.realtime.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.realtime.s2Title")}</h2>
                <pre><code>{t("tutorial.realtime.s2Code")}</code></pre>
                <p>{t("tutorial.realtime.s2Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/islands`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/layouts`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
