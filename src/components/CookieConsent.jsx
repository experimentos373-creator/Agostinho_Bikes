import React, { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("agostinho_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("agostinho_cookie_consent", "accepted");
    setVisible(false);
    if (window.loadAnalytics) window.loadAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem("agostinho_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-sm z-[9990] bg-neutral-950 text-white border border-neutral-800 rounded-2xl p-4 shadow-2xl animate-slide-up flex flex-col gap-3.5 text-left">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-base">🍪</span>
          <h4 className="text-xs font-black uppercase tracking-wider text-white">
            Cookies &amp; Privacidade
          </h4>
        </div>
        <p className="text-[11px] text-neutral-400 leading-relaxed">
          Utilizamos cookies para melhorar a sua experiência no site da <strong>Agostinho BIKES</strong>. Aceita o seu uso?
        </p>
      </div>

      <div className="flex gap-2 text-center">
        <button
          onClick={handleAccept}
          className="flex-1 bg-red-600 hover:bg-red-500 text-white font-black text-[10px] uppercase tracking-wider py-2 px-3 rounded-lg border-none transition-all cursor-pointer shadow-md hover:scale-[1.01] active:scale-99"
        >
          Aceitar
        </button>
        <button
          onClick={handleDecline}
          className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-bold text-[10px] uppercase tracking-wider py-2 px-3 rounded-lg border-none transition-all cursor-pointer"
        >
          Não
        </button>
      </div>
    </div>
  );
}
