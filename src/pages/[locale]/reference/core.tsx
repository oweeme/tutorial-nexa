export const paths = { url: "/locales.json" };

export const seo = {
    title: t("reference.categories.core.title"),
    description: t("reference.categories.core.intro"),
    canonical: `/${params.locale}/reference/core`
};

export default function ReferenceCore() {
    return (
        <main class="nx-page nx-ref-category">
            <a class="nx-ref-back" href={`/${params.locale}/reference`}>{t("reference.backToReference")}</a>
            <h1>{t("reference.categories.core.title")}</h1>
            <p>{t("reference.categories.core.intro")}</p>

            <section id="routing">
                <h2>{t("reference.categories.core.routingTitle")}</h2>
                <pre><code>{t("reference.categories.core.routingCode")}</code></pre>
                <p>{t("reference.categories.core.routingBody")}</p>
            </section>

            <section id="page-anatomy">
                <h2>{t("reference.categories.core.page-anatomyTitle")}</h2>
                <pre><code>{"export const load = { url: \"/products/:slug\" };\nexport const paths = { url: \"/products\" };\n\nexport const seo = {\n    title: `${data.name} | Mi Tienda`,\n    canonical: `/products/${params.slug}`\n};\n\nfunction buy() { cart.add(data.id); }\n\nexport default function ProductPage() {\n    return (\n        <article>\n            <h1>{data.name}</h1>\n            <button onClick={buy}>Comprar</button>\n        </article>\n    );\n}"}</code></pre>
                <p>{t("reference.categories.core.page-anatomyBody")}</p>
            </section>

            <section id="load">
                <h2>{t("reference.categories.core.loadTitle")}</h2>
                <pre><code>{t("reference.categories.core.loadCode")}</code></pre>
                <p>{t("reference.categories.core.loadBody")}</p>
            </section>

            <section id="paths">
                <h2>{t("reference.categories.core.pathsTitle")}</h2>
                <pre><code>{t("reference.categories.core.pathsCode")}</code></pre>
                <p>{t("reference.categories.core.pathsBody")}</p>
            </section>

            <section id="for">
                <h2>{t("reference.categories.core.forTitle")}</h2>
                <pre><code>{t("reference.categories.core.forCode")}</code></pre>
                <p>{t("reference.categories.core.forBody")}</p>
            </section>

            <section id="aria-current">
                <h2>{t("reference.categories.core.aria-currentTitle")}</h2>
                <pre><code>{t("reference.categories.core.aria-currentCode")}</code></pre>
                <p>{t("reference.categories.core.aria-currentBody")}</p>
            </section>

            <section id="layouts">
                <h2>{t("reference.categories.core.layoutsTitle")}</h2>
                <pre><code>{t("reference.categories.core.layoutsCode")}</code></pre>
                <p>{t("reference.categories.core.layoutsBody")}</p>
            </section>

            <section id="head">
                <h2>{t("reference.categories.core.headTitle")}</h2>
                <pre><code>{t("reference.categories.core.headCode")}</code></pre>
                <p>{t("reference.categories.core.headBody")}</p>
            </section>

            <section id="layout-island">
                <h2>{t("reference.categories.core.layout-islandTitle")}</h2>
                <pre><code>{t("reference.categories.core.layout-islandCode")}</code></pre>
                <p>{t("reference.categories.core.layout-islandBody")}</p>
            </section>
        </main>
    );
}
