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
                            <a class="tn-btn tn-btn-primary" href={`/${params.locale}/tutorial`}>{t("home.ctaTutorial")}</a>
                            <a class="tn-btn" href="https://github.com/oweeme/tutorial-nexa">{t("home.ctaGithub")}</a>
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

            <section class="nx-platforms">
                <p class="nx-kicker">{t("home.platformsKicker")}</p>
                <h2>{t("home.platformsTitle")}</h2>
                <p class="nx-platforms-sub">{t("home.platformsSubtitle")}</p>
                <div class="nx-platforms-grid">
                    <div class="nx-platform-card">
                        <svg class="nx-platform-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.4 2.6 3.6 5.7 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.7-3.6-9s1.2-6.4 3.6-9Z"></path></svg>
                        <h3>{t("home.platformWebTitle")}</h3>
                        <p>{t("home.platformWebBody")}</p>
                        <pre><code>{t("home.platformWebCode")}</code></pre>
                    </div>
                    <div class="nx-platform-card">
                        <svg class="nx-platform-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2.5" y="4" width="19" height="12.5" rx="1.2"></rect><path d="M8 20.5h8M12 16.5v4"></path></svg>
                        <h3>{t("home.platformDesktopTitle")}</h3>
                        <p>{t("home.platformDesktopBody")}</p>
                        <pre><code>{t("home.platformDesktopCode")}</code></pre>
                    </div>
                    <div class="nx-platform-card">
                        <svg class="nx-platform-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="2" width="12" height="20" rx="2"></rect><path d="M10.5 19h3"></path></svg>
                        <h3>{t("home.platformAndroidTitle")}</h3>
                        <p>{t("home.platformAndroidBody")}</p>
                        <pre><code>{t("home.platformAndroidCode")}</code></pre>
                    </div>
                    <div class="nx-platform-card">
                        <svg class="nx-platform-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="2" width="12" height="20" rx="2.5"></rect><circle cx="12" cy="18" r="0.9" fill="currentColor" stroke="none"></circle></svg>
                        <h3>{t("home.platformIosTitle")}</h3>
                        <p>{t("home.platformIosBody")}</p>
                        <pre><code>{t("home.platformIosCode")}</code></pre>
                    </div>
                </div>
                <a class="nx-platforms-cta" href={`/${params.locale}/tutorial/native`}>{t("home.platformsCta")}</a>
            </section>

            <section class="nx-advantages">
                <p class="nx-kicker nx-kicker-light">{t("home.featuresKicker")}</p>
                <h2>{t("home.advTitle")}</h2>
                <div class="nx-grid">
                    <div class="tn-feature">
                        <span class="tn-feature-num">01</span>
                        <h3 class="tn-feature-title">{t("home.adv1Title")}</h3>
                        <p>{t("home.adv1Body")}</p>
                    </div>
                    <div class="tn-feature">
                        <span class="tn-feature-num">02</span>
                        <h3 class="tn-feature-title">{t("home.adv2Title")}</h3>
                        <p>{t("home.adv2Body")}</p>
                    </div>
                    <div class="tn-feature">
                        <span class="tn-feature-num">03</span>
                        <h3 class="tn-feature-title">{t("home.adv3Title")}</h3>
                        <p>{t("home.adv3Body")}</p>
                    </div>
                    <div class="tn-feature">
                        <span class="tn-feature-num">04</span>
                        <h3 class="tn-feature-title">{t("home.adv4Title")}</h3>
                        <p>{t("home.adv4Body")}</p>
                    </div>
                    <div class="tn-feature">
                        <span class="tn-feature-num">05</span>
                        <h3 class="tn-feature-title">{t("home.adv5Title")}</h3>
                        <p>{t("home.adv5Body")}</p>
                    </div>
                    <div class="tn-feature">
                        <span class="tn-feature-num">06</span>
                        <h3 class="tn-feature-title">{t("home.adv6Title")}</h3>
                        <p>{t("home.adv6Body")}</p>
                    </div>
                    <div class="tn-feature">
                        <span class="tn-feature-num">07</span>
                        <h3 class="tn-feature-title">{t("home.adv7Title")}</h3>
                        <p>{t("home.adv7Body")}</p>
                    </div>
                    <div class="tn-feature">
                        <span class="tn-feature-num">08</span>
                        <h3 class="tn-feature-title">{t("home.adv8Title")}</h3>
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
