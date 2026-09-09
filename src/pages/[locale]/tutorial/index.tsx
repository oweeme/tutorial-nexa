export const paths = { url: "/locales.json" };

export const seo = {
    title: t("tutorialHub.title"),
    description: t("tutorialHub.intro"),
    canonical: `/${params.locale}/tutorial`
};

export default function TutorialHub() {
    return (
        <main class="nx-tutorial-hub">
            <h1>{t("tutorialHub.title")}</h1>
            <p>{t("tutorialHub.intro")}</p>

            <div class="nx-steps">
                <a class="nx-step-card" href={`/${params.locale}/tutorial/install`}>
                    <span class="nx-step-num">{t("tutorial.install.step")}</span>
                    <h3>{t("tutorial.install.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/first-project`}>
                    <span class="nx-step-num">{t("tutorial.firstProject.step")}</span>
                    <h3>{t("tutorial.firstProject.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/routing`}>
                    <span class="nx-step-num">{t("tutorial.routing.step")}</span>
                    <h3>{t("tutorial.routing.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/data`}>
                    <span class="nx-step-num">{t("tutorial.data.step")}</span>
                    <h3>{t("tutorial.data.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/seo`}>
                    <span class="nx-step-num">{t("tutorial.seo.step")}</span>
                    <h3>{t("tutorial.seo.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/i18n`}>
                    <span class="nx-step-num">{t("tutorial.i18n.step")}</span>
                    <h3>{t("tutorial.i18n.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/styling`}>
                    <span class="nx-step-num">{t("tutorial.styling.step")}</span>
                    <h3>{t("tutorial.styling.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/forms`}>
                    <span class="nx-step-num">{t("tutorial.forms.step")}</span>
                    <h3>{t("tutorial.forms.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/islands`}>
                    <span class="nx-step-num">{t("tutorial.islands.step")}</span>
                    <h3>{t("tutorial.islands.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/libraries`}>
                    <span class="nx-step-num">{t("tutorial.libraries.step")}</span>
                    <h3>{t("tutorial.libraries.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/realtime`}>
                    <span class="nx-step-num">{t("tutorial.realtime.step")}</span>
                    <h3>{t("tutorial.realtime.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/layouts`}>
                    <span class="nx-step-num">{t("tutorial.layouts.step")}</span>
                    <h3>{t("tutorial.layouts.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/pwa`}>
                    <span class="nx-step-num">{t("tutorial.pwa.step")}</span>
                    <h3>{t("tutorial.pwa.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/images`}>
                    <span class="nx-step-num">{t("tutorial.images.step")}</span>
                    <h3>{t("tutorial.images.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/performance`}>
                    <span class="nx-step-num">{t("tutorial.performance.step")}</span>
                    <h3>{t("tutorial.performance.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/native`}>
                    <span class="nx-step-num">{t("tutorial.native.step")}</span>
                    <h3>{t("tutorial.native.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/production`}>
                    <span class="nx-step-num">{t("tutorial.production.step")}</span>
                    <h3>{t("tutorial.production.title")}</h3>
                </a>
                <a class="nx-step-card" href={`/${params.locale}/tutorial/ui-components`}>
                    <span class="nx-step-num">{t("tutorial.uiComponents.step")}</span>
                    <h3>{t("tutorial.uiComponents.title")}</h3>
                </a>
            </div>
        </main>
    );
}
