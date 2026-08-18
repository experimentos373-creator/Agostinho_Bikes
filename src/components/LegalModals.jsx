import React from "react";
import { X } from "lucide-react";

export default function LegalModals({ activeModal, onClose }) {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white text-neutral-900 border border-neutral-200 rounded-3xl w-full max-w-2xl max-h-[85vh] shadow-2xl relative flex flex-col overflow-hidden animate-scale-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-900 bg-neutral-100 p-2 rounded-full border border-neutral-200 transition-colors z-20 cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto overscroll-contain text-left space-y-6">
          {activeModal === "privacy" ? (
            <>
              <h2 className="text-2xl font-black uppercase tracking-tight text-neutral-950 border-b pb-3">
                Política de Privacidade (RGPD)
              </h2>
              <p className="text-xs text-neutral-500 font-medium">
                Última atualização: 17 de Agosto de 2026
              </p>
              
              <div className="space-y-4 text-sm leading-relaxed text-neutral-700">
                <p>
                  A <strong>Agostinho BIKES</strong> (empresa detida por José António Silva Agostinho, com sede na Rua Principal N.º 373, Mata Mourisca, 3105-214 Pombal) está empenhada em proteger a privacidade dos seus clientes e utilizadores.
                </p>

                <h3 className="font-extrabold text-neutral-950 text-base uppercase tracking-tight mt-6">
                  1. Recolha de Dados Pessoais
                </h3>
                <p>
                  Recolhemos dados pessoais apenas quando nos contacta diretamente ou preenche os formulários de Pedido de Orçamento ou Marcação de Oficina no nosso site. Os dados recolhidos incluem:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Nome completo</li>
                  <li>Número de telefone ou telemóvel</li>
                  <li>Endereço de e-mail</li>
                  <li>Especificações e modelo da bicicleta</li>
                </ul>

                <h3 className="font-extrabold text-neutral-950 text-base uppercase tracking-tight mt-6">
                  2. Finalidade do Tratamento
                </h3>
                <p>
                  Os dados recolhidos destinam-se única e exclusivamente a dar resposta aos seus pedidos de orçamento, agendamento de serviços mecânicos de oficina, e comunicação comercial direta associada aos serviços prestados pela Agostinho BIKES.
                </p>

                <h3 className="font-extrabold text-neutral-950 text-base uppercase tracking-tight mt-6">
                  3. Partilha de Dados
                </h3>
                <p>
                  Garantimos que os seus dados <strong>nunca</strong> serão vendidos, alugados ou partilhados com terceiros para fins publicitários ou de marketing. A transmissão de dados só ocorre mediante imperativo legal ou no âmbito da comunicação por si iniciada (redirecionamento para o serviço WhatsApp).
                </p>

                <h3 className="font-extrabold text-neutral-950 text-base uppercase tracking-tight mt-6">
                  4. Direitos dos Titulares (RGPD)
                </h3>
                <p>
                  De acordo com o Regulamento Geral sobre a Proteção de Dados (Regulamento UE 2016/679), o utilizador tem o direito de aceder, retificar, limitar o tratamento ou exigir a eliminação definitiva dos seus dados pessoais guardados em qualquer altura. Para exercer estes direitos, por favor contacte-nos através do e-mail: <a href="mailto:agostinho.in.lda@gmail.com" className="text-red-600 font-bold hover:underline">agostinho.in.lda@gmail.com</a>.
                </p>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-black uppercase tracking-tight text-neutral-950 border-b pb-3">
                Política de Cookies
              </h2>
              <p className="text-xs text-neutral-500 font-medium">
                Última atualização: 17 de Agosto de 2026
              </p>

              <div className="space-y-4 text-sm leading-relaxed text-neutral-700">
                <p>
                  O site da <strong>Agostinho BIKES</strong> utiliza cookies para melhorar o desempenho e a sua experiência como utilizador.
                </p>

                <h3 className="font-extrabold text-neutral-950 text-base uppercase tracking-tight mt-6">
                  1. O que são Cookies?
                </h3>
                <p>
                  Cookies são pequenos ficheiros de texto armazenados no seu computador ou dispositivo móvel através do navegador de internet (browser) que guardam informação relacionada com as suas preferências, não incluindo os seus dados pessoais.
                </p>

                <h3 className="font-extrabold text-neutral-950 text-base uppercase tracking-tight mt-6">
                  2. Cookies que Utilizados no Site
                </h3>
                <div className="space-y-3">
                  <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                    <p className="font-bold text-neutral-950 text-xs uppercase tracking-wider mb-1">
                      Cookies Estritamente Necessários (Essenciais)
                    </p>
                    <p className="text-xs text-neutral-600">
                      Permitem a navegação no website e a utilização das suas opções básicas, tais como guardar as preferências de consentimento de privacidade. O site não funciona corretamente sem estes cookies.
                    </p>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                    <p className="font-bold text-neutral-950 text-xs uppercase tracking-wider mb-1">
                      Cookies Analíticos (Google Analytics)
                    </p>
                    <p className="text-xs text-neutral-600">
                      Utilizados para efeitos de criação e análise estatística de visitas, permitindo-nos perceber como os utilizadores navegam pelas páginas e melhorar continuamente a performance do site.
                    </p>
                  </div>
                </div>

                <h3 className="font-extrabold text-neutral-950 text-base uppercase tracking-tight mt-6">
                  3. Como Gerir ou Desativar os Cookies
                </h3>
                <p>
                  Pode alterar as suas preferências de consentimento a qualquer momento no banner inferior do site ou configurar o seu browser para recusar a instalação de cookies. Note que desativar cookies essenciais poderá impedir o funcionamento de certas funcionalidades do website.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
