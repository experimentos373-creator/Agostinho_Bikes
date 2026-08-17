import { useState, useEffect } from "react";
import { X, ShieldCheck, Cookie, Lock, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function LegalModals({ isOpen, initialTab = "privacy", onClose }) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overscroll-contain"
      onClick={onClose}
    >
      <div 
        className="bg-neutral-950 text-white border border-neutral-850 rounded-3xl w-full max-w-4xl h-[85vh] max-h-[85vh] shadow-2xl relative z-10 flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white p-2.5 rounded-full cursor-pointer transition-all border border-neutral-800 shadow-md group"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-neutral-900 bg-neutral-900/60 shrink-0 pr-16">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
              Agostinho BIKES • Conformidade Legal & RGPD (UE 2016/679)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-display">
            {activeTab === "privacy" ? "Política de Privacidade (RGPD)" : "Política de Cookies"}
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-neutral-900 bg-neutral-950 px-6 shrink-0 gap-6">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`py-4 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 border-b-2 cursor-pointer ${
              activeTab === "privacy"
                ? "border-primary text-white"
                : "border-transparent text-neutral-500 hover:text-neutral-300"
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Privacidade (RGPD)</span>
          </button>
          <button
            onClick={() => setActiveTab("cookies")}
            className={`py-4 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 border-b-2 cursor-pointer ${
              activeTab === "cookies"
                ? "border-primary text-white"
                : "border-transparent text-neutral-500 hover:text-neutral-300"
            }`}
          >
            <Cookie className="w-3.5 h-3.5" />
            <span>Política de Cookies</span>
          </button>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">
          {activeTab === "privacy" ? (
            <>
              {/* PRIVACY POLICY CONTENT */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wide font-display flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  1. Enquadramento e Responsável pelo Tratamento
                </h3>
                <p>
                  A <strong>Agostinho In, Lda.</strong> (operando sob a marca registada <strong>Agostinho BIKES</strong>), NIF com sede na Rua Principal N.º 373, 3105-214 Mata Mourisca, Pombal, distrito de Leiria, assume o compromisso de proteger a privacidade e os dados pessoais de todos os clientes e utilizadores do website <code>www.agostinhobikes.com</code>, em estrita conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD - Regulamento UE 2016/679) e a Lei n.º 58/2019.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wide font-display flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  2. Dados Pessoais Recolhidos e Finalidade
                </h3>
                <p>Recolhemos exclusivamente os dados necessários para responder às suas solicitações:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
                  <li><strong>Pedidos de Orçamento & Pedidos de Aluguer:</strong> Nome, contacto telefónico, endereço de e-mail e dados da bicicleta pretendida. Estes dados são processados para gerar cotações e enviá-las via WhatsApp/E-mail.</li>
                  <li><strong>Agendamento de Oficina & Diagnóstico E-Bike:</strong> Dados de identificação do proprietário e características da bicicleta para marcação técnica de oficina Bosch / DJI Avinox.</li>
                  <li><strong>Métricas de Navegação (Analytics):</strong> Dados anónimos de tráfego (anonymized IP) recolhidos através do Google Analytics 4 para medição do desempenho e melhoria da experiência de utilização.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wide font-display flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  3. Transmissão e Cedência a Terceiros
                </h3>
                <p>
                  A Agostinho BIKES <strong>não vende, cede ou comercializa</strong> dados pessoais a terceiros. Os seus dados apenas são comunicados quando estritamente necessário para o cumprimento de obrigações legais ou com o seu consentimento prévio (ex: redirecionamento seguro para a aplicação oficial WhatsApp para conclusão de orçamento).
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wide font-display flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  4. Direitos do Titular dos Dados
                </h3>
                <p>Nos termos da legislação aplicável, é garantido ao utilizador o direito de:</p>
                <ul className="list-disc pl-5 space-y-1 text-neutral-400">
                  <li>Aceder, retificar ou atualizar os seus dados pessoais;</li>
                  <li>Solicitar o apagamento total dos seus dados ("Direito ao Esquecimento");</li>
                  <li>Opor-se ao tratamento ou retirar o consentimento a qualquer momento;</li>
                  <li>Apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD - <code>www.cnpd.pt</code>).</li>
                </ul>
                <p className="pt-1">
                  Para exercer qualquer um destes direitos, contacte o nosso Encarregado de Proteção de Dados através do e-mail: <code>agostinho.in.lda@gmail.com</code> ou por carta registada enviada para a nossa morada em Pombal.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* COOKIES POLICY CONTENT */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wide font-display flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-primary" />
                  1. O que são Cookies?
                </h3>
                <p>
                  Cookies são pequenos ficheiros de texto guardados no seu navegador (browser) ao visitar o nosso website. Permitem reconhecer o seu dispositivo, guardar as suas preferências de idioma e garantir que a navegação é fluida e segura.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wide font-display flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-primary" />
                  2. Que Categorias de Cookies Utilizamos?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl">
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1 text-emerald-400">
                      ✔ Cookies Estritamente Necessários
                    </h4>
                    <p className="text-neutral-400 text-xs">
                      Essenciais para o funcionamento base do website, guardar preferências de idioma e seleções de privacidade. Não recolhem dados para fins de marketing.
                    </p>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl">
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1 text-amber-400">
                      ⚡ Cookies Analíticos (Google Analytics GA4)
                    </h4>
                    <p className="text-neutral-400 text-xs">
                      Permitem contabilizar o número de visitas e analisar a origem do tráfego. Todos os dados são processados de forma anónima (anonymizeIP ativo).
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wide font-display flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-primary" />
                  3. Gestão e Alteração do Consentimento
                </h3>
                <p>
                  Pode alterar as suas preferências de cookies ou retirar o consentimento a qualquer momento no banner inferior de definições do nosso website ou ajustando as definições do seu navegador.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-neutral-900/90 border-t border-neutral-850 shrink-0 flex justify-between items-center">
          <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
            Agostinho BIKES • Todos os direitos reservados
          </span>
          <button
            onClick={onClose}
            className="bg-primary hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl transition-all cursor-pointer shadow-md"
          >
            Entendido & Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
