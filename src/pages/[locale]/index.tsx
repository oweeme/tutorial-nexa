export const paths = { url: "/locales.json" };

export const seo = {
    title: t("home.heroTitle"),
    description: t("home.heroSubtitle"),
    canonical: `/${params.locale}`
};

function sayHi() {
    alert("hola desde Nexa!");
}

export default function Home() {
    return (
        <main class="nx-home">
            <section class="nx-hero">
                <p class="nx-kicker">{t("home.heroKicker")}</p>
                <h1>{t("home.heroTitle")}</h1>
                <p class="nx-hero-sub">{t("home.heroSubtitle")}</p>
                <div class="nx-hero-ctas">
                    <a class="nx-btn nx-btn-primary" href={`/${params.locale}/tutorial`}>{t("home.ctaTutorial")}</a>
                    <a class="nx-btn" href="https://github.com/oweeme/tutorial-nexa">{t("home.ctaGithub")}</a>
                </div>
            </section>

            <section class="nx-code-sample">
                <p class="nx-code-caption">{t("home.codeCaption")}</p>
                <pre><code>{t("home.codeSample")}</code></pre>
            </section>

            <section class="nx-advantages">
                <h2>{t("home.advTitle")}</h2>
                <div class="nx-grid">
                    <div class="nx-card">
                        <h3 class="nx-card-title">{t("home.adv1Title")}</h3>
                        <p>{t("home.adv1Body")}</p>
                    </div>
                    <div class="nx-card">
                        <h3 class="nx-card-title">{t("home.adv2Title")}</h3>
                        <p>{t("home.adv2Body")}</p>
                    </div>
                    <div class="nx-card">
                        <h3 class="nx-card-title">{t("home.adv3Title")}</h3>
                        <p>{t("home.adv3Body")}</p>
                    </div>
                    <div class="nx-card">
                        <h3 class="nx-card-title">{t("home.adv4Title")}</h3>
                        <p>{t("home.adv4Body")}</p>
                    </div>
                    <div class="nx-card">
                        <h3 class="nx-card-title">{t("home.adv5Title")}</h3>
                        <p>{t("home.adv5Body")}</p>
                    </div>
                    <div class="nx-card">
                        <h3 class="nx-card-title">{t("home.adv6Title")}</h3>
                        <p>{t("home.adv6Body")}</p>
                    </div>
                    <div class="nx-card">
                        <h3 class="nx-card-title">{t("home.adv7Title")}</h3>
                        <p>{t("home.adv7Body")}</p>
                    </div>
                    <div class="nx-card">
                        <h3 class="nx-card-title">{t("home.adv8Title")}</h3>
                        <p>{t("home.adv8Body")}</p>
                    </div>
                </div>
            </section>

            <section class="nx-story">
                <img src="/static/logo.svg" alt="Nexa" width="64" height="64" />
                <div>
                    <h2>{t("home.storyTitle")}</h2>
                    <p>{t("home.storyBody")}</p>
                </div>
            </section>
        </main>
    );
}
