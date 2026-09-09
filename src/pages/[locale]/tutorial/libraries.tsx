export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorial.libraries.title"),
    description: t("tutorial.libraries.intro"),
    canonical: `/${params.locale}/tutorial/libraries`
};

export default function TutorialLibraries() {
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
                <a class="active" href={`/${params.locale}/tutorial/libraries`}><span class="nx-toc-num">10</span>{t("tutorial.libraries.title")}</a>
                <a href={`/${params.locale}/tutorial/realtime`}><span class="nx-toc-num">11</span>{t("tutorial.realtime.title")}</a>
                <a href={`/${params.locale}/tutorial/layouts`}><span class="nx-toc-num">12</span>{t("tutorial.layouts.title")}</a>
                <a href={`/${params.locale}/tutorial/pwa`}><span class="nx-toc-num">13</span>{t("tutorial.pwa.title")}</a>
                <a href={`/${params.locale}/tutorial/images`}><span class="nx-toc-num">14</span>{t("tutorial.images.title")}</a>
                <a href={`/${params.locale}/tutorial/performance`}><span class="nx-toc-num">15</span>{t("tutorial.performance.title")}</a>
                <a href={`/${params.locale}/tutorial/native`}><span class="nx-toc-num">16</span>{t("tutorial.native.title")}</a>
                <a href={`/${params.locale}/tutorial/production`}><span class="nx-toc-num">17</span>{t("tutorial.production.title")}</a>
                <a href={`/${params.locale}/tutorial/ui-components`}><span class="nx-toc-num">18</span>{t("tutorial.uiComponents.title")}</a>
            </nav>
            <main class="nx-page nx-tutorial-step">
                <span class="nx-step-badge">{t("tutorial.libraries.step")}</span>
                <h1>{t("tutorial.libraries.title")}</h1>
                <p>{t("tutorial.libraries.intro")}</p>

            <section>
                <h2>{t("tutorial.libraries.s1Title")}</h2>
                <pre><code>{t("tutorial.libraries.s1Code")}</code></pre>
                <p>{t("tutorial.libraries.s1Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.libraries.s2Title")}</h2>
                <pre><code>{t("tutorial.libraries.s2Code")}</code></pre>
                <p>{t("tutorial.libraries.s2Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.libraries.s3Title")}</h2>
                <pre><code>{t("tutorial.libraries.s3Code")}</code></pre>
                <p>{t("tutorial.libraries.s3Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.libraries.s4Title")}</h2>
                <pre><code>{t("tutorial.libraries.s4Code")}</code></pre>
                <p>{t("tutorial.libraries.s4Body")}</p>
            </section>

            <section>
                <h2>{t("tutorial.libraries.s5Title")}</h2>
                <pre><code>{t("tutorial.libraries.s5Code")}</code></pre>
                <p>{t("tutorial.libraries.s5Body")}</p>
            </section>

                <nav class="nx-tutorial-nav">
                    <a href={`/${params.locale}/tutorial/islands`}>← {t("tutorial.prevLabel")}</a>
                    <a href={`/${params.locale}/tutorial/realtime`}>{t("tutorial.nextLabel")} →</a>
                </nav>
            </main>
        </div>
    );
}
