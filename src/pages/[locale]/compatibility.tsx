export const paths = { url: "/locales.json" };

export const seo = {
    title: t("compat.title"),
    description: t("compat.intro"),
    canonical: `/${params.locale}/compatibility`
};

export default function Compatibility() {
    return (
        <main class="nx-page">
            <h1>{t("compat.title")}</h1>
            <p>{t("compat.intro")}</p>

            <section>
                <h2>{t("compat.backendsTitle")}</h2>
                <p>{t("compat.backendsBody")}</p>
            </section>

            <section>
                <h2>{t("compat.browsersTitle")}</h2>
                <p>{t("compat.browsersBody")}</p>
            </section>

            <section>
                <h2>{t("compat.platformsTitle")}</h2>
                <p>{t("compat.platformsBody")}</p>
            </section>

            <section>
                <h2>{t("compat.buildTitle")}</h2>
                <p>{t("compat.buildBody")}</p>
            </section>

            <section>
                <h2>{t("compat.deployTitle")}</h2>
                <p>{t("compat.deployBody")}</p>
            </section>
        </main>
    );
}
