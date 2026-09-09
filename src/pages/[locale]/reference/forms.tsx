export const paths = { url: "/locales.json" };

export const seo = {
    title: t("reference.categories.forms.title"),
    description: t("reference.categories.forms.intro"),
    canonical: `/${params.locale}/reference/forms`
};

export default function ReferenceForms() {
    return (
        <main class="nx-page nx-ref-category">
            <a class="nx-ref-back" href={`/${params.locale}/reference`}>{t("reference.backToReference")}</a>
            <h1>{t("reference.categories.forms.title")}</h1>
            <p>{t("reference.categories.forms.intro")}</p>

            <section id="form-basic">
                <h2>{t("reference.categories.forms.form-basicTitle")}</h2>
                <pre><code>{t("reference.categories.forms.form-basicCode")}</code></pre>
                <p>{t("reference.categories.forms.form-basicBody")}</p>
            </section>

            <section id="form-messages">
                <h2>{t("reference.categories.forms.form-messagesTitle")}</h2>
                <pre><code>{t("reference.categories.forms.form-messagesCode")}</code></pre>
                <p>{t("reference.categories.forms.form-messagesBody")}</p>
            </section>
        </main>
    );
}
