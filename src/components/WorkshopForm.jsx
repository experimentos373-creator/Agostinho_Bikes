import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";
import { CheckCircle2 } from "lucide-react";

const WHATSAPP_LABELS = {
  pt: {
    title: "*Nova Marcação de Oficina - Route N109*",
    name: "*Nome:*",
    contact: "*Contacto:*",
    bike: "*Bicicleta:*",
    service: "*Serviço:*",
    date: "*Data Pretendida:*",
    obs: "*Observações:*",
    none: "Nenhuma"
  },
  en: {
    title: "*New Workshop Booking - Route N109*",
    name: "*Name:*",
    contact: "*Contact:*",
    bike: "*Bicycle:*",
    service: "*Service:*",
    date: "*Preferred Date:*",
    obs: "*Notes:*",
    none: "None"
  },
  es: {
    title: "*Nueva Cita de Taller - Route N109*",
    name: "*Nombre:*",
    contact: "*Contacto:*",
    bike: "*Bicicleta:*",
    service: "*Servicio:*",
    date: "*Fecha Deseada:*",
    obs: "*Notas:*",
    none: "Ninguna"
  },
  fr: {
    title: "*Nouveau Rendez-vous Atelier - Route N109*",
    name: "*Nom:*",
    contact: "*Contact:*",
    bike: "*Vélo:*",
    service: "*Service:*",
    date: "*Date Souhaitée:*",
    obs: "*Notes:*",
    none: "Aucune"
  },
  de: {
    title: "*Neuer Werkstatt-Termin - Route N109*",
    name: "*Name:*",
    contact: "*Kontakt:*",
    bike: "*Fahrrad:*",
    service: "*Service:*",
    date: "*Wunschtermin:*",
    obs: "*Anmerkungen:*",
    none: "Keine"
  }
};

const PLACEHOLDERS = {
  pt: {
    name: "Ex: Pedro Santos",
    contact: "Ex: 912 345 678",
    bike: "Ex: Amflow PL Carbon Pro 2026",
    desc: "Descreva algum barulho, comportamento anómalo ou pedidos específicos..."
  },
  en: {
    name: "E.g. Peter Smith",
    contact: "E.g. +351 912 345 678",
    bike: "E.g. Amflow PL Carbon Pro 2026",
    desc: "Describe any noise, abnormal behavior, or specific requests..."
  },
  es: {
    name: "Ej: Pedro Santos",
    contact: "Ej: +34 612 345 678",
    bike: "Ej: Amflow PL Carbon Pro 2026",
    desc: "Describe cualquier ruido, comportamiento anómalo o peticiones específicas..."
  },
  fr: {
    name: "Ex: Pierre Martin",
    contact: "Ex: +33 6 12 34 56 78",
    bike: "Ex: Amflow PL Carbon Pro 2026",
    desc: "Décrivez tout bruit, comportement anormal ou demande spécifique..."
  },
  de: {
    name: "Z.B. Peter Schmidt",
    contact: "Z.B. +49 151 12345678",
    bike: "Z.B. Amflow PL Carbon Pro 2026",
    desc: "Beschreiben Sie Geräusche, abnormales Verhalten oder spezifische Wünsche..."
  }
};

export default function WorkshopForm() {
  const { t, language } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    nome: "",
    contacto: "",
    marcaModelo: "",
    dataPretendida: "",
    tipoServico: "DiagBosch",
    observacoes: ""
  });

  const serviceTypesOptions = [
    { value: "DiagBosch", labelKey: "form.workshop.type.diagBosch" },
    { value: "DiagDJI", labelKey: "form.workshop.type.diagDJI" },
    { value: "Suspension", labelKey: "form.workshop.type.suspension" },
    { value: "Brakes", labelKey: "form.workshop.type.brakes" },
    { value: "General", labelKey: "form.workshop.type.general" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedServiceLabel = t(serviceTypesOptions.find(o => o.value === formData.tipoServico)?.labelKey || "form.workshop.type.general");

    const labels = WHATSAPP_LABELS[language] || WHATSAPP_LABELS["pt"];

    const message = `${labels.title}\n\n` +
      `${labels.name} ${formData.nome}\n` +
      `${labels.contact} ${formData.contacto}\n` +
      `${labels.bike} ${formData.marcaModelo}\n` +
      `${labels.service} ${selectedServiceLabel}\n` +
      `${labels.date} ${formData.dataPretendida}\n` +
      `${labels.obs} ${formData.observacoes || labels.none}`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodedText}`;

    // Show success overlay modal for 2 seconds
    setShowSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setShowSuccess(false);
      // Reset form
      setFormData({
        nome: "",
        contacto: "",
        marcaModelo: "",
        dataPretendida: "",
        tipoServico: "DiagBosch",
        observacoes: ""
      });
    }, 2000);
  };

  const activePlaceholders = PLACEHOLDERS[language] || PLACEHOLDERS["pt"];

  return (
    <div className="relative">
      {/* Success Modal Overlay */}
      {showSuccess && (
        <div className="absolute inset-0 bg-white/95 z-50 flex flex-col justify-center items-center p-6 text-center animate-menu-fade rounded-2xl">
          <CheckCircle2 className="w-16 h-16 text-[#25D366] mb-4 animate-bounce" />
          <h4 className="text-xl font-bold text-neutral-900 mb-2 font-display uppercase">
            {t("form.workshop.title")}
          </h4>
          <p className="text-sm text-neutral-600 font-medium leading-relaxed max-w-xs">
            {t("form.workshop.success")}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-lg mx-auto text-left">
        <h3 className="text-xl font-bold text-dark border-b pb-3 mb-4 font-display uppercase tracking-wider">
          {t("form.workshop.title")}
        </h3>
        
        <div>
          <label htmlFor="workshop-nome" className="block text-sm font-bold text-gray-700 mb-1 font-display uppercase tracking-wider">
            {t("form.workshop.name")} *
          </label>
          <input
            type="text"
            id="workshop-nome"
            name="nome"
            required
            value={formData.nome}
            onChange={handleChange}
            placeholder={activePlaceholders.name}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="workshop-contacto" className="block text-sm font-bold text-gray-700 mb-1 font-display uppercase tracking-wider">
            {t("form.workshop.contact")} *
          </label>
          <input
            type="text"
            id="workshop-contacto"
            name="contacto"
            required
            value={formData.contacto}
            onChange={handleChange}
            placeholder={activePlaceholders.contact}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="workshop-marcaModelo" className="block text-sm font-bold text-gray-700 mb-1 font-display uppercase tracking-wider">
            {t("form.workshop.bike")} *
          </label>
          <input
            type="text"
            id="workshop-marcaModelo"
            name="marcaModelo"
            required
            value={formData.marcaModelo}
            onChange={handleChange}
            placeholder={activePlaceholders.bike}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="workshop-tipo" className="block text-sm font-bold text-gray-700 mb-1 font-display uppercase tracking-wider">
              {t("form.workshop.type")} *
            </label>
            <select
              id="workshop-tipo"
              name="tipoServico"
              value={formData.tipoServico}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 bg-white"
            >
              {serviceTypesOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {t(opt.labelKey)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="workshop-data" className="block text-sm font-bold text-gray-700 mb-1 font-display uppercase tracking-wider">
              {t("form.workshop.date")} *
            </label>
            <input
              type="date"
              id="workshop-data"
              name="dataPretendida"
              required
              value={formData.dataPretendida}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="workshop-observacoes" className="block text-sm font-bold text-gray-700 mb-1 font-display uppercase tracking-wider">
            {t("form.workshop.desc")}
          </label>
          <textarea
            id="workshop-observacoes"
            name="observacoes"
            rows="3"
            value={formData.observacoes}
            onChange={handleChange}
            placeholder={activePlaceholders.desc}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#1A56DB] hover:bg-[#1E429F] text-white font-bold py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer spring-hover uppercase text-xs tracking-widest font-display"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.464L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.429 1.451h.007c5.455 0 9.894-4.436 9.897-9.894.001-2.643-1.027-5.129-2.896-6.999C17.214 1.846 14.725.82 12.012.82c-5.46 0-9.903 4.439-9.907 9.897-.001 1.93.504 3.814 1.465 5.433L2.613 21.75l5.885-1.542zM17.56 14.62c-.3-.15-1.782-.877-2.057-.977-.275-.1-.475-.15-.675.15-.2.3-.775.977-.95 1.177-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.777-1.665-2.077-.175-.3-.018-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.496-.51-.675-.52-.172-.007-.368-.009-.565-.009-.197 0-.517.074-.788.368-.27.294-1.03 1.007-1.03 2.455 0 1.448 1.054 2.846 1.202 3.044.148.198 2.075 3.168 5.027 4.444.702.304 1.25.485 1.678.621.705.224 1.346.193 1.854.117.566-.085 1.782-.728 2.033-1.432.25-.704.25-1.306.175-1.43-.075-.124-.275-.199-.575-.349z" />
          </svg>
          {t("form.workshop.submit")}
        </button>
      </form>
    </div>
  );
}
