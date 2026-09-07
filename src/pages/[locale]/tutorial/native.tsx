export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.native.title"),
    description: t("tutorial.native.intro"),
    canonical: `/${params.locale}/tutorial/native`
};

export default function TutorialNative() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.native.step")}</span>
            <h1>{t("tutorial.native.title")}</h1>
            <p>{t("tutorial.native.intro")}</p>

            <section>
                <h2>{t("tutorial.native.s1Title")}</h2>
                <pre><code>{t("tutorial.native.s1Code")}</code></pre>
                <p>{t("tutorial.native.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.native.s2Title")}</h2>
                <pre><code>{t("tutorial.native.s2Code")}</code></pre>
                <p>{t("tutorial.native.s2Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/performance`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/production`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
