export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.forms.title"),
    description: t("tutorial.forms.intro"),
    canonical: `/${params.locale}/tutorial/forms`
};

export default function TutorialForms() {
    return (
        <main class="nx-page nx-tutorial-step">
            <span class="nx-step-badge">{t("tutorial.forms.step")}</span>
            <h1>{t("tutorial.forms.title")}</h1>
            <p>{t("tutorial.forms.intro")}</p>

            <section>
                <h2>{t("tutorial.forms.s1Title")}</h2>
                <pre><code>{t("tutorial.forms.s1Code")}</code></pre>
                <p>{t("tutorial.forms.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.forms.s2Title")}</h2>
                <pre><code>{t("tutorial.forms.s2Code")}</code></pre>
                <p>{t("tutorial.forms.s2Body")}</p>
            </section>

            <nav class="nx-tutorial-nav">
                <a href={`/${params.locale}/tutorial/styling`}>← {t("tutorial.prevLabel")}</a>
                <a href={`/${params.locale}/tutorial/islands`}>{t("tutorial.nextLabel")} →</a>
            </nav>
        </main>
    );
}
