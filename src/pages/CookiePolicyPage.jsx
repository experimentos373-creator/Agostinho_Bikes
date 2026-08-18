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
      ? "Cookie Policy | Agostinho BIKES" 
      : language === "es"
      ? "Política de Cookies | Agostinho BIKES"
      : language === "fr"
      ? "Politique des Cookies | Agostinho BIKES"
      : language === "de"
      ? "Cookie-Richtlinie | Agostinho BIKES"
      : "Política de Cookies | Agostinho BIKES";
  }, [language]);

  const resetCookies = () => {
    localStorage.removeItem("agostinho_cookie_consent");
    window.location.reload();
  };

  return (
    <div className="bg-[#FCFBFA] text-neutral-900 min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to={prefix || "/"} 
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-500 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === "en" ? "Back to Home" : "Voltar ao Início"}</span>
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white border border-neutral-200/80 rounded-2xl p-8 md:p-12 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-600 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Cookie className="w-4 h-4" />
            <span>Diretiva de Privacidade e Comunicações Eletrónicas</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight text-neutral-950 mb-4">
            {language === "en" ? "Cookie Policy" : "Política de Cookies"}
          </h1>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            {language === "en"
              ? "This website uses cookies and similar technologies to ensure optimal functionality, remember your preferences, and anonymously analyze site traffic."
              : "O website da Agostinho BIKES utiliza cookies e tecnologias similares para assegurar o correto funcionamento da página, memorizar as suas preferências e analisar estatísticas anónimas de tráfego."}
          </p>
          <div className="mt-6 pt-6 border-t border-neutral-100 flex flex-wrap gap-4 text-xs text-neutral-500">
            <span><strong>{language === "en" ? "Last updated:" : "Última atualização:"}</strong> Agosto de 2026</span>
            <span>•</span>
            <span><strong>{language === "en" ? "Domain:" : "Domínio:"}</strong> {config.domain}</span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-neutral-700 text-sm md:text-base leading-relaxed">
          
          {/* Section 1: What are cookies */}
          <section className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <Shield className="w-5 h-5 text-red-600" />
              <h2>1. O que são Cookies?</h2>
            </div>
            <p className="mb-3">
              Cookies são pequenos ficheiros de texto guardados no seu navegador de internet ou dispositivo móvel quando visita o nosso website. Permitem reconhecer o seu dispositivo em visitas futuras, manter as suas preferências de navegação (como idioma e filtros do catálogo) e garantir um carregamento rápido e seguro.
            </p>
            <p>
              Os cookies não acedem a ficheiros privados do seu computador nem contêm vírus ou software malicioso.
            </p>
          </section>

          {/* Section 2: Types of Cookies */}
          <section className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <Settings className="w-5 h-5 text-red-600" />
              <h2>2. Que Tipos de Cookies Utilizamos?</h2>
            </div>
            
            <div className="space-y-6">
              
              {/* Essential Cookies */}
              <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50/70">
                <div className="flex items-center gap-2 text-neutral-950 font-bold text-base mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <h3>Cookies Estritamente Necessários (Essenciais)</h3>
                </div>
                <p className="text-xs md:text-sm text-neutral-600 mb-3">
                  Indispensáveis para a navegação básica, funcionamento dos formulários e gravação das escolhas de privacidade e idioma (PT, EN, ES, FR, DE). Não podem ser desativados sem comprometer a utilização do website.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-neutral-200 bg-white">
                    <thead className="bg-neutral-100 font-bold text-neutral-800">
                      <tr>
                        <th className="p-2.5 border-b">Nome</th>
                        <th className="p-2.5 border-b">Finalidade</th>
                        <th className="p-2.5 border-b">Duração</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2.5 font-mono text-red-600 font-bold">agostinho_cookie_consent</td>
                        <td className="p-2.5">Armazena a sua opção de consentimento de cookies</td>
                        <td className="p-2.5">1 ano</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-mono text-red-600 font-bold">preferred_language</td>
                        <td className="p-2.5">Memoriza o idioma selecionado</td>
                        <td className="p-2.5">Sessão</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50/70">
                <div className="flex items-center gap-2 text-neutral-950 font-bold text-base mb-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  <h3>Cookies Analíticos e de Desempenho (Opcionais)</h3>
                </div>
                <p className="text-xs md:text-sm text-neutral-600 mb-3">
                  Permitem monitorizar anonimamente o tráfego do website (ex.: páginas mais visitadas, modelos mais consultados no catálogo de bicicletas) através do <strong>Google Analytics (GA4)</strong>. Os endereços IP são anonimizados.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-neutral-200 bg-white">
                    <thead className="bg-neutral-100 font-bold text-neutral-800">
                      <tr>
                        <th className="p-2.5 border-b">Nome</th>
                        <th className="p-2.5 border-b">Fornecedor</th>
                        <th className="p-2.5 border-b">Finalidade</th>
                        <th className="p-2.5 border-b">Duração</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2.5 font-mono text-neutral-800 font-bold">_ga</td>
                        <td className="p-2.5">Google Analytics</td>
                        <td className="p-2.5">Distingue utilizadores únicos de forma anónima</td>
                        <td className="p-2.5">2 anos</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-mono text-neutral-800 font-bold">_ga_*</td>
                        <td className="p-2.5">Google Analytics</td>
                        <td className="p-2.5">Mantém o estado da sessão estatística</td>
                        <td className="p-2.5">2 anos</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </section>

          {/* Section 3: Manage Cookies */}
          <section className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <h2>3. Como Gerir ou Revogar o Consentimento</h2>
            </div>
            <p className="mb-4">
              Pode alterar as suas preferências a qualquer momento clicando no botão abaixo:
            </p>
            <div className="mb-6">
              <button
                onClick={resetCookies}
                className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors cursor-pointer shadow-sm"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Redefinir Preferências de Cookies</span>
              </button>
            </div>
            <p className="text-xs md:text-sm text-neutral-600">
              Também pode configurar o seu navegador (Chrome, Safari, Firefox, Edge) para bloquear ou eliminar cookies a qualquer momento nas respetivas definições de privacidade.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
