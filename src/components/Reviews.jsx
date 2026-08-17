import { Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Reviews() {
  const { t } = useLanguage();

  const reviewsList = [
    {
      name: "Felipe Melo",
      source: "Google Reviews",
      rating: 5,
      date: t("reviews.rev1.date"),
      text: t("reviews.rev1.text")
    },
    {
      name: "Camila Potente",
      source: "Google Reviews",
      rating: 5,
      date: t("reviews.rev2.date"),
      text: t("reviews.rev2.text")
    },
    {
      name: "Paul Carvalho",
      source: "Google Reviews",
      rating: 5,
      date: t("reviews.rev3.date"),
      text: t("reviews.rev3.text")
    }
  ];

  return (
    <section id="avaliacoes" className="py-16 md:py-28 bg-neutral-50 text-black relative">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 reveal-slide-up">
          <div className="text-left">
            <span className="text-primary font-extrabold uppercase text-xs tracking-widest bg-primary/10 px-4 py-1.5 rounded-full mb-6 inline-block">
              {t("reviews.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight uppercase leading-none text-neutral-900">
              {t("reviews.title")}
            </h2>
          </div>
          
          {/* Main Google rating card */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-5 flex items-center gap-4 text-left self-start md:self-auto shadow-sm">
            <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl font-display">
              4.9
            </div>
            <div>
              <div className="flex text-primary mb-0.5 slow-blink">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-xs text-neutral-500 font-medium">{t("reviews.ratingText")}</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviewsList.map((rev, idx) => (
            <div
              key={idx}
              className="bg-transparent border-l-2 border-neutral-200 hover:border-primary/50 pl-6 py-2 flex flex-col justify-between relative group transition-all duration-500 reveal-slide-up"
              style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
            >
              <div>
                {/* Large Decorative Quote */}
                <span className="font-serif text-7xl text-neutral-100 group-hover:text-primary/10 absolute right-4 top-0 select-none transition-colors duration-500">&ldquo;</span>

                {/* Rating stars */}
                <div className="flex text-primary gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating ? "fill-current" : "text-neutral-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-neutral-600 font-normal text-sm leading-relaxed mb-6 italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex flex-col border-t border-neutral-200 pt-4 mt-auto">
                <h3 className="font-bold text-neutral-900 text-xs uppercase tracking-wider font-display">{rev.name}</h3>
                <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest mt-1">
                  {rev.source} &middot; {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
