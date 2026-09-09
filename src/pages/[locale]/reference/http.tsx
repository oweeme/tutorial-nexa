export const paths = { url: "/locales.json" };

export const seo = {
    title: t("reference.categories.http.title"),
    description: t("reference.categories.http.intro"),
    canonical: `/${params.locale}/reference/http`
};

export default function ReferenceHttp() {
    return (
        <main class="nx-page nx-ref-category">
            <a class="nx-ref-back" href={`/${params.locale}/reference`}>{t("reference.backToReference")}</a>
            <h1>{t("reference.categories.http.title")}</h1>
            <p>{t("reference.categories.http.intro")}</p>

            <section id="create-api">
                <h2>{t("reference.categories.http.create-apiTitle")}</h2>
                <pre><code>{t("reference.categories.http.create-apiCode")}</code></pre>
                <p>{t("reference.categories.http.create-apiBody")}</p>
            </section>

            <section id="query">
                <h2>{t("reference.categories.http.queryTitle")}</h2>
                <pre><code>{t("reference.categories.http.queryCode")}</code></pre>
                <p>{t("reference.categories.http.queryBody")}</p>
            </section>

            <section id="mutation">
                <h2>{t("reference.categories.http.mutationTitle")}</h2>
                <pre><code>{t("reference.categories.http.mutationCode")}</code></pre>
                <p>{t("reference.categories.http.mutationBody")}</p>
            </section>

            <section id="sse">
                <h2>{t("reference.categories.http.sseTitle")}</h2>
                <pre><code>{t("reference.categories.http.sseCode")}</code></pre>
                <p>{t("reference.categories.http.sseBody")}</p>
            </section>

            <section id="websocket">
                <h2>{t("reference.categories.http.websocketTitle")}</h2>
                <pre><code>{t("reference.categories.http.websocketCode")}</code></pre>
                <p>{t("reference.categories.http.websocketBody")}</p>
            </section>

            <section id="reconnect">
                <h2>{t("reference.categories.http.reconnectTitle")}</h2>
                <pre><code>{t("reference.categories.http.reconnectCode")}</code></pre>
                <p>{t("reference.categories.http.reconnectBody")}</p>
            </section>
        </main>
    );
}
