import { ShieldCheck, BatteryCharging, Wrench, Settings } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("about.feat1.title"),
      desc: t("about.feat1.desc"),
      icon: <Settings className="w-4 h-4 text-primary" />
    },
    {
      title: t("about.feat2.title"),
      desc: t("about.feat2.desc"),
      icon: <BatteryCharging className="w-4 h-4 text-primary" />
    },
    {
      title: t("about.feat3.title"),
      desc: t("about.feat3.desc"),
      icon: <Wrench className="w-4 h-4 text-primary" />
    }
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-white text-[#111111] relative border-b border-neutral-200/50">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        
        {/* Left 5 Columns: Sleek Framed Workshop Image */}
        <div className="lg:col-span-5 relative reveal-slide-left w-full flex justify-center">
          <div className="relative p-2.5 bg-[#FCFBFA] border border-neutral-200 shadow-md w-full max-w-[450px]">
            <div className="border border-neutral-200 overflow-hidden relative">
              <img
                src="/images/route109_about.webp"
                alt="Oficina Route N109 - Assistência Técnica"
                className="w-full h-[320px] sm:h-[400px] object-cover hover:scale-102 transition-transform duration-700"
                width="500"
                height="400"
              />
            </div>
            {/* Caption style under image */}
            <div className="mt-2 text-[9px] uppercase tracking-widest text-neutral-400 font-bold text-center">
              Centro Técnico de Diagnóstico e Reparação Eletrónica
            </div>
          </div>

          {/* Floating Minimal Stamp (High Contrast Round Badge) */}
          <div className="absolute -bottom-4 -right-4 bg-neutral-950 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center border border-neutral-800 shadow-xl z-20">
            <ShieldCheck className="w-5 h-5 text-primary mb-1 animate-pulse" />
            <span className="text-[8px] font-black uppercase tracking-widest text-center leading-none">Oficina</span>
            <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-widest text-center mt-0.5">Certificada</span>
          </div>
        </div>

        {/* Right 7 Columns: Text & Clean Editorial Services */}
        <div className="lg:col-span-7 flex flex-col items-start text-left reveal-slide-right z-10">
          <span className="text-primary font-bold uppercase text-[10px] tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full mb-6">
            {t("about.badge")}
          </span>
          
          <h2 className="text-4xl md:text-5xl font-normal text-neutral-950 font-display tracking-tight leading-[1.1] mb-6 uppercase">
            {t("about.title")}
          </h2>
          
          <p className="text-primary font-bold mb-4 text-xs uppercase tracking-widest">
            {t("about.subtitle")}
          </p>
          
          <p className="text-neutral-600 leading-relaxed mb-4 text-sm md:text-base">
            {t("about.paragraph1")}
          </p>
          <p className="text-neutral-600 leading-relaxed mb-12 text-sm md:text-base">
            {t("about.paragraph2")}
          </p>

          {/* Clean List with fine dividers (instead of rounded box cards) */}
          <div className="w-full border-t border-neutral-200/80">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex items-start gap-6 py-5 border-b border-neutral-200/80 group transition-colors duration-250 hover:bg-neutral-50/50 px-2"
              >
                {/* Visual numbering */}
                <span className="font-display text-2xl font-normal text-primary/30 group-hover:text-primary transition-colors duration-300 leading-none pt-0.5">
                  0{idx + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-neutral-950 text-sm uppercase tracking-wider mb-1 flex items-center gap-2">
                    <span className="opacity-60 group-hover:opacity-100 transition-opacity">{service.icon}</span>
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-500 leading-relaxed max-w-xl">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
