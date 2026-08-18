import { ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();
  const prefix = language === "pt" ? "" : `/${language}`;

  const features = [
    {
      title: t("about.feat1.title"),
      desc: t("about.feat1.desc")
    },
    {
      title: t("about.feat2.title"),
      desc: t("about.feat2.desc")
    },
    {
      title: t("about.feat3.title"),
      desc: t("about.feat3.desc")
    }
  ];

  return (
    <section id="sobre" className="py-16 md:py-28 bg-white relative overflow-hidden border-b border-neutral-100">
      {/* Subtle geometric line art background */}
      <div className="absolute right-0 top-0 w-1/3 h-full border-l border-neutral-100 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Images stacked in an overlapping magazine layout */}
        <div className="lg:col-span-6 relative h-[420px] sm:h-[500px] flex items-center justify-center reveal-slide-left z-10">
          
          {/* Main Large Image (Fit Alignment) */}
          <div className="absolute top-[5%] left-[5%] w-[68%] h-[75%] border border-neutral-200 overflow-hidden rounded-2xl shadow-lg bg-neutral-100">
            <img
              src="/images/bikes/WhatsApp Image 2026-07-08 at 19.33.41.webp"
              alt="Montagem personalizada e biomecânica na Agostinho BIKES"
              fetchPriority="high"
              className="w-full h-full object-cover transition-all duration-700"
              width="500"
              height="375"
            />
          </div>

          {/* Overlapping Image (Workshop) */}
          <div className="absolute bottom-[5%] right-[5%] w-[48%] h-[48%] border-4 border-white z-20 overflow-hidden rounded-xl shadow-2xl">
            <img
              src="/images/about/santa_cruz_workshop.webp"
              alt="Mecânica de alta performance e E-Bikes"
              className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-500"
              width="300"
              height="300"
            />
          </div>

          {/* Floating Certified Badge */}
          <div className="absolute top-[12%] right-[8%] bg-neutral-900 text-white p-5 rounded-2xl border border-neutral-800 z-30 shadow-lg text-center flex flex-col justify-center items-center w-36 h-36">
            <ShieldCheck className="w-8 h-8 text-primary mb-2 slow-blink" />
            <span className="text-sm font-extrabold font-display block uppercase tracking-tight">Agostinho BIKES</span>
            <span className="text-[8px] text-neutral-400 uppercase tracking-widest mt-1">
              {t("about.since")}
            </span>
          </div>
        </div>

        {/* Text Details & Features */}
        <div className="lg:col-span-6 flex flex-col items-start text-left reveal-slide-right">
          <span className="text-red-700 font-extrabold uppercase text-xs tracking-widest bg-red-50 border border-red-200/60 px-4 py-1.5 rounded-full mb-6">
            {t("about.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 font-display tracking-tight leading-[1.05] mb-6 uppercase">
            {t("about.title")}
          </h2>
          <p className="text-neutral-500 font-bold mb-6 text-base font-display uppercase tracking-wide">
            {t("about.subtitle")}
          </p>
          <p className="text-neutral-600 font-normal leading-relaxed mb-4 text-base">
            {t("about.paragraph1")}
          </p>
          <p className="text-neutral-600 font-normal leading-relaxed mb-10 text-base">
            {t("about.paragraph2")}
          </p>

          {/* Highlights Editorial List */}
          <div className="w-full border-t border-neutral-200">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-6 py-5 border-b border-neutral-100 group transition-colors duration-300"
              >
                <span className="font-display text-3xl font-black text-primary/30 group-hover:text-primary transition-colors duration-300 leading-none pt-1">
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

          {/* CTA Link to separate page */}
          <div className="mt-8">
            <Link
              to={`${prefix}/empresa`}
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-primary hover:text-white text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 spring-hover shadow-md border-none"
            >
              <span>{language === "en" ? "Learn More About Us" : "Saber Mais Sobre Nós"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
