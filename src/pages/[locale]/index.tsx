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
                <div class="nx-hero-grid">
                    <div class="nx-hero-copy">
                        <p class="nx-kicker">{t("home.heroKicker")}</p>
                        <h1>{t("home.heroTitle")}</h1>
                        <p class="nx-hero-sub">{t("home.heroSubtitle")}</p>
                        <div class="nx-hero-ctas">
                            <a class="nx-btn nx-btn-primary" href={`/${params.locale}/tutorial`}>{t("home.ctaTutorial")}</a>
                            <a class="nx-btn" href="https://github.com/oweeme/tutorial-nexa">{t("home.ctaGithub")}</a>
                        </div>
                    </div>
                    <div class="nx-hero-panel">
                        <div class="nx-window">
                            <div class="nx-window-bar">
                                <span class="nx-dot nx-dot-r"></span>
                                <span class="nx-dot nx-dot-y"></span>
                                <span class="nx-dot nx-dot-g"></span>
                                <span class="nx-window-title">{t("home.heroCodeTitle")}</span>
                            </div>
                            <pre><code>{t("home.codeSample")}</code></pre>
                        </div>
                    </div>
                </div>
            </section>

            <section class="nx-stats">
                <div class="nx-stats-grid">
                    <div class="nx-stat">
                        <span class="nx-stat-num">{t("home.stat1Num")}</span>
                        <span class="nx-stat-label">{t("home.stat1Label")}</span>
                    </div>
                    <div class="nx-stat">
                        <span class="nx-stat-num">{t("home.stat2Num")}</span>
                        <span class="nx-stat-label">{t("home.stat2Label")}</span>
                    </div>
                    <div class="nx-stat">
                        <span class="nx-stat-num">{t("home.stat3Num")}</span>
                        <span class="nx-stat-label">{t("home.stat3Label")}</span>
                    </div>
                    <div class="nx-stat">
                        <span class="nx-stat-num">{t("home.stat4Num")}</span>
                        <span class="nx-stat-label">{t("home.stat4Label")}</span>
                    </div>
                </div>
            </section>

            <section class="nx-advantages">
                <p class="nx-kicker nx-kicker-light">{t("home.featuresKicker")}</p>
                <h2>{t("home.advTitle")}</h2>
                <div class="nx-grid">
                    <div class="nx-card">
                        <span class="nx-card-num">01</span>
                        <h3 class="nx-card-title">{t("home.adv1Title")}</h3>
                        <p>{t("home.adv1Body")}</p>
                    </div>
                    <div class="nx-card">
                        <span class="nx-card-num">02</span>
                        <h3 class="nx-card-title">{t("home.adv2Title")}</h3>
                        <p>{t("home.adv2Body")}</p>
                    </div>
                    <div class="nx-card">
                        <span class="nx-card-num">03</span>
                        <h3 class="nx-card-title">{t("home.adv3Title")}</h3>
                        <p>{t("home.adv3Body")}</p>
                    </div>
                    <div class="nx-card">
                        <span class="nx-card-num">04</span>
                        <h3 class="nx-card-title">{t("home.adv4Title")}</h3>
                        <p>{t("home.adv4Body")}</p>
                    </div>
                    <div class="nx-card">
                        <span class="nx-card-num">05</span>
                        <h3 class="nx-card-title">{t("home.adv5Title")}</h3>
                        <p>{t("home.adv5Body")}</p>
                    </div>
                    <div class="nx-card">
                        <span class="nx-card-num">06</span>
                        <h3 class="nx-card-title">{t("home.adv6Title")}</h3>
                        <p>{t("home.adv6Body")}</p>
                    </div>
                    <div class="nx-card">
                        <span class="nx-card-num">07</span>
                        <h3 class="nx-card-title">{t("home.adv7Title")}</h3>
                        <p>{t("home.adv7Body")}</p>
                    </div>
                    <div class="nx-card">
                        <span class="nx-card-num">08</span>
                        <h3 class="nx-card-title">{t("home.adv8Title")}</h3>
                        <p>{t("home.adv8Body")}</p>
                    </div>
                </div>
            </section>

            <section class="nx-story">
                <img src="/static/logo.svg" alt="Nexa" width="88" />
                <div>
                    <h2>{t("home.storyTitle")}</h2>
                    <p>{t("home.storyBody")}</p>
                </div>
            </section>
        </main>
    );
}
