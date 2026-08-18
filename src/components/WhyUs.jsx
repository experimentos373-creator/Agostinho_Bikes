import { ShieldCheck, Wrench, RefreshCw, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function WhyUs() {
  const { language } = useLanguage();

  const benefits = [
    {
      icon: <Wrench className="w-6 h-6 text-primary shrink-0" />,
      title: language === "en" ? "Pre-delivery Setup & Tuning" : "Afinação & Setup Pré-Entrega Grátis",
      desc: language === "en"
        ? "Every bike is assembled, tuned, and customized to your riding position and suspension preferences before handover."
        : "Todas as bicicletas são montadas, afinadas e personalizadas à sua medida e estilo de condução pelo nosso chefe de oficina."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary shrink-0" />,
      title: language === "en" ? "Full Factory Warranty" : "Garantia Total Direta de Fábrica",
      desc: language === "en"
        ? "Official Mondraker dealer guarantees complete original factory warranty and direct replacement support."
        : "Como representante oficial Mondraker, garantimos assistência direta de fábrica e gestão total de garantia."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-primary shrink-0" />,
      title: language === "en" ? "Trade-in & Financing Options" : "Opções de Retoma e Financiamento",
      desc: language === "en"
        ? "Flexible payment solutions and bike trade-in options to make upgrading your ride easy and seamless."
        : "Facilidades de pagamento e avaliação de retoma da sua bicicleta antiga para simplificar a compra do seu novo modelo."
    },
    {
      icon: <Award className="w-6 h-6 text-primary shrink-0" />,
      title: language === "en" ? "Lifetime Technical Workshop Support" : "Assistência Técnica Vitalícia",
      desc: language === "en"
        ? "Certified technical support for Bosch, DJI Avinox, and specialized mechanical maintenance throughout your bike's lifespan."
        : "Apoio técnico especializado e diagnóstico para sistemas elétricos Bosch e Avinox durante toda a vida útil da sua bicicleta."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-900 text-white relative overflow-hidden border-t border-b border-neutral-800">
      {/* Subtle glowing background accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-left">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <span className="text-red-400 font-extrabold uppercase text-xs tracking-widest bg-red-950/80 border border-red-800/50 px-4 py-1.5 rounded-full mb-4 inline-block">
            {language === "en" ? "Why Choose Us" : "Vantagens Exclusivas"}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight uppercase mb-4 text-white">
            {language === "en" ? "Why Buy From Agostinho BIKES?" : "Porquê Comprar na Agostinho BIKES?"}
          </h2>
          <div className="w-20 h-1 bg-primary mb-4" />
          <p className="text-neutral-400 text-sm md:text-base font-normal leading-relaxed">
            {language === "en"
              ? "More than a bike shop — we are passionate riders and certified mechanics committed to providing the best buying and riding experience."
              : "Mais do que uma loja de bicicletas — somos mecânicos certificados e praticantes com foco total na melhor experiência de compra e manutenção."}
          </p>
        </div>

        {/* 4 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-950/80 border border-neutral-800/80 hover:border-primary/50 p-6 rounded-2xl transition-all duration-300 backdrop-blur-sm group hover:-translate-y-1 shadow-lg"
            >
              <div className="bg-neutral-900/90 border border-neutral-800 p-3 rounded-xl w-fit mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
