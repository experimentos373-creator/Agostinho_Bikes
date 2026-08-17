import { Link } from "react-router-dom";
import { Image, ArrowRight, Maximize2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { galleryImages } from "../data/galleryData";

export default function Gallery() {
  const { t, language } = useLanguage();
  const prefix = language === "pt" ? "" : `/${language}`;
  
  // Show exactly the 4 requested featured photos in the homepage preview
  const targetUrls = [
    "/images/bikes/WhatsApp Image 2026-07-08 at 19.42.28.webp",
    "/images/bikes/WhatsApp Image 2026-07-08 at 19.43.53.webp",
    "/images/bikes/WhatsApp Image 2026-07-08 at 19.38.08.webp",
    "/images/bikes/WhatsApp Image 2026-07-08 at 19.40.13 (1).webp"
  ];
  
  const previewImages = targetUrls
    .map(url => galleryImages.find(img => img.url === url))
    .filter(Boolean);

  return (
    <section id="galeria" className="py-16 md:py-28 bg-white relative border-b border-neutral-200 text-left">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="reveal-slide-up mb-16 text-center">
          <span className="text-primary font-extrabold uppercase text-xs tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-6 inline-block">
            {t("nav.gallery")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 font-display tracking-tight leading-none mb-4 uppercase">
            {t("gallery.pageTitle")}
          </h2>
          <p className="text-neutral-500 font-normal max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            {language === "en" 
              ? "Take a look at our latest custom builds, high-performance tuning, and specialized mechanical work."
              : "Veja uma amostra das nossas últimas montagens à carta, afinações e trabalhos especializados de oficina."}
          </p>
        </div>

        {/* 4-Image Grid Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {previewImages.map((img, idx) => (
            <Link
              key={img.id}
              to={`${prefix}/galeria`}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 block reveal-slide-up"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Photo */}
              <img
                src={img.url}
                alt={t(img.titleKey)}
                loading="lazy"
                width="300"
                height="300"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-neutral-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white text-left z-20">
                <div className="flex justify-end">
                  <Maximize2 className="w-4 h-4 text-white/80" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-white mb-1.5 font-display">
                    {t(img.titleKey)}
                  </h3>
                  <p className="text-[10px] text-neutral-300 font-medium line-clamp-2 leading-relaxed">
                    {t(img.descKey)}
                  </p>
                </div>
              </div>
              
              <div className="absolute inset-2 border border-white/5 rounded-xl pointer-events-none z-10" />
            </Link>
          ))}
        </div>

        {/* Full Gallery CTA Button */}
        <div className="text-center reveal-slide-up">
          <Link
            to={`${prefix}/galeria`}
            className="inline-flex items-center gap-3 bg-neutral-950 hover:bg-primary text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg spring-hover"
          >
            <Image className="w-4 h-4" />
            <span>{language === "en" ? "View Full Gallery" : "Ver Galeria Completa"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
