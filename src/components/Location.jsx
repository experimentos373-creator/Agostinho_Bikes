import { MapPin, Phone, Calendar, Clock, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function Location() {
  const { t } = useLanguage();

  const schedule = [
    { day: t("contact.weekdays"), hours: "09:00 - 13:00 | 14:00 - 19:00" },
    { day: t("contact.saturday"), hours: "09:00 - 13:00", highlight: true },
    { day: t("contact.sunday"), hours: t("contact.closed") },
  ];

  return (
    <section id="contacto" className="py-16 md:py-28 bg-neutral-50 relative border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20 reveal-slide-up">
          <span className="text-red-700 font-extrabold uppercase text-xs tracking-widest bg-red-50 border border-red-200/60 px-4 py-1.5 rounded-full mb-6 inline-block">
            {t("contact.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 font-display tracking-tight leading-none mb-4 uppercase">
            {t("contact.title")}
          </h2>
          <p className="text-neutral-500 font-normal max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            {t("contact.desc")}
          </p>
        </div>

        {/* Editorial Split Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contacts & Map (col-span-6) */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left reveal-slide-left lg:border-r lg:border-neutral-200 lg:pr-12">
            
            {/* Contact Details List */}
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="border-b border-neutral-200 pb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2.5 rounded-full shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 font-display text-sm uppercase tracking-wider mb-1">
                      {t("contact.addressTitle")}
                    </h3>
                    <p className="text-neutral-600 text-sm font-normal leading-relaxed">
                      {config.address.street}<br />
                      {config.address.postalCode} {config.address.locality}, {config.address.countryName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone & Email Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-neutral-200 pb-6">
                <a href={`tel:${config.telephone}`} className="group flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2.5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-400 text-[10px] tracking-widest uppercase mb-0.5">
                      {t("contact.phoneTitle")}
                    </h4>
                    <p className="text-neutral-900 font-extrabold font-display text-sm group-hover:text-primary transition-colors duration-300">
                      {config.telephoneDisplay}
                    </p>
                  </div>
                </a>

                <a href={`mailto:${config.email}`} className="group flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2.5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-400 text-[10px] tracking-widest uppercase mb-0.5">
                      {t("contact.emailTitle")}
                    </h4>
                    <p className="text-neutral-900 font-extrabold font-display text-sm group-hover:text-primary transition-colors duration-300 truncate max-w-[180px] sm:max-w-none">
                      {config.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Map Frame */}
            <div className="h-[250px] rounded-2xl overflow-hidden border border-neutral-200 relative group shadow-sm">
              <iframe
                title={t("contact.mapTitle")}
                width="100%"
                height="100%"
                src={`https://maps.google.com/maps?q=${config.geo.latitude},${config.geo.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0 transition-all duration-300"
              />
              <div className="absolute inset-2 border border-white/10 rounded-xl pointer-events-none z-10" />
            </div>
          </div>

          {/* Right Column: Opening Hours Area (col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left reveal-slide-right h-full bg-white border border-neutral-200 p-8 rounded-2xl shadow-sm">
            <div>
              <div className="flex items-center gap-3 pb-4 mb-8 border-b border-neutral-200/60">
                <div className="bg-primary/10 text-primary p-2.5 rounded-full">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 font-display text-sm uppercase tracking-wider">
                    {t("contact.hoursTitle")}
                  </h3>
                  <p className="text-[9px] text-neutral-400 uppercase tracking-widest mt-0.5">
                    {t("contact.hoursSubtitle")}
                  </p>
                </div>
              </div>

              {/* Schedule List with dot leaders */}
              <div className="flex flex-col gap-6">
                {schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-baseline"
                  >
                    <span className={`font-bold font-display text-sm uppercase tracking-wider ${
                      item.highlight ? "text-primary" : "text-neutral-800"
                    }`}>
                      {item.day}
                    </span>
                    <span className="flex-grow border-b border-dotted border-neutral-200 mx-3 text-neutral-300"></span>
                    <span className="font-bold text-neutral-900 font-display text-sm shrink-0">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Note banner */}
              <div className="mt-12 flex items-start gap-3 border-t border-neutral-200 pt-6">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-500 font-normal leading-relaxed">
                  {t("contact.hoursNote")}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
