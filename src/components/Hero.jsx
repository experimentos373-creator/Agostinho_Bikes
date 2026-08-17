import { ArrowDown, Phone, Star, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[60vh] sm:min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-10 sm:pt-36 sm:pb-16 md:pt-40 md:pb-24 text-white border-b border-neutral-800"
    >
      {/* Full-bleed Showroom Background Cover Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/route109_hero.webp"
          alt="Showroom Route N109 - Motos e Scooters Elétricas"
          fetchPriority="high"
          decoding="async"
          width="1200"
          height="800"
          className="w-full h-full object-cover object-[60%_20%] md:object-[50%_20%] scale-100 filter brightness-[0.80] contrast-[1.4]"
        />
        {/* Layered Gradient Overlays for optimal readability & atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/30" />
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#FF6600 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} 
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Full Editorial Content */}
        <div className="lg:col-span-8 flex flex-col items-start text-left reveal-slide-left z-10 pr-0 lg:pr-6">
          
          {/* Top Badges Row */}
          <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-lg">
              <div className="flex text-primary gap-0.5">
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-[#FF6600]" />
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-[#FF6600]" />
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-[#FF6600]" />
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-[#FF6600]" />
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-[#FF6600]" />
              </div>
              <span className="font-extrabold text-white text-[10px] sm:text-xs">4.9</span>
              <span className="text-neutral-650">|</span>
              <span className="text-neutral-300 uppercase tracking-widest font-bold text-[8px] sm:text-[9px]">43 Opiniões Google</span>
            </div>
          </div>

          {/* Premium Editorial Title */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] sm:leading-[1.0] text-white mb-4 sm:mb-6 font-display uppercase tracking-tight drop-shadow-md">
            {t("hero.title1")} <br />
            <span className="text-primary font-display italic font-light tracking-wide">{t("hero.title2")}</span>
          </h1>

          <div className="w-16 sm:w-24 h-[2px] bg-primary mb-4 sm:mb-6 shadow-sm"></div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-200 max-w-2xl mb-6 sm:mb-8 md:mb-12 leading-relaxed font-normal drop-shadow">
            {t("hero.subtitle")}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8">
            <a
              href="#produtos"
              className="bg-primary hover:bg-[#E05300] text-white px-6 py-3.5 sm:px-9 sm:py-4 rounded-none font-bold text-center transition-all duration-300 flex items-center justify-center gap-2.5 text-xs uppercase tracking-widest shadow-xl hover:shadow-primary/20 active:scale-[0.98] border border-primary cursor-pointer"
            >
              {t("hero.cta")}
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="tel:+351935141143"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-3.5 sm:px-9 sm:py-4 rounded-none font-bold text-center transition-all duration-300 flex items-center justify-center gap-2.5 text-xs uppercase tracking-widest border border-white/30 cursor-pointer active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-primary" />
              935 141 143
            </a>
          </div>

          {/* Brands bar bottom */}
          <div className="pt-4 sm:pt-6 border-t border-white/15 w-full flex flex-wrap items-center justify-center sm:justify-between gap-3 text-[10px] sm:text-xs text-neutral-450">
            <span className="uppercase tracking-widest text-[8px] sm:text-[9px] font-bold text-neutral-450">Marcas Oficiais:</span>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 font-semibold text-neutral-300">
              <span className="hover:text-primary transition-colors">NEOVOLT</span>
              <span className="text-neutral-700">•</span>
              <span className="hover:text-primary transition-colors">VOLTRISH</span>
              <span className="text-neutral-700">•</span>
              <span className="hover:text-primary transition-colors">VORTEX</span>
              <span className="text-neutral-700">•</span>
              <span className="hover:text-primary transition-colors">SEVENTEEN</span>
              <span className="text-neutral-700">•</span>
              <span className="hover:text-primary transition-colors">RAIDER</span>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Highlights & Tech Specs Box */}
        <div className="lg:col-span-4 relative reveal-slide-right hidden lg:flex flex-col gap-4">
          <div className="bg-neutral-900/90 backdrop-blur-xl border border-neutral-700/80 p-6 shadow-2xl rounded-none text-left">
            <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest mb-3">
              <Zap className="w-4 h-4" /> Mobilidade Elétrica Sustentável
            </div>
            <p className="text-neutral-300 text-xs leading-relaxed mb-4">
              Explore a nossa gama completa de motos, scooters e quadriciclos elétricos. Opções para condução com ou sem carta de condução.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-800 text-[10px]">
              <div>
                <span className="text-neutral-400 block font-bold uppercase">Garantia</span>
                <span className="text-white font-extrabold">3 Anos de Fábrica</span>
              </div>
              <div>
                <span className="text-neutral-400 block font-bold uppercase">Oficina</span>
                <span className="text-white font-extrabold">Assistência Direta</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/95 text-white p-5 border border-primary/50 shadow-xl flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 flex-shrink-0 text-white" />
            <div className="text-left">
              <span className="text-[10px] font-black uppercase tracking-widest block text-white/90">Aconselhamento Personalizado</span>
              <span className="text-xs font-bold text-white">Visite a nossa loja na EN109 em Guia</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
