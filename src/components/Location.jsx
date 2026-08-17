import { MapPin, Phone, Calendar, Clock, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function Location() {
  const { t } = useLanguage();

  const schedule = [
    { day: t("contact.weekdays"), hours: "09:30 - 13:00 | 14:30 - 19:00" },
    { day: t("contact.saturday"), hours: "10:30 - 13:30", highlight: true },
    { day: t("contact.sunday"), hours: t("contact.closed") },
  ];

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#FCFBFA] relative border-b border-neutral-200/50 text-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal-slide-up">
          <span className="text-primary font-bold uppercase text-[10px] tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-6 inline-block">
            {t("contact.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-normal text-neutral-950 font-display tracking-tight leading-none mb-4 uppercase">
            {t("contact.title")}
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto mb-6"></div>
          <p className="text-neutral-500 font-normal max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            {t("contact.desc")}
          </p>
        </div>

        {/* Editorial Split Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Contacts & Map (col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left reveal-slide-left lg:border-r lg:border-neutral-200 lg:pr-12">
            
            {/* Contact Details List */}
            <div className="flex flex-col gap-6 mb-6">
              {/* Address */}
              <div className="border-b border-neutral-200/80 pb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/5 text-primary border border-primary/20 p-2.5 rounded-none shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-950 text-xs uppercase tracking-wider mb-1">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-neutral-200/80 pb-6">
                <a href={`tel:${config.telephone}`} className="group flex items-start gap-4 cursor-pointer">
                  <div className="bg-[#FCFBFA] border border-neutral-200 text-neutral-700 p-2.5 rounded-none group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-200 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-450 text-[9px] tracking-widest uppercase mb-1">
                      {t("contact.phoneTitle")}
                    </h4>
                    <p className="text-neutral-950 font-bold text-sm group-hover:text-primary transition-colors duration-200">
                      {config.telephoneDisplay}
                    </p>
                  </div>
                </a>

                <a href={`mailto:${config.email}`} className="group flex items-start gap-4 cursor-pointer">
                  <div className="bg-[#FCFBFA] border border-neutral-200 text-neutral-700 p-2.5 rounded-none group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-200 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-450 text-[9px] tracking-widest uppercase mb-1">
                      {t("contact.emailTitle")}
                    </h4>
                    <p className="text-neutral-950 font-bold text-sm group-hover:text-primary transition-colors duration-200 truncate max-w-[180px] sm:max-w-none">
                      {config.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Map Frame inside premium white display border */}
            <div className="h-[250px] p-2 bg-white border border-neutral-200 shadow-sm relative group overflow-hidden flex-1 min-h-[220px]">
              <iframe
                title={t("contact.mapTitle")}
                width="100%"
                height="100%"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(config.address.street + ", " + config.address.postalCode + " " + config.address.locality)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0 opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Right Column: Opening Hours Area (col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left reveal-slide-right h-full bg-white border border-neutral-200 p-8 rounded-none shadow-sm">
            <div>
              <div className="flex items-center gap-3 pb-4 mb-8 border-b border-neutral-200/80">
                <div className="bg-primary/5 text-primary border border-primary/20 p-2.5 rounded-none">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-950 text-xs uppercase tracking-wider">
                    {t("contact.hoursTitle")}
                  </h3>
                  <p className="text-[9px] text-neutral-450 uppercase tracking-widest mt-0.5 font-bold">
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
                    <span className={`font-bold text-xs uppercase tracking-widest ${
                      item.highlight ? "text-primary" : "text-neutral-700"
                    }`}>
                      {item.day}
                    </span>
                    <span className="flex-grow border-b border-dotted border-neutral-200 mx-3 text-neutral-300"></span>
                    <span className="font-bold text-neutral-950 font-display text-sm shrink-0">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Note banner */}
              <div className="mt-12 flex items-start gap-3 border-t border-neutral-200/80 pt-6">
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
