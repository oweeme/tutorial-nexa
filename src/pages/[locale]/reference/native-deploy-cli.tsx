export const paths = { url: "/locales.json" };

export const seo = {
    title: t("reference.categories.native-deploy-cli.title"),
    description: t("reference.categories.native-deploy-cli.intro"),
    canonical: `/${params.locale}/reference/native-deploy-cli`
};

export default function ReferenceNativeDeployCli() {
    return (
        <main class="nx-page nx-ref-category">
            <a class="nx-ref-back" href={`/${params.locale}/reference`}>{t("reference.backToReference")}</a>
            <h1>{t("reference.categories.native-deploy-cli.title")}</h1>
            <p>{t("reference.categories.native-deploy-cli.intro")}</p>

            <section id="tauri">
                <h2>{t("reference.categories.native-deploy-cli.tauriTitle")}</h2>
                <pre><code>{t("reference.categories.native-deploy-cli.tauriCode")}</code></pre>
                <p>{t("reference.categories.native-deploy-cli.tauriBody")}</p>
            </section>

            <section id="capacitor">
                <h2>{t("reference.categories.native-deploy-cli.capacitorTitle")}</h2>
                <pre><code>{t("reference.categories.native-deploy-cli.capacitorCode")}</code></pre>
                <p>{t("reference.categories.native-deploy-cli.capacitorBody")}</p>
            </section>

            <section id="nginx">
                <h2>{t("reference.categories.native-deploy-cli.nginxTitle")}</h2>
                <pre><code>{t("reference.categories.native-deploy-cli.nginxCode")}</code></pre>
                <p>{t("reference.categories.native-deploy-cli.nginxBody")}</p>
            </section>

            <section id="cli">
                <h2>{t("reference.categories.native-deploy-cli.cliTitle")}</h2>
                <pre><code>{t("reference.categories.native-deploy-cli.cliCode")}</code></pre>
                <p>{t("reference.categories.native-deploy-cli.cliBody")}</p>
            </section>

            <section id="nexa-toml">
                <h2>{t("reference.categories.native-deploy-cli.nexa-tomlTitle")}</h2>
                <pre><code>{t("reference.categories.native-deploy-cli.nexa-tomlCode")}</code></pre>
                <p>{t("reference.categories.native-deploy-cli.nexa-tomlBody")}</p>
            </section>

            <section id="nexa-test">
                <h2>{t("reference.categories.native-deploy-cli.nexa-testTitle")}</h2>
                <pre><code>{t("reference.categories.native-deploy-cli.nexa-testCode")}</code></pre>
                <p>{t("reference.categories.native-deploy-cli.nexa-testBody")}</p>
            </section>
        </main>
    );
}
