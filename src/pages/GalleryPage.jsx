import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Maximize2, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { galleryImages } from "../data/galleryData";

export default function GalleryPage() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImageIdx, setSelectedImageIdx] = useState(null); // Index relative to active filtered list
  
  const prefix = language === "pt" ? "" : `/${language}`;

  useEffect(() => {
    const titles = {
      pt: "Galeria de Projetos & Mecânica | Route N109",
      en: "Projects & Mechanical Gallery | Route N109",
      es: "Galería de Proyectos & Mecánica | Route N109",
      fr: "Galerie de Projets & Mécanique | Route N109",
      de: "Projekte & Werkstatt-Galerie | Route N109"
    };
    document.title = titles[language] || titles.pt;
  }, [language]);

  const filters = [
    { id: "all", label: t("gallery.filter.all") },
    { id: "e-bike", label: t("gallery.filter.ebike") },
    { id: "montanha", label: t("gallery.filter.mountain") },
    { id: "estrada", label: t("gallery.filter.road") },
    { id: "oficina", label: t("gallery.filter.workshop") }
  ];

  // Filtered list of images
  const filteredImages = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  // Lightbox navigation
  const openLightbox = useCallback((index) => {
    setSelectedImageIdx(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImageIdx(null);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedImageIdx === null) return;
    setSelectedImageIdx((prevIdx) => (prevIdx + 1) % filteredImages.length);
  }, [selectedImageIdx, filteredImages.length]);

  const prevImage = useCallback(() => {
    if (selectedImageIdx === null) return;
    setSelectedImageIdx((prevIdx) => (prevIdx - 1 + filteredImages.length) % filteredImages.length);
  }, [selectedImageIdx, filteredImages.length]);

  // Prevent scroll when modal open
  useEffect(() => {
    if (selectedImageIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImageIdx]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIdx, closeLightbox, nextImage, prevImage]);

  const handleRequestQuote = (image) => {
    closeLightbox();
    const titleText = t(image.titleKey);
    navigate(`${prefix}/servicos?bikeModel=${encodeURIComponent("Galeria: " + titleText)}`);
  };

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 text-left">
      
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
          <div className="text-center max-w-3xl mx-auto mb-12 animate-menu-fade">
            <span className="text-primary font-black uppercase text-xs tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block">
              {t("nav.gallery")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-none mb-6 uppercase text-neutral-900">
              {t("gallery.pageTitle")}
            </h1>
            <p className="text-neutral-500 font-normal text-sm md:text-base leading-relaxed">
              {t("gallery.pageSubtitle")}
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setActiveFilter(f.id);
                  closeLightbox(); // Close if open to prevent index out of bounds
                }}
                className={`px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                  activeFilter === f.id
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 cursor-pointer shadow-sm hover:shadow-lg hover:border-neutral-300 transition-all duration-500"
              >
                {/* Photo */}
                <img
                  src={img.url}
                  alt={t(img.titleKey)}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6 text-white z-20">
                  <div className="flex justify-end">
                    <Maximize2 className="w-5 h-5 text-white/75" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-wide font-display text-white mb-2 leading-tight">
                      {t(img.titleKey)}
                    </h3>
                    <p className="text-[11px] text-neutral-300 font-semibold line-clamp-3 leading-relaxed">
                      {t(img.descKey)}
                    </p>
                  </div>
                </div>

                {/* Inside frame accent */}
                <div className="absolute inset-2 border border-white/5 rounded-xl pointer-events-none z-10" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIdx !== null && (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50 p-4 bg-neutral-950/95 backdrop-blur-md animate-fade-in">
          {/* Backdrop click to close */}
          <div className="absolute inset-0 w-full h-full cursor-default" onClick={closeLightbox} />

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-neutral-400 hover:text-white bg-neutral-900/60 p-3 rounded-full border border-neutral-800 hover:border-neutral-700 transition-colors z-50 cursor-pointer"
            aria-label={t("gallery.lightbox.close")}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white bg-neutral-900/60 p-3 rounded-full border border-neutral-800 hover:border-neutral-700 transition-colors z-40 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white bg-neutral-900/60 p-3 rounded-full border border-neutral-800 hover:border-neutral-700 transition-colors z-40 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Container */}
          <div className="relative w-full max-w-4xl flex flex-col items-center justify-center z-30 pointer-events-none">
            
            {/* Image Frame */}
            <div className="bg-neutral-950 flex items-center justify-center max-h-[60vh] md:max-h-[70vh] rounded-t-2xl overflow-hidden p-2 select-none pointer-events-auto">
              <img
                src={filteredImages[selectedImageIdx].url}
                alt={t(filteredImages[selectedImageIdx].titleKey)}
                className="max-h-full max-w-full object-contain rounded-lg drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Description & Action Footer (White/Gray card) */}
            <div className="bg-neutral-900 text-white w-full p-6 md:p-8 rounded-b-2xl border-t border-neutral-800 text-left pointer-events-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <span className="text-primary font-black uppercase text-[9px] tracking-widest bg-primary/10 px-2 py-0.5 rounded inline-block mb-2">
                  {t("gallery.filter." + filteredImages[selectedImageIdx].category.replace("-", ""))}
                </span>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-white mb-2 leading-none font-display">
                  {t(filteredImages[selectedImageIdx].titleKey)}
                </h3>
                <p className="text-xs text-neutral-400 font-semibold leading-relaxed">
                  {t(filteredImages[selectedImageIdx].descKey)}
                </p>
              </div>

              <button
                onClick={() => handleRequestQuote(filteredImages[selectedImageIdx])}
                className="bg-primary hover:bg-red-700 text-white py-3 px-6 rounded-lg font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-colors cursor-pointer w-full md:w-auto justify-center shadow-lg border-none"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                {t("gallery.lightbox.cta")}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
