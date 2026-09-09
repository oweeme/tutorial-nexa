export const paths = { url: "/locales.json" };

export const seo = {
    title: t("reference.categories.vendoring.title"),
    description: t("reference.categories.vendoring.intro"),
    canonical: `/${params.locale}/reference/vendoring`
};

export default function ReferenceVendoring() {
    return (
        <main class="nx-page nx-ref-category">
            <a class="nx-ref-back" href={`/${params.locale}/reference`}>{t("reference.backToReference")}</a>
            <h1>{t("reference.categories.vendoring.title")}</h1>
            <p>{t("reference.categories.vendoring.intro")}</p>

            <section id="css-external">
                <h2>{t("reference.categories.vendoring.css-externalTitle")}</h2>
                <pre><code>{t("reference.categories.vendoring.css-externalCode")}</code></pre>
                <p>{t("reference.categories.vendoring.css-externalBody")}</p>
            </section>

            <section id="js-global">
                <h2>{t("reference.categories.vendoring.js-globalTitle")}</h2>
                <pre><code>{t("reference.categories.vendoring.js-globalCode")}</code></pre>
                <p>{t("reference.categories.vendoring.js-globalBody")}</p>
            </section>

            <section id="imports-esm">
                <h2>{t("reference.categories.vendoring.imports-esmTitle")}</h2>
                <pre><code>{t("reference.categories.vendoring.imports-esmCode")}</code></pre>
                <p>{t("reference.categories.vendoring.imports-esmBody")}</p>
            </section>

            <section id="vendoring-npm">
                <h2>{t("reference.categories.vendoring.vendoring-npmTitle")}</h2>
                <pre><code>{t("reference.categories.vendoring.vendoring-npmCode")}</code></pre>
                <p>{t("reference.categories.vendoring.vendoring-npmBody")}</p>
            </section>
        </main>
    );
}
