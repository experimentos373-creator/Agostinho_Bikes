// ============================================================================
// ROUTE N109 - CATALOGO DE VEICULOS (MOTOS, SCOOTERS E VEICULOS ELETRICOS)
// ============================================================================

export const bikes = [
  {
    "id": "lisbon-sx",
    "price": 1180,
    "name": "Lisbon Sx",
    "brand": "Lisbon",
    "brandSlug": "lisbon",
    "isStar": true,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/lisbon_sx.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico de Alta Eficiência",
    "suspensionShort": "Suspensão Hidráulica Dianteira/Traseira",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Alarme"
    ],
    "colors": [
      "Branco com Verde Lima",
      "Cinzento",
      "Preto"
    ],
    "warranty": {
      "motor": "2 anos de garantia moto",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "neovolt-standard",
    "price": 1180,
    "name": "Neovolt",
    "brand": "Neovolt",
    "brandSlug": "neovolt",
    "isStar": true,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/neovolt_standard.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Neovolt Standard",
    "suspensionShort": "Suspensão Hidráulica Conforto",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Travão de disco frente e atrás",
      "Top case",
      "Iluminação LED",
      "Alarme"
    ],
    "colors": [
      "Preto com Azul",
      "Preto com Vermelho"
    ],
    "warranty": {
      "motor": "2 anos de garantia motor e controladora",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "vespy-sky",
    "price": 1180,
    "name": "Vespy Sky",
    "brand": "Vespy",
    "brandSlug": "vespy",
    "isStar": true,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/vespy_sky.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Vespy Sky 60V",
    "suspensionShort": "Suspensão Hidráulica Urbana",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "60V",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "60V 20aH Bateria de Chumbo",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "60V 20aH Bateria de Chumbo",
      "Travão de disco frente e atrás",
      "Marcha-Atrás",
      "Top case",
      "Iluminação LED",
      "Alarme"
    ],
    "colors": [
      "Preto",
      "Cinzento",
      "Branco"
    ],
    "warranty": {
      "motor": "2 anos de garantia motor e controladora",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "neovolt-go-x-60v",
    "price": 1250,
    "name": "NEOVOLT GO.X 60V",
    "brand": "Neovolt",
    "brandSlug": "neovolt",
    "isStar": true,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/neovolt_gox.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Neovolt GO.X 60V",
    "suspensionShort": "Suspensão Hidráulica Urbana",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "60V",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de 60 Volts",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "60 Volts",
      "Travão de disco frente e atrás",
      "Top case",
      "Iluminação LED",
      "Alarme"
    ],
    "colors": [
      "Preto",
      "Cinzento",
      "Branco"
    ],
    "warranty": {
      "motor": "2 anos de garantia motor e controladora",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "neovolt-go-x-72v",
    "price": 1380,
    "name": "NEOVOLT GO.X 72V",
    "brand": "Neovolt",
    "brandSlug": "neovolt",
    "isStar": true,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/neovolt_gox.webp",
    "rating": "4.9 (18)",
    "drivetrainShort": "Motor Elétrico Neovolt GO.X 72V Alta Potência",
    "suspensionShort": "Suspensão Hidráulica Urbana",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "50 a 70 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "72V",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de 72 Volts",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 10,
        "urban": 90,
        "climbing": 45,
        "range": 60,
        "offroad": 10
      },
      "performance": {
        "battery": 65,
        "agility": 80,
        "power": 55,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "72 Volts",
      "Travão de disco frente e atrás",
      "Top case",
      "Iluminação LED",
      "Alarme"
    ],
    "colors": [
      "Preto",
      "Cinzento",
      "Branco"
    ],
    "warranty": {
      "motor": "2 anos de garantia motor e controladora",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "neovolt-we-ride-72v",
    "price": 1380,
    "name": "NEOVOLT WE-RIDE 72V",
    "brand": "Neovolt",
    "brandSlug": "neovolt",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/neovolt_weride.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Neovolt We-Ride 72V",
    "suspensionShort": "Suspensão Hidráulica Reforçada",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de 72 Volts",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Travão de disco frente e atrás",
      "Top case",
      "Iluminação LED",
      "Alarme"
    ],
    "warranty": {
      "motor": "2 anos de garantia motor e controladora",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "voltrish-london-xrp",
    "price": 1480,
    "name": "VOLTRISH LONDON XRP",
    "brand": "Voltrish",
    "brandSlug": "voltrish",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/voltrish_london_xrp.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico London XRP 72V",
    "suspensionShort": "Suspensão Hidráulica Premium",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de 72 Volts",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Travão de disco frente e atrás",
      "Top case",
      "Iluminação LED",
      "72 Volts",
      "Alarme"
    ],
    "warranty": {
      "motor": "2 anos de garantia motor e controladora",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "s4-gow",
    "price": 1480,
    "name": "S4 Gow",
    "brand": "S4",
    "brandSlug": "s4",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/s4_gow.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico S4 Gow 800W",
    "suspensionShort": "Suspensão Dianteira/Traseira Conforto",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Travão de disco frente e atrás",
      "Top case",
      "Iluminação LED",
      "72 Volts",
      "Alarme"
    ],
    "colors": [
      "Branco com Vermelho",
      "Cinza com Vermelho"
    ],
    "warranty": {
      "motor": "2 anos de garantia motor e controladora",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "scooty-250-power",
    "price": 1380,
    "name": "SCOOTY 250 POWER",
    "brand": "Scooty",
    "brandSlug": "scooty",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/scooty_250_power.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Scooty 250W 72V",
    "suspensionShort": "Suspensão Hidráulica Dianteira",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "72V 20aH Bateria de Chumbo",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "72V 20aH Bateria de Chumbo",
      "Travão de disco frente e atrás",
      "Top case",
      "Iluminação LED",
      "Alarme"
    ],
    "warranty": {
      "motor": "2 anos de garantia motor e controladora",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "zoa-plus-72v",
    "price": 1550,
    "name": "Zoa + 72v",
    "brand": "Zoa",
    "brandSlug": "zoa",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/zoa_72v.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Zoa Plus 72V",
    "suspensionShort": "Suspensão Reforçada Dianteira/Traseira",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de 72 Volts",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Travão de disco frente e atrás",
      "Top case",
      "Iluminação LED",
      "72 Volts",
      "Alarme"
    ],
    "warranty": {
      "motor": "2 anos de garantia motor e controladora",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "neovolt-flow",
    "price": 1580,
    "name": "NEOVOLT FLOW",
    "brand": "Neovolt",
    "brandSlug": "neovolt",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/neovolt_flow.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Neovolt Flow 72V",
    "suspensionShort": "Suspensão Hidráulica Avançada",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de 72 Volts",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Travão de disco frente e atrás",
      "Top case",
      "Iluminação LED",
      "72 Volts",
      "Alarme"
    ],
    "warranty": {
      "motor": "2 anos de garantia motor e controladora",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "neovolt-pulse",
    "price": 1580,
    "name": "Neovolt Pulse",
    "brand": "Neovolt",
    "brandSlug": "neovolt",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/neovolt_pulse.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Neovolt Pulse 72V",
    "suspensionShort": "Suspensão Conforto Hidráulica",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de 72 Volts",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Travão de disco frente e atrás",
      "Top case",
      "Iluminação LED",
      "72 Volts",
      "Alarme"
    ],
    "warranty": {
      "motor": "2 anos de garantia motor e controladora",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "vision-sport-72v",
    "price": 1450,
    "name": "Vision modelo sport 72v",
    "brand": "Voltrish",
    "brandSlug": "voltrish",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/vision_sport.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Vision Sport 72V",
    "suspensionShort": "Suspensão Esportiva Dianteira/Traseira",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de 72 Volts",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Travão de disco frente e atrás",
      "Iluminação LED",
      "Pneus Tubeless",
      "3 tipos de condução (Eco, Normal, Sport)",
      "Alarme"
    ],
    "warranty": {
      "motor": "2 anos de garantia motor e controladora",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "f9-voltrish",
    "price": 1150,
    "name": "F9 VOLTRISH",
    "brand": "Voltrish",
    "brandSlug": "voltrish",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/f9_voltrish.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico F9 250W",
    "suspensionShort": "Suspensão Dianteira Telescópica",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Travão de disco frente",
      "Top case",
      "Iluminação LED",
      "Alarme"
    ]
  },
  {
    "id": "azores",
    "price": 1250,
    "name": "AZORES",
    "brand": "Azores",
    "brandSlug": "azores",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/azores.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Azores City 250W",
    "suspensionShort": "Suspensão Hidráulica Dianteira/Traseira",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Travão de disco frente e atrás",
      "Top case",
      "Iluminação LED",
      "Alarme"
    ]
  },
  {
    "id": "we-fun",
    "price": 1250,
    "name": "We-Fun",
    "brand": "We-Fun",
    "brandSlug": "we-fun",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/we_fun.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico We-Fun 250W",
    "suspensionShort": "Suspensão Dinâmica Urbana",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Alarme",
      "Travões de disco frente/trás"
    ]
  },
  {
    "id": "rio-j2-60v",
    "price": 1350,
    "name": "RIO J2 60V",
    "brand": "Rio",
    "brandSlug": "rio",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/rio_j2_60v.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Rio J2 60V",
    "suspensionShort": "Suspensão Hidráulica Dupla",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de 60 Volts",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Travão de disco frente e atrás",
      "Encosto para 2ª pessoa",
      "Iluminação LED",
      "Alarme"
    ]
  },
  {
    "id": "rio-j2-72v",
    "price": 1450,
    "name": "RIO J2 72V",
    "brand": "Rio",
    "brandSlug": "rio",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/rio_j2_72v.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Rio J2 72V",
    "suspensionShort": "Suspensão Hidráulica Premium",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de 72 Volts",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Travão de disco frente e atrás",
      "Top case",
      "Iluminação LED",
      "Alarme"
    ]
  },
  {
    "id": "voltrish-21",
    "price": 899,
    "name": "VOLTRISH 21",
    "brand": "Voltrish",
    "brandSlug": "voltrish",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/voltrish_21.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Voltrish 21",
    "suspensionShort": "Suspensão Dianteira Urbana",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Económica"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Iluminação LED"
    ]
  },
  {
    "id": "vista-3-rodas",
    "price": 1850,
    "name": "VISTA 3 RODAS",
    "brand": "Vista",
    "brandSlug": "vista",
    "isStar": true,
    "category": "e-trike",
    "categoryLabel": {
      "pt": "Triciclo / Quadriciclo de Mobilidade",
      "en": "Mobility Trike / Quad",
      "es": "Triciclo / Cuadriciclo de Movilidad",
      "fr": "Tricycle / Quad de Mobilité",
      "de": "Mobilitätsdreirad / Quad"
    },
    "image": "/images/vehicles/vista_3_rodas.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Triciclo Elétrico de Mobilidade Conforto",
    "suspensionShort": "Suspensão Reforçada 3 Rodas",
    "maxSpeed": "40 km/h (3 Modos + Reverse)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Reduzida",
      "Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede que não necessita de carta de habilitação",
      "Velocidade máxima de até 40km/h",
      "Travão de disco frente e atrás",
      "Alarme",
      "Sensor de assento"
    ],
    "warranty": {
      "motor": "2 anos de garantia moto",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "triciclo-kiev",
    "price": 1150,
    "name": "TRICICULO KIEV",
    "brand": "Kiev",
    "brandSlug": "kiev",
    "isStar": false,
    "category": "e-trike",
    "categoryLabel": {
      "pt": "Triciclo / Quadriciclo de Mobilidade",
      "en": "Mobility Trike / Quad",
      "es": "Triciclo / Cuadriciclo de Movilidad",
      "fr": "Tricycle / Quad de Mobilité",
      "de": "Mobilitätsdreirad / Quad"
    },
    "image": "/images/vehicles/triciclo_kiev.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Triciclo de Mobilidade Compacto",
    "suspensionShort": "Suspensão Traseira Estável",
    "maxSpeed": "40 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Reduzida"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede que não necessita de carta de habilitação",
      "Velocidade máxima de até 40km/h",
      "Alarme"
    ]
  },
  {
    "id": "g2-pro-1050w",
    "price": 899,
    "name": "G2 Pro 1050W",
    "brand": "G2",
    "brandSlug": "g2",
    "isStar": false,
    "category": "e-trotineta",
    "categoryLabel": {
      "pt": "Trotineta Elétrica",
      "en": "Electric Scooter",
      "es": "Patinete Eléctrico",
      "fr": "Trottinette Électrique",
      "de": "Elektroroller"
    },
    "image": "/images/vehicles/g2_pro_1050w.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Potente 1050W Brushless",
    "suspensionShort": "Amortecedores Duplos Dianteiros e Traseiros",
    "maxSpeed": "45 km/h",
    "autonomy": "40 a 55 km",
    "powerNominal": "1050W",
    "tags": [
      "Trotineta",
      "Alta Potência"
    ],
    "specs": {
      "frame": "Alumínio de aviação dobrável",
      "drivetrain": "Motor de alto rendimento 1050W",
      "suspension": "Suspensão de braço duplo",
      "brakes": "Travões de disco duplos ventilados",
      "wheels": "Pneus todo-o-terreno 10 polegadas",
      "motor": "Motor Brushless 1050W",
      "battery": "48V 15Ah Lítio",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 15,
        "urban": 95,
        "climbing": 60,
        "range": 50,
        "offroad": 40
      },
      "performance": {
        "battery": 60,
        "agility": 90,
        "power": 75,
        "weight": 40
      }
    },
    "features": [
      "Motor de 1050W",
      "Bateria de 48V 15Ah",
      "Velocidades: 15 / 30 / 45 km/h",
      "Peso máximo suportado: 120 kg"
    ]
  },
  {
    "id": "triciclo-fun-2-lugares",
    "price": 1850,
    "name": "TRICICULO FUN 2 LUGARES",
    "brand": "Fun",
    "brandSlug": "fun",
    "isStar": false,
    "category": "e-trike",
    "categoryLabel": {
      "pt": "Triciclo / Quadriciclo de Mobilidade",
      "en": "Mobility Trike / Quad",
      "es": "Triciclo / Cuadriciclo de Movilidad",
      "fr": "Tricycle / Quad de Mobilité",
      "de": "Mobilitätsdreirad / Quad"
    },
    "image": "/images/vehicles/triciclo_fun.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Triciclo Duplo 2 Lugares",
    "suspensionShort": "Suspensão Dupla Traseira",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "2 Lugares"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Marcha-atrás",
      "Cesto de arrumação",
      "Iluminação LED",
      "Alarme"
    ]
  },
  {
    "id": "luna-qc",
    "price": 1999,
    "name": "LUNA QC 3 LUGARES",
    "brand": "Luna",
    "brandSlug": "luna",
    "isStar": false,
    "category": "e-trike",
    "categoryLabel": {
      "pt": "Triciclo / Quadriciclo de Mobilidade",
      "en": "Mobility Trike / Quad",
      "es": "Triciclo / Cuadriciclo de Movilidad",
      "fr": "Tricycle / Quad de Mobilité",
      "de": "Mobilitätsdreirad / Quad"
    },
    "image": "/images/vehicles/luna_qc.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Triciclo Elétrico Familiar 3 Lugares",
    "suspensionShort": "Suspensão Hidráulica Dianteira/Traseira",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "3 Lugares",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede que não necessita de carta de habilitação",
      "Velocidade máxima de até 25km/h",
      "Travão de disco frente e atrás",
      "Alarme",
      "Sensor de assento"
    ],
    "warranty": {
      "motor": "2 anos de garantia moto",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "luna-qs-4-rodas",
    "price": 1950,
    "name": "LUNA-QC",
    "brand": "Luna",
    "brandSlug": "luna",
    "isStar": true,
    "category": "e-trike",
    "categoryLabel": {
      "pt": "Triciclo / Quadriciclo de Mobilidade",
      "en": "Mobility Trike / Quad",
      "es": "Triciclo / Cuadriciclo de Movilidad",
      "fr": "Tricycle / Quad de Mobilité",
      "de": "Mobilitätsdreirad / Quad"
    },
    "image": "/images/vehicles/luna_qs_4_rodas.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Quadriciclo Elétrico de Grande Conforto",
    "suspensionShort": "Suspensão Independente às 4 Rodas",
    "maxSpeed": "25 km/h (4 Rodas Estabilidade Total)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "4 Rodas",
      "Mobilidade Reduzida"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Baterias de Chumbo 60V 20Ah",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede 4 rodas",
      "Baterias de Chumbo 60V 20Ah",
      "Jantes 10",
      "Travão de disco",
      "3 velocidades",
      "Iluminação LED",
      "Banco em pele",
      "Alarme"
    ],
    "warranty": {
      "motor": "2 anos de garantia motor e controladora",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "tokio-i32-4-rodas",
    "price": 1950,
    "name": "Tokio i3.2 4 Rodas",
    "brand": "Voltrish",
    "brandSlug": "voltrish",
    "isStar": false,
    "category": "e-trike",
    "categoryLabel": {
      "pt": "Triciclo / Quadriciclo de Mobilidade",
      "en": "Mobility Trike / Quad",
      "es": "Triciclo / Cuadriciclo de Movilidad",
      "fr": "Tricycle / Quad de Mobilité",
      "de": "Mobilitätsdreirad / Quad"
    },
    "image": "/images/vehicles/tokio_i32_4_rodas.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Quadriciclo Elétrico com Tração Estável",
    "suspensionShort": "Suspensão Independente às 4 Rodas",
    "maxSpeed": "20 km/h (4 Rodas Estáveis)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "4 Rodas",
      "Mobilidade Reduzida"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede que não necessita de carta de habilitação",
      "Velocidade máxima de até 20km/h",
      "Alarme",
      "Sensor de assento"
    ],
    "warranty": {
      "motor": "2 anos de garantia moto",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "tokio-extreme-4-rodas-capota",
    "price": 2300,
    "name": "Tokio EXTREME 4 rodas com capota",
    "brand": "Voltrish",
    "brandSlug": "voltrish",
    "isStar": true,
    "category": "e-trike",
    "categoryLabel": {
      "pt": "Triciclo / Quadriciclo de Mobilidade",
      "en": "Mobility Trike / Quad",
      "es": "Triciclo / Cuadriciclo de Movilidad",
      "fr": "Tricycle / Quad de Mobilité",
      "de": "Mobilitätsdreirad / Quad"
    },
    "image": "/images/vehicles/tokio_extreme_4_rodas.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Quadriciclo Cabinado com Capota Integrada",
    "suspensionShort": "Suspensão Independente e Proteção Intempérie Capota",
    "maxSpeed": "25 km/h (Quadriciclo Cabinado)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Com Capota",
      "Mobilidade Reduzida"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede que não necessita de carta de habilitação",
      "Velocidade de 25km/h",
      "Travão de disco frente e atrás",
      "Alarme",
      "Sensor de assento"
    ],
    "warranty": {
      "motor": "2 anos de garantia moto",
      "battery": "6 meses de garantia de bateria"
    }
  },
  {
    "id": "triciclo-space-3-lugares",
    "price": 1870,
    "name": "Triciculo Space 3 lugares",
    "brand": "Space",
    "brandSlug": "space",
    "isStar": false,
    "category": "e-trike",
    "categoryLabel": {
      "pt": "Triciclo / Quadriciclo de Mobilidade",
      "en": "Mobility Trike / Quad",
      "es": "Triciclo / Cuadriciclo de Movilidad",
      "fr": "Tricycle / Quad de Mobilité",
      "de": "Mobilitätsdreirad / Quad"
    },
    "image": "/images/vehicles/triciclo_space_3_lugares.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Triciclo Space 3 Lugares",
    "suspensionShort": "Suspensão Dupla Traseira",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "3 Lugares"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "3 lugares",
      "Marcha-atrás",
      "Top case",
      "Iluminação LED",
      "Alarme"
    ]
  },
  {
    "id": "seventeen-sporte",
    "price": 1480,
    "name": "Seventeen sporte",
    "brand": "Seventeen",
    "brandSlug": "seventeen",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/seventeen_sporte.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Seventeen Sporte 250W",
    "suspensionShort": "Suspensão Hidráulica Desportiva",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Travão de disco frente",
      "Iluminação LED",
      "Alarme"
    ]
  },
  {
    "id": "mx1-rio",
    "price": 1150,
    "name": "Mx1 Rio",
    "brand": "Rio",
    "brandSlug": "rio",
    "isStar": false,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/mx1_rio.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Mx1 Rio 250W",
    "suspensionShort": "Suspensão Dianteira Urbana",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede sem carta",
      "Alarme"
    ]
  },
  {
    "id": "acm-power-es-049",
    "price": 1700,
    "name": "ACM Power Es-049",
    "brand": "ACM Power",
    "brandSlug": "acm-power",
    "isStar": false,
    "category": "e-moto",
    "categoryLabel": {
      "pt": "Moto Elétrica",
      "en": "Electric Motorcycle",
      "es": "Moto Eléctrica",
      "fr": "Moto Électrique",
      "de": "Elektromotorrad"
    },
    "image": "/images/vehicles/acm_power_es049.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico ACM Es-049 Alta Performance",
    "suspensionShort": "Suspensão Hidráulica Reforçada",
    "maxSpeed": "50 km/h",
    "autonomy": "50 a 70 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Alta Performance"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 15,
        "urban": 90,
        "climbing": 40,
        "range": 50,
        "offroad": 10
      },
      "performance": {
        "battery": 60,
        "agility": 80,
        "power": 60,
        "weight": 60
      }
    },
    "features": [
      "Velocípede que não necessita de carta de habilitação",
      "Velocidade máxima de até 50km/h",
      "Travão de disco frente e atrás",
      "Alarme"
    ]
  },
  {
    "id": "acm-power-es-55",
    "price": 1550,
    "name": "ACM Power Es-55",
    "brand": "ACM Power",
    "brandSlug": "acm-power",
    "isStar": false,
    "category": "e-moto",
    "categoryLabel": {
      "pt": "Moto Elétrica",
      "en": "Electric Motorcycle",
      "es": "Moto Eléctrica",
      "fr": "Moto Électrique",
      "de": "Elektromotorrad"
    },
    "image": "/images/vehicles/acm_power_es55.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico ACM Es-55 250W",
    "suspensionShort": "Suspensão Hidráulica Dianteira/Traseira",
    "maxSpeed": "50 km/h",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Alta Performance"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "Bateria de Lítio / Chumbo Ácido ou Grafeno",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 15,
        "urban": 90,
        "climbing": 40,
        "range": 50,
        "offroad": 10
      },
      "performance": {
        "battery": 55,
        "agility": 80,
        "power": 55,
        "weight": 60
      }
    },
    "features": [
      "Velocípede que não necessita de carta de habilitação",
      "Velocidade máxima de até 50km/h",
      "Travão de disco frente e atrás",
      "Alarme"
    ]
  },
  {
    "id": "vortex-fox",
    "price": 1250,
    "name": "Vortex Fox",
    "brand": "Vortex",
    "brandSlug": "vortex",
    "isStar": true,
    "category": "e-scooter",
    "categoryLabel": {
      "pt": "Velocípede / Scooter Elétrica",
      "en": "Electric Scooter / Moped",
      "es": "Vehículo Eléctrico / Scooter",
      "fr": "Véhicule Électrique / Scooter",
      "de": "Elektroroller / Moped"
    },
    "image": "/images/vehicles/vortex_fox.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico Vortex Fox 60V",
    "suspensionShort": "Forqueta Hidráulica e Duplo Amortecedor",
    "maxSpeed": "25 km/h (Uso Sem Carta)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "60V",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "60V 20aH Bateria de Chumbo / Lítio",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    }
  },
  {
    "id": "tokio-3-rodas-mobilidade",
    "price": 1850,
    "name": "Tokio 3 rodas mobilidade reduzida",
    "brand": "Voltrish",
    "brandSlug": "voltrish",
    "isStar": false,
    "category": "e-trike",
    "categoryLabel": {
      "pt": "Triciclo / Quadriciclo de Mobilidade",
      "en": "Mobility Trike / Quad",
      "es": "Triciclo / Cuadriciclo de Movilidad",
      "fr": "Tricycle / Quad de Mobilité",
      "de": "Mobilitätsdreirad / Quad"
    },
    "image": "/images/vehicles/tokio_3_rodas.webp",
    "rating": "4.8 (15)",
    "drivetrainShort": "Motor Elétrico com Marcha-Atrás e Diferencial",
    "suspensionShort": "Suspensão Conforto Tripla para Mobilidade Reduzida",
    "maxSpeed": "25 km/h (3 Modos + Reverse)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "60V 20aH Bateria de Chumbo / Lítio",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    }
  },
  {
    "id": "raider-mini-33-3-rodas",
    "price": 1780,
    "name": "RAIDER MINI 33 3 Rodas 3 Lugares",
    "brand": "Raider",
    "brandSlug": "raider",
    "isStar": false,
    "category": "e-trike",
    "categoryLabel": {
      "pt": "Triciclo / Quadriciclo de Mobilidade",
      "en": "Mobility Trike / Quad",
      "es": "Triciclo / Cuadriciclo de Movilidad",
      "fr": "Tricycle / Quad de Mobilité",
      "de": "Mobilitätsdreirad / Quad"
    },
    "image": "/images/vehicles/raider_mini_33.webp",
    "rating": "4.8 (10)",
    "drivetrainShort": "Triciclo Elétrico 3 Lugares 60V",
    "suspensionShort": "Suspensão Hidráulica Dianteira e Traseira",
    "maxSpeed": "25 km/h (3 Velocidades + Reverse)",
    "autonomy": "40 a 60 km",
    "powerNominal": "250W",
    "tags": [
      "Uso Sem Carta",
      "3 Lugares",
      "Mobilidade Sustentável"
    ],
    "specs": {
      "frame": "Chassi em liga de aço de alta resistência",
      "drivetrain": "Motor traseiro de cubo / transmissão elétrica",
      "suspension": "Forqueta dianteira hidráulica e amortecedores traseiros",
      "brakes": "Sistema de travagem de disco/tambor",
      "wheels": "Jantes de alta resistência com pneus tubeless",
      "motor": "Motor de 250W",
      "battery": "60V 20Ah Bateria de Chumbo",
      "useKey": "bike.voltrish.use"
    },
    "stats": {
      "terrains": {
        "highway": 5,
        "urban": 90,
        "climbing": 35,
        "range": 45,
        "offroad": 10
      },
      "performance": {
        "battery": 50,
        "agility": 80,
        "power": 40,
        "weight": 60
      }
    },
    "features": [
      "Velocípede 3 rodas com 3 lugares",
      "Autonomia de 40 a 60km por carga",
      "Baterias de chumbo 60V 20Ah",
      "3 velocidades",
      "Iluminação de LED",
      "Travão no pé e nas mãos",
      "Alarme",
      "Bancos em pele",
      "Não necessita de carta de condução"
    ],
    "colors": [
      "Preto"
    ],
    "warranty": {
      "motor": "2 anos de garantia motor",
      "battery": "6 meses de garantia de bateria"
    }
  }
];

export const catalogSlugs = {
  pt: "catalogo",
  en: "catalog",
  es: "catalogo",
  fr: "catalogue",
  de: "katalog"
};

export default bikes;
