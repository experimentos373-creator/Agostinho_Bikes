import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CookieConsent() {
  const { language, prefix } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("agostinho_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("agostinho_cookie_consent", "all");
    setIsVisible(false);
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted"
      });
    }
    if (window.loadAnalytics) window.loadAnalytics();
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("agostinho_cookie_consent", "essential");
    setIsVisible(false);
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied"
      });
    }
  };

  if (!isVisible) return null;

  const privacyPath = prefix ? `${prefix}/politica-privacidade` : "/politica-privacidade";
  const cookiePath = prefix ? `${prefix}/politica-cookies` : "/politica-cookies";

  return (
    <aside 
      aria-label="Consentimento de Cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[9990] bg-neutral-950/95 backdrop-blur-md border border-neutral-800 text-white p-5 rounded-2xl shadow-2xl animate-fade-in"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 bg-red-600/20 text-red-500 rounded-xl shrink-0 mt-0.5">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1 pr-2">
          <h3 className="text-sm font-bold font-display uppercase tracking-wider text-white flex items-center gap-1.5">
            <span>{language === "en" ? "Cookie Preferences" : "Privacidade & Cookies"}</span>
          </h3>
          <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
            {language === "en"
              ? "We use cookies to ensure optimal website operation and anonymously analyze traffic."
              : "Utilizamos cookies para assegurar o funcionamento correto da página e recolher estatísticas anónimas."}
          </p>
        </div>
        <button
          onClick={handleAcceptEssential}
          className="text-neutral-500 hover:text-white transition-colors cursor-pointer p-1"
          aria-label="Fechar banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-3 text-[11px] text-neutral-400 mb-4 pl-1">
        <Link to={privacyPath} className="underline hover:text-red-500 transition-colors">
          {language === "en" ? "Privacy Policy" : "Política de Privacidade"}
        </Link>
        <span>•</span>
        <Link to={cookiePath} className="underline hover:text-red-500 transition-colors">
          {language === "en" ? "Cookie Policy" : "Política de Cookies"}
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-1">
        <button
          onClick={handleAcceptEssential}
          className="w-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 font-bold text-xs uppercase tracking-wider py-2.5 px-3 rounded-xl transition-colors cursor-pointer text-center"
        >
          {language === "en" ? "Essential Only" : "Só Necessários"}
        </button>
        <button
          onClick={handleAcceptAll}
          className="w-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-3 rounded-xl transition-colors cursor-pointer shadow-md text-center"
        >
          {language === "en" ? "Accept All" : "Aceitar Todos"}
        </button>
      </div>
    </aside>
  );
}
