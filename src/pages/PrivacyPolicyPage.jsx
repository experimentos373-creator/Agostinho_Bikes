import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin, Lock, FileText, UserCheck, AlertCircle, Laptop } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function PrivacyPolicyPage() {
  const { language, prefix } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = language === "en" 
      ? "Privacy Policy | Agostinho BIKES" 
      : language === "es"
      ? "Política de Privacidad | Agostinho BIKES"
      : language === "fr"
      ? "Politique de Confidentialité | Agostinho BIKES"
      : language === "de"
      ? "Datenschutzerklärung | Agostinho BIKES"
      : "Política de Privacidade | Agostinho BIKES";
  }, [language]);

  return (
    <div className="bg-[#FCFBFA] text-neutral-900 min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Breadcrumb / Back button */}
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
            <ShieldCheck className="w-4 h-4" />
            <span>RGPD / Regulamento (UE) 2016/679 & Lei n.º 58/2019</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight text-neutral-950 mb-4">
            {language === "en" ? "Privacy Policy" : "Política de Privacidade"}
          </h1>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            {language === "en" 
              ? "Agostinho BIKES is committed to protecting your personal data in strict compliance with the General Data Protection Regulation (GDPR) and applicable Portuguese legislation."
              : "A Agostinho BIKES está empenhada em proteger a sua privacidade e os seus dados pessoais, em estrito cumprimento do Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento UE 2016/679) e da Lei n.º 58/2019 de 8 de agosto."}
          </p>
          <div className="mt-6 pt-6 border-t border-neutral-100 flex flex-wrap gap-4 text-xs text-neutral-500">
            <span><strong>{language === "en" ? "Last updated:" : "Última atualização:"}</strong> Agosto de 2026</span>
            <span>•</span>
            <span><strong>{language === "en" ? "Entity:" : "Entidade:"}</strong> Agostinho BIKES</span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-neutral-700 text-sm md:text-base leading-relaxed">
          
          {/* Section 1: Responsible Entity & Technical Management */}
          <section className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <UserCheck className="w-5 h-5 text-red-600" />
              <h2>1. Responsável pelo Tratamento e Gestão da Plataforma</h2>
            </div>
            <p className="mb-4">
              A presente plataforma digital articula duas entidades com funções e responsabilidades distintas:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200/60 space-y-2">
                <div className="flex items-center gap-2 font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  <UserCheck className="w-4 h-4 text-red-600" />
                  <span>Entidade Comercial (Destinatária)</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  <strong>Agostinho BIKES</strong> (empresa detida por José António Silva Agostinho). Entidade a quem se destinam as solicitações comerciais, pedidos de orçamento, compra e agendamento de serviços mecânicos de oficina.
                </p>
                <div className="pt-2 text-xs text-neutral-600 space-y-1">
                  <div><strong>Sede:</strong> {config.address.street}, {config.address.postalCode} Mata Mourisca, Pombal</div>
                  <div><strong>Telefone:</strong> <a href={`tel:${config.telephone}`} className="text-red-600 font-bold">{config.telephoneDisplay}</a></div>
                  <div><strong>E-mail:</strong> <a href={`mailto:${config.email}`} className="text-red-600 font-bold">{config.email}</a></div>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200/60 space-y-2">
                <div className="flex items-center gap-2 font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  <Laptop className="w-4 h-4 text-red-600" />
                  <span>Operação Técnica & Alojamento</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  <strong>P&D Agency</strong>. Entidade desenvolvedora e titular dos direitos técnicos e infraestrutura de alojamento da plataforma digital, garantindo a segurança de software, encriptação HTTPS e proteção contra ataques informáticos.
                </p>
                <div className="pt-2 text-xs text-neutral-600">
                  <div><strong>Website:</strong> <a href="https://p-d-agency.vercel.app" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold underline">p-d-agency.vercel.app</a></div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Data Collected */}
          <section className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <FileText className="w-5 h-5 text-red-600" />
              <h2>2. Dados Pessoais Recolhidos e Finalidades</h2>
            </div>
            <p className="mb-4">
              Recolhemos apenas os dados estritamente necessários para responder às suas solicitações e garantir a prestação de serviços de excelência:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Formulários de Pedido de Orçamento e Marcação de Oficina:</strong> Nome completo, número de telefone/telemóvel, endereço de e-mail, modelo ou especificações da bicicleta (BTT, E-Bike, Estrada) e descrição do serviço pretendido.
              </li>
              <li>
                <strong>Comunicação Direta via WhatsApp / Telefone:</strong> Número de contacto e histórico de conversação referente ao suporte, aquisição de componentes ou agendamento de reparações.
              </li>
              <li>
                <strong>Dados de Navegação Estatística:</strong> Informações agregadas sobre páginas visitadas e tempo de sessão (via Google Analytics com IP anonimizado), utilizadas unicamente para estatística e melhoria do website.
              </li>
            </ul>
          </section>

          {/* Section 3: Legal Basis */}
          <section className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <Lock className="w-5 h-5 text-red-600" />
              <h2>3. Fundamento Jurídico do Tratamento</h2>
            </div>
            <p className="mb-3">Os dados pessoais são tratados com base nos seguintes fundamentos:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Diligências pré-contratuais e execução de contrato:</strong> Para envio de orçamentos, montagem de bicicletas personalizadas, aquisição de peças e intervenções mecânicas de oficina.</li>
              <li><strong>Consentimento:</strong> Fornecido explicitamente pelo utilizador ao submeter os formulários de contacto ou ao aceitar cookies no website.</li>
              <li><strong>Cumprimento de obrigações legais:</strong> Emissão de faturas e cumprimento de prazos de garantia oficial das marcas representadas (Mondraker, Bosch, Shimano, etc.).</li>
            </ul>
          </section>

          {/* Section 4: Data Sharing */}
          <section className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <ShieldCheck className="w-5 h-5 text-red-600" />
              <h2>4. Partilha e Conservação de Dados</h2>
            </div>
            <p className="mb-3">
              <strong>Não vendemos nem cedemos os seus dados pessoais a terceiros para fins de marketing ou publicidade.</strong> Os dados apenas poderão ser transmitidos a:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Parceiros logísticos estritamente para efeitos de entrega de encomendas de bicicletas ou acessórios;</li>
              <li>Autoridades fiscais ou judiciais quando exigido por lei.</li>
            </ul>
            <p>
              Os dados são conservados pelo período necessário para a finalidade a que se destinam ou pelos prazos legais obrigatórios (como a conservação de faturas de compra e venda por 10 anos).
            </p>
          </section>

          {/* Section 5: User Rights */}
          <section className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <h2>5. Os Seus Direitos (RGPD)</h2>
            </div>
            <p className="mb-3">Enquanto titular dos dados, tem o direito de, a qualquer momento e gratuitamente:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Aceder</strong> aos seus dados pessoais e obter confirmação sobre o seu tratamento;</li>
              <li><strong>Retificar</strong> dados inexatos ou incompletos;</li>
              <li><strong>Solicitar o apagamento</strong> dos seus dados («direito a ser esquecido»), desde que não colida com obrigações legais;</li>
              <li><strong>Limitar ou opor-se</strong> ao tratamento dos seus dados;</li>
              <li><strong>Revogar o consentimento</strong> previamente prestado;</li>
              <li><strong>Reclamar</strong> junto da autoridade de controlo em Portugal: <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong> (<a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-red-600 underline font-bold">www.cnpd.pt</a>).</li>
            </ul>
            <p className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs md:text-sm">
              Para exercer qualquer um destes direitos, basta enviar um pedido por escrito para <a href={`mailto:${config.email}`} className="text-red-600 font-bold">{config.email}</a> ou por correio para a nossa loja e oficina na Mata Mourisca, Pombal.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
