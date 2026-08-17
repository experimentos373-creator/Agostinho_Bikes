import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Phone, Mail, Award, ShieldCheck, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function CompanyPage() {
  const { t, language } = useLanguage();
  const prefix = language === "pt" ? "" : `/${language}`;

  useEffect(() => {
    const titles = {
      pt: "Empresa | Route N109",
      en: "Company | Route N109",
      es: "Empresa | Route N109",
      fr: "Entreprise | Route N109",
      de: "Unternehmen | Route N109"
    };
    document.title = titles[language] || titles.pt;
  }, [language]);

  const stats = [
    { label: t("company.stats.experienceLabel"), value: t("company.stats.experience"), icon: <Award className="w-5 h-5 text-primary" /> },
    { label: t("company.stats.certifiedLabel"), value: t("company.stats.certified"), icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
    { label: t("company.stats.worldcupLabel"), value: t("company.stats.worldcup"), icon: <Heart className="w-5 h-5 text-primary" /> }
  ];

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.address.street + ", " + config.address.locality + ", " + config.address.postalCode + ", " + config.address.countryName)}`;

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
          <div className="mb-16">
            <span className="text-primary font-black uppercase text-xs tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block">
              {t("about.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-none mb-6 uppercase text-neutral-900">
              {t("company.pageTitle")}
            </h1>
            <p className="text-neutral-500 font-normal max-w-2xl text-sm md:text-base leading-relaxed">
              {t("company.pageSubtitle")}
            </p>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
            
            {/* Text & History Column */}
            <div className="lg:col-span-6 space-y-6 text-neutral-600 font-semibold leading-relaxed text-sm md:text-base">
              <p>{t("company.text1")}</p>
              <p>{t("company.text2")}</p>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-100">
                {stats.map((st, idx) => (
                  <div key={idx} className="bg-neutral-50 border border-neutral-200/60 p-4 rounded-2xl text-center shadow-sm">
                    <div className="flex justify-center mb-1.5">{st.icon}</div>
                    <div className="text-xl md:text-2xl font-black text-neutral-900 font-display mb-0.5">{st.value}</div>
                    <div className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider leading-tight">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overlapping Images Column - Magazine Style */}
            <div className="lg:col-span-6 relative h-[320px] sm:h-[450px] flex items-center justify-center z-10">
              {/* Background large image */}
              <div className="absolute top-[5%] left-[5%] w-[68%] h-[75%] border border-neutral-200 overflow-hidden rounded-3xl shadow-lg bg-neutral-100">
                <img
                  src="/images/about/workshop_collage.jpg"
                  alt="Route N109 Oficina de Bicicletas"
                  className="w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-120"
                  loading="lazy"
                />
              </div>

              {/* Overlapping small image */}
              <div className="absolute bottom-[5%] right-[5%] w-[48%] h-[48%] border-4 border-white z-20 overflow-hidden rounded-2xl shadow-2xl bg-neutral-100">
                <img
                  src="/images/about/mondraker_box.png"
                  alt="Mondraker the way forward Route N109"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Contact Details & Map Area */}
          <div className="bg-neutral-50 border border-neutral-200/80 rounded-3xl p-6 md:p-8 text-left relative overflow-hidden shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8 w-full">
              
              {/* Map Column */}
              <div className="w-full lg:w-3/5 h-[350px] md:h-[420px] rounded-2xl overflow-hidden border border-neutral-200 shadow-inner relative">
                <iframe 
                  title="Route N109 Location Map"
                  src={`https://maps.google.com/maps?q=${config.geo.latitude},${config.geo.longitude}&z=16&output=embed&hl=${language}`} 
                  className="w-full h-full border-none opacity-95"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Details Column */}
              <div className="flex flex-1 flex-col justify-between gap-6 my-4 lg:my-0">
                <div>
                  <h2 className="text-neutral-900 text-lg md:text-2xl font-extrabold uppercase font-display mb-6">
                    Route N109
                  </h2>
                  
                  <div className="flex flex-col gap-6">
                    
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <a 
                          href={mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-xs md:text-sm text-neutral-600 hover:text-primary transition-colors font-semibold"
                        >
                          {config.address.street}, {config.address.locality}, {config.address.postalCode}
                        </a>
                      </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div className="text-xs md:text-sm text-neutral-600 whitespace-pre-wrap font-semibold leading-relaxed">
                        {t("contact.weekdays")}: 09:00 - 19:00{"\n"}
                        {t("contact.saturday")}: 09:00 - 13:00{"\n"}
                        {t("contact.sunday")}: {t("contact.closed")}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <a 
                          href={`mailto:${config.email}`} 
                          className="text-xs md:text-sm text-neutral-600 hover:text-primary transition-colors font-semibold"
                        >
                          {config.email}
                        </a>
                      </div>
                    </div>

                    {/* Phone numbers */}
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div className="flex-1 flex flex-col gap-1">
                        <a 
                          href={`tel:${config.telephone}`} 
                          className="text-xs md:text-sm text-neutral-600 hover:text-primary transition-colors font-semibold"
                        >
                          {config.telephoneDisplay}
                        </a>
                        <span className="text-[9px] text-neutral-400 font-bold">(Chamada para a rede fixa nacional)</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Obtain Directions Button */}
                <a 
                  href={mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-primary text-white hover:scale-[0.98] active:scale-95 px-6 py-3.5 text-xs font-black uppercase tracking-wider rounded-xl md:rounded-full transition-all w-fit shadow-md spring-hover"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path d="M2.98033 5.27131C0.928482 6.14199 1.10731 9.11068 3.23905 9.58908L5.72352 10.1467C6.41365 10.3015 6.98045 10.7771 7.25282 11.4299L8.23334 13.7798C9.07466 15.7961 12.0239 15.4522 12.5304 13.2848L14.6485 4.13637C15.0652 2.33668 13.322 0.873966 11.622 1.59682L2.98033 5.27131Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span>Obter indicações</span>
                </a>

              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
