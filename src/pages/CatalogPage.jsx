import { useState, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, X, Phone, Maximize2, Search, ZoomIn, ZoomOut, RefreshCw, SlidersHorizontal, Heart, Filter, Zap, Battery, Cpu, Wrench, Circle, Shield, Activity, Gauge, TrendingUp, Info, Compass, MapPin, Mountain, Trees, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { bikes } from "../data/bikesData";

export default function CatalogPage() {
  const { t, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const brandFilter = searchParams.get("marca");
  const categoryFilter = searchParams.get("categoria");
  const bikeFilter = searchParams.get("bike");
  const [searchQuery, setSearchQuery] = useState("");

  const [priceFilter, setPriceFilter] = useState("all");
  const [materialFilter, setMaterialFilter] = useState("all");
  const [motorFilter, setMotorFilter] = useState("all");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [showCategoryFilters, setShowCategoryFilters] = useState(false);

  const filterTexts = {
    advancedFilters: {
      pt: "Filtros Avançados", en: "Advanced Filters", es: "Filtros Avanzados", fr: "Filtres Avancés", de: "Erweiterte Filter"
    },
    clearFilters: {
      pt: "Limpar Filtros", en: "Clear Filters", es: "Limpiar Filtros", fr: "Effacer les Filtres", de: "Filter löschen"
    },
    price: {
      pt: "Preço", en: "Price", es: "Precio", fr: "Prix", de: "Preis"
    },
    priceAll: {
      pt: "Todos os Preços", en: "All Prices", es: "Todos los precios", fr: "Tous les prix", de: "Alle Preise"
    },
    under1200: {
      pt: "Até 1.200 €", en: "Under 1,200 €", es: "Hasta 1.200 €", fr: "Jusqu'à 1 200 €", de: "Unter 1.200 €"
    },
    between1200and1600: {
      pt: "1.200 € - 1.600 €", en: "1,200 € - 1,600 €", es: "1.200 € - 1.600 €", fr: "1 200 € - 1 600 €", de: "1.200 € - 1.600 €"
    },
    over1600: {
      pt: "Mais de 1.600 €", en: "Over 1,600 €", es: "Más de 1.600 €", fr: "Plus de 1 600 €", de: "Über 1.600 €"
    },
    motor: {
      pt: "Potência do Motor", en: "Motor Power", es: "Potencia del motor", fr: "Puissance du moteur", de: "Motorleistung"
    },
    motorAll: {
      pt: "Todas as Potências", en: "All Power Levels", es: "Todas las potencias", fr: "Toutes les puissances", de: "Alle Leistungsstufen"
    },
    motor250w: {
      pt: "250W (Sem Carta)", en: "250W (No License)", es: "250W (Sin Carnet)", fr: "250W (Sans Permis)", de: "250W (Ohne Führerschein)"
    },
    motorHigh: {
      pt: "Alta Potência (1000W+)", en: "High Power (1000W+)", es: "Alta Potencia (1000W+)", fr: "Haute Puissance (1000W+)", de: "Hohe Leistung (1000W+)"
    },
    frame: {
      pt: "Voltagem / Bateria", en: "Battery Voltage", es: "Voltaje / Batería", fr: "Tension / Batterie", de: "Spannung / Batterie"
    },
    frameAll: {
      pt: "Todas as Baterias", en: "All Batteries", es: "Todas las baterías", fr: "Toutes les batteries", de: "Alle Batterietypen"
    },
    battery60v: {
      pt: "60 Volts", en: "60 Volts", es: "60 Voltios", fr: "60 Volts", de: "60 Volt"
    },
    battery72v: {
      pt: "72 Volts", en: "72 Volts", es: "72 Voltios", fr: "72 Volts", de: "72 Volt"
    }
  };

  const getFilterText = (key) => {
    return filterTexts[key]?.[language] || filterTexts[key]?.pt || "";
  };

  const activeFilter = categoryFilter || "all";
  const activeBrand = brandFilter || "all";
  const selectedBike = bikeFilter ? bikes.find(b => b.id === bikeFilter) : null;

  const baseScale = 1.1;
  const zoomSteps = [1.0, 1.1, 1.25, 1.5];

  const getCurrentStepIndex = () => {
    let closestIdx = 0;
    let minDiff = Infinity;
    zoomSteps.forEach((step, idx) => {
      const diff = Math.abs((scale / baseScale) - step);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });
    return closestIdx;
  };

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("route109_favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("route109_favorites", JSON.stringify(favorites));
    window.dispatchEvent(new Event("favorites_updated"));
  }, [favorites]);

  const toggleFavorite = (id, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  // Fullscreen Image States
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);
  const [fullscreenScale, setFullscreenScale] = useState(1);
  const [fullscreenPosition, setFullscreenPosition] = useState({ x: 0, y: 0 });
  const [isFullscreenDragging, setIsFullscreenDragging] = useState(false);
  const [fullscreenDragStart, setFullscreenDragStart] = useState({ x: 0, y: 0 });



  const [activeTab, setActiveTab] = useState("specs");
  
  // Interactive Zoom & Pan states
  const [scale, setScale] = useState(baseScale);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const prefix = language === "pt" ? "" : `/${language}`;

  const closeModal = useCallback(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("bike");
    setSearchParams(newParams);
    setActiveTab("specs");
    setScale(baseScale);
    setPosition({ x: 0, y: 0 });
  }, [searchParams, setSearchParams, baseScale]);

  // Prevent scroll when modal or fullscreen is open
  useEffect(() => {
    if (selectedBike || isFullscreenImage) {
      document.body.classList.add("overflow-hidden", "h-screen");
      document.documentElement.classList.add("overflow-hidden", "h-screen");
    } else {
      document.body.classList.remove("overflow-hidden", "h-screen");
      document.documentElement.classList.remove("overflow-hidden", "h-screen");
    }
    return () => {
      document.body.classList.remove("overflow-hidden", "h-screen");
      document.documentElement.classList.remove("overflow-hidden", "h-screen");
    };
  }, [selectedBike, isFullscreenImage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  const handleMouseDown = (e) => {
    if (scale <= baseScale) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || scale <= baseScale) return;
    e.preventDefault();
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    const maxDragX = (scale - baseScale) * 205;
    const maxDragY = (scale - baseScale) * 155;
    const constrainedX = Math.max(-maxDragX, Math.min(maxDragX, newX));
    const constrainedY = Math.max(-maxDragY, Math.min(maxDragY, newY));
    
    setPosition({ x: constrainedX, y: constrainedY });
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (scale <= baseScale || e.touches.length !== 1) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || scale <= baseScale || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const newX = touch.clientX - dragStart.x;
    const newY = touch.clientY - dragStart.y;
    
    const maxDragX = (scale - baseScale) * 205;
    const maxDragY = (scale - baseScale) * 155;
    const constrainedX = Math.max(-maxDragX, Math.min(maxDragX, newX));
    const constrainedY = Math.max(-maxDragY, Math.min(maxDragY, newY));
    
    setPosition({ x: constrainedX, y: constrainedY });
  };

  const handleDoubleClick = () => {
    if (scale > baseScale) {
      setScale(baseScale);
      setPosition({ x: 0, y: 0 });
    } else {
      setScale(baseScale * 1.5);
      setPosition({ x: 0, y: 0 });
    }
  };

  const getRatingDetails = (val) => {
    if (val <= 20) return { level: 1, color: "bg-red-500", label: t("catalog.stats.level.poor") };
    if (val <= 40) return { level: 2, color: "bg-orange-500", label: t("catalog.stats.level.fair") };
    if (val <= 60) return { level: 3, color: "bg-yellow-500", label: t("catalog.stats.level.good") };
    if (val <= 80) return { level: 4, color: "bg-lime-500", label: t("catalog.stats.level.verygood") };
    return { level: 5, color: "bg-emerald-500", label: t("catalog.stats.level.excellent") };
  };

  const handleRequestQuote = () => {
    const bikeModel = selectedBike.name;
    let message = `Estou interessado no veículo ${bikeModel}`;
    if (language === "en") {
      message = `I am interested in the vehicle ${bikeModel}`;
    } else if (language === "es") {
      message = `Estoy interesado en el vehículo ${bikeModel}`;
    } else if (language === "fr") {
      message = `Je suis intéressé par le véhicule ${bikeModel}`;
    } else if (language === "de") {
      message = `Ich interessiere mich für das Fahrzeug ${bikeModel}`;
    }
    const whatsappUrl = `https://wa.me/351935141143?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Dynamic page title
  useEffect(() => {
    const titles = {
      pt: "Catálogo de Veículos | Route N109",
      en: "Vehicle Catalog | Route N109",
      es: "Catálogo de Vehículos | Route N109",
      fr: "Catalogue de Véhicules | Route N109",
      de: "Fahrzeugkatalog | Route N109"
    };
    document.title = titles[language] || titles.pt;
  }, [language]);

  const categories = [
    { id: "all", label: language === "pt" ? "Todos os Veículos" : language === "es" ? "Todos los Vehículos" : language === "fr" ? "Tous les Véhicules" : language === "de" ? "Alle Fahrzeuge" : "All Vehicles" },
    { id: "e-scooter", label: language === "pt" ? "Scooters & Velocípedes" : language === "es" ? "Scooters y Ciclomotores" : language === "fr" ? "Scooters Électriques" : language === "de" ? "Elektroroller" : "Electric Scooters" },
    { id: "e-trike", label: language === "pt" ? "Triciclos & Mobilidade" : language === "es" ? "Triciclos y Movilidad" : language === "fr" ? "Tricycles & Mobilité" : language === "de" ? "Mobilitätsdreiräder" : "Trikes & Mobility" },
    { id: "e-trotineta", label: language === "pt" ? "Trotinetas" : language === "es" ? "Patinetes" : language === "fr" ? "Trottinettes" : language === "de" ? "Tretroller" : "Kick Scooters" },
    { id: "e-moto", label: language === "pt" ? "Motos Elétricas" : language === "es" ? "Motos Eléctricas" : language === "fr" ? "Motos Électriques" : language === "de" ? "Elektromotorräder" : "Electric Motorcycles" }
  ];

  let filteredBikes = bikes;
  if (activeFilter !== "all") {
    if (activeFilter === "favoritos") {
      filteredBikes = filteredBikes.filter(b => favorites.includes(b.id));
    } else {
      filteredBikes = filteredBikes.filter(b => b.category === activeFilter);
    }
  }
  if (activeBrand !== "all") {
    filteredBikes = filteredBikes.filter(b => b.brandSlug === activeBrand);
  }

  // Price Filter
  if (priceFilter === "under1200") {
    filteredBikes = filteredBikes.filter(b => b.price <= 1200);
  } else if (priceFilter === "1200to1600") {
    filteredBikes = filteredBikes.filter(b => b.price > 1200 && b.price <= 1600);
  } else if (priceFilter === "over1600") {
    filteredBikes = filteredBikes.filter(b => b.price > 1600);
  }

  // Battery Filter (60V vs 72V vs all)
  if (materialFilter === "battery60v") {
    filteredBikes = filteredBikes.filter(b => 
      (b.name && b.name.toLowerCase().includes("60v")) ||
      (b.specs.battery && b.specs.battery.toLowerCase().includes("60")) ||
      b.tags.some(t => t.toLowerCase().includes("60v"))
    );
  } else if (materialFilter === "battery72v") {
    filteredBikes = filteredBikes.filter(b => 
      (b.name && b.name.toLowerCase().includes("72v")) ||
      (b.specs.battery && b.specs.battery.toLowerCase().includes("72")) ||
      b.tags.some(t => t.toLowerCase().includes("72v"))
    );
  }

  // Motor Filter
  if (motorFilter === "motor250w") {
    filteredBikes = filteredBikes.filter(b => {
      const motorDesc = (b.specs.motor || "").toLowerCase();
      const tagsDesc = b.tags.join(" ").toLowerCase();
      return motorDesc.includes("250w") || tagsDesc.includes("sem carta");
    });
  } else if (motorFilter === "motorHigh") {
    filteredBikes = filteredBikes.filter(b => {
      const motorDesc = (b.specs.motor || "").toLowerCase();
      const tagsDesc = b.tags.join(" ").toLowerCase();
      return motorDesc.includes("1050w") || tagsDesc.includes("alta performance");
    });
  }

  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase();
    filteredBikes = filteredBikes.filter(b => 
      b.name.toLowerCase().includes(q) ||
      b.brand.toLowerCase().includes(q) ||
      b.tags.some(tag => tag.toLowerCase().includes(q)) ||
      (b.specs.motor && b.specs.motor.toLowerCase().includes(q)) ||
      (b.specs.battery && b.specs.battery.toLowerCase().includes(q))
    );
  }

  // Sort popular/starred vehicles first
  const sortedBikes = [...filteredBikes].sort((a, b) => {
    if (a.isStar && !b.isStar) return -1;
    if (!a.isStar && b.isStar) return 1;
    return a.name.localeCompare(b.name);
  });

  const handleCategoryFilterChange = (id) => {
    const newParams = new URLSearchParams(searchParams);
    if (id === "all") {
      newParams.delete("categoria");
    } else {
      newParams.set("categoria", id);
    }
    setSearchParams(newParams);
  };

  const openBikeModal = (bike) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("bike", bike.id);
    setSearchParams(newParams);
    setActiveTab("specs");
    setScale(baseScale);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32">
      {/* Back button */}
      <div className="max-w-[1400px] mx-auto px-6 mb-8">
        <Link to={prefix || "/"} className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" />
          {t("general.backToHome")}
        </Link>
      </div>

      {/* Background & Catalog Layout */}
      <section className="pb-16 md:pb-28 bg-white text-black relative">
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-bold uppercase text-[10px] tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-none mb-4 inline-block">
              {t("menu.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-display tracking-tight leading-none mb-6 uppercase text-neutral-950">
              {t("catalog.pageTitle")}
            </h1>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-6"></div>
            <p className="text-neutral-500 text-sm md:text-base font-normal leading-relaxed">
              {t("catalog.pageSubtitle")}
            </p>
          </div>

          {/* Keyword Search */}
          <div className="max-w-md mx-auto mb-8 bg-white border border-neutral-200 rounded-none px-5 py-3 flex items-center gap-3 shadow-sm hover:border-primary transition-all duration-200">
            <Search className="w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("catalog.search.placeholder")}
              className="bg-transparent text-xs font-medium text-neutral-800 w-full outline-none border-none placeholder-neutral-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-neutral-400 hover:text-neutral-800 transition-colors border-none bg-transparent cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Buttons Row */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              {/* Category Filters Toggle */}
              <button
                onClick={() => { setShowCategoryFilters(!showCategoryFilters); setShowAdvancedFilters(false); }}
                className={`inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-widest rounded-none transition-all duration-205 border cursor-pointer shadow-sm ${
                  showCategoryFilters 
                    ? "bg-primary text-white border-primary" 
                    : "bg-white border-neutral-300 hover:bg-neutral-50 text-neutral-900"
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                {language === "pt" ? "Filtros" : language === "es" ? "Filtros" : language === "fr" ? "Filtres" : language === "de" ? "Filter" : "Filters"}
                {activeFilter !== "all" && activeFilter !== "favoritos" && (
                  <span className={`text-[10px] font-bold rounded-none h-4 w-4 flex items-center justify-center ml-1 ${showCategoryFilters ? "bg-white text-primary" : "bg-primary text-white"}`}>
                    1
                  </span>
                )}
              </button>

              {/* Favorites Toggle */}
              <button
                onClick={() => {
                  const newFilter = activeFilter === "favoritos" ? "all" : "favoritos";
                  handleCategoryFilterChange(newFilter);
                  setShowCategoryFilters(false);
                  setShowAdvancedFilters(false);
                }}
                className={`inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-widest rounded-none transition-all duration-205 border cursor-pointer shadow-sm ${
                  activeFilter === "favoritos" 
                    ? "bg-red-650 text-white border-red-650" 
                    : "bg-white border-neutral-300 hover:bg-neutral-50 text-neutral-900"
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${activeFilter === "favoritos" ? "fill-current text-red-500" : ""}`} />
                {language === "pt" ? "Favoritos" : language === "es" ? "Favoritos" : language === "fr" ? "Favoris" : language === "de" ? "Favoriten" : "Favorites"}
                {favorites.length > 0 && (
                  <span className={`text-[10px] font-bold rounded-none h-4 w-4 flex items-center justify-center ml-1 ${
                    activeFilter === "favoritos" ? "bg-white text-red-500" : "bg-red-500 text-white"
                  }`}>
                    {favorites.length}
                  </span>
                )}
              </button>

              {/* Advanced Filters Toggle */}
              <button
                onClick={() => { setShowAdvancedFilters(!showAdvancedFilters); setShowCategoryFilters(false); }}
                className={`inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-widest rounded-none transition-all duration-205 border cursor-pointer shadow-sm ${
                  showAdvancedFilters 
                    ? "bg-primary text-white border-primary" 
                    : "bg-white border-neutral-300 hover:bg-neutral-50 text-neutral-900"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                {getFilterText("advancedFilters")}
                {(priceFilter !== "all" || materialFilter !== "all" || motorFilter !== "all") && (
                  <span className={`text-[10px] font-bold rounded-none h-4 w-4 flex items-center justify-center ml-1 ${showAdvancedFilters ? "bg-white text-primary" : "bg-primary text-white"}`}>
                    { (priceFilter !== "all" ? 1 : 0) + (materialFilter !== "all" ? 1 : 0) + (motorFilter !== "all" ? 1 : 0) }
                  </span>
                )}
              </button>
            </div>

            {/* Category Filters Panel */}
            {showCategoryFilters && (
              <div className="w-full max-w-2xl mt-6 p-6 bg-[#FCFBFA] border border-neutral-200 rounded-none shadow-sm animate-fade-in text-left">
                <div className="flex justify-between items-center mb-4 border-b border-neutral-200 pb-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-950">
                    {language === "pt" ? "Categoria" : language === "es" ? "Categoría" : language === "fr" ? "Catégorie" : language === "de" ? "Kategorie" : "Category"}
                  </h3>
                  {activeFilter !== "all" && (
                    <button
                      onClick={() => {
                        handleCategoryFilterChange("all");
                      }}
                      className="text-[10px] text-neutral-400 hover:text-red-500 font-extrabold uppercase tracking-wider bg-transparent border-none cursor-pointer transition-colors"
                    >
                      {language === "pt" ? "Limpar" : "Clear"}
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat, idx) => {
                    const isLastOdd = categories.length % 2 !== 0 && idx === categories.length - 1;
                    return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        handleCategoryFilterChange(cat.id);
                        setShowCategoryFilters(false);
                      }}
                      className={`text-center px-3 py-2.5 text-xs font-semibold rounded-none border transition-all duration-200 cursor-pointer ${
                        isLastOdd ? "col-span-2 max-w-[50%] mx-auto" : ""
                      } ${
                        activeFilter === cat.id
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-neutral-600 border-neutral-200 hover:bg-[#FCFBFA] hover:text-neutral-900"
                      }`}
                    >
                      {cat.label}
                    </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Advanced Filters Panel */}
            {showAdvancedFilters && (
              <div className="w-full max-w-4xl mt-6 p-6 bg-[#FCFBFA] border border-neutral-200 rounded-none shadow-sm animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {/* Price Filter */}
                <div>
                  <div className="flex justify-between items-center mb-3 border-b border-neutral-200 pb-1.5">
                    <h3 className="text-xs font-black uppercase tracking-wider text-neutral-800">
                      {getFilterText("price")}
                    </h3>
                    <button
                      onClick={() => {
                        setPriceFilter("all");
                        setMaterialFilter("all");
                        setMotorFilter("all");
                        setSearchQuery("");
                        const newParams = new URLSearchParams(searchParams);
                        newParams.delete("categoria");
                        newParams.delete("marca");
                        setSearchParams(newParams);
                      }}
                      className="text-[10px] text-neutral-400 hover:text-red-500 font-extrabold uppercase tracking-wider bg-transparent border-none cursor-pointer transition-colors"
                    >
                      {language === "pt" ? "Limpar Filtros" : "Clear Filters"}
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      { id: "all", label: getFilterText("priceAll") },
                      { id: "under1200", label: getFilterText("under1200") },
                      { id: "1200to1600", label: getFilterText("between1200and1600") },
                      { id: "over1600", label: getFilterText("over1600") }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setPriceFilter(opt.id)}
                        className={`text-left px-3 py-2 text-xs font-semibold rounded-none border transition-all duration-200 cursor-pointer ${
                          priceFilter === opt.id
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-neutral-600 border-neutral-200 hover:bg-[#FCFBFA] hover:text-neutral-900"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Propulsion Filter */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-neutral-800 mb-3 border-b border-neutral-200 pb-1.5">
                    {getFilterText("motor")}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {[
                      { id: "all", label: getFilterText("motorAll") },
                      { id: "motor250w", label: getFilterText("motor250w") },
                      { id: "motorHigh", label: getFilterText("motorHigh") }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setMotorFilter(opt.id)}
                        className={`text-left px-3 py-2 text-xs font-semibold rounded-none border transition-all duration-200 cursor-pointer ${
                          motorFilter === opt.id
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-neutral-600 border-neutral-200 hover:bg-[#FCFBFA] hover:text-neutral-900"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Battery Voltage Filter */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-neutral-800 mb-3 border-b border-neutral-200 pb-1.5">
                    {getFilterText("frame")}
                  </h3>
                  <div className="flex flex-col gap-2 mb-4">
                    {[
                      { id: "all", label: getFilterText("frameAll") },
                      { id: "battery60v", label: getFilterText("battery60v") },
                      { id: "battery72v", label: getFilterText("battery72v") }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setMaterialFilter(opt.id)}
                        className={`text-left px-3 py-2 text-xs font-semibold rounded-none border transition-all duration-200 cursor-pointer ${
                          materialFilter === opt.id
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-neutral-600 border-neutral-200 hover:bg-[#FCFBFA] hover:text-neutral-900"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  {(priceFilter !== "all" || materialFilter !== "all" || motorFilter !== "all") && (
                    <button
                      onClick={() => {
                        setPriceFilter("all");
                        setMaterialFilter("all");
                        setMotorFilter("all");
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-neutral-900 hover:bg-red-650 text-white text-xs font-bold uppercase tracking-widest rounded-none transition-all duration-200 border-none cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                      {getFilterText("clearFilters")}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Bike Grid — High-fidelity E-commerce Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedBikes.map((bike) => (
              <div
                key={bike.id}
                className="flex flex-col bg-white border border-neutral-200/90 rounded-2xl p-5 text-left group h-full relative product-card-frame overflow-hidden shadow-sm"
              >
                {/* Star Badge */}
                {bike.isStar && (
                  <div className="absolute top-4 left-4 z-10 bg-primary text-white px-3 py-1 text-[9px] font-black uppercase rounded shadow-sm select-none">
                    Destaque
                  </div>
                )}

                {/* Favorite Heart Button */}
                <button
                  onClick={(e) => toggleFavorite(bike.id, e)}
                  className={`absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-md transition-all duration-200 border cursor-pointer shadow-sm ${
                    favorites.includes(bike.id) 
                      ? "bg-red-500/10 text-red-500 border-red-500/30" 
                      : "bg-[#FCFBFA]/85 text-neutral-450 border-neutral-200 hover:text-neutral-800 hover:bg-[#FCFBFA]"
                  }`}
                  aria-label="Toggle Favorite"
                >
                  <Heart className={`w-3.5 h-3.5 ${favorites.includes(bike.id) ? "fill-current text-red-500" : ""}`} />
                </button>

                {/* Product Image Frame */}
                <div 
                  onClick={() => openBikeModal(bike)}
                  className="product-studio-bg card-studio-aura border border-neutral-100/90 rounded-xl aspect-[4/3] flex items-center justify-center relative overflow-hidden mb-5 cursor-pointer p-5 group-hover:border-primary/20 transition-colors"
                >
                  <img
                    src={bike.image}
                    alt={bike.name}
                    loading="lazy"
                    className="max-w-[92%] max-h-[92%] object-contain vehicle-drop-shadow group-hover:scale-106"
                  />
                </div>

                {/* Product Title */}
                <h2 
                  onClick={() => openBikeModal(bike)}
                  className="text-[14px] font-black text-neutral-950 font-display group-hover:text-primary transition-colors cursor-pointer mb-3 uppercase tracking-tight line-clamp-1"
                >
                  {bike.name}
                </h2>

                {/* Price Section */}
                <div className="flex flex-wrap items-baseline gap-2 mb-5">
                  <span className="text-primary font-black text-xl sm:text-2xl">
                    {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(bike.price)}
                  </span>
                </div>

                {/* Specs Grid (3 spec cards at the bottom) */}
                <div className="grid grid-cols-3 gap-1.5 pt-3 border-t border-neutral-100 mt-auto">
                  <div className="bg-[#F8F9FA] rounded-lg p-1.5 flex flex-col items-center justify-center text-center border border-neutral-100 min-w-0">
                    <Zap className="w-3.5 h-3.5 text-primary mb-1 flex-shrink-0" />
                    <span className="text-[7px] text-neutral-400 uppercase tracking-wider font-bold block mb-0.5">Motor</span>
                    <span className="text-neutral-800 font-extrabold text-[9px] block truncate max-w-full leading-none">{bike.powerNominal}</span>
                  </div>
                  <div className="bg-[#F8F9FA] rounded-lg p-1.5 flex flex-col items-center justify-center text-center border border-neutral-100 min-w-0">
                    <Gauge className="w-3.5 h-3.5 text-primary mb-1 flex-shrink-0" />
                    <span className="text-[7px] text-neutral-400 uppercase tracking-wider font-bold block mb-0.5">Velocidade</span>
                    <span className="text-neutral-800 font-extrabold text-[9px] block truncate max-w-full leading-none">{bike.maxSpeed}</span>
                  </div>
                  <div className="bg-[#F8F9FA] rounded-lg p-1.5 flex flex-col items-center justify-center text-center border border-neutral-100 min-w-0">
                    <Battery className="w-3.5 h-3.5 text-primary mb-1 flex-shrink-0" />
                    <span className="text-[7px] text-neutral-400 uppercase tracking-wider font-bold block mb-0.5">Autonomia</span>
                    <span className="text-neutral-800 font-extrabold text-[9px] block truncate max-w-full leading-none">{bike.autonomy}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredBikes.length === 0 && (
            <div className="text-center py-16 max-w-md mx-auto">
              <p className="text-neutral-500 text-sm font-semibold leading-relaxed">
                {activeFilter === "favoritos" ? (
                  language === "pt" ? "Ainda não adicionou nenhuma bicicleta aos favoritos. Clique no ícone de coração ❤️ para guardar os seus modelos preferidos!" :
                  language === "es" ? "Aún no has añadido ninguna bicicleta a favoritos. ¡Haz clic en el icono de corazón ❤️ para guardar tus modelos favoritos!" :
                  language === "fr" ? "Vous n'avez pas encore ajouté de vélo à vos favoris. Cliquez sur l'icône de cœur ❤️ pour enregistrer vos modèles préférés !" :
                  language === "de" ? "Sie haben noch keine Fahrräder zu den Favoriten hinzugefügt. Klicken Sie auf das Herzsymbol ❤️, um Ihre Lieblingsmodelle zu speichern!" :
                  "You haven't added any bikes to favorites yet. Click the heart icon ❤️ to save your favorite models!"
                ) : (
                  language === "en" ? "No bikes found with the selected filters." : "Nenhuma bicicleta encontrada com os filtros selecionados."
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modern Compact Single-Screen Modal with Specs & Performance Stats Tabs */}
      {selectedBike && (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50 p-4 sm:p-6 md:p-8 animate-fade-in bg-neutral-950/70 backdrop-blur-sm">
          <div className="absolute inset-0 w-full h-full cursor-default" onClick={closeModal} />
          
          {/* Main Modal Box */}
          <div className="bg-white text-neutral-900 border border-neutral-200 w-full max-w-6xl rounded-none shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:h-[620px] animate-scale-up">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-900 bg-neutral-100 p-2 rounded-none border border-neutral-200 transition-colors z-20 cursor-pointer"
              aria-label={t("catalog.modal.close")}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Frame */}
            <div className="w-full md:w-[60%] product-studio-bg flex items-center justify-center p-2 sm:p-4 border-b md:border-b-0 md:border-r border-neutral-200/60 h-[30vh] min-h-[220px] sm:h-[280px] md:h-full relative overflow-hidden group select-none shrink-0">
              {/* Expand to Fullscreen Button */}
              <button
                onClick={() => setIsFullscreenImage(true)}
                className="absolute top-3 left-3 bg-neutral-950 hover:bg-primary text-white p-2 rounded-none border-none transition-all duration-300 z-10 cursor-pointer flex items-center justify-center shadow-lg"
                title="Expand Image"
                aria-label="Expand Image to Fullscreen"
              >
                <Maximize2 className="w-4 h-4 text-white" />
              </button>

              <div 
                className="w-full h-full flex items-center justify-center overflow-hidden cursor-default relative p-4"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUpOrLeave}
                onDoubleClick={handleDoubleClick}
              >
                <img 
                  src={selectedBike.image} 
                  alt={selectedBike.name} 
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    transformOrigin: "center center",
                    transition: isDragging ? "none" : "transform 0.2s ease-out"
                  }}
                  className={`max-h-[105%] max-w-[105%] md:max-h-[90%] md:max-w-[90%] object-contain select-none vehicle-drop-shadow ${
                    scale > baseScale ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"
                  }`}
                  draggable="false"
                />
              </div>

              {/* Floating Zoom Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1 bg-white border border-neutral-200 rounded-none px-3 py-1.5 shadow-lg z-10">
                <button
                  onClick={() => {
                    const currentIdx = getCurrentStepIndex();
                    if (currentIdx > 0) {
                      const nextStep = zoomSteps[currentIdx - 1];
                      const nextScale = baseScale * nextStep;
                      setScale(nextScale);
                      if (nextStep === 1.0) setPosition({ x: 0, y: 0 });
                    }
                  }}
                  disabled={getCurrentStepIndex() === 0}
                  className="w-7 h-7 flex items-center justify-center rounded-none bg-neutral-100 hover:bg-neutral-250 text-neutral-800 cursor-pointer transition-colors border-none text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-bold text-neutral-600 min-w-10 text-center uppercase tracking-widest select-none font-sans">
                  {Math.round(zoomSteps[getCurrentStepIndex()] * 100)}%
                </span>
                <button
                  onClick={() => {
                    const currentIdx = getCurrentStepIndex();
                    if (currentIdx < zoomSteps.length - 1) {
                      const nextStep = zoomSteps[currentIdx + 1];
                      const nextScale = baseScale * nextStep;
                      setScale(nextScale);
                    }
                  }}
                  disabled={getCurrentStepIndex() === zoomSteps.length - 1}
                  className="w-7 h-7 flex items-center justify-center rounded-none bg-neutral-100 hover:bg-neutral-250 text-neutral-800 cursor-pointer transition-colors border-none text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                {scale !== baseScale && (
                  <button
                    onClick={() => {
                      setScale(baseScale);
                      setPosition({ x: 0, y: 0 });
                    }}
                    className="ml-1 w-7 h-7 flex items-center justify-center rounded-none bg-neutral-950 hover:bg-primary text-white cursor-pointer transition-colors border-none"
                    title="Reset"
                  >
                    <RefreshCw className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Frame */}
            <div className="w-full md:w-[40%] p-6 md:p-8 flex flex-col justify-between flex-1 min-h-0 md:h-full bg-[#FCFBFA] overflow-hidden">
              
              {/* Header Title Area (Fixed) */}
              <div className="mb-4">
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-primary font-extrabold uppercase text-[8px] tracking-widest bg-primary/10 px-3 py-1.5 rounded-none border border-primary/20">
                    {selectedBike.categoryLabel[language] || selectedBike.categoryLabel.pt}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-extrabold flex items-center gap-1 bg-neutral-100 border border-neutral-200/50 px-2.5 py-1 md:mr-8 shadow-sm">
                    <span className="text-yellow-500">★</span> {selectedBike.rating}
                  </span>
                </div>

                {/* Bike Title & Favorite Heart Button */}
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-neutral-950 leading-none flex-1">
                    {selectedBike.name}
                  </h3>
                  <button
                    onClick={(e) => toggleFavorite(selectedBike.id, e)}
                    className={`p-2.5 rounded-full transition-all duration-300 border cursor-pointer flex items-center justify-center shadow-sm hover:scale-105 ${
                      favorites.includes(selectedBike.id)
                        ? "bg-red-500 text-white border-red-500 hover:bg-red-600"
                        : "bg-white text-neutral-450 border-neutral-200 hover:text-neutral-850 hover:bg-[#FCFBFA]"
                    }`}
                    aria-label="Toggle Favorite"
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(selectedBike.id) ? "fill-current text-white" : ""}`} />
                  </button>
                </div>
                {selectedBike.price && (
                  <div className="mt-4 flex items-center justify-between bg-neutral-100/60 border border-neutral-200/40 p-3">
                    <span className="text-[10px] text-neutral-500 font-extrabold uppercase tracking-widest">
                      PVP Sugerido:
                    </span>
                    <span className="text-2xl md:text-3xl font-black text-primary font-display leading-none">
                      {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(selectedBike.price)}
                    </span>
                  </div>
                )}
              </div>

              {/* Scrollable Content Container (No tabs, all details in a single view) */}
              <div className="flex-1 overflow-y-auto pr-2 mb-4 min-h-0 space-y-8">
                
                 {/* Quick Specs Block (Premium Grid Cards) */}
                <div className="pb-2 text-left">
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3.5 pb-1.5 border-b border-neutral-200/60 font-sans">
                    {language === "pt" ? "Especificações Chave" : "Key Specifications"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: "Motor / Potência", value: selectedBike.powerNominal || selectedBike.drivetrainShort, icon: Zap },
                      { 
                        label: "Bateria", 
                        value: selectedBike.tags.find(t => t.toLowerCase().includes("ah") || t.toLowerCase().includes("bateria")) || selectedBike.specs.battery,
                        icon: Battery 
                      },
                      { label: "Autonomia", value: selectedBike.autonomy, icon: Compass },
                      { label: "Velocidade Máxima", value: selectedBike.maxSpeed, icon: Gauge, highlight: true },
                      { label: "Suspensão", value: selectedBike.suspensionShort, icon: Wrench },
                      { label: "Travões", value: selectedBike.specs.brakes, icon: Shield }
                    ].map((spec, i) => {
                      const IconComponent = spec.icon;
                      return (
                        <div key={i} className="bg-neutral-50/70 border border-neutral-200/40 p-3.5 flex items-start gap-3 transition-all hover:bg-neutral-50 hover:border-neutral-250">
                          <div className="p-2 bg-white text-primary border border-neutral-200/60 shadow-sm shrink-0 rounded-none">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-widest font-sans leading-none">{spec.label}</span>
                            <span className={`text-[11px] font-extrabold leading-tight mt-1.5 break-words ${spec.highlight ? "text-primary font-black" : "text-neutral-850"}`}>
                              {spec.value}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Highlights & Features */}
                {selectedBike.features && selectedBike.features.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3.5 pb-1.5 border-b border-neutral-200/60 font-sans">
                      {language === "pt" ? "Equipamento & Destaques" : "Features & Equipment"}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-left">
                      {selectedBike.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] font-bold text-neutral-700">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Available Colors */}
                {selectedBike.colors && selectedBike.colors.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-bold text-neutral-450 uppercase tracking-widest mb-3 pb-1.5 border-b border-neutral-200/60 font-sans">
                      {language === "pt" ? "Cores Disponíveis" : "Available Colors"}
                    </h4>
                    <div className="flex flex-wrap gap-2 text-left">
                      {selectedBike.colors.map((color, i) => (
                        <span key={i} className="bg-neutral-100 border border-neutral-200 text-neutral-800 text-[10px] font-bold px-2.5 py-1 rounded-none">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Performance stats */}
                <div>
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4 pb-1.5 border-b border-neutral-200/60 font-sans">
                    {language === "pt" ? "Estatísticas & Desempenho" : "Stats & Performance"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    {[
                      { label: "Autonomia", value: selectedBike.stats?.performance?.battery || 50, icon: Gauge },
                      { label: "Potência de Pico", value: selectedBike.stats?.performance?.power || 50, icon: Zap },
                      { label: "Uso em Cidade", value: selectedBike.stats?.terrains?.urban || 50, icon: MapPin },
                      { label: "Autoestrada / Vias Rápidas", value: selectedBike.stats?.terrains?.highway || 50, icon: Compass },
                      { label: "Todo-o-Terreno", value: selectedBike.stats?.terrains?.offroad || 50, icon: Trees },
                      { label: "Agilidade Urbana", value: selectedBike.stats?.performance?.agility || 50, icon: Activity }
                    ].map((stat, idx) => {
                      const { level, color, label } = getRatingDetails(stat.value);
                      const IconComp = stat.icon;
                      return (
                        <div key={idx} className="flex flex-col gap-1 text-left py-1">
                          <div className="flex justify-between items-center text-[10px] font-bold text-neutral-500 leading-none">
                            <span className="flex items-center gap-1.5 font-sans">
                              <IconComp className="w-3.5 h-3.5 text-neutral-450 shrink-0" />
                              {stat.label}
                            </span>
                            <span className="text-neutral-850 font-bold uppercase text-[8px] tracking-widest bg-neutral-200 px-1.5 py-0.5">
                              {label}
                            </span>
                          </div>
                          <div className="flex gap-0.5 bg-neutral-100 p-0.5 mt-2">
                            {[1, 2, 3, 4, 5].map((step) => (
                              <div 
                                key={step} 
                                className={`h-1 flex-1 transition-all duration-300 ${
                                  step <= level ? color : "bg-neutral-200/60"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Warranty Section */}
                {selectedBike.warranty && (
                  <div className="pt-6 border-t border-neutral-200/60 text-left">
                    <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4 font-sans flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-primary shrink-0" />
                      {language === "pt" ? "Garantia Route N109" : "Warranty Route N109"}
                    </h4>
                    <div className="bg-neutral-50/50 border border-neutral-200/60 border-l-4 border-l-primary p-4 space-y-4 shadow-sm">
                      {selectedBike.warranty.motor && (
                        <div className="flex items-start gap-3">
                          <div className="p-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 shrink-0 mt-0.5">
                            <Shield className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-neutral-850 uppercase tracking-wider font-sans">
                              {language === "pt" ? "Motor & Componentes" : "Motor & Components"}
                            </span>
                            <span className="text-[11px] text-neutral-600 font-normal mt-0.5">
                              {selectedBike.warranty.motor}
                            </span>
                          </div>
                        </div>
                      )}
                      {selectedBike.warranty.battery && (
                        <div className="flex items-start gap-3">
                          <div className="p-1 bg-primary/10 text-primary border border-primary/20 shrink-0 mt-0.5">
                            <Battery className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-neutral-850 uppercase tracking-wider font-sans">
                              {language === "pt" ? "Bateria de Tração" : "Traction Battery"}
                            </span>
                            <span className="text-[11px] text-neutral-600 font-normal mt-0.5">
                              {selectedBike.warranty.battery}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

              </div>

              {/* Action Quote Form Button (Fixed at the bottom) */}
              <div className="pt-4 border-t border-neutral-200/80">
                <button
                  onClick={handleRequestQuote}
                  className="w-full bg-primary hover:bg-[#E05300] text-white py-4 px-6 rounded-none font-black text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2.5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border-none outline-none"
                >
                  <Phone className="w-4 h-4 fill-current text-white animate-pulse" />
                  {t("catalog.modal.cta")}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Fullscreen Image Overlay */}
      {isFullscreenImage && selectedBike && (
        <div className="fixed inset-0 w-full h-full bg-neutral-950 z-[999] flex flex-col items-center justify-center p-4 select-none">
          <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
            {/* Reset Zoom */}
            {fullscreenScale !== 1 && (
              <button
                onClick={() => {
                  setFullscreenScale(1);
                  setFullscreenPosition({ x: 0, y: 0 });
                }}
                className="bg-neutral-900 text-white p-3 rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-center"
              >
                <RefreshCw className="w-5 h-5 text-primary" />
              </button>
            )}
            {/* Close Fullscreen */}
            <button
              onClick={() => {
                setIsFullscreenImage(false);
                setFullscreenScale(1);
                setFullscreenPosition({ x: 0, y: 0 });
              }}
              className="bg-neutral-900 text-white p-3 rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Zoomable Image inside Fullscreen */}
          <div
            className="w-full h-full flex items-center justify-center overflow-hidden"
            onMouseDown={(e) => {
              if (fullscreenScale <= 1) return;
              setIsFullscreenDragging(true);
              setFullscreenDragStart({ x: e.clientX - fullscreenPosition.x, y: e.clientY - fullscreenPosition.y });
            }}
            onMouseMove={(e) => {
              if (!isFullscreenDragging || fullscreenScale <= 1) return;
              e.preventDefault();
              const newX = e.clientX - fullscreenDragStart.x;
              const newY = e.clientY - fullscreenDragStart.y;
              const maxDragX = (fullscreenScale - 1) * window.innerWidth / 2;
              const maxDragY = (fullscreenScale - 1) * window.innerHeight / 2;
              setFullscreenPosition({
                x: Math.max(-maxDragX, Math.min(maxDragX, newX)),
                y: Math.max(-maxDragY, Math.min(maxDragY, newY))
              });
            }}
            onMouseUp={() => setIsFullscreenDragging(false)}
            onMouseLeave={() => setIsFullscreenDragging(false)}
            onTouchStart={(e) => {
              if (fullscreenScale <= 1 || e.touches.length !== 1) return;
              setIsFullscreenDragging(true);
              const touch = e.touches[0];
              setFullscreenDragStart({ x: touch.clientX - fullscreenPosition.x, y: touch.clientY - fullscreenPosition.y });
            }}
            onTouchMove={(e) => {
              if (!isFullscreenDragging || fullscreenScale <= 1 || e.touches.length !== 1) return;
              const touch = e.touches[0];
              const newX = touch.clientX - fullscreenDragStart.x;
              const newY = touch.clientY - fullscreenDragStart.y;
              const maxDragX = (fullscreenScale - 1) * window.innerWidth / 2;
              const maxDragY = (fullscreenScale - 1) * window.innerHeight / 2;
              setFullscreenPosition({
                x: Math.max(-maxDragX, Math.min(maxDragX, newX)),
                y: Math.max(-maxDragY, Math.min(maxDragY, newY))
              });
            }}
            onTouchEnd={() => setIsFullscreenDragging(false)}
            onDoubleClick={() => {
              if (fullscreenScale > 1) {
                setFullscreenScale(1);
                setFullscreenPosition({ x: 0, y: 0 });
              } else {
                setFullscreenScale(2);
                setFullscreenPosition({ x: 0, y: 0 });
              }
            }}
          >
            <img
              src={selectedBike.image}
              alt={selectedBike.name}
              style={{
                transform: `translate(${fullscreenPosition.x}px, ${fullscreenPosition.y}px) scale(${fullscreenScale})`,
                transformOrigin: "center center",
                transition: isFullscreenDragging ? "none" : "transform 0.2s ease-out"
              }}
              className="max-w-full max-h-full object-contain select-none"
              draggable="false"
            />
          </div>

          {/* Floating Zoom Indicators for Fullscreen */}
          <div className="absolute bottom-6 flex items-center gap-4 bg-neutral-900/90 border border-neutral-800 rounded-full px-5 py-2.5 shadow-2xl">
            <button
              onClick={() => {
                const newScale = Math.max(1, fullscreenScale - 0.25);
                setFullscreenScale(newScale);
                if (newScale === 1) setFullscreenPosition({ x: 0, y: 0 });
              }}
              disabled={fullscreenScale <= 1}
              className="text-white hover:text-primary cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed bg-transparent border-none"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <span className="text-xs font-black text-white min-w-12 text-center uppercase tracking-widest">
              {Math.round(fullscreenScale * 100)}%
            </span>
            <button
              onClick={() => {
                const newScale = Math.min(3, fullscreenScale + 0.25);
                setFullscreenScale(newScale);
              }}
              disabled={fullscreenScale >= 3}
              className="text-white hover:text-primary cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed bg-transparent border-none"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}


    </div>
  );
}
