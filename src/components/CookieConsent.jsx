import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, Check, X } from "lucide-react";
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

    const handleReset = () => {
      localStorage.removeItem("agostinho_cookie_consent");
      setIsVisible(true);
    };

    window.addEventListener("reset_cookie_consent", handleReset);
    return () => window.removeEventListener("reset_cookie_consent", handleReset);
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem("agostinho_cookie_consent", "acknowledged");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const privacyPath = prefix ? `${prefix}/politica-privacidade` : "/politica-privacidade";
  const cookiePath = prefix ? `${prefix}/politica-cookies` : "/politica-cookies";

  return (
    <aside 
      aria-label="Aviso de Privacidade e Armazenamento Local"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[9990] bg-neutral-950/95 backdrop-blur-md border border-neutral-800 text-white p-5 rounded-2xl shadow-2xl animate-fade-in text-left font-sans"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 bg-red-600/20 text-red-500 rounded-xl shrink-0 mt-0.5">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1 pr-2">
          <h3 className="text-sm font-bold font-display uppercase tracking-wider text-white flex items-center gap-1.5">
            <span>{language === "en" ? "Privacy & Local Storage" : "Privacidade & Armazenamento"}</span>
          </h3>
          <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
            {language === "en"
              ? "This website uses strictly necessary local storage for its operation, including saving your language preference and your interaction with this notice. We do not use behavioral advertising cookies or tracking tools to profile visitors."
              : "Este website utiliza armazenamento local estritamente necessário para o seu funcionamento, incluindo para memorizar a preferência de idioma e a interação com este aviso. Não utilizamos cookies de publicidade comportamental ou ferramentas de rastreamento para criar perfis de navegação."}
          </p>
        </div>
        <button
          onClick={handleAcknowledge}
          className="text-neutral-500 hover:text-white transition-colors cursor-pointer p-1"
          aria-label="Fechar aviso"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2 text-[11px] text-neutral-400 pl-1">
          <Link to={cookiePath} className="underline hover:text-red-400 transition-colors">
            {language === "en" ? "Cookie Policy" : "Política de Cookies"}
          </Link>
          <span>•</span>
          <Link to={privacyPath} className="underline hover:text-red-400 transition-colors">
            {language === "en" ? "Privacy" : "Privacidade"}
          </Link>
        </div>

        <button
          onClick={handleAcknowledge}
          className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-2 px-5 rounded-xl transition-all cursor-pointer shadow-md text-center flex items-center gap-1.5 active:scale-95"
        >
          <Check className="w-3.5 h-3.5" />
          <span>{language === "en" ? "Understood" : "Entendido"}</span>
        </button>
      </div>
    </aside>
  );
}
