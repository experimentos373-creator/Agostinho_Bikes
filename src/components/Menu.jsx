import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Maximize2, Settings, Instagram, Facebook, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { bikes, catalogSlugs } from "../data/bikesData";

  const getInitialCardsPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 4;
  };

export default function Menu() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getInitialCardsPerView);
  
  // Touch swipe refs
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prefix = language === "pt" ? "" : `/${language}`;
  const catalogPath = `${prefix}/${catalogSlugs[language] || "catalogo"}`;

  // Get only popular/starred bikes, sorted with Zendit first, then Crafty
  const popularBikes = bikes
    .filter(b => b.isStar)
    .sort((a, b) => {
      const aIsZendit = a.id.toLowerCase().includes("zendit");
      const bIsZendit = b.id.toLowerCase().includes("zendit");
      if (aIsZendit && !bIsZendit) return -1;
      if (!aIsZendit && bIsZendit) return 1;
      
      const aIsCrafty = a.id.toLowerCase().includes("crafty");
      const bIsCrafty = b.id.toLowerCase().includes("crafty");
      if (aIsCrafty && !bIsCrafty) return -1;
      if (!aIsCrafty && bIsCrafty) return 1;
      
      return 0;
    });

  // Calculate cards per view on resize for responsive behavior
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else if (window.innerWidth < 1280) setCardsPerView(3);
      else setCardsPerView(4);
    };
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Limit index to popularBikes.length - cardsPerView
  const maxIndex = Math.max(0, popularBikes.length - cardsPerView);

  const scrollLeft = () => {
    setCurrentIndex(prev => Math.max(prev - 2, 0));
  };

  const scrollRight = () => {
    setCurrentIndex(prev => Math.min(prev + 2, maxIndex));
  };

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swiped Left -> Go Right
      setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    } else if (diff < -50) {
      // Swiped Right -> Go Left
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };

  return (
    <section id="menu" className="py-16 md:py-28 bg-white text-black relative border-b border-neutral-200">
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-slide-up">
          <span className="text-red-700 font-extrabold uppercase text-xs tracking-widest bg-red-50 border border-red-200/60 px-4 py-1.5 rounded-full mb-4 inline-block">
            {t("menu.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-none mb-6 uppercase text-neutral-900">
            {t("menu.title")}
          </h2>
          <p className="text-neutral-600 text-sm md:text-base font-normal leading-relaxed">
            {t("menu.subtitle")}
          </p>
        </div>

        {/* Carousel Container with navigation controls */}
        <div className="relative mb-16 px-4 md:px-12 group/nav reveal-slide-up">
          
          {/* Left Arrow Button */}
          <button 
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className={`absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white border border-neutral-200/80 shadow-md text-neutral-800 hover:bg-primary hover:text-white transition-all cursor-pointer border-none ${
              currentIndex === 0 ? "opacity-30 pointer-events-none" : "opacity-80 hover:opacity-100"
            }`}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={scrollRight}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white border border-neutral-200/80 shadow-md text-neutral-800 hover:bg-primary hover:text-white transition-all cursor-pointer border-none ${
              currentIndex === maxIndex ? "opacity-30 pointer-events-none" : "opacity-80 hover:opacity-100"
            }`}
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Horizontal Scrollable Row */}
          <div 
            className="overflow-hidden w-full py-4 px-1"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex gap-6 transition-transform duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% + 24px) / ${cardsPerView}))`,
              }}
            >
              {popularBikes.map((bike) => (
                <div 
                  key={bike.id} 
                  className="flex-shrink-0"
                  style={{
                    width: `calc((100% - (24px * ${cardsPerView - 1})) / ${cardsPerView})`,
                  }}
                >
                  <Link
                    to={`${catalogPath}?bike=${bike.id}`}
                    className="flex flex-col bg-white border border-neutral-200/80 rounded-3xl p-5 hover:border-neutral-300 hover:shadow-xl transition-all duration-500 text-left group h-full relative"
                  >
                    {bike.isStar && (
                      <div className="absolute top-3 left-3 z-10 bg-neutral-900 text-white text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-neutral-800">
                        <span className="text-yellow-400 text-[10px]">★</span> {t("catalog.badge.star")}
                      </div>
                    )}
                    {/* Product Image Frame */}
                    <div className="bg-white rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden mb-4 p-4">
                      <img
                        src={bike.image}
                        alt={bike.name}
                        loading="lazy"
                        width="300"
                        height="225"
                        className="max-w-full max-h-full object-contain transition-transform duration-500 ease-out group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Meta info (Brand Badge + Rating) */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-neutral-100 text-neutral-800 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                        {bike.brand}
                      </span>
                      <span className="text-[10px] text-neutral-500 font-bold flex items-center gap-1">
                        <span className="text-yellow-400">★</span> {bike.rating}
                      </span>
                    </div>

                    {/* Product Title */}
                    <h3 className="text-sm font-black uppercase tracking-tight text-neutral-900 group-hover:text-primary transition-colors mb-3 line-clamp-1">
                      {bike.name}
                    </h3>

                    {/* Technical Specs (2 Columns) */}
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-100/80 mb-3">
                      <div>
                        <span className="text-[8px] text-neutral-500 uppercase tracking-widest block mb-0.5 font-bold">
                          {t("catalog.specs.drivetrain")}
                        </span>
                        <span className="text-[11px] text-neutral-900 font-extrabold block truncate">
                          {bike.drivetrainShort}
                        </span>
                      </div>
                      <div>
                        <span className="text-[8px] text-neutral-500 uppercase tracking-widest block mb-0.5 font-bold">
                          {t("catalog.specs.suspension")}
                        </span>
                        <span className="text-[11px] text-neutral-900 font-extrabold block truncate">
                          {bike.suspensionShort}
                        </span>
                      </div>
                    </div>

                    {/* Technology Pills */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {bike.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="bg-neutral-100/70 text-neutral-600 text-[8px] font-extrabold px-1.5 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto pt-3 border-t border-neutral-100/80 flex items-center justify-between gap-3">
                      {bike.price && (
                        <div className="flex flex-col">
                          <span className="text-[8px] text-neutral-500 uppercase tracking-widest block font-bold">
                            {t("catalog.specs.pvp")}
                          </span>
                          <span className="text-[13px] text-neutral-950 font-black whitespace-nowrap">
                            {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(bike.price)}
                          </span>
                        </div>
                      )}
                      <div className="flex-1 bg-neutral-950 hover:bg-primary text-white text-[10px] font-black uppercase tracking-widest text-center py-2.5 rounded-lg transition-colors">
                        {language === "en" ? "View" : language === "es" ? "Ver" : language === "fr" ? "Voir" : language === "de" ? "Ansehen" : "Visualizar"}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View Full Catalog CTA */}
        <div className="text-center mb-12">
          <Link
            to={catalogPath}
            className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-primary text-white px-8 py-3.5 font-black text-xs uppercase tracking-widest transition-colors"
          >
            {t("catalog.viewFull")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Custom Builds & Financing Unified Segment (Large Rounded Rectangle, Black with Red Gradient) */}
        <div className="max-w-[1400px] mx-auto border-t border-neutral-200 pt-12 text-left">
          <div className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-900 rounded-3xl p-6 md:p-8 text-white overflow-hidden shadow-xl">
            {/* Subtle red glow gradients */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-red-950/30 rounded-full filter blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 relative z-10">
              
              {/* Left Column (col-span-5) - Custom Builds Intro & Photo Preview */}
              <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    <Settings className="w-3 h-3" />
                    {t("menu.tabCustom")}
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold font-display text-white mb-2 uppercase tracking-tight">
                    {t("menu.customTitle")}
                  </h3>
                  <p className="text-neutral-400 text-xs font-normal leading-relaxed mb-4">
                    {t("menu.customDesc")}
                  </p>
                  <a
                    href="https://www.instagram.com/agostinho.in_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black text-white hover:text-primary uppercase tracking-widest border-b-2 border-white hover:border-primary pb-1 transition-all"
                  >
                    <Instagram className="w-4 h-4 text-primary" />
                    {t("menu.instagramBtn")}
                  </a>
                </div>

                {/* Social Media Links Panel to fill space beautifully */}
                <div className="mt-6 space-y-3">
                  <span className="text-[9px] font-black uppercase tracking-widest text-neutral-500 block mb-1">
                    Comunidade & Redes Sociais
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Instagram Button */}
                    <a
                      href="https://www.instagram.com/agostinho.in_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-pink-500/5 to-purple-500/5 hover:from-pink-500/10 hover:to-purple-500/10 border border-pink-500/10 hover:border-pink-500/30 rounded-xl p-3 flex items-center gap-3 transition-all duration-300 group"
                    >
                      <div className="bg-pink-500/10 p-2 rounded-lg group-hover:bg-pink-500/20 transition-colors">
                        <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] font-black uppercase tracking-wider block text-white">
                          Instagram
                        </span>
                        <span className="text-[9px] text-neutral-400 block mt-0.5">
                          @agostinho.in_
                        </span>
                      </div>
                    </a>

                    {/* Facebook Button */}
                    <a
                      href="https://www.facebook.com/Agostinho.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 hover:from-blue-500/10 hover:to-indigo-500/10 border border-blue-500/10 hover:border-blue-500/30 rounded-xl p-3 flex items-center gap-3 transition-all duration-300 group"
                    >
                      <div className="bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                        <Facebook className="w-5 h-5 text-blue-450 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] font-black uppercase tracking-wider block text-white">
                          Facebook
                        </span>
                        <span className="text-[9px] text-neutral-400 block mt-0.5">
                          Agostinho.in
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column (col-span-7) - Components Grid + Financing underneath */}
              <div className="lg:col-span-7 flex flex-col bg-white/[0.01] border border-white/5 p-5 md:p-6 rounded-2xl backdrop-blur-sm justify-between">
                
                {/* 3 Columns Grid for Components (as in the print) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Suspensions */}
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider mb-2.5 pb-1 border-b border-white/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {t("menu.suspensions")}
                    </h4>
                    <p className="text-[11px] text-neutral-400 font-normal leading-relaxed mb-2">
                      {t("menu.suspensionsDesc")}
                    </p>
                    <ul className="text-xs text-neutral-200 font-bold flex flex-col gap-1">
                      <li>RockShox (ex: ZEB)</li>
                      <li>Fox Factory Kashima</li>
                    </ul>
                  </div>

                  {/* Brakes */}
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider mb-2.5 pb-1 border-b border-white/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {t("menu.brakes")}
                    </h4>
                    <p className="text-[11px] text-neutral-400 font-normal leading-relaxed mb-2">
                      {t("menu.brakesDesc")}
                    </p>
                    <ul className="text-xs text-neutral-200 font-bold flex flex-col gap-1">
                      <li>SRAM (ex: Maven)</li>
                      <li>Shimano XTR / XT</li>
                    </ul>
                  </div>

                  {/* Accessories */}
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider mb-2.5 pb-1 border-b border-white/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {t("menu.wheels")}
                    </h4>
                    <p className="text-[11px] text-neutral-400 font-normal leading-relaxed mb-2">
                      {t("menu.wheelsDesc")}
                    </p>
                    <ul className="text-xs text-neutral-200 font-bold flex flex-col gap-1">
                      <li>Skillbikes</li>
                      <li>DMR Bikes</li>
                      <li>Fox Head</li>
                    </ul>
                  </div>
                </div>

                {/* Financing and Warranties (Placed under the print components) */}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-primary mb-1">
                    {t("menu.financialTitle")}
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed font-normal">
                    {t("menu.financialDesc")}
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
