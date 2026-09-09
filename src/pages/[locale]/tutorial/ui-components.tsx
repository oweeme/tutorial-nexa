export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.uiComponents.title"),
    description: t("tutorial.uiComponents.intro"),
    canonical: `/${params.locale}/tutorial/ui-components`
};

export default function TutorialUiComponents() {
    return (
        <div class="nx-tutorial-layout">
            <nav class="nx-toc">
                <p class="nx-toc-title">{t("nav.tutorial")}</p>
                <a href={`/${params.locale}/tutorial/install`}><span class="nx-toc-num">01</span>{t("tutorial.install.title")}</a>
                <a href={`/${params.locale}/tutorial/first-project`}><span class="nx-toc-num">02</span>{t("tutorial.firstProject.title")}</a>
                <a href={`/${params.locale}/tutorial/routing`}><span class="nx-toc-num">03</span>{t("tutorial.routing.title")}</a>
                <a href={`/${params.locale}/tutorial/data`}><span class="nx-toc-num">04</span>{t("tutorial.data.title")}</a>
                <a href={`/${params.locale}/tutorial/seo`}><span class="nx-toc-num">05</span>{t("tutorial.seo.title")}</a>
                <a href={`/${params.locale}/tutorial/i18n`}><span class="nx-toc-num">06</span>{t("tutorial.i18n.title")}</a>
                <a href={`/${params.locale}/tutorial/styling`}><span class="nx-toc-num">07</span>{t("tutorial.styling.title")}</a>
                <a href={`/${params.locale}/tutorial/forms`}><span class="nx-toc-num">08</span>{t("tutorial.forms.title")}</a>
                <a href={`/${params.locale}/tutorial/islands`}><span class="nx-toc-num">09</span>{t("tutorial.islands.title")}</a>
                <a href={`/${params.locale}/tutorial/libraries`}><span class="nx-toc-num">10</span>{t("tutorial.libraries.title")}</a>
                <a href={`/${params.locale}/tutorial/realtime`}><span class="nx-toc-num">11</span>{t("tutorial.realtime.title")}</a>
                <a href={`/${params.locale}/tutorial/layouts`}><span class="nx-toc-num">12</span>{t("tutorial.layouts.title")}</a>
                <a href={`/${params.locale}/tutorial/pwa`}><span class="nx-toc-num">13</span>{t("tutorial.pwa.title")}</a>
                <a href={`/${params.locale}/tutorial/images`}><span class="nx-toc-num">14</span>{t("tutorial.images.title")}</a>
                <a href={`/${params.locale}/tutorial/performance`}><span class="nx-toc-num">15</span>{t("tutorial.performance.title")}</a>
                <a href={`/${params.locale}/tutorial/native`}><span class="nx-toc-num">16</span>{t("tutorial.native.title")}</a>
                <a href={`/${params.locale}/tutorial/production`}><span class="nx-toc-num">17</span>{t("tutorial.production.title")}</a>
                <a class="active" href={`/${params.locale}/tutorial/ui-components`}><span class="nx-toc-num">18</span>{t("tutorial.uiComponents.title")}</a>
            </nav>
            <main class="nx-page nx-tutorial-step">
                <span class="nx-step-badge">{t("tutorial.uiComponents.step")}</span>
                <h1>{t("tutorial.uiComponents.title")}</h1>
                <p>{t("tutorial.uiComponents.intro")}</p>

            <section>
                <h2>{t("tutorial.uiComponents.s1Title")}</h2>
                <pre><code>{t("tutorial.uiComponents.s1Code")}</code></pre>
                <p>{t("tutorial.uiComponents.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.uiComponents.s2Title")}</h2>
                <pre><code>{t("tutorial.uiComponents.s2Code")}</code></pre>
                <p>{t("tutorial.uiComponents.s2Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.uiComponents.s3Title")}</h2>
                <pre><code>{t("tutorial.uiComponents.s3Code")}</code></pre>
                <p>{t("tutorial.uiComponents.s3Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.uiComponents.s4Title")}</h2>
                <pre><code>{"function selectTab(event) {\n    ui.selectTab(event);\n}\n\n<div class=\"nx-tab-group\">\n    <div class=\"nx-tab-list\" role=\"tablist\">\n        <button class=\"nx-tab\" data-tab=\"uno\" aria-selected=\"true\" onClick={selectTab}>Uno</button>\n        <button class=\"nx-tab\" data-tab=\"dos\" onClick={selectTab}>Dos</button>\n    </div>\n    <div class=\"nx-tab-panel\" data-tab=\"uno\">Contenido uno</div>\n    <div class=\"nx-tab-panel\" data-tab=\"dos\" hidden>Contenido dos</div>\n</div>"}</code></pre>
                <p>{t("tutorial.uiComponents.s4Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.uiComponents.s5Title")}</h2>
                <pre><code>{"function toggle(event) {\n    ui.toggleAccordionItem(event);\n}\n\n<div class=\"nx-accordion\" data-exclusive=\"true\">\n    <div class=\"nx-accordion-item\">\n        <button class=\"nx-accordion-trigger\" aria-expanded=\"false\" onClick={toggle}>¿Envían a todo el país?</button>\n        <div class=\"nx-accordion-panel\" hidden>Sí, a todo el país.</div>\n    </div>\n</div>"}</code></pre>
                <p>{t("tutorial.uiComponents.s5Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.uiComponents.s6Title")}</h2>
                <pre><code>{"function toggleMenu(event) {\n    ui.toggleDropdown(event);\n}\nfunction pickOption(event) {\n    ui.selectDropdownOption(event);\n}\n\n<div class=\"nx-dropdown\">\n    <button class=\"nx-dropdown-trigger\" aria-haspopup=\"listbox\" aria-expanded=\"false\" onClick={toggleMenu}>\n        Elegir talle…\n    </button>\n    <ul class=\"nx-dropdown-menu\" role=\"listbox\" hidden>\n        <li class=\"nx-dropdown-option\" role=\"option\" data-value=\"s\" onClick={pickOption}>S</li>\n        <li class=\"nx-dropdown-option\" role=\"option\" data-value=\"m\" onClick={pickOption}>M</li>\n        <li class=\"nx-dropdown-option\" role=\"option\" data-value=\"l\" onClick={pickOption}>L</li>\n    </ul>\n</div>"}</code></pre>
                <p>{t("tutorial.uiComponents.s6Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.uiComponents.s7Title")}</h2>
                <pre><code>{"function filterOrders(event) {\n    ui.filterTable(document.getElementById(\"orders\"), event.target.value);\n}\nfunction sortByColumn(event) {\n    ui.sortTable(event);\n}\n\n<input type=\"search\" onInput={filterOrders} placeholder=\"Buscar pedido…\" />\n<table id=\"orders\" class=\"nx-table\">\n    <thead>\n        <tr>\n            <th data-sortable onClick={sortByColumn}>Cliente</th>\n            <th data-sortable onClick={sortByColumn}>Total</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr><td>Beta</td><td>30</td></tr>\n        <tr><td>Alfa</td><td>10</td></tr>\n        <tr><td>Gama</td><td>20</td></tr>\n    </tbody>\n</table>"}</code></pre>
                <p>{t("tutorial.uiComponents.s7Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.uiComponents.s8Title")}</h2>
                <pre><code>{"function onSearchInput(event) {\n    const input = event.currentTarget;\n    input.pageSearch ??= ui.createPageSearch(document.getElementById(\"catalogo\"));\n    input.pageSearch.setQuery(event.target.value);\n}\n\n<input type=\"search\" onInput={onSearchInput} placeholder=\"Buscar en la página…\" />\n<div id=\"catalogo\">\n    <article data-searchable>Zapatillas Nezha</article>\n    <article data-searchable>Camiseta Jade</article>\n    <article data-searchable>Gorra roja</article>\n</div>"}</code></pre>
                <p>{t("tutorial.uiComponents.s8Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.uiComponents.s9Title")}</h2>
                <p>{t("tutorial.uiComponents.s9Body")}</p>
            </section>

                <nav class="nx-tutorial-nav">
                    <a href={`/${params.locale}/tutorial/production`}>← {t("tutorial.prevLabel")}</a>
                    <a href={`/${params.locale}`}>{t("nav.home")} →</a>
                </nav>
            </main>
        </div>
    );
}
