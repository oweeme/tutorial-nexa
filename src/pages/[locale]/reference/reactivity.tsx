export const paths = { url: "/locales.json" };

export const seo = {
    title: t("reference.categories.reactivity.title"),
    description: t("reference.categories.reactivity.intro"),
    canonical: `/${params.locale}/reference/reactivity`
};

export default function ReferenceReactivity() {
    return (
        <main class="nx-page nx-ref-category">
            <a class="nx-ref-back" href={`/${params.locale}/reference`}>{t("reference.backToReference")}</a>
            <h1>{t("reference.categories.reactivity.title")}</h1>
            <p>{t("reference.categories.reactivity.intro")}</p>

            <section id="signal">
                <h2>{t("reference.categories.reactivity.signalTitle")}</h2>
                <pre><code>{t("reference.categories.reactivity.signalCode")}</code></pre>
                <p>{t("reference.categories.reactivity.signalBody")}</p>
            </section>

            <section id="computed">
                <h2>{t("reference.categories.reactivity.computedTitle")}</h2>
                <pre><code>{t("reference.categories.reactivity.computedCode")}</code></pre>
                <p>{t("reference.categories.reactivity.computedBody")}</p>
            </section>

            <section id="effect">
                <h2>{t("reference.categories.reactivity.effectTitle")}</h2>
                <pre><code>{t("reference.categories.reactivity.effectCode")}</code></pre>
                <p>{t("reference.categories.reactivity.effectBody")}</p>
            </section>

            <section id="watch">
                <h2>{t("reference.categories.reactivity.watchTitle")}</h2>
                <pre><code>{t("reference.categories.reactivity.watchCode")}</code></pre>
                <p>{t("reference.categories.reactivity.watchBody")}</p>
            </section>

            <section id="bindtext">
                <h2>{t("reference.categories.reactivity.bindtextTitle")}</h2>
                <pre><code>{t("reference.categories.reactivity.bindtextCode")}</code></pre>
                <p>{t("reference.categories.reactivity.bindtextBody")}</p>
            </section>

            <section id="component-model">
                <h2>{t("reference.categories.reactivity.component-modelTitle")}</h2>
                <pre><code>{t("reference.categories.reactivity.component-modelCode")}</code></pre>
                <p>{t("reference.categories.reactivity.component-modelBody")}</p>
            </section>
        </main>
    );
}
