import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Cpu, Activity, Wrench, Shield, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import BudgetForm from "../components/BudgetForm";

export default function ServicesPage() {
  const { t, language } = useLanguage();
  const prefix = language === "pt" ? "" : `/${language}`;

  useEffect(() => {
    const titles = {
      pt: "Serviços de Oficina & Orçamentos | Route N109",
      en: "Workshop Services & Quotes | Route N109",
      es: "Servicios de Taller & Presupuestos | Route N109",
      fr: "Services d'Atelier & Devis | Route N109",
      de: "Werkstattservice & Kostenvoranschläge | Route N109"
    };
    document.title = titles[language] || titles.pt;
  }, [language]);

  const specialties = [
    {
      title: t("services.diagBosch.title"),
      desc: t("services.diagBosch.desc"),
      icon: <Cpu className="w-6 h-6 text-primary" />
    },
    {
      title: t("services.diagDJI.title"),
      desc: t("services.diagDJI.desc"),
      icon: <Activity className="w-6 h-6 text-primary" />
    },
    {
      title: t("services.suspension.title"),
      desc: t("services.suspension.desc"),
      icon: <Wrench className="w-6 h-6 text-primary" />
    },
    {
      title: t("services.custom.title"),
      desc: t("services.custom.desc"),
      icon: <Shield className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="bg-white min-h-screen text-neutral-800 pt-24 md:pt-32 pb-20 text-left">
      
      {/* Back button */}
      <div className="max-w-[1400px] mx-auto px-6 mb-8">
        <Link to={prefix || "/"} className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" />
          {t("general.backToHome")}
        </Link>
      </div>

      <section className="relative">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-black uppercase text-xs tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block">
              {t("general.servicesWorkshop")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-none mb-6 uppercase text-neutral-900">
              {t("services.pageTitle")}
            </h1>
            <p className="text-neutral-500 font-normal text-sm md:text-base leading-relaxed">
              {t("services.pageSubtitle")}
            </p>
          </div>

          {/* Grid: Left - Specialties list, Right - Form tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Specialties list */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-neutral-950 border-b pb-4 mb-6">
                {language === "en" ? "Workshop Specialties" : "Especialidades de Oficina"}
              </h2>

              <div className="space-y-6">
                {specialties.map((spec, index) => (
                  <div key={index} className="flex gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-all duration-300">
                    <div className="p-3 bg-white rounded-xl shadow-sm h-fit shrink-0 border border-neutral-100">
                      {spec.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-neutral-900 uppercase tracking-wide mb-1.5 font-display">
                        {spec.title}
                      </h3>
                      <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                        {spec.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note card */}
              <div className="p-5 border border-primary/20 bg-primary/5 rounded-2xl text-xs font-semibold text-neutral-600 leading-relaxed">
                <span className="text-primary font-black uppercase tracking-wider block mb-1.5">Info Importante</span>
                {t("contact.hoursNote")}
              </div>
            </div>

            {/* Forms interface - Only rendering the Quote Form */}
            <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-black uppercase text-center tracking-tight text-neutral-900 font-display mb-2">
                  {t("contact.tabBudget")}
                </h3>
                <p className="text-xs text-neutral-500 font-semibold text-center leading-relaxed">
                  {t("general.budgetSubtitle")}
                </p>
              </div>

              <div className="animate-menu-fade">
                <BudgetForm />
              </div>

              {/* Trust disclaimer */}
              <div className="mt-8 border-t border-neutral-200 pt-4 flex items-center justify-center gap-2 text-[9px] text-neutral-400 font-extrabold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Ligação direta e segura para o WhatsApp de Route N109</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
