import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Globe, Heart } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function Navbar() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const saved = localStorage.getItem("route109_favorites");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setFavCount(parsed.length);
        } catch {
          setFavCount(0);
        }
      } else {
        setFavCount(0);
      }
    };

    updateCount();
    window.addEventListener("favorites_updated", updateCount);
    window.addEventListener("storage", updateCount);
    return () => {
      window.removeEventListener("favorites_updated", updateCount);
      window.removeEventListener("storage", updateCount);
    };
  }, []);

  const languages = [
    { code: "pt", label: "PT", name: "Português", flag: "🇵🇹" },
    { code: "en", label: "EN", name: "English", flag: "🇬🇧" },
    { code: "es", label: "ES", name: "Español", flag: "🇪🇸" },
    { code: "fr", label: "FR", name: "Français", flag: "🇫🇷" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedDesktop = desktopDropdownRef.current && desktopDropdownRef.current.contains(event.target);
      const clickedMobile = mobileDropdownRef.current && mobileDropdownRef.current.contains(event.target);
      if (!clickedDesktop && !clickedMobile) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLang) => {
    if (newLang === language) return;
    const currentPath = location.pathname;
    const currentHash = location.hash;
    const currentSearch = location.search;

    // 1. Remove current language prefix if there is one
    let basePath = currentPath;
    const langPrefixes = ["/en", "/es", "/fr", "/de"];
    for (const prefix of langPrefixes) {
      if (currentPath.startsWith(prefix + "/") || currentPath === prefix) {
        basePath = currentPath.substring(prefix.length) || "/";
        break;
      }
    }

    // 2. Build the new path
    let newPath = basePath;
    if (newLang !== "pt") {
      newPath = `/${newLang}${basePath === "/" ? "" : basePath}`;
    }

    navigate(`${newPath}${currentSearch}${currentHash}`);
  };

  const prefix = language === "pt" ? "" : `/${language}`;
  const catalogSlugMap = { pt: "catalogo", en: "catalog", es: "catalogo", fr: "catalogue", de: "katalog" };
  const companySlugMap = { pt: "empresa", en: "about", es: "empresa", fr: "entreprise", de: "unternehmen" };
  const servicesSlugMap = { pt: "servicos", en: "services", es: "servicios", fr: "services", de: "services" };
  const gallerySlugMap = { pt: "galeria", en: "gallery", es: "galeria", fr: "galerie", de: "galerie" };

  const navLinks = [
    { label: t("nav.home").toUpperCase(), href: prefix || "/" },
    { label: t("nav.about").toUpperCase(), href: `${prefix || ""}/#sobre` },
    { label: t("nav.catalog").toUpperCase(), href: `${prefix || ""}/#produtos` },
    { label: t("nav.reviews").toUpperCase(), href: `${prefix || ""}/#avaliacoes` },
    { label: t("nav.contact").toUpperCase(), href: `${prefix || ""}/#contacto` },
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 md:py-3 text-black border-b border-neutral-100"
            : "bg-white/80 backdrop-blur-sm py-3 md:py-4 text-black border-b border-neutral-200/40"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to={prefix || "/"} className="flex flex-row items-center gap-2 sm:gap-3 group">
            <div className="flex items-center gap-2">
              <img src="/logo.webp" alt="Route 109 Logo" width="36" height="36" className="h-8 w-8 sm:h-9 sm:w-9 object-contain" />
              <span className="font-extrabold tracking-tighter text-lg sm:text-xl font-display text-black uppercase">
                Route<span className="text-primary font-black"> N109</span>
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-widest bg-neutral-900 text-neutral-100 px-2 py-0.5 font-bold rounded-sm hidden sm:inline-block">
              Mobilidade Elétrica
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="hover:text-primary text-xs tracking-wider transition-colors relative text-black font-extrabold after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Selector Dropdown */}
            <div className="relative border-l border-neutral-200 pl-4" ref={desktopDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-neutral-700 hover:text-black uppercase cursor-pointer py-1.5 px-2.5 rounded-lg bg-neutral-100/60 hover:bg-neutral-150 transition-all duration-200"
              >
                <Globe className="w-3.5 h-3.5 text-neutral-400" />
                <span>{currentLangObj.label}</span>
                <span className="text-[7px] text-neutral-400">▼</span>
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-neutral-200 rounded-xl shadow-xl py-2 z-50 animate-menu-fade">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between hover:bg-neutral-50 cursor-pointer ${
                        language === lang.code ? "text-primary font-black bg-neutral-50" : "text-neutral-700"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`text-[10px] tracking-wider font-extrabold w-5 text-left ${language === lang.code ? "text-primary" : "text-neutral-400"}`}>
                          {lang.label}
                        </span>
                        <span>{lang.name}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <img
                          src={`https://flagcdn.com/w20/${lang.code === "en" ? "gb" : lang.code}.png`}
                          alt=""
                          className="w-5 h-3.5 object-cover rounded-sm shadow-sm border border-neutral-200/40"
                        />
                        {language === lang.code && <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Favorites Header Link (Desktop) */}
            <Link
              to={`${prefix}/${catalogSlugMap[language] || "catalogo"}?categoria=favoritos`}
              className="relative p-2 text-neutral-600 hover:text-red-500 hover:bg-neutral-100/60 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center"
              title={language === "pt" ? "Ver Favoritos" : "View Favorites"}
            >
              <Heart className={`w-4.5 h-4.5 transition-colors ${favCount > 0 ? "fill-red-500 text-red-500" : "text-neutral-500"}`} />
              {favCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[8px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                  {favCount}
                </span>
              )}
            </Link>

            <a
              href={`tel:${config.telephone}`}
              className="bg-primary hover:bg-neutral-900 text-white px-5 py-2.5 rounded-full font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 spring-hover shadow-md hover:shadow-primary/30"
            >
              <Phone className="w-3.5 h-3.5" />
              {language === "en" 
                ? "Call Shop" 
                : language === "es"
                ? "Llamar Tienda"
                : language === "fr"
                ? "Appeler Magasin"
                : "Ligar para Loja"}
            </a>
          </div>

          {/* Mobile Toggle & Mobile Lang Selector */}
          <div className="md:hidden flex items-center gap-2">
            {/* Favorites Header Link (Mobile) */}
            <Link
              to={`${prefix}/${catalogSlugMap[language] || "catalogo"}?categoria=favoritos`}
              className="relative p-2 text-neutral-600 hover:text-red-500 hover:bg-neutral-100/60 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center mr-1"
              title={language === "pt" ? "Ver Favoritos" : "View Favorites"}
            >
              <Heart className={`w-4.5 h-4.5 transition-colors ${favCount > 0 ? "fill-red-500 text-red-500" : "text-neutral-500"}`} />
              {favCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[8px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                  {favCount}
                </span>
              )}
            </Link>

            {/* Simple Mobile Dropdown Select */}
            <div className="relative" ref={mobileDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1 text-[9px] font-extrabold tracking-widest text-neutral-700 uppercase cursor-pointer py-1.5 px-2 rounded-lg bg-neutral-100/60"
              >
                <span>{currentLangObj.label}</span>
                <span className="text-[6px] text-neutral-400">▼</span>
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-neutral-200 rounded-xl shadow-xl py-1.5 z-50 animate-menu-fade">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-[11px] font-semibold flex items-center justify-between hover:bg-neutral-50 cursor-pointer ${
                        language === lang.code ? "text-primary font-black bg-neutral-50" : "text-neutral-700"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className={`text-[9px] tracking-wider font-extrabold w-4 text-left ${language === lang.code ? "text-primary" : "text-neutral-400"}`}>
                          {lang.label}
                        </span>
                        <span>{lang.name}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <img
                          src={`https://flagcdn.com/w20/${lang.code === "en" ? "gb" : lang.code}.png`}
                          alt=""
                          className="w-5 h-3.5 object-cover rounded-sm shadow-sm border border-neutral-200/40"
                        />
                        {language === lang.code && <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-neutral-100 text-black transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-neutral-100 shadow-2xl py-6 px-6 flex flex-col gap-4 text-black font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary transition-colors py-3 border-b border-neutral-100 last:border-0 text-xs tracking-wider font-extrabold"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.telephone}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary hover:bg-primary-hover text-white text-center py-3.5 rounded-full font-bold mt-2 shadow-md uppercase text-xs tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {language === "en" 
                ? "Call Shop" 
                : language === "es"
                ? "Llamar Tienda"
                : language === "fr"
                ? "Appeler Magasin"
                : "Ligar para Loja"}
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
