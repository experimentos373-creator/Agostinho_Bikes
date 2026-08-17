import { useState, useEffect } from "react";
import { Cookie, Shield, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CookieConsent({ onOpenLegal }) {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("agostinho_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("agostinho_cookie_consent", "accepted");
    setIsVisible(false);
    
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted"
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("agostinho_cookie_consent", "declined");
    setIsVisible(false);
    
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied"
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-slide-up">
      <div className="bg-neutral-950/95 border border-neutral-800 backdrop-blur-xl rounded-3xl p-5 shadow-2xl text-left text-white relative">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2.5 bg-primary/10 border border-primary/20 rounded-2xl text-primary shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-extrabold uppercase text-xs tracking-wider text-white font-display">
                {language === "en" ? "Cookies & Privacy Policy (GDPR)" : "Política de Cookies & Privacidade (RGPD)"}
              </h4>
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
              Utilizamos cookies essenciais para garantir o correto funcionamento do site e métricas anónimas de tráfego. Pode aceitar todos os cookies ou gerir as suas preferências.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2 border-t border-neutral-900">
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto flex-1 bg-primary hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all cursor-pointer shadow-md text-center flex items-center justify-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Aceitar Todos</span>
          </button>
          
          <button
            onClick={handleDecline}
            className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-850 text-neutral-300 hover:text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all border border-neutral-800 cursor-pointer text-center"
          >
            Apenas Essenciais
          </button>

          <button
            onClick={() => onOpenLegal("cookies")}
            className="text-[10px] text-neutral-400 hover:text-primary transition-colors underline font-medium px-2 py-1 shrink-0"
          >
            Saber Mais
          </button>
        </div>
      </div>
    </div>
  );
}
