import { useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const location = useLocation();
  const path = location.pathname;

  // Resolve active key by removing language prefix if it exists to match the keys in config
  let activeKey = path;
  const langPrefixes = ["/en", "/es", "/fr", "/de"];
  for (const prefix of langPrefixes) {
    if (path.startsWith(prefix + "/")) {
      activeKey = path.substring(prefix.length);
      break;
    } else if (path === prefix) {
      activeKey = "/";
      break;
    }
  }

  const messagesMap = config.whatsappMessages[language] || config.whatsappMessages["pt"];
  const message = messagesMap[activeKey] || messagesMap["/"];
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodedText}`;

  const ariaLabels = {
    pt: "Falar pelo WhatsApp",
    en: "Chat on WhatsApp",
    es: "Chatear por WhatsApp",
    fr: "Discuter sur WhatsApp",
    de: "Auf WhatsApp chatten"
  };
  const ariaLabel = ariaLabels[language] || ariaLabels.pt;

  return (
    <div className="fixed bottom-6 right-6 z-40" id="whatsapp-floating-button">
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center whatsapp-btn"
        aria-label={ariaLabel}
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.464L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.429 1.451h.007c5.455 0 9.894-4.436 9.897-9.894.001-2.643-1.027-5.129-2.896-6.999C17.214 1.846 14.725.82 12.012.82c-5.46 0-9.903 4.439-9.907 9.897-.001 1.93.504 3.814 1.465 5.433L2.613 21.75l5.885-1.542zM17.56 14.62c-.3-.15-1.782-.877-2.057-.977-.275-.1-.475-.15-.675.15-.2.3-.775.977-.95 1.177-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.777-1.665-2.077-.175-.3-.018-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.496-.51-.675-.52-.172-.007-.368-.009-.565-.009-.197 0-.517.074-.788.368-.27.294-1.03 1.007-1.03 2.455 0 1.448 1.054 2.846 1.202 3.044.148.198 2.075 3.168 5.027 4.444.702.304 1.25.485 1.678.621.705.224 1.346.193 1.854.117.566-.085 1.782-.728 2.033-1.432.25-.704.25-1.306.175-1.43-.075-.124-.275-.199-.575-.349z" />
        </svg>
      </a>
    </div>
  );
}
