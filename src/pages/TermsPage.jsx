import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft, ShieldCheck, FileCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function TermsPage() {
  const { language, prefix } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = language === "en"
      ? "Terms & Conditions | Agostinho"
      : "Termos e Condições Gerais | Agostinho";
  }, [language]);

  const homePath = prefix ? prefix : "/";

  return (
    <div className="bg-white text-dark min-h-screen pt-28 pb-20 font-sans text-left">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to={homePath} 
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-500 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === "en" ? "Back to Home" : "Voltar ao Início"}</span>
          </Link>
        </div>

        {/* Header Card */}
        <div className="bg-neutral-950 text-white rounded-3xl p-8 md:p-12 shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600" />
          
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-red-500/30">
            <FileText className="w-4 h-4" />
            <span>Condições Contratuais e Comerciais</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
            {language === "en" ? "Terms & Conditions" : "Termos e Condições Gerais"}
          </h1>

          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl font-light">
            {language === "en"
              ? "These Terms and Conditions regulate the commercial and contractual terms for services, products, and bookings provided by Agostinho."
              : "Os presentes Termos e Condições regulam as condições comerciais e contratuais aplicáveis aos produtos, serviços, alugueres e reservas prestados pela Quinta Agostinho / Agostinho Bikes."}
          </p>

          <div className="mt-6 pt-6 border-t border-neutral-800 flex flex-wrap gap-4 text-xs text-neutral-400 font-mono">
            <span><strong>Última atualização:</strong> Setembro de 2026</span>
            <span>•</span>
            <span><strong>Jurisdição:</strong> Lei Portuguesa</span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-10">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-neutral-900 uppercase tracking-wide flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white text-xs font-bold flex items-center justify-center font-sans">1</span>
              <span>1. Objeto e Enquadramento Comercial</span>
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed font-normal">
              As presentes Condições Gerais aplicam-se a todas as transações, agendamentos, adjudicações de serviços e venda de produtos efetuadas junto da marca Agostinho. Ao efetuar qualquer compra ou marcação, o cliente aceita integralmente estes termos.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-6 border-t border-neutral-200">
            <h2 className="text-xl font-display font-bold text-neutral-900 uppercase tracking-wide flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white text-xs font-bold flex items-center justify-center font-sans">2</span>
              <span>2. Preços, Reservas e Faturação</span>
            </h2>
            <div className="text-sm text-neutral-700 leading-relaxed space-y-2 font-normal">
              <p>• <strong>Preços e IVA:</strong> Todos os preços apresentados incluem IVA à taxa legal em vigor, salvo indicação em contrário.</p>
              <p>• <strong>Confirmação de Reserva:</strong> As marcações de serviços ou alugueres apenas se consideram confirmadas mediante receção de comprovativo ou comunicação oficial de validação.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-6 border-t border-neutral-200">
            <h2 className="text-xl font-display font-bold text-neutral-900 uppercase tracking-wide flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white text-xs font-bold flex items-center justify-center font-sans">3</span>
              <span>3. Cancelamento e Reagendamento</span>
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed font-normal">
              O cancelamento ou alteração de datas de reservas de serviços ou experiências deve ser solicitado com a antecedência mínima de 24 horas relativamente ao horário agendado.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-6 border-t border-neutral-200">
            <h2 className="text-xl font-display font-bold text-neutral-900 uppercase tracking-wide flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white text-xs font-bold flex items-center justify-center font-sans">4</span>
              <span>4. Garantia e Assistência</span>
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed font-normal">
              Todos os produtos comercializados gozam da garantia legal de conformidade de 3 (três) anos, nos termos do Decreto-Lei n.º 84/2021.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-6 border-t border-neutral-200">
            <h2 className="text-xl font-display font-bold text-neutral-900 uppercase tracking-wide flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white text-xs font-bold flex items-center justify-center font-sans">5</span>
              <span>5. Resolução de Litígios e Foro Competente</span>
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed font-normal">
              Em caso de litígio de consumo, o consumidor pode recorrer ao CNIACC - Centro Nacional de Informação e Arbitragem de Conflitos de Consumo. Para litígios judiciais, é competente o Foro da Comarca da Figueira da Foz.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
