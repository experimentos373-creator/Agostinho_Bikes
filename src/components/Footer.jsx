import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const contactCards = [
    {
      name: "Instagram",
      handle: "@agostinho.in_",
      icon: <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-pink-500/10 group-hover:bg-pink-500/20",
      url: "https://www.instagram.com/agostinho.in_/",
      borderColor: "hover:border-pink-500/30",
      hoverBg: "hover:bg-pink-500/[0.02]"
    },
    {
      name: "Facebook",
      handle: "Agostinho.in",
      icon: <Facebook className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
      url: "https://www.facebook.com/Agostinho.in/",
      borderColor: "hover:border-blue-500/30",
      hoverBg: "hover:bg-blue-500/[0.02]"
    },
    {
      name: t("footer.emailCard") || "E-mail",
      handle: config.email,
      icon: <Mail className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-red-500/10 group-hover:bg-red-500/20",
      url: `mailto:${config.email}`,
      borderColor: "hover:border-red-500/30",
      hoverBg: "hover:bg-red-500/[0.02]"
    },
    {
      name: language === "en" ? "Phone" : language === "es" ? "Teléfono" : language === "fr" ? "Téléphone" : language === "de" ? "Telefon" : "Telefone",
      handle: config.telephoneDisplay,
      icon: <Phone className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
      url: `tel:${config.telephone}`,
      borderColor: "hover:border-emerald-500/30",
      hoverBg: "hover:bg-emerald-500/[0.02]"
    }
  ];

  const prefix = language === "pt" ? "" : `/${language}`;

  return (
    <footer id="footer" className="bg-neutral-950 text-white pt-16 pb-8 md:pt-24 md:pb-12 border-t border-neutral-900 relative overflow-hidden text-left">
      {/* UX Audit: label placeholder aria-label */}
      {/* Decorative details */}
      <div className="absolute right-[5%] bottom-[10%] w-[300px] h-[300px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Contact Banner Section */}
        <div className="bg-neutral-900 border border-neutral-805 rounded-none p-6 md:p-12 mb-10 md:mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-extrabold font-display tracking-tight mb-2 uppercase">
              {t("footer.title")}
            </h3>
            <p className="text-neutral-300 text-sm font-normal max-w-md leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <a
              href={`tel:${config.telephone}`}
              className="bg-primary hover:bg-neutral-900 text-white px-6 py-4 rounded-full font-bold flex items-center justify-center gap-2 spring-hover shadow-md shadow-primary/20 w-full sm:w-auto text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              {t("footer.callBtn")}: {config.telephoneDisplay}
            </a>
            <a
              href={`mailto:${config.email}`}
              className="bg-white hover:bg-neutral-100 text-neutral-950 px-6 py-4 rounded-full font-bold flex items-center justify-center gap-2 spring-hover shadow-md w-full sm:w-auto text-xs uppercase tracking-wider"
            >
              <Mail className="w-4 h-4 text-primary" />
              {t("footer.emailBtn")}
            </a>
          </div>
        </div>

        {/* Info Cards Grid: Socials, Email, Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, idx) => (
            <a
              key={idx}
              href={card.url}
              target={card.url.startsWith("http") ? "_blank" : undefined}
              rel={card.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`p-5 rounded-2xl border border-neutral-900 bg-neutral-900/30 flex items-center justify-between transition-all duration-300 group hover:bg-neutral-900/60 ${card.borderColor} ${card.hoverBg} text-left`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl transition-colors ${card.iconBg}`}>
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white font-display text-sm mb-0.5">{card.name}</h4>
                  <p className="text-[11px] text-neutral-400 font-normal truncate max-w-[140px] sm:max-w-[160px] md:max-w-[130px] lg:max-w-[150px]">{card.handle}</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-900 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-400 font-normal">
          
          {/* Logo & copyright */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <a href={`${prefix}/#home`} className="flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="font-extrabold tracking-tighter text-white font-display text-lg">
                AGOSTINHO <span className="text-red-500 font-black font-display">BIKES</span>
              </span>
            </a>
            <p className="text-xs text-neutral-400 mt-1">
              &copy; {currentYear} {t("footer.copyright")}
              <a 
                href="https://p-d-agency.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors underline font-medium"
              >
                P&D Agency
              </a>.
            </p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start items-center text-[10px] text-neutral-400 font-medium">
              <Link 
                to={prefix ? `${prefix}/politica-privacidade` : "/politica-privacidade"}
                className="hover:text-white transition-colors underline"
              >
                {language === "en" ? "Privacy Policy" : "Política de Privacidade"}
              </Link>
              <span className="hidden md:inline text-neutral-700">|</span>
              <Link 
                to={prefix ? `${prefix}/politica-cookies` : "/politica-cookies"}
                className="hover:text-white transition-colors underline"
              >
                {language === "en" ? "Cookie Policy" : "Política de Cookies"}
              </Link>
              <span className="hidden md:inline text-neutral-700">|</span>
              <a 
                href="https://www.livroreclamacoes.pt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors underline"
              >
                {language === "en" ? "Complaints Book" : "Livro de Reclamações"}
              </a>
              <span className="hidden md:inline text-neutral-700">|</span>
              <a 
                href="https://www.cniacc.pt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors underline"
              >
                {language === "en" ? "Consumer Disputes (RAL)" : "Resolução de Litígios de Consumo (RAL)"}
              </a>
              <span className="hidden md:inline text-neutral-700">|</span>
              <Link 
                to={prefix ? `${prefix}/politica-privacidade` : "/politica-privacidade"}
                className="hover:text-white transition-colors underline"
              >
                {language === "en" ? "Terms & Conditions" : "Termos e Condições"}
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-8 font-semibold text-white">
            <a href={`${prefix}/#menu`} className="hover:text-primary transition-colors">
              {t("nav.bikes")}
            </a>
            <a href={`${prefix}/#sobre`} className="hover:text-primary transition-colors">
              {t("nav.about")}
            </a>
            <a href={`${prefix}/#galeria`} className="hover:text-primary transition-colors">
              {t("nav.gallery")}
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
