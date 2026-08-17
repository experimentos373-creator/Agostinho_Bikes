import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import BudgetForm from "../components/BudgetForm";
import WorkshopForm from "../components/WorkshopForm";
import { ArrowLeft, Award, Cpu } from "lucide-react";
import { config } from "../config";
import { SEO_DATA } from "../data/seoData";

export default function SEOPage() {
  const { slug } = useParams();
  const { t, language } = useLanguage();

  const prefix = language === "pt" ? "" : `/${language}`;

  const dataMap = SEO_DATA[language] || SEO_DATA["pt"];
  const pageData = dataMap[slug];

  useEffect(() => {
    if (pageData) {
      document.title = pageData.metaTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", pageData.metaDesc);
      }

      // 1. Breadcrumb Schema
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": t("nav.home"),
            "item": config.domain
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": pageData.h1,
            "item": `${config.domain}${prefix}/${slug}`
          }
        ]
      };

      const scriptBreadcrumb = document.createElement("script");
      scriptBreadcrumb.type = "application/ld+json";
      scriptBreadcrumb.text = JSON.stringify(breadcrumbSchema);
      scriptBreadcrumb.id = "breadcrumb-schema";
      document.head.appendChild(scriptBreadcrumb);

      // 2. Specific Schema based on formType (budget -> Product, workshop -> FAQPage/Service)
      if (pageData.formType === "budget") {
        const brandName = slug.includes("mondraker") ? "Mondraker" : slug.includes("cube") ? "Cube" : slug.includes("amflow") ? "Amflow" : "Multimarca";
        const productSchema = {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": pageData.h1,
          "image": `${config.domain}${pageData.image}`,
          "description": pageData.intro,
          "brand": {
            "@type": "Brand",
            "name": brandName
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "EUR",
            "lowPrice": "990",
            "highPrice": "14990",
            "offerCount": "8"
          }
        };

        const scriptSpecific = document.createElement("script");
        scriptSpecific.type = "application/ld+json";
        scriptSpecific.text = JSON.stringify(productSchema);
        scriptSpecific.id = "seo-specific-schema";
        document.head.appendChild(scriptSpecific);
      } else if (pageData.formType === "workshop") {
        const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": language === "en" 
                ? `How to book the service ${pageData.h1} in Figueira da Foz?`
                : language === "es"
                ? `¿Cómo reservar el servicio ${pageData.h1} en Figueira da Foz?`
                : language === "fr"
                ? `Comment réserver le service ${pageData.h1} à Figueira da Foz?`
                : language === "de"
                ? `Wie buche ich den Service ${pageData.h1} in Figueira da Foz?`
                : `Como agendar o serviço ${pageData.h1} em Figueira da Foz?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": language === "en"
                  ? "You can request an appointment by filling out the booking form on this page. The data will be sent directly to our WhatsApp for scheduling confirmation."
                  : language === "es"
                  ? "Puede solicitar la cita completando el formulario de reserva en esta página. Los datos se enviarán directamente a nuestro WhatsApp para la confirmación de la cita."
                  : language === "fr"
                  ? "Vous pouvez demander un rendez-vous en remplissant le formulaire de réservation sur cette page. Les données seront envoyées directement à notre WhatsApp pour confirmation de l'heure."
                  : language === "de"
                  ? "Sie können einen Termin anfragen, indem Sie das Buchungsformular auf dieser Seite ausfüllen. Die Daten werden zur Terminbestätigung direkt an unser WhatsApp gesendet."
                  : "Pode solicitar o agendamento preenchendo o formulário de marcação nesta página. Os dados serão enviados diretamente para o nosso WhatsApp para confirmação de horário."
              }
            },
            {
              "@type": "Question",
              "name": language === "en"
                ? "Does Route N109 workshop have certified mechanics?"
                : language === "es"
                ? "¿Cuenta el taller de Route N109 con mecánicos certificados?"
                : language === "fr"
                ? "L'atelier d'Route N109 a-t-il des mécaniciens certifiés?"
                : language === "de"
                ? "Hat die Route N109 Werkstatt zertifizierte Mechaniker?"
                : "A oficina Route N109 tem mecânicos certificados?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": language === "en"
                  ? "Yes, our workshop has certified mechanics with direct experience and specialized technical training in electric motorcycle and scooter systems."
                  : language === "es"
                  ? "Sí, nuestro taller cuenta con mecánicos certificados con experiencia directa y capacitación técnica especializada en sistemas de motos y scooters eléctricos."
                  : language === "fr"
                  ? "Oui, notre atelier dispose de mécaniciens certifiés ayant une expérience directe et une formation technique spécialisée dans les systèmes de motos et scooters électriques."
                  : language === "de"
                  ? "Ja, unsere Werkstatt verfügt über zertifizierte Mechaniker mit direkter Erfahrung und spezieller technischer Ausbildung für Elektromotorrad- und E-Scooter-Systeme."
                  : "Sim, a nossa oficina dispõe de mecânicos certificados com experiência direta e formação técnica especializada em sistemas de motos e scooters elétricas."
              }
            }
          ]
        };

        const scriptSpecific = document.createElement("script");
        scriptSpecific.type = "application/ld+json";
        scriptSpecific.text = JSON.stringify(faqSchema);
        scriptSpecific.id = "seo-specific-schema";
        document.head.appendChild(scriptSpecific);
      }

      // 3. Dynamic Hreflang Alternate Link Tags for multi-language indexing
      const languages = ["pt", "en", "es", "fr"];
      const hreflangElements = [];

      languages.forEach((lang) => {
        const link = document.createElement("link");
        link.rel = "alternate";
        link.hreflang = lang;
        link.href = lang === "pt" ? `${config.domain}/${slug}` : `${config.domain}/${lang}/${slug}`;
        link.id = `hreflang-${lang}`;
        document.head.appendChild(link);
        hreflangElements.push(link);
      });

      const lDefault = document.createElement("link");
      lDefault.rel = "alternate";
      lDefault.hreflang = "x-default";
      lDefault.href = `${config.domain}/${slug}`;
      lDefault.id = "hreflang-default";
      document.head.appendChild(lDefault);
      hreflangElements.push(lDefault);

      return () => {
        const sB = document.getElementById("breadcrumb-schema");
        const sS = document.getElementById("seo-specific-schema");
        if (sB) sB.remove();
        if (sS) sS.remove();

        hreflangElements.forEach((el) => {
          if (el && el.parentNode) {
            el.remove();
          }
        });
      };
    }
  }, [pageData, slug, language, prefix, t]);

  if (!pageData) {
    return (
      <div className="py-28 text-center bg-white min-h-[60vh] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4 font-display uppercase">
          {t("general.pageNotFound")}
        </h2>
        <p className="text-neutral-500 mb-8">
          {t("general.pageNotFoundDesc")}
        </p>
        <Link to={prefix || "/"} className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
          {t("general.backToHome")}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32">
      {/* Header section with back button */}
      <div className="max-w-[1400px] mx-auto px-6 mb-8 text-left">
        <Link to={prefix || "/"} className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" />
          {t("general.backToHome")}
        </Link>
      </div>

      <section className="py-8 md:py-16 bg-white relative overflow-hidden border-b border-neutral-100 text-left">
        <div className="absolute right-0 top-0 w-1/3 h-full border-l border-neutral-100 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Images stacked in an overlapping magazine layout */}
          <div className="lg:col-span-6 relative h-[320px] sm:h-[450px] flex items-center justify-center z-10">
            <div className="absolute top-[5%] left-[5%] w-[85%] h-[85%] border border-neutral-200 overflow-hidden rounded-2xl shadow-lg bg-neutral-100">
              <img
                src={pageData.image}
                alt={pageData.h1}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            {/* Floating Certified Badge */}
            <div className="absolute top-[12%] right-[8%] bg-neutral-900 text-white p-5 rounded-2xl border border-neutral-800 z-30 shadow-lg text-center flex flex-col justify-center items-center w-28 h-28 sm:w-36 sm:h-36">
              {pageData.formType === "budget" ? (
                <Award className="w-8 h-8 text-primary mb-2 slow-blink" />
              ) : (
                <Cpu className="w-8 h-8 text-primary mb-2 slow-blink" />
              )}
              <span className="text-xs sm:text-sm font-extrabold font-display block uppercase tracking-tight">Route N109</span>
              <span className="text-[7px] sm:text-[8px] text-neutral-400 uppercase tracking-widest mt-1">
                {t("general.certified")}
              </span>
            </div>
          </div>

          {/* Text Details & Features */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-primary font-extrabold uppercase text-xs tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-6">
              {pageData.formType === "budget" ? t("general.brandsProducts") : t("general.servicesWorkshop")}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 font-display tracking-tight leading-[1.05] mb-4 uppercase">
              {pageData.h1}
            </h1>
            <p className="text-neutral-500 font-bold mb-6 text-base font-display uppercase tracking-wide">
              {pageData.subtitle}
            </p>
            <p className="text-neutral-600 font-normal leading-relaxed mb-10 text-base">
              {pageData.intro}
            </p>

            {/* Highlights Editorial List */}
            <div className="w-full border-t border-neutral-200">
              {pageData.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-6 py-5 border-b border-neutral-100 group transition-colors duration-300"
                >
                  <span className="font-display text-2xl font-black text-primary/30 group-hover:text-primary transition-colors duration-300 leading-none pt-1">
                    {`0${idx + 1}`}
                  </span>
                  <div>
                    <h3 className="font-bold text-neutral-900 font-display text-base mb-1 uppercase tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-500 font-normal leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Forms Area */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-neutral-900 font-display uppercase mb-4">
            {t("general.contactUs")}
          </h2>
          <p className="text-neutral-500 mb-12 max-w-xl mx-auto text-sm leading-relaxed">
            {pageData.formType === "budget" 
              ? t("general.budgetSubtitle") 
              : t("general.workshopSubtitle")
            }
          </p>

          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-2 border border-neutral-100">
            {pageData.formType === "budget" ? <BudgetForm /> : <WorkshopForm />}
          </div>
        </div>
      </section>
    </div>
  );
}
