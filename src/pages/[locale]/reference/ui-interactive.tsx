export const paths = { url: "/locales.json" };

export const seo = {
    title: t("reference.categories.ui-interactive.title"),
    description: t("reference.categories.ui-interactive.intro"),
    canonical: `/${params.locale}/reference/ui-interactive`
};

export default function ReferenceUiInteractive() {
    return (
        <main class="nx-page nx-ref-category">
            <a class="nx-ref-back" href={`/${params.locale}/reference`}>{t("reference.backToReference")}</a>
            <h1>{t("reference.categories.ui-interactive.title")}</h1>
            <p>{t("reference.categories.ui-interactive.intro")}</p>

            <section id="dialog">
                <h2>{t("reference.categories.ui-interactive.dialogTitle")}</h2>
                <pre><code>{"function open() { ui.openDialog(document.querySelector(\".nx-dialog\")); }\nfunction close() { ui.closeDialog(document.querySelector(\".nx-dialog\")); }\n\n<button onClick={open}>Abrir</button>\n<div class=\"nx-dialog\" hidden>\n    <p>Contenido</p>\n    <button onClick={close}>Cerrar</button>\n</div>"}</code></pre>
                <p>{t("reference.categories.ui-interactive.dialogBody")}</p>
            </section>

            <section id="dialog-stack">
                <h2>{t("reference.categories.ui-interactive.dialog-stackTitle")}</h2>
                <pre><code>{t("reference.categories.ui-interactive.dialog-stackCode")}</code></pre>
                <p>{t("reference.categories.ui-interactive.dialog-stackBody")}</p>
            </section>

            <section id="confirm-alert">
                <h2>{t("reference.categories.ui-interactive.confirm-alertTitle")}</h2>
                <pre><code>{t("reference.categories.ui-interactive.confirm-alertCode")}</code></pre>
                <p>{t("reference.categories.ui-interactive.confirm-alertBody")}</p>
            </section>

            <section id="drawer">
                <h2>{t("reference.categories.ui-interactive.drawerTitle")}</h2>
                <pre><code>{"function openMenu() { ui.openDrawer(document.querySelector(\".nx-drawer\")); }\n\n<button onClick={openMenu}>Menú</button>\n<div class=\"nx-drawer\" hidden>\n    <a href=\"/\">Inicio</a>\n</div>"}</code></pre>
                <p>{t("reference.categories.ui-interactive.drawerBody")}</p>
            </section>

            <section id="toast">
                <h2>{t("reference.categories.ui-interactive.toastTitle")}</h2>
                <pre><code>{t("reference.categories.ui-interactive.toastCode")}</code></pre>
                <p>{t("reference.categories.ui-interactive.toastBody")}</p>
            </section>

            <section id="tabs">
                <h2>{t("reference.categories.ui-interactive.tabsTitle")}</h2>
                <pre><code>{"function selectTab(event) { ui.selectTab(event); }\n\n<div class=\"nx-tab-group\">\n    <div class=\"nx-tab-list\" role=\"tablist\">\n        <button class=\"nx-tab\" data-tab=\"uno\" aria-selected=\"true\" onClick={selectTab}>Uno</button>\n        <button class=\"nx-tab\" data-tab=\"dos\" onClick={selectTab}>Dos</button>\n    </div>\n    <div class=\"nx-tab-panel\" data-tab=\"uno\">Contenido uno</div>\n    <div class=\"nx-tab-panel\" data-tab=\"dos\" hidden>Contenido dos</div>\n</div>"}</code></pre>
                <p>{t("reference.categories.ui-interactive.tabsBody")}</p>
            </section>

            <section id="accordion">
                <h2>{t("reference.categories.ui-interactive.accordionTitle")}</h2>
                <pre><code>{"function toggle(event) { ui.toggleAccordionItem(event); }\n\n<div class=\"nx-accordion\">\n    <div class=\"nx-accordion-item\">\n        <button class=\"nx-accordion-trigger\" aria-expanded=\"false\" onClick={toggle}>Pregunta</button>\n        <div class=\"nx-accordion-panel\" hidden>Respuesta</div>\n    </div>\n</div>"}</code></pre>
                <p>{t("reference.categories.ui-interactive.accordionBody")}</p>
            </section>

            <section id="dropdown">
                <h2>{t("reference.categories.ui-interactive.dropdownTitle")}</h2>
                <pre><code>{"function toggleMenu(event) { ui.toggleDropdown(event); }\nfunction pick(event) { ui.selectDropdownOption(event); }\n\n<div class=\"nx-dropdown\">\n    <button class=\"nx-dropdown-trigger\" aria-expanded=\"false\" onClick={toggleMenu}>Elegir…</button>\n    <ul class=\"nx-dropdown-menu\" role=\"listbox\" hidden>\n        <li class=\"nx-dropdown-option\" data-value=\"m\" onClick={pick}>M</li>\n    </ul>\n</div>"}</code></pre>
                <p>{t("reference.categories.ui-interactive.dropdownBody")}</p>
            </section>

            <section id="table-sort-filter">
                <h2>{t("reference.categories.ui-interactive.table-sort-filterTitle")}</h2>
                <pre><code>{"function sortByColumn(event) { ui.sortTable(event); }\nfunction filterOrders(event) { ui.filterTable(document.getElementById(\"orders\"), event.target.value); }\n\n<input type=\"search\" onInput={filterOrders} />\n<table id=\"orders\" class=\"nx-table\">\n    <thead><tr><th data-sortable onClick={sortByColumn}>Cliente</th></tr></thead>\n    <tbody>...</tbody>\n</table>"}</code></pre>
                <p>{t("reference.categories.ui-interactive.table-sort-filterBody")}</p>
            </section>

            <section id="page-search">
                <h2>{t("reference.categories.ui-interactive.page-searchTitle")}</h2>
                <pre><code>{"function onSearchInput(event) {\n    const input = event.currentTarget;\n    input.pageSearch ??= ui.createPageSearch(document.getElementById(\"catalogo\"));\n    input.pageSearch.setQuery(event.target.value);\n}\n\n<input type=\"search\" onInput={onSearchInput} />\n<div id=\"catalogo\">\n    <article data-searchable>Zapatillas Nezha</article>\n</div>"}</code></pre>
                <p>{t("reference.categories.ui-interactive.page-searchBody")}</p>
            </section>
        </main>
    );
}
