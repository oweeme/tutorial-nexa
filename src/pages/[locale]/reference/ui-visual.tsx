export const paths = { url: "/locales.json" };

export const seo = {
    title: t("reference.categories.ui-visual.title"),
    description: t("reference.categories.ui-visual.intro"),
    canonical: `/${params.locale}/reference/ui-visual`
};

export default function ReferenceUiVisual() {
    return (
        <main class="nx-page nx-ref-category">
            <a class="nx-ref-back" href={`/${params.locale}/reference`}>{t("reference.backToReference")}</a>
            <h1>{t("reference.categories.ui-visual.title")}</h1>
            <p>{t("reference.categories.ui-visual.intro")}</p>

            <section id="button">
                <h2>{t("reference.categories.ui-visual.buttonTitle")}</h2>
                <pre><code>{t("reference.categories.ui-visual.buttonCode")}</code></pre>
                <p>{t("reference.categories.ui-visual.buttonBody")}</p>
            </section>

            <section id="input">
                <h2>{t("reference.categories.ui-visual.inputTitle")}</h2>
                <pre><code>{t("reference.categories.ui-visual.inputCode")}</code></pre>
                <p>{t("reference.categories.ui-visual.inputBody")}</p>
            </section>

            <section id="card">
                <h2>{t("reference.categories.ui-visual.cardTitle")}</h2>
                <pre><code>{t("reference.categories.ui-visual.cardCode")}</code></pre>
                <p>{t("reference.categories.ui-visual.cardBody")}</p>
            </section>

            <section id="table">
                <h2>{t("reference.categories.ui-visual.tableTitle")}</h2>
                <pre><code>{t("reference.categories.ui-visual.tableCode")}</code></pre>
                <p>{t("reference.categories.ui-visual.tableBody")}</p>
            </section>

            <section id="badge">
                <h2>{t("reference.categories.ui-visual.badgeTitle")}</h2>
                <pre><code>{t("reference.categories.ui-visual.badgeCode")}</code></pre>
                <p>{t("reference.categories.ui-visual.badgeBody")}</p>
            </section>

            <section id="avatar">
                <h2>{t("reference.categories.ui-visual.avatarTitle")}</h2>
                <pre><code>{t("reference.categories.ui-visual.avatarCode")}</code></pre>
                <p>{t("reference.categories.ui-visual.avatarBody")}</p>
            </section>

            <section id="breadcrumbs">
                <h2>{t("reference.categories.ui-visual.breadcrumbsTitle")}</h2>
                <pre><code>{t("reference.categories.ui-visual.breadcrumbsCode")}</code></pre>
                <p>{t("reference.categories.ui-visual.breadcrumbsBody")}</p>
            </section>

            <section id="alert">
                <h2>{t("reference.categories.ui-visual.alertTitle")}</h2>
                <pre><code>{t("reference.categories.ui-visual.alertCode")}</code></pre>
                <p>{t("reference.categories.ui-visual.alertBody")}</p>
            </section>

            <section id="divider">
                <h2>{t("reference.categories.ui-visual.dividerTitle")}</h2>
                <pre><code>{t("reference.categories.ui-visual.dividerCode")}</code></pre>
                <p>{t("reference.categories.ui-visual.dividerBody")}</p>
            </section>

            <section id="tooltip">
                <h2>{t("reference.categories.ui-visual.tooltipTitle")}</h2>
                <pre><code>{t("reference.categories.ui-visual.tooltipCode")}</code></pre>
                <p>{t("reference.categories.ui-visual.tooltipBody")}</p>
            </section>

            <section id="progress">
                <h2>{t("reference.categories.ui-visual.progressTitle")}</h2>
                <pre><code>{t("reference.categories.ui-visual.progressCode")}</code></pre>
                <p>{t("reference.categories.ui-visual.progressBody")}</p>
            </section>

            <section id="skeleton">
                <h2>{t("reference.categories.ui-visual.skeletonTitle")}</h2>
                <pre><code>{t("reference.categories.ui-visual.skeletonCode")}</code></pre>
                <p>{t("reference.categories.ui-visual.skeletonBody")}</p>
            </section>

            <section id="layout-utils">
                <h2>{t("reference.categories.ui-visual.layout-utilsTitle")}</h2>
                <pre><code>{t("reference.categories.ui-visual.layout-utilsCode")}</code></pre>
                <p>{t("reference.categories.ui-visual.layout-utilsBody")}</p>
            </section>

            <section id="theme">
                <h2>{t("reference.categories.ui-visual.themeTitle")}</h2>
                <pre><code>{"function setDark() { platform.theme.set(\"dark\"); }\n<button class=\"nx-btn\" data-nexa-strategy=\"load\" onClick={setDark}>Oscuro</button>"}</code></pre>
                <p>{t("reference.categories.ui-visual.themeBody")}</p>
            </section>
        </main>
    );
}
