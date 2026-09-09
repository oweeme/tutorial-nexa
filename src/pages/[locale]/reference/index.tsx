export const paths = { url: "/locales.json" };

export const seo = {
    title: t("reference.hubTitle"),
    description: t("reference.hubIntro"),
    canonical: `/${params.locale}/reference`
};

// Ojo: cada handler de abajo es autosuficiente a propósito — el chunk que
// Nexa extrae de un onClick/onInput es un módulo aislado, así que no puede
// depender de una función auxiliar declarada aparte en el archivo (solo
// viaja el código fuente de ESA función). Por eso el filtrado se repite
// en los dos handlers en vez de factorizarse en una función compartida.

function onReferenceSearchInput(event) {
    const container = document.getElementById("referenceGrid");
    container.dataset.search = event.target.value;

    const search = container.dataset.search.toLowerCase();
    const category = container.dataset.category || "all";
    let visible = 0;
    for (const card of container.querySelectorAll(".nx-ref-card")) {
        const matchesCategory = category === "all" || card.dataset.category === category;
        const matchesSearch = !search || card.textContent.toLowerCase().includes(search);
        const show = matchesCategory && matchesSearch;
        card.hidden = !show;
        if (show) visible += 1;
    }
    const empty = document.getElementById("referenceEmpty");
    if (empty) empty.hidden = visible !== 0;
}

function onChipClick(event) {
    const container = document.getElementById("referenceGrid");
    const chip = event.currentTarget;
    for (const other of document.querySelectorAll(".nx-ref-chip")) other.classList.remove("active");
    chip.classList.add("active");
    container.dataset.category = chip.dataset.category;

    const search = (container.dataset.search || "").toLowerCase();
    const category = container.dataset.category;
    let visible = 0;
    for (const card of container.querySelectorAll(".nx-ref-card")) {
        const matchesCategory = category === "all" || card.dataset.category === category;
        const matchesSearch = !search || card.textContent.toLowerCase().includes(search);
        const show = matchesCategory && matchesSearch;
        card.hidden = !show;
        if (show) visible += 1;
    }
    const empty = document.getElementById("referenceEmpty");
    if (empty) empty.hidden = visible !== 0;
}

export default function ReferenceHub() {
    return (
        <main class="nx-page nx-ref-hub">
            <h1>{t("reference.hubTitle")}</h1>
            <p>{t("reference.hubIntro")}</p>

            <div class="nx-ref-toolbar">
                <input
                    class="nx-ref-search"
                    type="search"
                    onInput={onReferenceSearchInput}
                    placeholder={t("reference.searchPlaceholder")}
                />
                <div class="nx-ref-chips">
                    <button class="nx-ref-chip active" data-category="all" onClick={onChipClick}>{t("reference.allChip")}</button>
                    <button class="nx-ref-chip" data-category="core" onClick={onChipClick}>{t("reference.categories.core.title")}</button>
                    <button class="nx-ref-chip" data-category="seo-i18n" onClick={onChipClick}>{t("reference.categories.seo-i18n.title")}</button>
                    <button class="nx-ref-chip" data-category="islands" onClick={onChipClick}>{t("reference.categories.islands.title")}</button>
                    <button class="nx-ref-chip" data-category="ui-visual" onClick={onChipClick}>{t("reference.categories.ui-visual.title")}</button>
                    <button class="nx-ref-chip" data-category="ui-interactive" onClick={onChipClick}>{t("reference.categories.ui-interactive.title")}</button>
                    <button class="nx-ref-chip" data-category="forms" onClick={onChipClick}>{t("reference.categories.forms.title")}</button>
                    <button class="nx-ref-chip" data-category="platform" onClick={onChipClick}>{t("reference.categories.platform.title")}</button>
                    <button class="nx-ref-chip" data-category="reactivity" onClick={onChipClick}>{t("reference.categories.reactivity.title")}</button>
                    <button class="nx-ref-chip" data-category="http" onClick={onChipClick}>{t("reference.categories.http.title")}</button>
                    <button class="nx-ref-chip" data-category="vendoring" onClick={onChipClick}>{t("reference.categories.vendoring.title")}</button>
                    <button class="nx-ref-chip" data-category="images-pwa-perf" onClick={onChipClick}>{t("reference.categories.images-pwa-perf.title")}</button>
                    <button class="nx-ref-chip" data-category="native-deploy-cli" onClick={onChipClick}>{t("reference.categories.native-deploy-cli.title")}</button>
                </div>
            </div>

            <div class="nx-ref-grid" id="referenceGrid">
                <a class="nx-ref-card" data-category="core" href={`/${params.locale}/reference/core#routing`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.core.title")}</span>
                    <h3>{t("reference.categories.core.routingTitle")}</h3>
                    <p>{t("reference.categories.core.routingBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="core" href={`/${params.locale}/reference/core#page-anatomy`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.core.title")}</span>
                    <h3>{t("reference.categories.core.page-anatomyTitle")}</h3>
                    <p>{t("reference.categories.core.page-anatomyBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="core" href={`/${params.locale}/reference/core#load`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.core.title")}</span>
                    <h3>{t("reference.categories.core.loadTitle")}</h3>
                    <p>{t("reference.categories.core.loadBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="core" href={`/${params.locale}/reference/core#paths`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.core.title")}</span>
                    <h3>{t("reference.categories.core.pathsTitle")}</h3>
                    <p>{t("reference.categories.core.pathsBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="core" href={`/${params.locale}/reference/core#for`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.core.title")}</span>
                    <h3>{t("reference.categories.core.forTitle")}</h3>
                    <p>{t("reference.categories.core.forBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="core" href={`/${params.locale}/reference/core#aria-current`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.core.title")}</span>
                    <h3>{t("reference.categories.core.aria-currentTitle")}</h3>
                    <p>{t("reference.categories.core.aria-currentBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="core" href={`/${params.locale}/reference/core#layouts`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.core.title")}</span>
                    <h3>{t("reference.categories.core.layoutsTitle")}</h3>
                    <p>{t("reference.categories.core.layoutsBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="core" href={`/${params.locale}/reference/core#head`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.core.title")}</span>
                    <h3>{t("reference.categories.core.headTitle")}</h3>
                    <p>{t("reference.categories.core.headBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="core" href={`/${params.locale}/reference/core#layout-island`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.core.title")}</span>
                    <h3>{t("reference.categories.core.layout-islandTitle")}</h3>
                    <p>{t("reference.categories.core.layout-islandBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="seo-i18n" href={`/${params.locale}/reference/seo-i18n#seo`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.seo-i18n.title")}</span>
                    <h3>{t("reference.categories.seo-i18n.seoTitle")}</h3>
                    <p>{t("reference.categories.seo-i18n.seoBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="seo-i18n" href={`/${params.locale}/reference/seo-i18n#schema`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.seo-i18n.title")}</span>
                    <h3>{t("reference.categories.seo-i18n.schemaTitle")}</h3>
                    <p>{t("reference.categories.seo-i18n.schemaBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="seo-i18n" href={`/${params.locale}/reference/seo-i18n#sitemap`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.seo-i18n.title")}</span>
                    <h3>{t("reference.categories.seo-i18n.sitemapTitle")}</h3>
                    <p>{t("reference.categories.seo-i18n.sitemapBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="seo-i18n" href={`/${params.locale}/reference/seo-i18n#i18n-basic`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.seo-i18n.title")}</span>
                    <h3>{t("reference.categories.seo-i18n.i18n-basicTitle")}</h3>
                    <p>{t("reference.categories.seo-i18n.i18n-basicBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="seo-i18n" href={`/${params.locale}/reference/seo-i18n#i18n-interpolation`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.seo-i18n.title")}</span>
                    <h3>{t("reference.categories.seo-i18n.i18n-interpolationTitle")}</h3>
                    <p>{t("reference.categories.seo-i18n.i18n-interpolationBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="seo-i18n" href={`/${params.locale}/reference/seo-i18n#hreflang`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.seo-i18n.title")}</span>
                    <h3>{t("reference.categories.seo-i18n.hreflangTitle")}</h3>
                    <p>{t("reference.categories.seo-i18n.hreflangBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="islands" href={`/${params.locale}/reference/islands#island-basic`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.islands.title")}</span>
                    <h3>{t("reference.categories.islands.island-basicTitle")}</h3>
                    <p>{t("reference.categories.islands.island-basicBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="islands" href={`/${params.locale}/reference/islands#island-mount`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.islands.title")}</span>
                    <h3>{t("reference.categories.islands.island-mountTitle")}</h3>
                    <p>{t("reference.categories.islands.island-mountBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="islands" href={`/${params.locale}/reference/islands#island-vue`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.islands.title")}</span>
                    <h3>{t("reference.categories.islands.island-vueTitle")}</h3>
                    <p>{t("reference.categories.islands.island-vueBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="islands" href={`/${params.locale}/reference/islands#island-library`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.islands.title")}</span>
                    <h3>{t("reference.categories.islands.island-libraryTitle")}</h3>
                    <p>{t("reference.categories.islands.island-libraryBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="islands" href={`/${params.locale}/reference/islands#island-components`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.islands.title")}</span>
                    <h3>{t("reference.categories.islands.island-componentsTitle")}</h3>
                    <p>{t("reference.categories.islands.island-componentsBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-visual" href={`/${params.locale}/reference/ui-visual#button`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-visual.title")}</span>
                    <h3>{t("reference.categories.ui-visual.buttonTitle")}</h3>
                    <p>{t("reference.categories.ui-visual.buttonBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-visual" href={`/${params.locale}/reference/ui-visual#input`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-visual.title")}</span>
                    <h3>{t("reference.categories.ui-visual.inputTitle")}</h3>
                    <p>{t("reference.categories.ui-visual.inputBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-visual" href={`/${params.locale}/reference/ui-visual#card`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-visual.title")}</span>
                    <h3>{t("reference.categories.ui-visual.cardTitle")}</h3>
                    <p>{t("reference.categories.ui-visual.cardBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-visual" href={`/${params.locale}/reference/ui-visual#table`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-visual.title")}</span>
                    <h3>{t("reference.categories.ui-visual.tableTitle")}</h3>
                    <p>{t("reference.categories.ui-visual.tableBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-visual" href={`/${params.locale}/reference/ui-visual#badge`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-visual.title")}</span>
                    <h3>{t("reference.categories.ui-visual.badgeTitle")}</h3>
                    <p>{t("reference.categories.ui-visual.badgeBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-visual" href={`/${params.locale}/reference/ui-visual#avatar`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-visual.title")}</span>
                    <h3>{t("reference.categories.ui-visual.avatarTitle")}</h3>
                    <p>{t("reference.categories.ui-visual.avatarBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-visual" href={`/${params.locale}/reference/ui-visual#breadcrumbs`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-visual.title")}</span>
                    <h3>{t("reference.categories.ui-visual.breadcrumbsTitle")}</h3>
                    <p>{t("reference.categories.ui-visual.breadcrumbsBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-visual" href={`/${params.locale}/reference/ui-visual#alert`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-visual.title")}</span>
                    <h3>{t("reference.categories.ui-visual.alertTitle")}</h3>
                    <p>{t("reference.categories.ui-visual.alertBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-visual" href={`/${params.locale}/reference/ui-visual#divider`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-visual.title")}</span>
                    <h3>{t("reference.categories.ui-visual.dividerTitle")}</h3>
                    <p>{t("reference.categories.ui-visual.dividerBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-visual" href={`/${params.locale}/reference/ui-visual#tooltip`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-visual.title")}</span>
                    <h3>{t("reference.categories.ui-visual.tooltipTitle")}</h3>
                    <p>{t("reference.categories.ui-visual.tooltipBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-visual" href={`/${params.locale}/reference/ui-visual#progress`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-visual.title")}</span>
                    <h3>{t("reference.categories.ui-visual.progressTitle")}</h3>
                    <p>{t("reference.categories.ui-visual.progressBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-visual" href={`/${params.locale}/reference/ui-visual#skeleton`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-visual.title")}</span>
                    <h3>{t("reference.categories.ui-visual.skeletonTitle")}</h3>
                    <p>{t("reference.categories.ui-visual.skeletonBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-visual" href={`/${params.locale}/reference/ui-visual#layout-utils`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-visual.title")}</span>
                    <h3>{t("reference.categories.ui-visual.layout-utilsTitle")}</h3>
                    <p>{t("reference.categories.ui-visual.layout-utilsBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-visual" href={`/${params.locale}/reference/ui-visual#theme`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-visual.title")}</span>
                    <h3>{t("reference.categories.ui-visual.themeTitle")}</h3>
                    <p>{t("reference.categories.ui-visual.themeBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-interactive" href={`/${params.locale}/reference/ui-interactive#dialog`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-interactive.title")}</span>
                    <h3>{t("reference.categories.ui-interactive.dialogTitle")}</h3>
                    <p>{t("reference.categories.ui-interactive.dialogBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-interactive" href={`/${params.locale}/reference/ui-interactive#dialog-stack`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-interactive.title")}</span>
                    <h3>{t("reference.categories.ui-interactive.dialog-stackTitle")}</h3>
                    <p>{t("reference.categories.ui-interactive.dialog-stackBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-interactive" href={`/${params.locale}/reference/ui-interactive#confirm-alert`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-interactive.title")}</span>
                    <h3>{t("reference.categories.ui-interactive.confirm-alertTitle")}</h3>
                    <p>{t("reference.categories.ui-interactive.confirm-alertBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-interactive" href={`/${params.locale}/reference/ui-interactive#drawer`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-interactive.title")}</span>
                    <h3>{t("reference.categories.ui-interactive.drawerTitle")}</h3>
                    <p>{t("reference.categories.ui-interactive.drawerBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-interactive" href={`/${params.locale}/reference/ui-interactive#toast`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-interactive.title")}</span>
                    <h3>{t("reference.categories.ui-interactive.toastTitle")}</h3>
                    <p>{t("reference.categories.ui-interactive.toastBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-interactive" href={`/${params.locale}/reference/ui-interactive#tabs`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-interactive.title")}</span>
                    <h3>{t("reference.categories.ui-interactive.tabsTitle")}</h3>
                    <p>{t("reference.categories.ui-interactive.tabsBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-interactive" href={`/${params.locale}/reference/ui-interactive#accordion`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-interactive.title")}</span>
                    <h3>{t("reference.categories.ui-interactive.accordionTitle")}</h3>
                    <p>{t("reference.categories.ui-interactive.accordionBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-interactive" href={`/${params.locale}/reference/ui-interactive#dropdown`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-interactive.title")}</span>
                    <h3>{t("reference.categories.ui-interactive.dropdownTitle")}</h3>
                    <p>{t("reference.categories.ui-interactive.dropdownBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-interactive" href={`/${params.locale}/reference/ui-interactive#table-sort-filter`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-interactive.title")}</span>
                    <h3>{t("reference.categories.ui-interactive.table-sort-filterTitle")}</h3>
                    <p>{t("reference.categories.ui-interactive.table-sort-filterBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="ui-interactive" href={`/${params.locale}/reference/ui-interactive#page-search`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.ui-interactive.title")}</span>
                    <h3>{t("reference.categories.ui-interactive.page-searchTitle")}</h3>
                    <p>{t("reference.categories.ui-interactive.page-searchBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="forms" href={`/${params.locale}/reference/forms#form-basic`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.forms.title")}</span>
                    <h3>{t("reference.categories.forms.form-basicTitle")}</h3>
                    <p>{t("reference.categories.forms.form-basicBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="forms" href={`/${params.locale}/reference/forms#form-messages`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.forms.title")}</span>
                    <h3>{t("reference.categories.forms.form-messagesTitle")}</h3>
                    <p>{t("reference.categories.forms.form-messagesBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="platform" href={`/${params.locale}/reference/platform#share`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.platform.title")}</span>
                    <h3>{t("reference.categories.platform.shareTitle")}</h3>
                    <p>{t("reference.categories.platform.shareBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="platform" href={`/${params.locale}/reference/platform#notify`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.platform.title")}</span>
                    <h3>{t("reference.categories.platform.notifyTitle")}</h3>
                    <p>{t("reference.categories.platform.notifyBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="platform" href={`/${params.locale}/reference/platform#capture-photo`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.platform.title")}</span>
                    <h3>{t("reference.categories.platform.capture-photoTitle")}</h3>
                    <p>{t("reference.categories.platform.capture-photoBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="platform" href={`/${params.locale}/reference/platform#storage`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.platform.title")}</span>
                    <h3>{t("reference.categories.platform.storageTitle")}</h3>
                    <p>{t("reference.categories.platform.storageBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="platform" href={`/${params.locale}/reference/platform#cache`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.platform.title")}</span>
                    <h3>{t("reference.categories.platform.cacheTitle")}</h3>
                    <p>{t("reference.categories.platform.cacheBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="platform" href={`/${params.locale}/reference/platform#db`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.platform.title")}</span>
                    <h3>{t("reference.categories.platform.dbTitle")}</h3>
                    <p>{t("reference.categories.platform.dbBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="platform" href={`/${params.locale}/reference/platform#network`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.platform.title")}</span>
                    <h3>{t("reference.categories.platform.networkTitle")}</h3>
                    <p>{t("reference.categories.platform.networkBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="platform" href={`/${params.locale}/reference/platform#lifecycle`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.platform.title")}</span>
                    <h3>{t("reference.categories.platform.lifecycleTitle")}</h3>
                    <p>{t("reference.categories.platform.lifecycleBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="platform" href={`/${params.locale}/reference/platform#geolocation`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.platform.title")}</span>
                    <h3>{t("reference.categories.platform.geolocationTitle")}</h3>
                    <p>{t("reference.categories.platform.geolocationBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="platform" href={`/${params.locale}/reference/platform#deeplinks`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.platform.title")}</span>
                    <h3>{t("reference.categories.platform.deeplinksTitle")}</h3>
                    <p>{t("reference.categories.platform.deeplinksBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="platform" href={`/${params.locale}/reference/platform#push`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.platform.title")}</span>
                    <h3>{t("reference.categories.platform.pushTitle")}</h3>
                    <p>{t("reference.categories.platform.pushBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="platform" href={`/${params.locale}/reference/platform#biometrics`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.platform.title")}</span>
                    <h3>{t("reference.categories.platform.biometricsTitle")}</h3>
                    <p>{t("reference.categories.platform.biometricsBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="platform" href={`/${params.locale}/reference/platform#haptics`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.platform.title")}</span>
                    <h3>{t("reference.categories.platform.hapticsTitle")}</h3>
                    <p>{t("reference.categories.platform.hapticsBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="reactivity" href={`/${params.locale}/reference/reactivity#signal`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.reactivity.title")}</span>
                    <h3>{t("reference.categories.reactivity.signalTitle")}</h3>
                    <p>{t("reference.categories.reactivity.signalBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="reactivity" href={`/${params.locale}/reference/reactivity#computed`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.reactivity.title")}</span>
                    <h3>{t("reference.categories.reactivity.computedTitle")}</h3>
                    <p>{t("reference.categories.reactivity.computedBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="reactivity" href={`/${params.locale}/reference/reactivity#effect`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.reactivity.title")}</span>
                    <h3>{t("reference.categories.reactivity.effectTitle")}</h3>
                    <p>{t("reference.categories.reactivity.effectBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="reactivity" href={`/${params.locale}/reference/reactivity#watch`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.reactivity.title")}</span>
                    <h3>{t("reference.categories.reactivity.watchTitle")}</h3>
                    <p>{t("reference.categories.reactivity.watchBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="reactivity" href={`/${params.locale}/reference/reactivity#bindtext`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.reactivity.title")}</span>
                    <h3>{t("reference.categories.reactivity.bindtextTitle")}</h3>
                    <p>{t("reference.categories.reactivity.bindtextBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="reactivity" href={`/${params.locale}/reference/reactivity#component-model`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.reactivity.title")}</span>
                    <h3>{t("reference.categories.reactivity.component-modelTitle")}</h3>
                    <p>{t("reference.categories.reactivity.component-modelBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="http" href={`/${params.locale}/reference/http#create-api`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.http.title")}</span>
                    <h3>{t("reference.categories.http.create-apiTitle")}</h3>
                    <p>{t("reference.categories.http.create-apiBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="http" href={`/${params.locale}/reference/http#query`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.http.title")}</span>
                    <h3>{t("reference.categories.http.queryTitle")}</h3>
                    <p>{t("reference.categories.http.queryBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="http" href={`/${params.locale}/reference/http#mutation`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.http.title")}</span>
                    <h3>{t("reference.categories.http.mutationTitle")}</h3>
                    <p>{t("reference.categories.http.mutationBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="http" href={`/${params.locale}/reference/http#sse`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.http.title")}</span>
                    <h3>{t("reference.categories.http.sseTitle")}</h3>
                    <p>{t("reference.categories.http.sseBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="http" href={`/${params.locale}/reference/http#websocket`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.http.title")}</span>
                    <h3>{t("reference.categories.http.websocketTitle")}</h3>
                    <p>{t("reference.categories.http.websocketBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="http" href={`/${params.locale}/reference/http#reconnect`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.http.title")}</span>
                    <h3>{t("reference.categories.http.reconnectTitle")}</h3>
                    <p>{t("reference.categories.http.reconnectBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="vendoring" href={`/${params.locale}/reference/vendoring#css-external`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.vendoring.title")}</span>
                    <h3>{t("reference.categories.vendoring.css-externalTitle")}</h3>
                    <p>{t("reference.categories.vendoring.css-externalBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="vendoring" href={`/${params.locale}/reference/vendoring#js-global`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.vendoring.title")}</span>
                    <h3>{t("reference.categories.vendoring.js-globalTitle")}</h3>
                    <p>{t("reference.categories.vendoring.js-globalBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="vendoring" href={`/${params.locale}/reference/vendoring#imports-esm`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.vendoring.title")}</span>
                    <h3>{t("reference.categories.vendoring.imports-esmTitle")}</h3>
                    <p>{t("reference.categories.vendoring.imports-esmBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="vendoring" href={`/${params.locale}/reference/vendoring#vendoring-npm`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.vendoring.title")}</span>
                    <h3>{t("reference.categories.vendoring.vendoring-npmTitle")}</h3>
                    <p>{t("reference.categories.vendoring.vendoring-npmBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="images-pwa-perf" href={`/${params.locale}/reference/images-pwa-perf#images`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.images-pwa-perf.title")}</span>
                    <h3>{t("reference.categories.images-pwa-perf.imagesTitle")}</h3>
                    <p>{t("reference.categories.images-pwa-perf.imagesBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="images-pwa-perf" href={`/${params.locale}/reference/images-pwa-perf#pwa`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.images-pwa-perf.title")}</span>
                    <h3>{t("reference.categories.images-pwa-perf.pwaTitle")}</h3>
                    <p>{t("reference.categories.images-pwa-perf.pwaBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="images-pwa-perf" href={`/${params.locale}/reference/images-pwa-perf#performance-budgets`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.images-pwa-perf.title")}</span>
                    <h3>{t("reference.categories.images-pwa-perf.performance-budgetsTitle")}</h3>
                    <p>{t("reference.categories.images-pwa-perf.performance-budgetsBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="images-pwa-perf" href={`/${params.locale}/reference/images-pwa-perf#telemetry`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.images-pwa-perf.title")}</span>
                    <h3>{t("reference.categories.images-pwa-perf.telemetryTitle")}</h3>
                    <p>{t("reference.categories.images-pwa-perf.telemetryBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="native-deploy-cli" href={`/${params.locale}/reference/native-deploy-cli#tauri`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.native-deploy-cli.title")}</span>
                    <h3>{t("reference.categories.native-deploy-cli.tauriTitle")}</h3>
                    <p>{t("reference.categories.native-deploy-cli.tauriBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="native-deploy-cli" href={`/${params.locale}/reference/native-deploy-cli#capacitor`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.native-deploy-cli.title")}</span>
                    <h3>{t("reference.categories.native-deploy-cli.capacitorTitle")}</h3>
                    <p>{t("reference.categories.native-deploy-cli.capacitorBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="native-deploy-cli" href={`/${params.locale}/reference/native-deploy-cli#nginx`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.native-deploy-cli.title")}</span>
                    <h3>{t("reference.categories.native-deploy-cli.nginxTitle")}</h3>
                    <p>{t("reference.categories.native-deploy-cli.nginxBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="native-deploy-cli" href={`/${params.locale}/reference/native-deploy-cli#cli`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.native-deploy-cli.title")}</span>
                    <h3>{t("reference.categories.native-deploy-cli.cliTitle")}</h3>
                    <p>{t("reference.categories.native-deploy-cli.cliBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="native-deploy-cli" href={`/${params.locale}/reference/native-deploy-cli#nexa-toml`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.native-deploy-cli.title")}</span>
                    <h3>{t("reference.categories.native-deploy-cli.nexa-tomlTitle")}</h3>
                    <p>{t("reference.categories.native-deploy-cli.nexa-tomlBody")}</p>
                </a>
                <a class="nx-ref-card" data-category="native-deploy-cli" href={`/${params.locale}/reference/native-deploy-cli#nexa-test`}>
                    <span class="nx-ref-card-cat">{t("reference.categories.native-deploy-cli.title")}</span>
                    <h3>{t("reference.categories.native-deploy-cli.nexa-testTitle")}</h3>
                    <p>{t("reference.categories.native-deploy-cli.nexa-testBody")}</p>
                </a>
            </div>
            <p class="nx-ref-empty" id="referenceEmpty" hidden>{t("reference.noResults")}</p>
        </main>
    );
}
