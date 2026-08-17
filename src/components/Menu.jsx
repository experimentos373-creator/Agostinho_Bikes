import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Maximize2, Settings, Instagram, Facebook, ChevronLeft, ChevronRight, Zap, Gauge, Battery } from "lucide-react";
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
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prefix = language === "pt" ? "" : `/${language}`;
  const catalogPath = `${prefix}/${catalogSlugs[language] || "catalogo"}`;

  const starBikes = bikes.filter(b => b.isStar);
  const bikesWithImages = bikes.filter(b => b.image !== "");
  const popularBikes = (starBikes.length > 0 ? starBikes : bikesWithImages.length > 0 ? bikesWithImages : bikes).slice(0, 12);

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

  const maxIndex = Math.max(0, popularBikes.length - cardsPerView);

  const scrollLeft = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
  const scrollRight = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => { touchEndX.current = e.targetTouches[0].clientX; };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    else if (diff < -50) setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section id="produtos" className="py-20 md:py-28 bg-[#FCFBFA] text-[#111111] relative border-b border-neutral-200/50">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-slide-up">
          <span className="text-[#D04000] font-black uppercase text-[10px] tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block">
            {t("menu.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-normal font-display tracking-tight leading-none mb-6 text-neutral-950 uppercase">
            {t("menu.title")}
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto mb-6"></div>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            {t("menu.subtitle")}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-20 px-2 md:px-12 reveal-slide-up">
          
          <button 
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className={`flex absolute left-0.5 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 items-center justify-center rounded-full bg-white/90 border border-neutral-200 shadow-md text-neutral-800 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all cursor-pointer active:scale-95 ${
              currentIndex === 0 ? "opacity-30 pointer-events-none" : ""
            }`}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button 
            onClick={scrollRight}
            disabled={currentIndex === maxIndex}
            className={`flex absolute right-0.5 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 items-center justify-center rounded-full bg-white/90 border border-neutral-200 shadow-md text-neutral-800 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all cursor-pointer active:scale-95 ${
              currentIndex === maxIndex ? "opacity-30 pointer-events-none" : ""
            }`}
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div 
            className="overflow-hidden w-full py-4 px-1"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex gap-6 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(calc(-${currentIndex} * (100% + 24px) / ${cardsPerView}))` }}
            >
              {popularBikes.map((bike) => (
                <div 
                  key={bike.id} 
                  className="flex-shrink-0"
                  style={{ width: `calc((100% - (24px * ${cardsPerView - 1})) / ${cardsPerView})` }}
                >
                  <Link
                    to={`${catalogPath}?bike=${bike.id}`}
                    className="flex flex-col bg-white border border-neutral-200/90 rounded-2xl p-5 text-left group h-full relative product-card-frame cursor-pointer overflow-hidden shadow-sm"
                  >
                    {/* Red Discount/Star Badge */}
                    <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 text-[9px] font-black uppercase rounded shadow-sm select-none">
                      {bike.isStar ? "Destaque" : "15% DE DESCONTO"}
                    </div>

                    {/* Image Area inside Studio Background container with Realistic Vehicle Shadow */}
                    <div className="product-studio-bg card-studio-aura border border-neutral-100/90 rounded-xl aspect-[4/3] flex items-center justify-center relative overflow-hidden mb-5 p-5 group-hover:border-primary/20 transition-colors">
                      {bike.image ? (
                        <img
                          src={bike.image}
                          alt={bike.name}
                          loading="lazy"
                          width="300"
                          height="225"
                          className="max-w-[92%] max-h-[92%] object-contain vehicle-drop-shadow group-hover:scale-106"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-neutral-400 select-none">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400/60">Em Breve</span>
                        </div>
                      )}
                    </div>

                    {/* Vehicle Name */}
                    <h3 className="text-[14px] font-black text-neutral-900 font-display group-hover:text-primary transition-colors mb-3 uppercase tracking-tight line-clamp-1">
                      {bike.name}
                    </h3>

                    {/* Price Section */}
                    <div className="flex flex-wrap items-baseline gap-2 mb-5">
                      <span className="text-red-500 line-through font-extrabold text-xs">
                        {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(Math.round(bike.price * 1.15 / 10) * 10)}
                      </span>
                      <span className="text-primary font-black text-xl sm:text-2xl">
                        {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(bike.price)}
                      </span>
                    </div>

                    {/* Specs Grid (3 spec cards at the bottom) */}
                    <div className="grid grid-cols-3 gap-1.5 pt-3 border-t border-neutral-100 mt-auto">
                      <div className="bg-[#F8F9FA] rounded-lg p-1.5 flex flex-col items-center justify-center text-center border border-neutral-100 min-w-0">
                        <Zap className="w-3.5 h-3.5 text-primary mb-1 flex-shrink-0" />
                        <span className="text-[7.5px] text-neutral-600 uppercase tracking-wider font-extrabold block mb-0.5">Motor</span>
                        <span className="text-neutral-800 font-extrabold text-[9px] block truncate max-w-full leading-none">{bike.powerNominal}</span>
                      </div>
                      <div className="bg-[#F8F9FA] rounded-lg p-1.5 flex flex-col items-center justify-center text-center border border-neutral-100 min-w-0">
                        <Gauge className="w-3.5 h-3.5 text-primary mb-1 flex-shrink-0" />
                        <span className="text-[7.5px] text-neutral-600 uppercase tracking-wider font-extrabold block mb-0.5">Velocidade</span>
                        <span className="text-neutral-800 font-extrabold text-[9px] block truncate max-w-full leading-none">{bike.maxSpeed}</span>
                      </div>
                      <div className="bg-[#F8F9FA] rounded-lg p-1.5 flex flex-col items-center justify-center text-center border border-neutral-100 min-w-0">
                        <Battery className="w-3.5 h-3.5 text-primary mb-1 flex-shrink-0" />
                        <span className="text-[7.5px] text-neutral-600 uppercase tracking-wider font-extrabold block mb-0.5">Autonomia</span>
                        <span className="text-neutral-800 font-extrabold text-[9px] block truncate max-w-full leading-none">{bike.autonomy}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View Full Catalog Link Button */}
        <div className="text-center mb-20">
          <Link
            to={catalogPath}
            className="inline-flex items-center gap-2 bg-primary hover:bg-[#E05300] text-white px-8 py-3.5 font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg active:scale-98 border border-primary cursor-pointer"
          >
            {t("catalog.viewFull")}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Services & Workshop Section — Modern Card Grid */}
        <div className="border-t border-neutral-200 pt-16 text-left" id="servicos">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 text-primary font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <Settings className="w-3.5 h-3.5 animate-spin-slow" />
              <span>{t("menu.tabCustom")}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-normal font-display text-neutral-950 mb-4 uppercase tracking-tight">
              {t("menu.customTitle")}
            </h3>
            <div className="w-16 h-[2px] bg-primary mx-auto mb-6"></div>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
              {t("menu.customDesc")}
            </p>
          </div>

          {/* 3 Main Workshop Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Card 1: Reparação de Motores */}
            <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Settings className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-neutral-950 uppercase tracking-tight mb-3">
                  {t("menu.suspensions")}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  {t("menu.suspensionsDesc")}
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100">
                <ul className="text-xs text-neutral-800 font-bold flex flex-col gap-2 list-none">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Motores PMSM / Cubo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Controladores VESC / FOC</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Segurança & Travões */}
            <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-neutral-950 uppercase tracking-tight mb-3">
                  {t("menu.brakes")}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  {t("menu.brakesDesc")}
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100">
                <ul className="text-xs text-neutral-800 font-bold flex flex-col gap-2 list-none">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Sistemas CBS / ABS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Pastilhas Cerâmicas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Baterias Custom */}
            <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Battery className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-neutral-950 uppercase tracking-tight mb-3">
                  {t("menu.wheels")}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  {t("menu.wheelsDesc")}
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100">
                <ul className="text-xs text-neutral-800 font-bold flex flex-col gap-2 list-none">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Células LG / Samsung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Smart BMS Bluetooth</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom Row: Financing Banner Card + Social Media Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Financing Card (Banner) */}
            <div className="lg:col-span-8 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
              <div>
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-primary mb-2">
                  {t("menu.financialTitle")}
                </span>
                <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-3">
                  Soluções de Financiamento & Entrega à Sua Medida
                </h4>
                <p className="text-neutral-300 text-xs md:text-sm leading-relaxed max-w-2xl font-normal">
                  {t("menu.financialDesc")}
                </p>
              </div>
            </div>

            {/* Social Cards */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              <a 
                href="https://www.instagram.com/routen109mobilidade/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-neutral-200/90 rounded-2xl p-4 flex items-center gap-4 hover:border-[#ee2a7b]/40 hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shrink-0 flex items-center justify-center shadow-sm">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-extrabold block text-neutral-900 uppercase tracking-wider">Instagram</span>
                  <span className="text-[11px] text-neutral-500 block truncate font-medium">@routen109mobilidade</span>
                </div>
              </a>

              <a 
                href="https://www.facebook.com/RouteN109/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-neutral-200/90 rounded-2xl p-4 flex items-center gap-4 hover:border-[#1877F2]/40 hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <div className="p-2.5 rounded-xl bg-[#1877F2] text-white shrink-0 flex items-center justify-center shadow-sm">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-extrabold block text-neutral-900 uppercase tracking-wider">Facebook</span>
                  <span className="text-[11px] text-neutral-500 block truncate font-medium">RouteN109</span>
                </div>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
