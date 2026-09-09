export const paths = { url: "/locales.json" };

export const seo = {
    title: t("reference.categories.seo-i18n.title"),
    description: t("reference.categories.seo-i18n.intro"),
    canonical: `/${params.locale}/reference/seo-i18n`
};

export default function ReferenceSeoI18n() {
    return (
        <main class="nx-page nx-ref-category">
            <a class="nx-ref-back" href={`/${params.locale}/reference`}>{t("reference.backToReference")}</a>
            <h1>{t("reference.categories.seo-i18n.title")}</h1>
            <p>{t("reference.categories.seo-i18n.intro")}</p>

            <section id="seo">
                <h2>{t("reference.categories.seo-i18n.seoTitle")}</h2>
                <pre><code>{t("reference.categories.seo-i18n.seoCode")}</code></pre>
                <p>{t("reference.categories.seo-i18n.seoBody")}</p>
            </section>

            <section id="schema">
                <h2>{t("reference.categories.seo-i18n.schemaTitle")}</h2>
                <pre><code>{t("reference.categories.seo-i18n.schemaCode")}</code></pre>
                <p>{t("reference.categories.seo-i18n.schemaBody")}</p>
            </section>

            <section id="sitemap">
                <h2>{t("reference.categories.seo-i18n.sitemapTitle")}</h2>
                <pre><code>{t("reference.categories.seo-i18n.sitemapCode")}</code></pre>
                <p>{t("reference.categories.seo-i18n.sitemapBody")}</p>
            </section>

            <section id="i18n-basic">
                <h2>{t("reference.categories.seo-i18n.i18n-basicTitle")}</h2>
                <pre><code>{t("reference.categories.seo-i18n.i18n-basicCode")}</code></pre>
                <p>{t("reference.categories.seo-i18n.i18n-basicBody")}</p>
            </section>

            <section id="i18n-interpolation">
                <h2>{t("reference.categories.seo-i18n.i18n-interpolationTitle")}</h2>
                <pre><code>{"// src/locales/es.json\n{ \"profile\": { \"donateTo\": \"Apoyar a {name}\" } }\n\n<p>{t(\"profile.donateTo\", { name: data.creatorName })}</p>"}</code></pre>
                <p>{t("reference.categories.seo-i18n.i18n-interpolationBody")}</p>
            </section>

            <section id="hreflang">
                <h2>{t("reference.categories.seo-i18n.hreflangTitle")}</h2>
                <pre><code>{t("reference.categories.seo-i18n.hreflangCode")}</code></pre>
                <p>{t("reference.categories.seo-i18n.hreflangBody")}</p>
            </section>
        </main>
    );
}
