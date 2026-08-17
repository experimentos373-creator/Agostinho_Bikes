import { Facebook, Instagram, Phone, Mail, ArrowUpRight, MapPin, ArrowUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function Footer({ onOpenLegal }) {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const contactCards = [
    {
      name: "Instagram",
      handle: "@routen109mobilidade",
      icon: <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-pink-500/10 group-hover:bg-pink-500/20",
      url: "https://www.instagram.com/routen109mobilidade/",
      borderColor: "hover:border-pink-500/30",
      hoverBg: "hover:bg-pink-500/[0.02]"
    },
    {
      name: "Facebook",
      handle: "RouteN109",
      icon: <Facebook className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
      url: "https://www.facebook.com/RouteN109//",
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
      {/* Decorative details */}
      <div className="absolute right-[5%] bottom-[10%] w-[300px] h-[300px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Main Grid: 3 Columns (Brand Info, Navigation, Contacts & Legal) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-neutral-900/60">
          
          {/* Column 1: Brand Info & Social Media Cards */}
          <div className="lg:col-span-5 space-y-5">
            <a href={`${prefix}/#home`} className="flex items-center gap-3">
              <img src="/logo.webp" alt="Route 109 Logo" width="40" height="40" className="h-10 w-auto object-contain" />
              <span className="font-extrabold tracking-tighter text-white font-display text-lg uppercase">
                Route <span className="text-primary font-black font-display">N109</span>
              </span>
            </a>
            
            <p className="text-xs leading-relaxed text-neutral-300 max-w-md">
              {t("footer.desc")}
            </p>
            
            {/* Small Compact Social Cards */}
            <div className="flex flex-wrap gap-3 pt-2">
              {contactCards.filter(card => card.name === "Instagram" || card.name === "Facebook").map((card, idx) => (
                <a
                  key={idx}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 pr-4 rounded-xl border border-neutral-900 bg-neutral-900/30 flex items-center gap-3 transition-all duration-300 group hover:bg-neutral-900/60 ${card.borderColor} ${card.hoverBg} text-left w-[170px] shrink-0`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${card.iconBg}`}>
                    {card.icon}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-white font-display text-xs mb-0.5">{card.name}</h4>
                    <p className="text-[10px] text-neutral-400 font-normal truncate">{card.handle}</p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary ml-auto shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3 text-xs font-medium text-neutral-400">
              <li>
                <a href={`${prefix}/#home`} className="hover:text-primary transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href={`${prefix}/#sobre`} className="hover:text-primary transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href={`${prefix}/catalogo`} className="hover:text-primary transition-colors">
                  {t("nav.catalog")}
                </a>
              </li>
              <li>
                <a href={`${prefix}/#avaliacoes`} className="hover:text-primary transition-colors">
                  {t("nav.reviews")}
                </a>
              </li>
              <li>
                <a href={`${prefix}/#contacto`} className="hover:text-primary transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts & Legal */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              {language === "en" ? "Contacts & Legal" : language === "es" ? "Contactos y Legal" : language === "fr" ? "Contacts & Légal" : language === "de" ? "Kontakte & Rechtliches" : "Contactos & Legal"}
            </h4>
            <ul className="space-y-3.5 text-xs text-neutral-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>
                  {language === "en" ? "Phone" : "Telefone"}: <a href={`tel:${config.telephone}`} className="text-white hover:text-primary transition-colors font-bold">{config.telephoneDisplay}</a>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${config.email}`} className="hover:text-primary transition-colors">
                  {config.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  {config.address.street}, {config.address.locality}, {config.address.postalCode} – Pombal, {config.address.countryName}
                </span>
              </li>
            </ul>
            <div className="pt-2 space-y-2 flex flex-col items-start">
              <button
                onClick={() => onOpenLegal && onOpenLegal("privacy")}
                className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-primary transition-colors font-medium cursor-pointer"
              >
                <span>Política de Privacidade (RGPD)</span>
              </button>

              <button
                onClick={() => onOpenLegal && onOpenLegal("cookies")}
                className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-primary transition-colors font-medium cursor-pointer"
              >
                <span>Política de Cookies</span>
              </button>

              <a 
                href="https://www.livroreclamacoes.pt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-white transition-colors underline font-medium pt-1"
              >
                <span>Livro de Reclamações Eletrónico</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright and Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            &copy; {currentYear} {t("footer.copyright")}
            <a 
              href="https://p-d-agency.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors underline font-medium ml-1"
            >
              P&D Agency
            </a>.
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer text-xs uppercase tracking-wider font-bold"
          >
            <span>{language === "en" ? "Back to Top" : "Voltar ao Topo"}</span>
            <ArrowUp className="w-4 h-4 text-primary" />
          </button>
        </div>

      </div>
    </footer>
  );
}
