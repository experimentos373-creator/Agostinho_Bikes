import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Location from "../components/Location";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function Home() {
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Dynamic Page Title & Meta Description based on language
    const titles = {
      pt: "Agostinho BIKES | Loja & Oficina de Bicicletas em Pombal",
      en: "Agostinho BIKES | Bike Shop & Workshop in Pombal",
      es: "Agostinho BIKES | Tienda & Taller de Bicicletas en Pombal",
      fr: "Agostinho BIKES | Magasin & Atelier de Vélos à Pombal",
      de: "Agostinho BIKES | Fahrradladen & Werkstatt in Pombal"
    };

    const descs = {
      pt: "Agostinho BIKES em Mata Mourisca, Pombal. Loja e oficina de bicicletas especializada. Representante oficial Mondraker. E-Bikes Bosch e Avinox.",
      en: "Agostinho BIKES in Mata Mourisca, Pombal. Specialized bicycle shop and workshop. Official Mondraker dealer. Bosch and Avinox E-Bikes.",
      es: "Agostinho BIKES en Mata Mourisca, Pombal. Tienda y taller de bicicletas especializada. Distribuidor oficial Mondraker. E-Bikes Bosch y Avinox.",
      fr: "Agostinho BIKES à Mata Mourisca, Pombal. Magasin et atelier de vélos spécialisé. Revendeur officiel Mondraker. E-Bikes Bosch et Avinox.",
      de: "Agostinho BIKES in Mata Mourisca, Pombal. Fachgeschäft und Fahrradwerkstatt. Offizieller Mondraker-Händler. Bosch und Avinox E-Bikes."
    };

    document.title = titles[language] || titles.pt;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", descs[language] || descs.pt);
    }

    // 2. Google LocalBusiness & WebSite JSON-LD Schemas (using central domain)
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${config.domain}/#organization`,
      "name": "Agostinho BIKES",
      "image": `${config.domain}/favicon.png`,
      "url": config.domain,
      "telephone": config.telephone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": config.address.street,
        "addressLocality": config.address.locality,
        "postalCode": config.address.postalCode,
        "addressCountry": config.address.country
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": config.geo.latitude,
        "longitude": config.geo.longitude
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/Agostinho.in",
        "https://www.instagram.com/agostinho.in_/"
      ]
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Agostinho BIKES",
      "url": config.domain
    };

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.text = JSON.stringify(localBusinessSchema);
    script1.id = "local-business-schema";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.text = JSON.stringify(websiteSchema);
    script2.id = "website-schema";
    document.head.appendChild(script2);

    // 3. Dynamic Hreflang Alternate Link Tags for multi-language indexing
    const lPT = document.createElement("link");
    lPT.rel = "alternate";
    lPT.hreflang = "pt";
    lPT.href = config.domain;
    lPT.id = "hreflang-pt";
    document.head.appendChild(lPT);

    const lEN = document.createElement("link");
    lEN.rel = "alternate";
    lEN.hreflang = "en";
    lEN.href = `${config.domain}/en`;
    lEN.id = "hreflang-en";
    document.head.appendChild(lEN);

    const lDefault = document.createElement("link");
    lDefault.rel = "alternate";
    lDefault.hreflang = "x-default";
    lDefault.href = config.domain;
    lDefault.id = "hreflang-default";
    document.head.appendChild(lDefault);

    return () => {
      const s1 = document.getElementById("local-business-schema");
      const s2 = document.getElementById("website-schema");
      if (s1) s1.remove();
      if (s2) s2.remove();

      const hPT = document.getElementById("hreflang-pt");
      const hEN = document.getElementById("hreflang-en");
      const hDefault = document.getElementById("hreflang-default");
      if (hPT) hPT.remove();
      if (hEN) hEN.remove();
      if (hDefault) hDefault.remove();
    };
  }, [language]);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections */}
      <main>
        {/* About Section */}
        <About />

        {/* Why Choose Us Section */}
        <WhyUs />

        {/* Interactive Menu Section */}
        <Menu />

        {/* Gallery Section */}
        <Gallery />

        {/* Customer Reviews Section */}
        <Reviews />

        {/* Location & Weekly Opening Hours Section */}
        <Location />
      </main>
    </>
  );
}
