export const paths = { url: "/locales.json" };

export const seo = {
    title: t("reference.categories.platform.title"),
    description: t("reference.categories.platform.intro"),
    canonical: `/${params.locale}/reference/platform`
};

export default function ReferencePlatform() {
    return (
        <main class="nx-page nx-ref-category">
            <a class="nx-ref-back" href={`/${params.locale}/reference`}>{t("reference.backToReference")}</a>
            <h1>{t("reference.categories.platform.title")}</h1>
            <p>{t("reference.categories.platform.intro")}</p>

            <section id="share">
                <h2>{t("reference.categories.platform.shareTitle")}</h2>
                <pre><code>{t("reference.categories.platform.shareCode")}</code></pre>
                <p>{t("reference.categories.platform.shareBody")}</p>
            </section>

            <section id="notify">
                <h2>{t("reference.categories.platform.notifyTitle")}</h2>
                <pre><code>{t("reference.categories.platform.notifyCode")}</code></pre>
                <p>{t("reference.categories.platform.notifyBody")}</p>
            </section>

            <section id="capture-photo">
                <h2>{t("reference.categories.platform.capture-photoTitle")}</h2>
                <pre><code>{t("reference.categories.platform.capture-photoCode")}</code></pre>
                <p>{t("reference.categories.platform.capture-photoBody")}</p>
            </section>

            <section id="storage">
                <h2>{t("reference.categories.platform.storageTitle")}</h2>
                <pre><code>{t("reference.categories.platform.storageCode")}</code></pre>
                <p>{t("reference.categories.platform.storageBody")}</p>
            </section>

            <section id="cache">
                <h2>{t("reference.categories.platform.cacheTitle")}</h2>
                <pre><code>{t("reference.categories.platform.cacheCode")}</code></pre>
                <p>{t("reference.categories.platform.cacheBody")}</p>
            </section>

            <section id="db">
                <h2>{t("reference.categories.platform.dbTitle")}</h2>
                <pre><code>{t("reference.categories.platform.dbCode")}</code></pre>
                <p>{t("reference.categories.platform.dbBody")}</p>
            </section>

            <section id="network">
                <h2>{t("reference.categories.platform.networkTitle")}</h2>
                <pre><code>{t("reference.categories.platform.networkCode")}</code></pre>
                <p>{t("reference.categories.platform.networkBody")}</p>
            </section>

            <section id="lifecycle">
                <h2>{t("reference.categories.platform.lifecycleTitle")}</h2>
                <pre><code>{t("reference.categories.platform.lifecycleCode")}</code></pre>
                <p>{t("reference.categories.platform.lifecycleBody")}</p>
            </section>

            <section id="geolocation">
                <h2>{t("reference.categories.platform.geolocationTitle")}</h2>
                <pre><code>{t("reference.categories.platform.geolocationCode")}</code></pre>
                <p>{t("reference.categories.platform.geolocationBody")}</p>
            </section>

            <section id="deeplinks">
                <h2>{t("reference.categories.platform.deeplinksTitle")}</h2>
                <pre><code>{t("reference.categories.platform.deeplinksCode")}</code></pre>
                <p>{t("reference.categories.platform.deeplinksBody")}</p>
            </section>

            <section id="push">
                <h2>{t("reference.categories.platform.pushTitle")}</h2>
                <pre><code>{t("reference.categories.platform.pushCode")}</code></pre>
                <p>{t("reference.categories.platform.pushBody")}</p>
            </section>

            <section id="biometrics">
                <h2>{t("reference.categories.platform.biometricsTitle")}</h2>
                <pre><code>{t("reference.categories.platform.biometricsCode")}</code></pre>
                <p>{t("reference.categories.platform.biometricsBody")}</p>
            </section>

            <section id="haptics">
                <h2>{t("reference.categories.platform.hapticsTitle")}</h2>
                <pre><code>{t("reference.categories.platform.hapticsCode")}</code></pre>
                <p>{t("reference.categories.platform.hapticsBody")}</p>
            </section>
        </main>
    );
}
