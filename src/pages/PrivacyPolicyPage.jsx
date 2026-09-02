import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Lock, 
  FileText, 
  UserCheck, 
  AlertCircle, 
  Laptop, 
  Globe, 
  KeyRound,
  CheckCircle2,
  Layers,
  Scale,
  Bike
} from "lucide-react";
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

  const backLink = prefix || "/";

  return (
    <div className="bg-[#FCFBFA] text-neutral-900 min-h-screen pt-28 pb-20 text-left font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
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

        {/* Header Card (Layer 1 - Summary & Commitment) */}
        <div className="bg-white border border-neutral-200/80 rounded-3xl p-8 md:p-12 shadow-sm mb-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2.5 h-full bg-red-600" />
          
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-red-100">
            <ShieldCheck className="w-4 h-4" />
            <span>Regulamento (UE) 2016/679 (RGPD) & Lei n.º 58/2019</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight text-neutral-950 mb-4">
            {language === "en" ? "Privacy Policy" : "Política de Privacidade"}
          </h1>

          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-3xl font-normal">
            O website da Agostinho BIKES (agostinhobikes.com) encontra-se estruturado de acordo com os princípios de transparência e proteção de dados do RGPD (Regulamento UE 2016/679) e da Lei n.º 58/2019, refletindo com rigor os tratamentos de dados identificados na presente presença digital. A presente política descreve de forma clara as finalidades, bases jurídicas, salvaguardas e direitos dos titulares dos dados.
          </p>

          <div className="mt-6 pt-6 border-t border-neutral-100 flex flex-wrap gap-4 text-xs text-neutral-500">
            <span><strong>Última atualização:</strong> Agosto de 2026</span>
            <span>•</span>
            <span><strong>Entidade:</strong> Agostinho & Inácio Lda. (Agostinho BIKES)</span>
            <span>•</span>
            <span><strong>Estrutura:</strong> Transparência em Camadas (RGPD)</span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-neutral-700 text-sm md:text-base leading-relaxed">
          
          {/* Section 1: Identification & Contacts */}
          <section className="bg-white border border-neutral-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-neutral-950 font-bold font-display text-lg uppercase border-b border-neutral-100 pb-4">
              <UserCheck className="w-5 h-5 text-red-600" />
              <h2>1. Quem Somos e Contactos</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-neutral-200/60 space-y-2">
                <div className="flex items-center gap-2 font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  <UserCheck className="w-4 h-4 text-red-600" />
                  <span>Responsável pelo Tratamento</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  <strong>Agostinho & Inácio Lda. (Agostinho BIKES)</strong>. Entidade comercial titular da loja, serviço de aluguer (Rent-a-Bike) e centro de assistência técnica de bicicletas e E-Bikes.
                </p>
                <div className="pt-2 text-xs text-neutral-600 space-y-1.5">
                  <div><strong>Morada:</strong> {config.address.street}, {config.address.postalCode} {config.address.locality}, Portugal</div>
                  <div><strong>Telefone:</strong> <a href={`tel:${config.telephone}`} className="text-red-600 font-bold hover:underline">{config.telephoneDisplay}</a></div>
                  <div><strong>E-mail:</strong> <a href={`mailto:${config.email}`} className="text-red-600 font-bold hover:underline">{config.email}</a></div>
                </div>
              </div>

              <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-neutral-200/60 space-y-2">
                <div className="flex items-center gap-2 font-bold text-neutral-950 text-sm uppercase tracking-wide">
                  <Laptop className="w-4 h-4 text-red-600" />
                  <span>Desenvolvimento Técnico & Suporte Web</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  <strong>P&D Agency</strong>. Entidade desenvolvedora responsável pela conceção técnica e manutenção da presença digital.
                </p>
                <div className="pt-2 text-xs text-neutral-600">
                  <div><strong>Website:</strong> <a href="https://pdagencydigital.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold underline">pdagencydigital.com</a></div>
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-500 pt-2">
              <strong>Encarregado de Proteção de Dados (DPO):</strong> A designação de um Encarregado de Proteção de Dados não é aplicável nos termos do Artigo 37.º do RGPD. Para esclarecimento de dúvidas sobre dados pessoais, contacte diretamente a empresa através dos canais oficiais.
            </p>
          </section>

          {/* Section 2: Structured Processing Matrix */}
          <section className="bg-white border border-neutral-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase border-b border-neutral-100 pb-4">
              <Layers className="w-5 h-5 text-red-600" />
              <h2>2. Para que Finalidades Tratamos os Seus Dados e com que Fundamento?</h2>
            </div>
            
            <p className="mb-6 text-xs md:text-sm text-neutral-600">
              Apresentamos a matriz estruturada de todas as operações de tratamento de dados pessoais no âmbito da Agostinho BIKES:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-neutral-200">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#FAF9F6] text-neutral-900 font-bold uppercase text-[11px] tracking-wider border-b border-neutral-200">
                    <th className="p-4 w-1/4">Finalidade do Tratamento</th>
                    <th className="p-4 w-1/4">Dados Pessoais Tratados</th>
                    <th className="p-4 w-1/4">Fundamento Jurídico (RGPD)</th>
                    <th className="p-4 w-1/4">Critério de Conservação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white">
                  {/* Row 1: Orçamentos / Vendas */}
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="p-4 font-semibold text-neutral-950 align-top">
                      1. Orçamentos & Venda de Bicicletas / E-Bikes
                    </td>
                    <td className="p-4 text-neutral-600 align-top leading-relaxed">
                      Nome, contacto telefónico/WhatsApp, modelo de bicicleta/E-Bike pretendido e descrição do pedido.
                    </td>
                    <td className="p-4 text-neutral-700 align-top leading-relaxed">
                      <span className="font-bold text-red-600">Diligências Pré-Contratuais</span><br />
                      (Artigo 6.º, n.º 1, alínea b do RGPD) — a pedido do próprio titular dos dados.
                    </td>
                    <td className="p-4 text-neutral-600 align-top leading-relaxed">
                      Durante o período necessário ao envio da proposta e acompanhamento comercial; quando não resulte em venda, pelo prazo razoável de arquivo histórico.
                    </td>
                  </tr>

                  {/* Row 2: Aluguer / Rent-a-Bike */}
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="p-4 font-semibold text-neutral-950 align-top">
                      2. Gestão de Reservas e Contratos de Aluguer (Rent-a-Bike)
                    </td>
                    <td className="p-4 text-neutral-600 align-top leading-relaxed">
                      Nome, contacto, modelo de bicicleta alugada, tamanho de quadro, datas de início/fim, acessórios selecionados e registo do contrato/caução de aluguer.
                    </td>
                    <td className="p-4 text-neutral-700 align-top leading-relaxed">
                      <span className="font-bold text-red-600">Diligências Pré-Contratuais / Execução de Contrato</span><br />
                      (Artigo 6.º, n.º 1, alínea b do RGPD) — formalização e gestão do aluguer de equipamento desportivo.
                    </td>
                    <td className="p-4 text-neutral-600 align-top leading-relaxed">
                      Durante o período do aluguer e pelo prazo legal de prescrição de responsabilidades decorrentes do contrato de locação.
                    </td>
                  </tr>

                  {/* Row 3: Oficina & Diagnósticos */}
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="p-4 font-semibold text-neutral-950 align-top">
                      3. Agendamento de Oficina & Diagnósticos Bosch / DJI Avinox
                    </td>
                    <td className="p-4 text-neutral-600 align-top leading-relaxed">
                      Nome, contacto, tipo de veículo, serviço pretendido (assistência geral, diagnóstico eletrónico de motor/bateria), data e observações.
                    </td>
                    <td className="p-4 text-neutral-700 align-top leading-relaxed">
                      <span className="font-bold text-red-600">Diligências Pré-Contratuais / Execução de Contrato</span><br />
                      (Artigo 6.º, n.º 1, alínea b do RGPD) — prestação de serviços de oficina especializada.
                    </td>
                    <td className="p-4 text-neutral-600 align-top leading-relaxed">
                      Durante a intervenção técnica e pelo prazo da garantia de assistência técnica prestada.
                    </td>
                  </tr>

                  {/* Row 4: Faturação */}
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="p-4 font-semibold text-neutral-950 align-top">
                      4. Faturação e Cumprimento de Obrigações Fiscais
                    </td>
                    <td className="p-4 text-neutral-600 align-top leading-relaxed">
                      Nome / Firma social, Número de Identificação Fiscal (NIF), morada fiscal e dados da transação comercial.
                    </td>
                    <td className="p-4 text-neutral-700 align-top leading-relaxed">
                      <span className="font-bold text-red-600">Cumprimento de Obrigação Jurídica</span><br />
                      (Artigo 6.º, n.º 1, alínea c do RGPD) — deveres tributários e fiscais obrigatórios.
                    </td>
                    <td className="p-4 text-neutral-700 align-top leading-relaxed">
                      Pelos prazos legais estipulados pela legislação fiscal e comercial portuguesa.
                    </td>
                  </tr>

                  {/* Row 5: Segurança */}
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="p-4 font-semibold text-neutral-950 align-top">
                      5. Segurança Técnica e Estabilidade da Plataforma
                    </td>
                    <td className="p-4 text-neutral-600 align-top leading-relaxed">
                      Endereço IP, registos técnicos de navegação e cabeçalhos de rede.
                    </td>
                    <td className="p-4 text-neutral-700 align-top leading-relaxed">
                      <span className="font-bold text-red-600">Interesse Legítimo</span><br />
                      (Artigo 6.º, n.º 1, alínea f do RGPD) — garantia de integridade, prevenção de ataques e estabilidade da plataforma.
                    </td>
                    <td className="p-4 text-neutral-600 align-top leading-relaxed">
                      Durante o período estritamente necessário à segurança e mitigação de ameaças (Vercel).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Technology Providers & Channels */}
          <section className="bg-white border border-neutral-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-neutral-950 font-bold font-display text-lg uppercase border-b border-neutral-100 pb-4">
              <Laptop className="w-5 h-5 text-red-600" />
              <h2>3. Prestadores Tecnológicos e Canais de Comunicação</h2>
            </div>
            
            <p className="mb-4 text-xs md:text-sm text-neutral-600 leading-relaxed">
              Para o correto funcionamento do website e gestão das comunicações, a Agostinho BIKES recorre a serviços tecnológicos de apoio:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-neutral-200/60 space-y-1.5">
                <div className="font-bold text-neutral-950 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  <span>Alojamento & Infraestrutura Web</span>
                </div>
                <p className="text-neutral-600">
                  <strong>Vercel Inc.</strong> — Prestador de infraestrutura tecnológica para disponibilização dos ficheiros da página web e encriptação segura de tráfego HTTPS/TLS.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-neutral-200/60 space-y-1.5">
                <div className="font-bold text-neutral-950 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  <span>Canais de Comunicação Externos</span>
                </div>
                <p className="text-neutral-600">
                  O website disponibiliza ligações diretas para serviços de comunicação de terceiros (WhatsApp / Meta Platforms Ireland Ltd. e correio eletrónico / Google LLC). Quando o utilizador aciona essas ligações, o tratamento de dados no respetivo canal fica sujeito às condições e políticas de privacidade desses fornecedores.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
              <strong>Compromisso de Confidencialidade:</strong> Os seus dados pessoais <strong>nunca serão comercializados, vendidos ou cedidos</strong> a terceiros para fins de marketing ou publicidade de terceiros.
            </div>
          </section>

          {/* Section 4: International Transfers */}
          <section className="bg-white border border-neutral-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase border-b border-neutral-100 pb-4">
              <Globe className="w-5 h-5 text-red-600" />
              <h2>4. Transferências Internacionais de Dados</h2>
            </div>
            
            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
              Determinados prestadores tecnológicos (como a Vercel Inc. ou fornecedores de email) podem tratar dados fora do Espaço Económico Europeu (EEE). Nessas situações, o tratamento cumpre rigorosamente os mecanismos do Capítulo V do RGPD, através de <strong>decisões de adequação da Comissão Europeia</strong> (como o <em>EU-US Data Privacy Framework</em>) ou da celebração de <strong>Cláusulas Contratuais-Tipo (Standard Contractual Clauses - SCCs)</strong> aprovadas pela Comissão Europeia.
            </p>
          </section>

          {/* Section 5: Security Measures */}
          <section className="bg-white border border-neutral-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase border-b border-neutral-100 pb-4">
              <KeyRound className="w-5 h-5 text-red-600" />
              <h2>5. Como Protegemos os Seus Dados? (Segurança)</h2>
            </div>
            
            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed mb-4">
              Nos termos do Artigo 32.º do RGPD, adotamos salvaguardas técnicas e organizativas rigorosas:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-neutral-700">
              <li className="p-3 bg-[#FAF9F6] rounded-xl border border-neutral-200/60 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Encriptação TLS/HTTPS:</strong> Todo o tráfego do website é encriptado via certificados digitais modernos.</span>
              </li>
              <li className="p-3 bg-[#FAF9F6] rounded-xl border border-neutral-200/60 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Minimização de Dados:</strong> O website não guarda mensagens em bases de dados abertas ou públicas.</span>
              </li>
              <li className="p-3 bg-[#FAF9F6] rounded-xl border border-neutral-200/60 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Acessos Restritos:</strong> Controlo rigoroso de acesso às caixas de correio eletrónico e contratos de aluguer.</span>
              </li>
              <li className="p-3 bg-[#FAF9F6] rounded-xl border border-neutral-200/60 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Sigilo Comercial:</strong> Confidencialidade absoluta sobre contactos e histórico de reparações dos clientes.</span>
              </li>
            </ul>
          </section>

          {/* Section 6: Rights Matrix */}
          <section className="bg-white border border-neutral-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-neutral-950 font-bold font-display text-lg uppercase border-b border-neutral-100 pb-4">
              <Scale className="w-5 h-5 text-red-600" />
              <h2>6. Quais são os Seus Direitos e Como Exercê-los?</h2>
            </div>
            
            <p className="mb-6 text-xs md:text-sm text-neutral-600">
              Nos termos dos Artigos 15.º a 22.º do RGPD, assistem-lhe os seguintes direitos relativamente aos seus dados pessoais:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-neutral-200 mb-6">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#FAF9F6] text-neutral-900 font-bold uppercase text-[11px] tracking-wider border-b border-neutral-200">
                    <th className="p-3.5 w-1/3">Direito do Titular</th>
                    <th className="p-3.5 w-2/3">O que significa e como se aplica?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white">
                  <tr className="hover:bg-neutral-50">
                    <td className="p-3.5 font-bold text-neutral-950">Direito de Acesso (Art. 15.º)</td>
                    <td className="p-3.5 text-neutral-600 leading-relaxed">Obter confirmação sobre se os seus dados são tratados e solicitar cópia dos mesmos.</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="p-3.5 font-bold text-neutral-950">Direito de Retificação (Art. 16.º)</td>
                    <td className="p-3.5 text-neutral-600 leading-relaxed">Solicitar a retificação de dados pessoais inexatos ou o completamento de dados incompletos.</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="p-3.5 font-bold text-neutral-950">Direito ao Apagamento (Art. 17.º)</td>
                    <td className="p-3.5 text-neutral-600 leading-relaxed">Solicitar a eliminação dos seus dados («direito a ser esquecido») nos termos do RGPD (ressalvadas obrigações legais fiscais ou defesa de direitos).</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="p-3.5 font-bold text-neutral-950">Direito à Limitação (Art. 18.º)</td>
                    <td className="p-3.5 text-neutral-600 leading-relaxed">Solicitar a suspensão temporária do tratamento enquanto decorre contestação sobre exatidão ou licitude.</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="p-3.5 font-bold text-neutral-950">Direito à Portabilidade (Art. 20.º)</td>
                    <td className="p-3.5 text-neutral-600 leading-relaxed">Requerer a transmissão dos dados fornecidos num formato estruturado e legível por máquina quando o tratamento assentar em contrato.</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="p-3.5 font-bold text-neutral-950">Direito de Oposição (Art. 21.º)</td>
                    <td className="p-3.5 text-neutral-600 leading-relaxed">Opor-se a tratamentos baseados em interesses legítimos com base na sua situação particular.</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="p-3.5 font-bold text-neutral-950">Retirada de Consentimento</td>
                    <td className="p-3.5 text-neutral-600 leading-relaxed">Quando aplicável, retirar o seu consentimento sem comprometer a licitude dos tratamentos anteriores.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Contact & CNPD */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-[#FAF9F6] rounded-2xl border border-neutral-200/60 space-y-1">
                <div className="font-bold text-neutral-950">Como exercer qualquer direito:</div>
                <p className="text-neutral-600 leading-relaxed">
                  Envie o seu pedido escrito com identificação para o endereço de e-mail:
                </p>
                <div className="pt-1">
                  <a href={`mailto:${config.email}`} className="text-red-600 font-bold text-sm hover:underline">
                    {config.email}
                  </a>
                </div>
              </div>

              <div className="p-4 bg-[#FAF9F6] rounded-2xl border border-neutral-200/60 space-y-1">
                <div className="font-bold text-neutral-950">Autoridade de Controlo Nacional & RAL:</div>
                <p className="text-neutral-600 leading-relaxed">
                  Tem o direito de apresentar reclamação junto da autoridade de controlo em Portugal (CNPD) e de recorrer à entidade de Resolução Alternativa de Litígios de Consumo (RAL):
                </p>
                <div className="pt-1 space-y-1">
                  <p>
                    <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold hover:underline">
                      Comissão Nacional de Proteção de Dados (CNPD) — www.cnpd.pt
                    </a>
                  </p>
                  <p>
                    <a href="https://www.cniacc.pt" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold hover:underline">
                      CNIACC — Centro Nacional de Informação e Arbitragem de Conflitos de Consumo — www.cniacc.pt
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Cookie Policy Link */}
          <section className="bg-white border border-neutral-200/80 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-lg text-neutral-950 mb-1 uppercase">
                Cookies & Tecnologias de Armazenamento Local
              </h3>
              <p className="text-xs text-neutral-600">
                Consulte a tabela técnica detalhada sobre as chaves de armazenamento local e preferências essenciais da plataforma:
              </p>
            </div>
            <Link 
              to={prefix ? `${prefix}/politica-cookies` : "/politica-cookies"}
              className="bg-neutral-950 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider py-3 px-5 rounded-xl transition-colors cursor-pointer shrink-0"
            >
              Ver Política de Cookies
            </Link>
          </section>

        </div>

      </div>
    </div>
  );
}
