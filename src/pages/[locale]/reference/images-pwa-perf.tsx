export const paths = { url: "/locales.json" };

export const seo = {
    title: t("reference.categories.images-pwa-perf.title"),
    description: t("reference.categories.images-pwa-perf.intro"),
    canonical: `/${params.locale}/reference/images-pwa-perf`
};

export default function ReferenceImagesPwaPerf() {
    return (
        <main class="nx-page nx-ref-category">
            <a class="nx-ref-back" href={`/${params.locale}/reference`}>{t("reference.backToReference")}</a>
            <h1>{t("reference.categories.images-pwa-perf.title")}</h1>
            <p>{t("reference.categories.images-pwa-perf.intro")}</p>

            <section id="images">
                <h2>{t("reference.categories.images-pwa-perf.imagesTitle")}</h2>
                <pre><code>{t("reference.categories.images-pwa-perf.imagesCode")}</code></pre>
                <p>{t("reference.categories.images-pwa-perf.imagesBody")}</p>
            </section>

            <section id="pwa">
                <h2>{t("reference.categories.images-pwa-perf.pwaTitle")}</h2>
                <pre><code>{t("reference.categories.images-pwa-perf.pwaCode")}</code></pre>
                <p>{t("reference.categories.images-pwa-perf.pwaBody")}</p>
            </section>

            <section id="performance-budgets">
                <h2>{t("reference.categories.images-pwa-perf.performance-budgetsTitle")}</h2>
                <pre><code>{t("reference.categories.images-pwa-perf.performance-budgetsCode")}</code></pre>
                <p>{t("reference.categories.images-pwa-perf.performance-budgetsBody")}</p>
            </section>

            <section id="telemetry">
                <h2>{t("reference.categories.images-pwa-perf.telemetryTitle")}</h2>
                <pre><code>{t("reference.categories.images-pwa-perf.telemetryCode")}</code></pre>
                <p>{t("reference.categories.images-pwa-perf.telemetryBody")}</p>
            </section>
        </main>
    );
}
