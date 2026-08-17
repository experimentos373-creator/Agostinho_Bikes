import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Reviews from "../components/Reviews";
import Location from "../components/Location";
import { useLanguage } from "../context/LanguageContext";
import { config } from "../config";

export default function Home() {
  const { language } = useLanguage();

  useEffect(() => {
    const titles = {
      pt: "Route N109 | Stand & Oficina de Motos e Scooters Elétricas na Guia",
      en: "Route N109 | Electric Motorcycles & Scooters Stand & Workshop in Guia",
      es: "Route N109 | Tienda & Taller de Vehículos Eléctricos en Guia",
      fr: "Route N109 | Stand & Atelier de Véhicules Électriques à Guia",
      de: "Route N109 | E-Fahrzeugladen & Werkstatt in Guia"
    };

    const descs = {
      pt: "Route N109 na Guia, Pombal. Stand e oficina especializada de motos, trotinetas e scooters elétricas. Baterias de lítio e assistência certificada.",
      en: "Route N109 in Guia, Pombal. Specialized electric motorcycle, scooter and moped stand and workshop. Battery diagnostics and certified assistance.",
      es: "Route N109 en Guia, Pombal. Stand y taller especializado en motos, scooters y patinetes eléctricos. Diagnóstico de baterías y asistencia certificada.",
      fr: "Route N109 à Guia, Pombal. Stand et atelier spécialisé de motos, trottinettes et scooters électriques. Diagnostic de batterie et assistance certifiée.",
      de: "Route N109 in Guia, Pombal. E-Fahrzeug Werkstatt und Stand. Batterie Diagnose und zertifizierte Unterstützung."
    };

    document.title = titles[language] || titles.pt;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", descs[language] || descs.pt);
    }

    // JSON-LD Schemas
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${config.domain}/#organization`,
      "name": "Route N109",
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
        "https://www.facebook.com/RouteN109/",
        "https://www.instagram.com/routen109mobilidade/"
      ]
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Route N109",
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

    // Hreflang tags
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

        {/* Products Catalog Section */}
        <Menu />

        {/* Customer Reviews Section */}
        <Reviews />

        {/* Location & Weekly Opening Hours Section */}
        <Location />
      </main>
    </>
  );
}
