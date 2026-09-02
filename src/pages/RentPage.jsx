import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { 
  ArrowLeft, X, Check, Calendar, AlertTriangle, MessageSquare, 
  ShieldCheck, Zap, Bike, Baby, ShoppingBag, HardHat, Tag, Clock, ChevronRight, ChevronDown, Filter, Info
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function RentPage() {
  const { t, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [selectedBike, setSelectedBike] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [startDate, setStartDate] = useState("");
  const [periodType, setPeriodType] = useState("full"); // "half" | "full" | "custom"
  const [duration, setDuration] = useState(1);
  const [selectedAccessories, setSelectedAccessories] = useState([]);

  const prefix = language === "pt" ? "" : `/${language}`;
  const todayStr = new Date().toISOString().split("T")[0];

  useEffect(() => {
    setStartDate(todayStr);
  }, [todayStr]);

  // Set document page title
  useEffect(() => {
    const titles = {
      pt: "Aluguer de Bicicletas Elétricas e Musculares | Agostinho BIKES",
      en: "Electric & Muscle Bike Rental | Agostinho BIKES",
      es: "Alquiler de Bicicletas Eléctricas y Musculares | Agostinho BIKES",
      fr: "Location de Vélos Électriques et Musculaires | Agostinho BIKES",
      de: "Elektro- & Muskel-Fahrradverleih | Agostinho BIKES"
    };
    document.title = titles[language] || titles.pt;
  }, [language]);

  // Pricing Table Data (matching user provided values & Santiago Bikes structure)
  const rentalCategories = [
    {
      id: "ebike-city",
      type: "ebikes",
      nameKey: "rent.catEbikeCity",
      defaultName: "E-Bike Citadina (Passeio)",
      halfDayPrice: 20,
      fullDayPrice: 35,
      halfDayDisplay: "20 €",
      fullDayDisplay: "35 €",
      includesKey: "rent.ebikeIncludes",
      defaultIncludes: "Carregador + Cadeado incluídos",
      badgeKey: "rent.avgPriceNotice",
      defaultBadge: "Preço Médio • Ajustável às necessidades do cliente",
      icon: Zap,
      accentColor: "emerald",
      image: "/images/bikes/prime-r-2026.webp",
      specs: {
        type: "Elétrica / Urbana & Passeio",
        motor: "Bosch Performance CX Smart System",
        battery: "Autonomia 60km - 100km (Bateria 625Wh)"
      }
    },
    {
      id: "ebike-mtb",
      type: "ebikes",
      nameKey: "rent.catEbikeMtb",
      defaultName: "E-Bike de Montanha (E-MTB)",
      halfDayPrice: 40,
      fullDayPrice: 65,
      halfDayDisplay: "40 €",
      fullDayDisplay: "65 €",
      includesKey: "rent.ebikeIncludes",
      defaultIncludes: "Carregador + Cadeado incluídos",
      badgeKey: "rent.avgPriceNotice",
      defaultBadge: "Preço Médio • Ajustável às necessidades do cliente",
      icon: Zap,
      accentColor: "emerald",
      image: "/images/bikes/crafty-rr-2026.webp",
      specs: {
        type: "Elétrica / Montanha & Enduro",
        motor: "DJI Avinox 130Nm / Bosch CX",
        battery: "Autonomia 80km - 120km (Bateria 800Wh)"
      }
    },
    {
      id: "road",
      type: "musculares",
      nameKey: "rent.catRoad",
      defaultName: "Bicicleta de Estrada",
      halfDayPrice: 20,
      fullDayPrice: 35,
      halfDayDisplay: "20 €",
      fullDayDisplay: "35 €",
      includesKey: "rent.roadIncludes",
      defaultIncludes: "Capacete e kit de afinação rápida",
      badgeKey: "rent.avgPriceNotice",
      defaultBadge: "Preço Médio • Ajustável às necessidades do cliente",
      icon: Bike,
      accentColor: "red",
      image: "/images/bikes/arid-rr-2026.webp",
      specs: {
        type: "Muscular / Estrada & Asfalto",
        drivetrain: "Shimano 105 / Ultegra 12s",
        weight: "Ultraleve e Aerodinâmica"
      }
    },
    {
      id: "mtb",
      type: "musculares",
      nameKey: "rent.catMtb",
      defaultName: "Bicicleta de BTT (Montanha)",
      halfDayPrice: null,
      fullDayPrice: 20,
      halfDayDisplay: "—",
      halfDaySubtextKey: "rent.onConsult",
      defaultHalfDaySubtext: "Sob consulta",
      fullDayDisplay: "20 €",
      includesKey: "rent.mtbIncludes",
      defaultIncludes: "Revisão técnica completa",
      badgeKey: "rent.avgPriceNotice",
      defaultBadge: "Preço Médio • Ajustável às necessidades do cliente",
      icon: Bike,
      accentColor: "red",
      image: "/images/bikes/chrono-dc-rr-2026.webp",
      specs: {
        type: "Muscular / BTT Montanha & Trilhos",
        drivetrain: "SRAM / Shimano 12s",
        suspension: "Suspensão Dianteira 100-120mm"
      }
    }
  ];

  // Accessories Data (5€ each)
  const rentalAccessories = [
    {
      id: "child-seat",
      nameKey: "rent.accChildSeat",
      defaultName: "Cadeira de Criança",
      priceNum: 5,
      priceDisplay: "5 €",
      unitKey: "rent.perDay",
      defaultUnit: "/ dia",
      descKey: "rent.accChildSeatDesc",
      defaultDesc: "Confortável, segura e ajustável para passeios em família",
      icon: Baby
    },
    {
      id: "basket",
      nameKey: "rent.accBasket",
      defaultName: "Cesto Frontal",
      priceNum: 5,
      priceDisplay: "5 €",
      unitKey: "rent.perDay",
      defaultUnit: "/ dia",
      descKey: "rent.accBasketDesc",
      defaultDesc: "Prático para transporte de pequenos pertences ou compras",
      icon: ShoppingBag
    },
    {
      id: "helmet",
      nameKey: "rent.accHelmet",
      defaultName: "Capacete de Segurança",
      priceNum: 5,
      priceDisplay: "5 €",
      unitKey: "rent.perDay",
      defaultUnit: "/ dia",
      descKey: "rent.accHelmetDesc",
      defaultDesc: "Homologado, ajustável e totalmente higienizado",
      icon: HardHat
    }
  ];

  // Rental Conditions Data
  const rentalTerms = [
    {
      id: "deposit",
      titleKey: "rent.termDeposit",
      defaultTitle: "Depósito Obrigatório (Caução)",
      descKey: "rent.termDepositDesc",
      defaultDesc: "É exigido depósito de segurança (caução) no momento do levantamento.",
      icon: ShieldCheck
    },
    {
      id: "ebike-equip",
      titleKey: "rent.termEbike",
      defaultTitle: "Equipamento E-Bikes Incluído",
      descKey: "rent.termEbikeDesc",
      defaultDesc: "O aluguer de bicicletas elétricas inclui sempre o carregador oficial de bateria e cadeado de alta segurança sem custos adicionais.",
      icon: Zap
    },
    {
      id: "flexible-pricing",
      titleKey: "rent.termFlexible",
      defaultTitle: "Preços Médios Ajustáveis",
      descKey: "rent.termFlexibleDesc",
      defaultDesc: "Os valores apresentados são referências médias e podem ser personalizados e ajustados conforme a duração total e pedidos do cliente.",
      icon: Tag
    },
    {
      id: "whatsapp-booking",
      titleKey: "rent.termBooking",
      defaultTitle: "Confirmação por WhatsApp",
      descKey: "rent.termBookingDesc",
      defaultDesc: "Escolha o modelo, datas e acessórios. A nossa equipa valida a disponibilidade e confirma a sua reserva de forma imediata.",
      icon: MessageSquare
    }
  ];

  // Filter pricing table rows based on tab
  const [pricingTab, setPricingTab] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const displayedCategories = pricingTab === "all" 
    ? rentalCategories 
    : rentalCategories.filter(c => c.type === pricingTab);

  // Toggle accessories selection
  const toggleAccessory = (accId) => {
    setSelectedAccessories(prev => 
      prev.includes(accId) ? prev.filter(id => id !== accId) : [...prev, accId]
    );
  };

  // Format dates for display
  const getEndDate = () => {
    if (!startDate) return "";
    const start = new Date(startDate);
    const daysToAdd = periodType === "half" ? 1 : (periodType === "full" ? 1 : Number(duration));
    start.setDate(start.getDate() + daysToAdd);
    return start.toISOString().split("T")[0];
  };

  // Calculate estimated total price
  const calculateTotal = () => {
    if (!selectedBike) return 0;

    let baseRate = 0;
    const catId = selectedBike.id || selectedBike.rentalCatId;
    const matchedCat = rentalCategories.find(c => c.id === catId) || rentalCategories[1];

    if (periodType === "half") {
      baseRate = matchedCat.halfDayPrice || matchedCat.fullDayPrice;
    } else if (periodType === "full") {
      baseRate = matchedCat.fullDayPrice;
    } else {
      baseRate = matchedCat.fullDayPrice * Number(duration);
    }

    const accessoriesCost = selectedAccessories.length * 5 * (periodType === "custom" ? Number(duration) : 1);
    return baseRate + accessoriesCost;
  };

  // WhatsApp submission
  const handleWhatsappSubmit = () => {
    if (!selectedBike) return;

    const endDate = getEndDate();
    const bikeModel = selectedBike.defaultName || t(selectedBike.nameKey) || selectedBike.name;
    const sizeStr = selectedSize;
    const totalEst = calculateTotal();

    const periodStr = periodType === "half" 
      ? (t("rent.periodHalfDay") || "Meio Dia (até 4h)")
      : (periodType === "full" ? (t("rent.periodFullDay") || "Dia Inteiro (1 dia)") : `${duration} ${language === "en" ? "days" : "dias"}`);

    const accNames = selectedAccessories.map(accId => {
      const acc = rentalAccessories.find(a => a.id === accId);
      return acc ? (t(acc.nameKey) || acc.defaultName) : accId;
    });

    const accText = accNames.length > 0 ? accNames.join(", ") : (language === "en" ? "None" : "Nenhum");

    let message = "";
    if (language === "en") {
      message = `Hello! I would like to request a rental booking for: *${bikeModel}*.\n\n- *Size:* ${sizeStr}\n- *Rental Duration:* ${periodStr}\n- *Start Date:* ${startDate}\n- *End Date:* ${endDate}\n- *Accessories:* ${accText}\n- *Estimated Total:* ~${totalEst}€ (Average rate)\n\nCould you please confirm availability?`;
    } else if (language === "es") {
      message = `¡Hola! Me gustaría solicitar una reserva de alquiler para: *${bikeModel}*.\n\n- *Talla:* ${sizeStr}\n- *Duración:* ${periodStr}\n- *Fecha Inicio:* ${startDate}\n- *Fecha Fin:* ${endDate}\n- *Accesorios:* ${accText}\n- *Total Estimado:* ~${totalEst}€ (Precio medio)\n\n¿Podrían confirmarme disponibilidad?`;
    } else if (language === "fr") {
      message = `Bonjour ! Je souhaite demander une réservation de location pour : *${bikeModel}*.\n\n- *Taille :* ${sizeStr}\n- *Durée :* ${periodStr}\n- *Date de début :* ${startDate}\n- *Date de fin :* ${endDate}\n- *Accessoires :* ${accText}\n- *Total Estimé :* ~${totalEst}€ (Prix moyen)\n\nPouvez-vous me confirmer la disponibilité ?`;
    } else if (language === "de") {
      message = `Hallo! Ich möchte eine Mietbuchung anfragen für: *${bikeModel}*.\n\n- *Größe:* ${sizeStr}\n- *Mietdauer:* ${periodStr}\n- *Startdatum:* ${startDate}\n- *Enddatum:* ${endDate}\n- *Zubehör:* ${accText}\n- *Geschätzter Gesamtwert:* ~${totalEst}€ (Richtpreis)\n\nKönnen Sie die Verfügbarkeit bestätigen?`;
    } else {
      message = `Olá! Gostaria de solicitar a reserva de aluguer para: *${bikeModel}*.\n\n- *Tamanho:* ${sizeStr}\n- *Período / Duração:* ${periodStr}\n- *Data de Início:* ${startDate}\n- *Data de Fim:* ${endDate}\n- *Acessórios:* ${accText}\n- *Total Estimado:* ~${totalEst}€ (Preço médio ajustável)\n\nPodem confirmar a disponibilidade para estas datas?`;
    }

    const whatsappUrl = `https://wa.me/351962305709?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Open modal with specific category
  const openBookingModal = (categoryItem) => {
    setSelectedBike(categoryItem);
    setSelectedSize("M");
    setSelectedAccessories([]);
    setPeriodType("full");
    setDuration(1);
  };

  // Prevent background scroll strictly when modal is open
  useEffect(() => {
    if (selectedBike) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      document.body.style.touchAction = "unset";
    }
    return () => { 
      document.body.style.overflow = "unset"; 
      document.documentElement.style.overflow = "unset";
      document.body.style.touchAction = "unset";
    };
  }, [selectedBike]);

  return (
    <div className="bg-white min-h-screen text-neutral-800 pt-28 md:pt-36 pb-20 text-left selection:bg-red-600 selection:text-white">
      
      {/* 95% Width Container for Desktop & Mobile */}
      <div className="w-[95%] max-w-[1700px] mx-auto px-2 sm:px-4 md:px-6">

        {/* Back button */}
        <div className="mt-2 mb-8">
          <Link
            to={prefix || "/"}
            className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-900 text-neutral-600 hover:text-white px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 shadow-xs border border-neutral-200/80 group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-primary group-hover:text-white group-hover:-translate-x-1 transition-all duration-300" />
            <span>{t("general.backToHome")}</span>
          </Link>
        </div>
        
        {/* Header Banner */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="text-red-700 font-black uppercase text-[10px] sm:text-xs tracking-widest bg-red-50 border border-red-200/80 px-4 py-1.5 rounded-full mb-4 inline-flex items-center gap-2">
            <Bike className="w-3.5 h-3.5 text-red-600" />
            {t("rent.badge") || "Aluguer de Bicicletas"}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-tight uppercase text-neutral-950 mb-5">
            {t("rent.pageTitle") || "Aluguer de Bicicletas Elétricas & Musculares"}
          </h1>
          <p className="text-neutral-600 font-normal text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {t("rent.pageSubtitle") || "Loja e oficina especializada em Pombal e Leiria. Consulte os valores de aluguer para bicicletas elétricas, de estrada e BTT, acessórios e condições do serviço."}
          </p>

          {/* Key Feature Highlights */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-bold text-neutral-700">
            <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-900 border border-emerald-200/80 px-3.5 py-1.5 rounded-xl">
              <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
              {t("rent.ebikeIncludes") || "Carregador + Cadeado incluídos (E-Bikes)"}
            </span>
            <span className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-900 border border-neutral-200 px-3.5 py-1.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-neutral-700 shrink-0" />
              {t("rent.termDeposit") || "Depósito Obrigatório (Caução)"}
            </span>
            <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-200/80 px-3.5 py-1.5 rounded-xl">
              <Tag className="w-4 h-4 text-amber-600 shrink-0" />
              {t("rent.avgPriceNotice") || "Preço Médio • Ajustável às necessidades do cliente"}
            </span>
          </div>
        </div>

        {/* 1. PRICING TABLE SHOWCASE (Preçário de Aluguer - Clean & Spacing Optimized) */}
        <section className="mb-16">
          <div className="bg-neutral-950 text-white rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl border border-neutral-800">

            <div className="flex flex-col gap-4 mb-8">
              <div>
                <span className="text-red-500 font-extrabold text-xs uppercase tracking-widest block mb-1.5">
                  {t("rent.badge") || "Preçário de Aluguer"}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-white uppercase">
                  {t("rent.pricingTitle") || "Tabela de Preços de Aluguer"}
                </h2>
              </div>

              {/* Full-width Category Filter Dropdown ("Ocupa quase todo o banner") */}
              <div className="w-full relative mt-2">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-neutral-700 text-white px-6 py-4 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 border border-red-500/30">
                      <Filter className="w-4 h-4" />
                    </div>
                    <span className="font-display text-white">
                      {pricingTab === "all" && (t("rent.tabAll") || "Todas as Categorias")}
                      {pricingTab === "ebikes" && (t("rent.tabEbikes") || "Bikes Elétricas")}
                      {pricingTab === "musculares" && (t("rent.tabMusculares") || "Bikes Musculares")}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-white" : ""}`} />
                </button>

                {/* Full-Width Dropdown Menu Bar ("Abre para baixo ocupando a largura do banner") */}
                {isDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-2 w-full bg-neutral-900 border border-neutral-800 rounded-2xl p-2 sm:p-3 shadow-2xl z-30 animate-menu-fade">
                    <button
                      onClick={() => { setPricingTab("all"); setIsDropdownOpen(false); }}
                      className={`w-full text-left px-5 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer mb-1.5 ${
                        pricingTab === "all"
                          ? "bg-red-600 text-white shadow-md"
                          : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
                      }`}
                    >
                      <span>{t("rent.tabAll") || "Todas as Categorias"}</span>
                      {pricingTab === "all" && <Check className="w-5 h-5 stroke-[3]" />}
                    </button>

                    <button
                      onClick={() => { setPricingTab("ebikes"); setIsDropdownOpen(false); }}
                      className={`w-full text-left px-5 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer mb-1.5 ${
                        pricingTab === "ebikes"
                          ? "bg-emerald-600 text-white shadow-md"
                          : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{t("rent.tabEbikes") || "Bikes Elétricas"}</span>
                      </div>
                      {pricingTab === "ebikes" && <Check className="w-5 h-5 stroke-[3]" />}
                    </button>

                    <button
                      onClick={() => { setPricingTab("musculares"); setIsDropdownOpen(false); }}
                      className={`w-full text-left px-5 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer ${
                        pricingTab === "musculares"
                          ? "bg-red-600 text-white shadow-md"
                          : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Bike className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{t("rent.tabMusculares") || "Bikes Musculares"}</span>
                      </div>
                      {pricingTab === "musculares" && <Check className="w-5 h-5 stroke-[3]" />}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop & Tablet Pricing Table with NO WORD WRAPPING */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-800 text-[11px] font-black uppercase tracking-widest text-neutral-400">
                    <th className="py-4 px-6 whitespace-nowrap">{t("rent.colCategory") || "Categoria da Bicicleta"}</th>
                    <th className="py-4 px-6 text-center whitespace-nowrap">{t("rent.colHalfDay") || "Meio Dia (até 4h)"}</th>
                    <th className="py-4 px-6 text-center whitespace-nowrap">{t("rent.colFullDay") || "Dia Inteiro (1 dia)"}</th>
                    <th className="py-4 px-6 whitespace-nowrap">{t("rent.colIncluded") || "Incluído & Destaques"}</th>
                    <th className="py-4 px-6 text-right whitespace-nowrap">{t("rent.colAction") || "Reserva"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 text-sm">
                  {displayedCategories.map((cat) => {
                    const IconComponent = cat.icon;
                    return (
                      <tr key={cat.id} className="hover:bg-neutral-900/80 transition-colors group">
                        <td className="py-5 px-6 font-bold">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                              cat.type === "ebikes" ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                            }`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="font-extrabold text-white text-base block font-display whitespace-nowrap">
                                {t(cat.nameKey) || cat.defaultName}
                              </span>
                              <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase inline-block mt-0.5 whitespace-nowrap">
                                {t(cat.badgeKey) || cat.defaultBadge}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="py-5 px-6 text-center whitespace-nowrap">
                          {cat.halfDayPrice ? (
                            <span className="text-xl font-black text-white font-display">{cat.halfDayDisplay}</span>
                          ) : (
                            <span className="text-xs font-bold text-neutral-400 italic">
                              {t(cat.halfDaySubtextKey) || cat.defaultHalfDaySubtext}
                            </span>
                          )}
                        </td>

                        <td className="py-5 px-6 text-center whitespace-nowrap">
                          <span className="text-2xl font-black text-red-500 font-display">{cat.fullDayDisplay}</span>
                        </td>

                        <td className="py-5 px-6 text-xs text-neutral-300 font-medium">
                          <span className="inline-flex items-center gap-1.5 bg-neutral-900 text-neutral-200 px-3 py-1.5 rounded-lg border border-neutral-800 whitespace-nowrap">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            {t(cat.includesKey) || cat.defaultIncludes}
                          </span>
                        </td>

                        <td className="py-5 px-6 text-right whitespace-nowrap">
                          <button
                            onClick={() => openBookingModal(cat)}
                            className="bg-red-600 hover:bg-white text-white hover:text-neutral-950 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer inline-flex items-center gap-2"
                          >
                            <span>{t("rent.bookBtn") || "Reservar / Configurar"}</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Pricing Cards View with NO WRAPPING in price titles */}
            <div className="sm:hidden space-y-4">
              {displayedCategories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <div key={cat.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 text-left">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        cat.type === "ebikes" ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-white text-base leading-tight font-display">
                          {t(cat.nameKey) || cat.defaultName}
                        </h3>
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mt-0.5">
                          {t(cat.badgeKey) || cat.defaultBadge}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 bg-neutral-950 p-3 rounded-xl mb-4 text-center">
                      <div className="px-1">
                        <span className="text-[10px] font-black text-neutral-400 uppercase tracking-wider block mb-1 whitespace-nowrap">
                          Meio Dia (até 4h)
                        </span>
                        <span className="text-lg sm:text-xl font-black text-white font-display whitespace-nowrap">
                          {cat.halfDayPrice ? cat.halfDayDisplay : (t(cat.halfDaySubtextKey) || cat.defaultHalfDaySubtext)}
                        </span>
                      </div>
                      <div className="border-l border-neutral-800 px-1">
                        <span className="text-[10px] font-black text-neutral-400 uppercase tracking-wider block mb-1 whitespace-nowrap">
                          Dia Inteiro (1 dia)
                        </span>
                        <span className="text-lg sm:text-xl font-black text-red-500 font-display whitespace-nowrap">
                          {cat.fullDayDisplay}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-neutral-300 font-medium mb-4 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t(cat.includesKey) || cat.defaultIncludes}</span>
                    </div>

                    <button
                      onClick={() => openBookingModal(cat)}
                      className="w-full bg-red-600 hover:bg-white text-white hover:text-neutral-950 font-black text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>{t("rent.bookBtn") || "Reservar / Configurar"}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Note under Pricing Table */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex items-start gap-3 text-xs text-neutral-400 text-left">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p>
                <strong className="text-neutral-200 mr-1 font-bold">Nota de Preços:</strong>
                {t("rent.pricingSubtitle") || "Os valores apresentados na tabela são preços médios de referência. O orçamento final é ajustável conforme a duração do aluguer, dimensão do grupo e necessidades específicas de cada cliente."}
              </p>
            </div>
          </div>
        </section>

        {/* 2. ACCESSORIES SECTION (Santiago Bikes Accessories Grid) */}
        <section className="mb-16">
          <div className="text-left mb-8">
            <span className="text-red-700 font-extrabold uppercase text-xs tracking-widest bg-red-50 border border-red-200/80 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("rent.accessoriesTitle") || "Acessórios Adicionais"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-neutral-950 uppercase">
              {t("rent.accessoriesTitle") || "Acessórios Adicionais"}
            </h2>
            <p className="text-neutral-500 text-sm mt-1 font-normal">
              {t("rent.accessoriesSubtitle") || "Equipe a sua viagem com os nossos acessórios opcionais disponíveis no aluguer"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {rentalAccessories.map((acc) => {
              const AccIcon = acc.icon;
              return (
                <div 
                  key={acc.id}
                  className="bg-neutral-50 border border-neutral-200/90 hover:border-neutral-400 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group text-left"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                        <AccIcon className="w-6 h-6 text-red-500" />
                      </div>
                      <span className="text-2xl font-black font-display text-neutral-950 bg-white border border-neutral-200 px-4 py-1.5 rounded-2xl shadow-xs">
                        {acc.priceDisplay}
                        <span className="text-xs font-bold text-neutral-500 ml-1">
                          {t(acc.unitKey) || acc.defaultUnit}
                        </span>
                      </span>
                    </div>

                    <h3 className="text-lg font-black uppercase text-neutral-950 tracking-tight mb-2 font-display">
                      {t(acc.nameKey) || acc.defaultName}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                      {t(acc.descKey) || acc.defaultDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center gap-2 text-[11px] font-bold text-emerald-700">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Disponível mediante reserva</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. TERMS & CONDITIONS SECTION */}
        <section className="mb-12">
          <div className="bg-neutral-100 border border-neutral-200/90 rounded-3xl p-6 sm:p-10 text-left">
            <div className="mb-8">
              <span className="text-red-700 font-extrabold uppercase text-xs tracking-widest bg-red-200/60 border border-red-300 px-3.5 py-1 rounded-full mb-3 inline-block">
                {t("rent.termsTitle") || "Observações & Condições"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-neutral-950 uppercase">
                {t("rent.termsTitle") || "Observações & Condições de Aluguer"}
              </h2>
              <p className="text-neutral-600 text-sm mt-1 font-normal">
                {t("rent.termsSubtitle") || "Tudo o que precisa de saber antes de levantar a sua bicicleta"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rentalTerms.map((term) => {
                const TermIcon = term.icon;
                return (
                  <div key={term.id} className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-xs flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-200/60 flex items-center justify-center shrink-0 mt-0.5">
                      <TermIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-neutral-950 uppercase tracking-tight mb-1 font-display">
                        {t(term.titleKey) || term.defaultTitle}
                      </h3>
                      <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                        {t(term.descKey) || term.defaultDesc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </div>

      {/* INTERACTIVE BOOKING CONFIGURATOR MODAL (Clean Single-Card Form without image) */}
      {selectedBike && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overscroll-contain"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-3xl w-[90vw] h-[90vh] max-w-[90vw] max-h-[90vh] md:w-[75vw] md:h-[85vh] md:max-w-[75vw] md:max-h-[85vh] overflow-hidden flex flex-col border border-neutral-200 shadow-2xl relative animate-menu-fade overscroll-contain text-left">
            
            {/* Floating Close Button */}
            <button
              onClick={() => setSelectedBike(null)}
              className="absolute top-4 right-4 z-20 bg-neutral-800 hover:bg-neutral-900 text-white p-2.5 rounded-full cursor-pointer transition-all duration-200 shadow-md border border-neutral-700 group"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Header Area */}
            <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-neutral-800 shrink-0 bg-neutral-950 text-white pr-16">
              <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-widest block mb-0.5">
                {t("rent.avgPriceNotice") || "Preço Médio • Ajustável às necessidades do cliente"}
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight font-display">
                {selectedBike.defaultName || t(selectedBike.nameKey) || selectedBike.name}
              </h3>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-6 sm:p-8 overflow-y-auto overscroll-contain flex-1 space-y-6 bg-white">
                
                {/* 1. Size Selection */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-2">
                    {t("rent.selectSize") || "Selecione o Tamanho"}
                  </label>
                  <div className="flex gap-2">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-11 rounded-xl text-xs font-black transition-all duration-200 cursor-pointer flex items-center justify-center border ${
                          selectedSize === size
                            ? "bg-neutral-950 text-white border-neutral-950 shadow-md scale-105"
                            : "bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Rental Period Type Selector */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-2">
                    {t("rent.selectPeriod") || "Selecione a Duração Pretendida"}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => { setPeriodType("half"); setDuration(1); }}
                      className={`p-3 rounded-xl border text-xs font-black uppercase transition-all duration-200 cursor-pointer text-center ${
                        periodType === "half"
                          ? "bg-red-600 text-white border-red-600 shadow-md"
                          : "bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      <span>{t("rent.periodHalfDay") || "Meio Dia"}</span>
                    </button>

                    <button
                      onClick={() => { setPeriodType("full"); setDuration(1); }}
                      className={`p-3 rounded-xl border text-xs font-black uppercase transition-all duration-200 cursor-pointer text-center ${
                        periodType === "full"
                          ? "bg-red-600 text-white border-red-600 shadow-md"
                          : "bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      <span>{t("rent.periodFullDay") || "Dia Inteiro"}</span>
                    </button>

                    <button
                      onClick={() => { setPeriodType("custom"); if (duration < 2) setDuration(2); }}
                      className={`p-3 rounded-xl border text-xs font-black uppercase transition-all duration-200 cursor-pointer text-center ${
                        periodType === "custom"
                          ? "bg-red-600 text-white border-red-600 shadow-md"
                          : "bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      <span>{t("rent.periodCustom") || "Vários Dias"}</span>
                    </button>
                  </div>
                </div>

                {/* Days Slider if Custom Period Selected */}
                {periodType === "custom" && (
                  <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <input
                          type="range"
                          min="2"
                          max="30"
                          value={duration}
                          onChange={(e) => setDuration(Number(e.target.value))}
                          className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                        />
                        <div className="flex justify-between text-[9px] text-neutral-400 font-extrabold uppercase mt-1">
                          <span>2 {language === "en" ? "days" : "dias"}</span>
                          <span>15 {language === "en" ? "days" : "dias"}</span>
                          <span>30 {language === "en" ? "days" : "dias"}</span>
                        </div>
                      </div>
                      <div className="bg-white border border-neutral-200 px-4 py-2 rounded-xl font-black text-sm text-neutral-900 flex flex-col items-center min-w-[70px]">
                        <span className="text-xl leading-none">{duration}</span>
                        <span className="text-[9px] text-neutral-500 uppercase tracking-wider mt-0.5">dias</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Optional Accessories Selection */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-2">
                    {t("rent.selectAccessories") || "Acessórios Opcionais (+5€/dia cada)"}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {rentalAccessories.map((acc) => {
                      const isChecked = selectedAccessories.includes(acc.id);
                      return (
                        <button
                          key={acc.id}
                          onClick={() => toggleAccessory(acc.id)}
                          className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                            isChecked
                              ? "bg-neutral-950 text-white border-neutral-950 shadow-md"
                              : "bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-tight leading-tight flex-1">
                              {t(acc.nameKey) || acc.defaultName}
                            </span>
                            <div className={`w-4 h-4 rounded-md flex items-center justify-center border ${
                              isChecked ? "bg-red-600 border-red-600 text-white" : "border-neutral-300"
                            }`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                          <span className={`text-[10px] font-bold ${isChecked ? "text-red-400" : "text-neutral-500"}`}>
                            +5€/dia
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Dates Selection */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-1.5">
                      {t("rent.startDate") || "Data de Início"}
                    </label>
                    <input
                      type="date"
                      min={todayStr}
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-white border border-neutral-200 focus:border-neutral-900 p-3 rounded-xl text-xs font-extrabold uppercase text-neutral-800 outline-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-1.5">
                      {t("rent.endDate") || "Data de Fim"}
                    </label>
                    <div className="w-full bg-neutral-100 border border-neutral-200 p-3 rounded-xl text-xs font-extrabold uppercase text-neutral-600 flex items-center h-[42px] select-none">
                      {getEndDate() ? new Date(getEndDate()).toLocaleDateString(language === "en" ? "en-US" : "pt-PT", { day: "2-digit", month: "2-digit", year: "numeric" }) : "—"}
                    </div>
                  </div>
                </div>

                {/* Total Price & Note Box */}
                <div className="bg-neutral-950 text-white p-5 rounded-2xl flex items-center justify-between gap-4 shadow-lg border border-neutral-800">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-0.5">
                      {t("rent.estimatedTotal") || "Valor Estimado Total"}
                    </span>
                    <span className="text-[10px] text-neutral-400 block">
                      {t("rent.avgPriceNotice") || "Preço Médio • Ajustável"}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black font-display text-red-500">
                      ~{calculateTotal()} €
                    </span>
                  </div>
                </div>

                {/* Important Notice */}
                <div className="flex gap-2.5 p-3.5 border border-amber-500/30 bg-amber-500/10 text-neutral-700 rounded-xl text-[11px] font-medium leading-relaxed">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    {t("rent.termDepositDesc") || "É exigido depósito de segurança (caução) no momento do levantamento."}
                  </div>
                </div>
              </div>

              {/* ALWAYS VISIBLE STICKY FOOTER CTA */}
              <div className="p-4 sm:p-6 bg-white border-t border-neutral-200 shadow-2xl shrink-0 z-10 space-y-3">
                <p className="text-[11px] text-neutral-500 leading-relaxed text-left">
                  Os dados fornecidos serão tratados por Agostinho & Inácio Lda. para preparar a sua reserva de aluguer de bicicleta e realizar as diligências pré-contratuais solicitadas. Para mais informações, consulte a nossa{" "}
                  <Link to="/politica-privacidade" className="text-red-600 font-bold underline hover:text-red-700 transition-colors">
                    Política de Privacidade
                  </Link>.
                </p>
                <button
                  onClick={handleWhatsappSubmit}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-widest py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-200 shadow-xl shadow-emerald-600/20 cursor-pointer text-sm hover:scale-[1.01]"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>{t("rent.ctaWhatsapp") || "Confirmar Reserva no WhatsApp"}</span>
                </button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}
