import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";
import { CheckCircle2 } from "lucide-react";

const WHATSAPP_LABELS = {
  pt: {
    title: "*Novo Pedido de Orçamento - Route N109*",
    name: "*Nome:*",
    contact: "*Contacto:*",
    bike: "*Bicicleta:*",
    desc: "*Descrição/Peças:*"
  },
  en: {
    title: "*New Quote Request - Route N109*",
    name: "*Name:*",
    contact: "*Contact:*",
    bike: "*Bicycle:*",
    desc: "*Description/Parts:*"
  },
  es: {
    title: "*Nueva Solicitud de Presupuesto - Route N109*",
    name: "*Nombre:*",
    contact: "*Contacto:*",
    bike: "*Bicicleta:*",
    desc: "*Descripción/Piezas:*"
  },
  fr: {
    title: "*Nouvelle Demande de Devis - Route N109*",
    name: "*Nom:*",
    contact: "*Contact:*",
    bike: "*Vélo:*",
    desc: "*Description/Pièces:*"
  },
  de: {
    title: "*Neue Kostenvoranschlagsanfrage - Route N109*",
    name: "*Name:*",
    contact: "*Kontakt:*",
    bike: "*Fahrrad:*",
    desc: "*Beschreibung/Teile:*"
  }
};

const PLACEHOLDERS = {
  pt: {
    name: "Ex: João Silva",
    contact: "Ex: 912 345 678",
    bike: "Ex: Mondraker Crafty Carbon R 2025",
    desc: "Descreva detalhadamente o que necessita (ex: pastilhas de travão, upgrade de bateria)..."
  },
  en: {
    name: "E.g. John Doe",
    contact: "E.g. +351 912 345 678",
    bike: "E.g. Mondraker Crafty Carbon R 2025",
    desc: "Describe in detail what you need..."
  },
  es: {
    name: "Ej: Juan Pérez",
    contact: "Ej: +34 612 345 678",
    bike: "Ej: Mondraker Crafty Carbon R 2025",
    desc: "Describe detalladamente lo que necesitas (ej: pastillas de freno, mejora de batería)..."
  },
  fr: {
    name: "Ex: Jean Dupont",
    contact: "Ex: +33 6 12 34 56 78",
    bike: "Ex: Mondraker Crafty Carbon R 2025",
    desc: "Décrivez en détail ce dont vous avez besoin (ex: plaquettes de frein, mise à niveau de la batterie)..."
  },
  de: {
    name: "Z.B. Max Mustermann",
    contact: "Z.B. +49 151 12345678",
    bike: "Z.B. Mondraker Crafty Carbon R 2025",
    desc: "Beschreiben Sie im Detail, was Sie benötigen (z. B. Bremsbeläge, Batterie-Upgrade)..."
  }
};

export default function BudgetForm() {
  const { t, language } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const bike = params.get("bikeModel");
    return {
      nome: "",
      contacto: "",
      modeloBicicleta: bike ? decodeURIComponent(bike) : "",
      descricao: "",
    };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const labels = WHATSAPP_LABELS[language] || WHATSAPP_LABELS["pt"];

    const message = `${labels.title}\n\n` +
      `${labels.name} ${formData.nome}\n` +
      `${labels.contact} ${formData.contacto}\n` +
      `${labels.bike} ${formData.modeloBicicleta}\n` +
      `${labels.desc} ${formData.descricao}`;

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
        modeloBicicleta: "",
        descricao: "",
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
            {t("form.budget.title")}
          </h4>
          <p className="text-sm text-neutral-600 font-medium leading-relaxed max-w-xs">
            {t("form.budget.success")}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-lg mx-auto text-left">
        <h3 className="text-xl font-bold text-dark border-b pb-3 mb-4 font-display uppercase tracking-wider">
          {t("form.budget.title")}
        </h3>
        
        <div>
          <label htmlFor="budget-nome" className="block text-sm font-bold text-gray-700 mb-1 font-display uppercase tracking-wider">
            {t("form.budget.name")} *
          </label>
          <input
            type="text"
            id="budget-nome"
            name="nome"
            required
            value={formData.nome}
            onChange={handleChange}
            placeholder={activePlaceholders.name}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="budget-contacto" className="block text-sm font-bold text-gray-700 mb-1 font-display uppercase tracking-wider">
            {t("form.budget.contact")} *
          </label>
          <input
            type="text"
            id="budget-contacto"
            name="contacto"
            required
            value={formData.contacto}
            onChange={handleChange}
            placeholder={activePlaceholders.contact}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="budget-modelo" className="block text-sm font-bold text-gray-700 mb-1 font-display uppercase tracking-wider">
            {t("form.budget.bike")} *
          </label>
          <input
            type="text"
            id="budget-modelo"
            name="modeloBicicleta"
            required
            value={formData.modeloBicicleta}
            onChange={handleChange}
            placeholder={activePlaceholders.bike}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="budget-descricao" className="block text-sm font-bold text-gray-700 mb-1 font-display uppercase tracking-wider">
            {t("form.budget.desc")} *
          </label>
          <textarea
            id="budget-descricao"
            name="descricao"
            required
            rows="4"
            value={formData.descricao}
            onChange={handleChange}
            placeholder={activePlaceholders.desc}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer spring-hover uppercase text-xs tracking-widest font-display"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.464L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.429 1.451h.007c5.455 0 9.894-4.436 9.897-9.894.001-2.643-1.027-5.129-2.896-6.999C17.214 1.846 14.725.82 12.012.82c-5.46 0-9.903 4.439-9.907 9.897-.001 1.93.504 3.814 1.465 5.433L2.613 21.75l5.885-1.542zM17.56 14.62c-.3-.15-1.782-.877-2.057-.977-.275-.1-.475-.15-.675.15-.2.3-.775.977-.95 1.177-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.777-1.665-2.077-.175-.3-.018-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.496-.51-.675-.52-.172-.007-.368-.009-.565-.009-.197 0-.517.074-.788.368-.27.294-1.03 1.007-1.03 2.455 0 1.448 1.054 2.846 1.202 3.044.148.198 2.075 3.168 5.027 4.444.702.304 1.25.485 1.678.621.705.224 1.346.193 1.854.117.566-.085 1.782-.728 2.033-1.432.25-.704.25-1.306.175-1.43-.075-.124-.275-.199-.575-.349z" />
          </svg>
          {t("form.budget.submit")}
        </button>
      </form>
    </div>
  );
}
