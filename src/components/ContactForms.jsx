import { Link } from "react-router-dom";
import { FileText, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactForms() {
  const { t, language } = useLanguage();
  const prefix = language === "pt" ? "" : `/${language}`;

  return (
    <section id="formularios" className="py-16 md:py-24 bg-neutral-100 border-b border-neutral-200 text-center relative scroll-margin-top-[96px]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 reveal-slide-up text-center">
          <span className="text-primary font-extrabold uppercase text-xs tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block">
            {t("contact.servicesTitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 font-display tracking-tight uppercase mb-4">
            {t("contact.servicesSubtitle")}
          </h2>
          <p className="text-neutral-500 font-normal max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            {language === "en" 
              ? "Access our digital services to request custom bike quotes or schedule mechanic appointments directly through WhatsApp."
              : "Aceda aos nossos serviços digitais para solicitar orçamentos personalizados ou agendar assistência mecânica diretamente via WhatsApp."}
          </p>
        </div>

        {/* Services Teaser Card */}
        <div className="max-w-xl mx-auto reveal-slide-up">
          
          {/* Card: Quote Request */}
          <div className="bg-white border border-neutral-200 rounded-3xl p-8 md:p-10 flex flex-col justify-between items-start text-left shadow-sm hover:shadow-lg transition-all duration-300">
            <div>
              <div className="p-3.5 bg-neutral-950/5 rounded-2xl w-fit mb-6">
                <FileText className="w-6 h-6 text-neutral-900" />
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-neutral-900 font-display mb-3">
                {t("contact.tabBudget")}
              </h3>
              <p className="text-xs md:text-sm text-neutral-500 font-semibold leading-relaxed mb-6">
                {language === "en"
                  ? "Request specialized quotes for custom components upgrades, dream assemblies, frame kits, and premium parts configurations."
                  : "Peça cotações para montagens personalizadas à carta, upgrades de suspensão, conjuntos de rodas ou novos componentes."}
              </p>
            </div>
            <Link
              to={`${prefix}/servicos`}
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-primary text-white text-xs font-black uppercase tracking-widest px-6 py-3 rounded-xl transition-all spring-hover border-none"
            >
              <span>{language === "en" ? "Request Quote" : "Pedir Orçamento"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
