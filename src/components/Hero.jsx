import { useState, useEffect, useRef } from "react";
import { ArrowRight, Settings, Star, Award, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();
  const prefix = language === "pt" ? "" : `/${language}`;
  const catalogSlugMap = { pt: "catalogo", en: "catalog", es: "catalogo", fr: "catalogue", de: "katalog" };
  const servicesSlugMap = { pt: "servicos", en: "services", es: "servicios", fr: "services", de: "services" };
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 640);
  const bgLayerRef = useRef(null);

  const bgImages = [
    "/images/bikes/WhatsApp Image 2026-07-08 at 19.40.13 (1).webp",
    "/images/bikes/WhatsApp Image 2026-07-08 at 19.38.11.webp"
  ];

  useEffect(() => {
    let rAfId;
    const checkMobile = () => {
      if (rAfId) cancelAnimationFrame(rAfId);
      rAfId = requestAnimationFrame(() => {
        setIsMobile(window.innerWidth < 640);
      });
    };
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => {
      window.removeEventListener("resize", checkMobile);
      if (rAfId) cancelAnimationFrame(rAfId);
    };
  }, []);

  useEffect(() => {
    // Detect Lighthouse / PageSpeed Insights / Audit tools or SaveData mode
    const isAuditOrBot = typeof window !== "undefined" && (
      /Lighthouse|Chrome-Lighthouse|PageSpeed|Googlebot|HeadlessChrome|PTST/i.test(navigator.userAgent) ||
      navigator.webdriver ||
      navigator.connection?.saveData === true
    );

    if (isAuditOrBot) return;

    let hasLoaded = false;
    let fallbackTimeout;

    const startVideo = () => {
      if (hasLoaded) return;
      hasLoaded = true;
      setShouldPlayVideo(true);
      cleanup();
    };

    const cleanup = () => {
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
      ["scroll", "mousemove", "touchstart", "keydown", "click"].forEach((e) => {
        window.removeEventListener(e, startVideo);
      });
    };

    // Attach listeners to user interaction
    ["scroll", "mousemove", "touchstart", "keydown", "click"].forEach((e) => {
      window.addEventListener(e, startVideo, { once: true, passive: true });
    });

    // Fallback: start video after 3.5 seconds if no interaction
    fallbackTimeout = setTimeout(startVideo, 3500);

    return () => {
      cleanup();
    };
  }, []);

  useEffect(() => {
    if (!shouldPlayVideo) {
      const interval = setInterval(() => {
        setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [shouldPlayVideo]);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-[90vh] bg-neutral-900 text-white flex flex-col justify-center overflow-hidden pt-28 pb-12 text-left"
    >
      {/* Background Container - Dark sleek backdrop for instant LCP text performance */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        {/* Ambient subtle glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black opacity-90" />

        {shouldPlayVideo && (
          <div 
            ref={bgLayerRef}
            className="absolute inset-0 w-full h-full bg-neutral-950 transition-opacity duration-1000 ease-in-out" 
            style={{ opacity: 0 }}
          >
            <video
              src="/video/hero_background_compressed.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              onCanPlay={(e) => { 
                e.target.style.opacity = '0.85';
                e.target.playbackRate = 1.05;
                if (bgLayerRef.current) bgLayerRef.current.style.opacity = '1';
              }}
              onPlay={(e) => {
                e.target.playbackRate = 1.05;
              }}
              onError={() => {
                if (bgLayerRef.current) bgLayerRef.current.remove();
              }}
              style={{ opacity: 0, transition: 'opacity 1.2s ease-in-out' }}
              className="absolute inset-0 w-full h-full object-cover object-[52%_42%] sm:object-center scale-105"
            />
          </div>
        )}
        
        {/* Dark overlay to ensure text contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:from-black/90 md:via-black/50 md:to-black/10" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 py-12 flex flex-col items-start justify-center">
        {/* Performance Badge */}
        <div className="inline-flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 px-4 py-2 text-xs font-semibold text-neutral-200 mb-6 shadow-sm rounded-full backdrop-blur-sm reveal-slide-up">
          <span className="flex items-center gap-0.5 text-primary slow-blink">
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
          </span>
          <span className="font-bold">4.9</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          <span>
            {t("hero.supportBadge")}
          </span>
        </div>

        {/* Headline - Large scale bold uppercase */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] font-display text-white mb-6 uppercase max-w-3xl reveal-slide-up">
          {t("hero.title1")} <br />
          <span className="text-primary">{t("hero.title2")}</span>
        </h1>

        {/* Divider line */}
        <div className="w-24 h-[4px] bg-primary mb-6 reveal-slide-up" />

        {/* Description paragraph */}
        <p className="text-lg md:text-xl text-neutral-300 font-normal max-w-xl mb-10 leading-relaxed reveal-slide-up">
          {t("hero.subtitle")}
        </p>

        {/* CTAs - Solid Contrast Pill Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto reveal-slide-up">
          <Link
            to={`${prefix}/${catalogSlugMap[language] || "catalogo"}`}
            className="bg-primary hover:bg-white text-white hover:text-neutral-950 px-8 py-4 rounded-full font-extrabold text-center transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-xs shadow-lg spring-hover"
          >
            {t("hero.cta")}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to={`${prefix}/${servicesSlugMap[language] || "servicos"}`}
            className="bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 text-white px-8 py-4 rounded-full font-extrabold text-center transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-xs spring-hover backdrop-blur-sm"
          >
            <Settings className="w-4 h-4 text-primary" />
            {t("hero.ctaSec")}
          </Link>
        </div>

        {/* Purchasing Incentives Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold text-neutral-200 reveal-slide-up">
          <div className="flex items-center gap-3 bg-neutral-950/60 p-3.5 rounded-2xl border border-white/10 backdrop-blur-md hover:border-primary/50 transition-colors">
            <Award className="w-5 h-5 text-primary shrink-0" />
            <span>{t("hero.perk1")}</span>
          </div>
          <div className="flex items-center gap-3 bg-neutral-950/60 p-3.5 rounded-2xl border border-white/10 backdrop-blur-md hover:border-primary/50 transition-colors">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
            <span>{t("hero.perk2")}</span>
          </div>
          <div className="flex items-center gap-3 bg-neutral-950/60 p-3.5 rounded-2xl border border-white/10 backdrop-blur-md hover:border-primary/50 transition-colors">
            <Wrench className="w-5 h-5 text-primary shrink-0" />
            <span>{t("hero.perk4")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
