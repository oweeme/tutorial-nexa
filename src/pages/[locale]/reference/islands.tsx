export const paths = { url: "/locales.json" };

export const seo = {
    title: t("reference.categories.islands.title"),
    description: t("reference.categories.islands.intro"),
    canonical: `/${params.locale}/reference/islands`
};

export default function ReferenceIslands() {
    return (
        <main class="nx-page nx-ref-category">
            <a class="nx-ref-back" href={`/${params.locale}/reference`}>{t("reference.backToReference")}</a>
            <h1>{t("reference.categories.islands.title")}</h1>
            <p>{t("reference.categories.islands.intro")}</p>

            <section id="island-basic">
                <h2>{t("reference.categories.islands.island-basicTitle")}</h2>
                <pre><code>{t("reference.categories.islands.island-basicCode")}</code></pre>
                <p>{t("reference.categories.islands.island-basicBody")}</p>
            </section>

            <section id="island-mount">
                <h2>{t("reference.categories.islands.island-mountTitle")}</h2>
                <pre><code>{t("reference.categories.islands.island-mountCode")}</code></pre>
                <p>{t("reference.categories.islands.island-mountBody")}</p>
            </section>

            <section id="island-vue">
                <h2>{t("reference.categories.islands.island-vueTitle")}</h2>
                <pre><code>{t("reference.categories.islands.island-vueCode")}</code></pre>
                <p>{t("reference.categories.islands.island-vueBody")}</p>
            </section>

            <section id="island-library">
                <h2>{t("reference.categories.islands.island-libraryTitle")}</h2>
                <pre><code>{t("reference.categories.islands.island-libraryCode")}</code></pre>
                <p>{t("reference.categories.islands.island-libraryBody")}</p>
            </section>

            <section id="island-components">
                <h2>{t("reference.categories.islands.island-componentsTitle")}</h2>
                <pre><code>{t("reference.categories.islands.island-componentsCode")}</code></pre>
                <p>{t("reference.categories.islands.island-componentsBody")}</p>
            </section>
        </main>
    );
}
