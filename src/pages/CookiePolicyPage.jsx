import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, ArrowLeft, CheckCircle2, Shield, Settings, AlertCircle, RefreshCw } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function CookiePolicyPage() {
  const { language, prefix } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = language === "en" 
      ? "Cookie & Local Storage Policy | Agostinho BIKES" 
      : language === "es"
      ? "Política de Cookies y Almacenamiento | Agostinho BIKES"
      : language === "fr"
      ? "Politique des Cookies | Agostinho BIKES"
      : language === "de"
      ? "Cookie-Richtlinie | Agostinho BIKES"
      : "Política de Cookies e Armazenamento Local | Agostinho BIKES";
  }, [language]);

  const resetCookies = () => {
    localStorage.removeItem("agostinho_cookie_consent");
    window.location.reload();
  };

  const backLink = prefix || "/";

  return (
    <div className="bg-[#FCFBFA] text-neutral-900 min-h-screen pt-28 pb-20 text-left font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to={backLink} 
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-500 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === "en" ? "Back to Home" : "Voltar ao Início"}</span>
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white border border-neutral-200/80 rounded-3xl p-8 md:p-12 shadow-sm mb-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2.5 h-full bg-red-600" />
          
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-red-100">
            <Cookie className="w-4 h-4" />
            <span>Diretiva de Privacidade e Comunicações Eletrónicas (ePrivacy)</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight text-neutral-950 mb-4">
            {language === "en" ? "Cookie & Local Storage Policy" : "Política de Cookies e Armazenamento Local"}
          </h1>

          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
            {language === "en"
              ? "This website uses strictly necessary local storage technologies to ensure website functionality, save your language preference, and remember informational notice status."
              : "O website da Agostinho BIKES respeita a privacidade dos utilizadores, recorrendo exclusivamente a tecnologias de armazenamento local estritamente necessárias para a navegação, memorização de idioma e gestão do aviso informativo."}
          </p>

          <div className="mt-6 pt-6 border-t border-neutral-100 flex flex-wrap gap-4 text-xs text-neutral-500">
            <span><strong>Última atualização:</strong> Agosto de 2026</span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-neutral-700 text-sm md:text-base leading-relaxed">
          
          {/* Section 1: What are cookies & local storage */}
          <section className="bg-white border border-neutral-200/80 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <Shield className="w-5 h-5 text-red-600" />
              <h2>1. O que são Cookies e Armazenamento Local (LocalStorage)?</h2>
            </div>
            <p className="mb-3 text-xs md:text-sm">
              Cookies e chaves de armazenamento local (<em>localStorage</em>) são pequenos registos técnicos guardados no seu navegador para garantir uma navegação fluida e preservar escolhas básicas (como o idioma de navegação).
            </p>
            <p className="text-xs md:text-sm text-neutral-600">
              <strong>Este website não utiliza cookies de publicidade direcionada, píxeis de terceiros ou perfis de rastreamento comportamental.</strong>
            </p>
          </section>

          {/* Section 2: Technologies Used */}
          <section className="bg-white border border-neutral-200/80 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <Settings className="w-5 h-5 text-red-600" />
              <h2>2. Tecnologias Efetivamente Utilizadas</h2>
            </div>
            
            <div className="space-y-6">
              
              <div className="border border-neutral-200/80 rounded-2xl p-5 bg-[#FAF9F6]">
                <div className="flex items-center gap-2 text-neutral-950 font-bold text-base mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <h3>Armazenamento Estritamente Necessário (Essencial)</h3>
                </div>
                <p className="text-xs md:text-sm text-neutral-600 mb-3">
                  Tecnologias indispensáveis para disponibilizar as funcionalidades básicas da plataforma digital.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-neutral-200 bg-white">
                    <thead className="bg-[#FAF9F6] font-bold text-neutral-900">
                      <tr>
                        <th className="p-2.5 border-b border-neutral-200">Identificador</th>
                        <th className="p-2.5 border-b border-neutral-200">Tecnologia</th>
                        <th className="p-2.5 border-b border-neutral-200">Finalidade Concreta</th>
                        <th className="p-2.5 border-b border-neutral-200">Duração</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-200">
                        <td className="p-2.5 font-mono text-red-600 font-bold">agostinho_language</td>
                        <td className="p-2.5">LocalStorage</td>
                        <td className="p-2.5">Memoriza o idioma selecionado pelo utilizador</td>
                        <td className="p-2.5">Persistente</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-mono text-red-600 font-bold">agostinho_cookie_consent</td>
                        <td className="p-2.5">LocalStorage</td>
                        <td className="p-2.5">Regista a leitura e fecho do aviso informativo de privacidade</td>
                        <td className="p-2.5">1 ano</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </section>

          {/* Section 3: Reset Preferences */}
          <section className="bg-white border border-neutral-200/80 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <h2>3. Como Gerir ou Limpar as Preferências</h2>
            </div>
            <p className="mb-4 text-xs md:text-sm">
              Pode limpar as preferências guardadas no seu navegador a qualquer momento clicando no botão abaixo:
            </p>
            <div className="mb-6">
              <button
                onClick={resetCookies}
                className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors cursor-pointer shadow-sm"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Limpar Preferências Guardadas</span>
              </button>
            </div>
            <p className="text-xs text-neutral-500">
              Também pode configurar o seu navegador (Chrome, Safari, Firefox, Edge) para bloquear ou eliminar cookies e dados locais nas opções de privacidade do seu dispositivo.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
