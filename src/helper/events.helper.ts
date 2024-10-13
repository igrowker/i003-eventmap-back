export const eventos = [
    {
      name: "Concierto de Rock",
      type: "Artistico",
      time: "15:30",
      location: {
        lat: -34.5997,
        lon: -58.3833,
      },
      photos: ["https://picsum.photos/200/300?random=505", "https://picsum.photos/200/300?random=506"],
      description: "El mejor espectáculo musical del año.",
      amount: 0.46,
      createdAt: new Date(),
      capacity: "Entre 325 y 773 personas",
      addres: "Teatro Colón",
    },
    {
      name: "Festival de Cine",
      type: "Artistico",
      time: "00:00",
      location: {
        lat: -34.5839,
        lon: -58.4039, // Balvanera
      },
      photos: ["https://picsum.photos/200/300?random=526", "https://picsum.photos/200/300?random=876"],
      description: "Un recorrido Artistico único.",
      amount: 0.95,
      createdAt: new Date(),
      capacity: "Entre 183 y 766 personas",
      addres: "Museo de Arte Latinoamericano de Buenos Aires (MALBA)",
    },
    {
      name: "Cata de Vinos",
      type: "Artistico",
      time: "00:00",
      location: {
        lat: -34.5886,
        lon: -58.3937, // Almagro
      },
      photos: ["https://picsum.photos/200/300?random=452", "https://picsum.photos/200/300?random=489"],
      description: "Disfruta de los mejores platos gourmet.",
      amount: 0.33,
      createdAt: new Date(),
      capacity: "Entre 156 y 731 personas",
      addres: "Centro Cultural Recoleta",
    },
    {
      name: "Concierto de Jazz",
      type: "Artistico",
      time: "19:00",
      location: {
        lat: -34.6341,
        lon: -58.3658, // Barrio de Monserrat
      },
      photos: ["https://picsum.photos/200/300?random=111", "https://picsum.photos/200/300?random=222"],
      description: "Disfruta de una noche de jazz en vivo con las mejores bandas locales.",
      amount: 0.67,
      createdAt: new Date(),
      capacity: "Entre 200 y 500 personas",
      addres: "Usina del Arte",
    },
    {
      name: "Exposición de Arte Contemporáneo",
      type: "Artistico",
      time: "18:00",
      location: {
        lat: -34.5971, // Museo de Arte Moderno
        lon: -58.4474,
      },
      photos: ["https://picsum.photos/200/300?random=777", "https://picsum.photos/200/300?random=888"],
      description: "Muestra de obras de artistas contemporáneos emergentes.",
      amount: 0.89,
      createdAt: new Date(),
      capacity: "Entre 100 y 500 personas",
      addres: "Espacio Cultural Carlos Gardel, Buenos Aires",
    },
    {
      name: "Festival de Música Electrónica",
      type: "Artistico",
      time: "22:00",
      location: {
        lat: -34.6023, // Hipódromo de Palermo
        lon: -58.3864,
      },
      photos: ["https://picsum.photos/200/300?random=999", "https://picsum.photos/200/300?random=101"],
      description: "Una fiesta con los mejores DJ's nacionales e internacionales.",
      amount: 0.76,
      createdAt: new Date(),
      capacity: "Entre 500 y 2000 personas",
      addres: "Teatro San Martín, Buenos Aires",
    },
    {
      name: "Noche de Tango",
      type: "Artistico",
      time: "21:00",
      location: {
        lat: -34.6091, // Centro Cultural Kirchner
        lon: -58.3847,
      },
      photos: ["https://picsum.photos/200/300?random=3333", "https://picsum.photos/200/300?random=4444"],
      description: "Disfruta de una noche llena de pasión con el mejor tango en vivo.",
      amount: 0.58,
      createdAt: new Date(),
      capacity: "Entre 100 y 300 personas",
      addres: "Palacio Barolo, Buenos Aires",
    },
    {
      name: "Exposición de Fotografía",
      type: "Artistico",
      time: "15:00",
      location: {
        lat: -34.6040, // Fundación Proa
        lon: -58.3917,
      },
      photos: ["https://picsum.photos/200/300?random=5555", "https://picsum.photos/200/300?random=6666"],
      description: "Una muestra que explora la diversidad Artistico a través de la fotografía.",
      amount: 0.72,
      createdAt: new Date(),
      capacity: "Hasta 200 personas",
      addres: "Teatro San Martín, Buenos Aires",
    },
    {
      name: "Feria del Libro",
      type: "Artistico",
      time: "10:00",
      location: {
        lat: -34.5877, // La Rural
        lon: -58.3929,
      },
      photos: ["https://picsum.photos/200/300?random=7777", "https://picsum.photos/200/300?random=8888"],
      description: "Un evento imperdible para los amantes de la lectura y la literatura.",
      amount: 0.39,
      createdAt: new Date(),
      capacity: "Entre 1000 y 5000 personas",
      addres: "Museo Nacional de Bellas Artes, Buenos Aires",
    },
    {
      name: "Ciclo de Cine Argentino",
      type: "Artistico",
      time: "19:30",
      location: {
        lat: -34.6042, // Cine Gaumont
        lon: -58.3696,
      },
      photos: ["https://picsum.photos/200/300?random=11111", "https://picsum.photos/200/300?random=22222"],
      description: "Disfruta de una selección de los mejores films argentinos.",
      amount: 0.50,
      createdAt: new Date(),
      capacity: "Hasta 150 personas",
      addres: "Centro Cultural Kirchner, Buenos Aires",
    },
    {
      name: "Feria de Artesanías",
      type: "Artistico",
      time: "09:00",
      location: {
        lat: -34.5454, // Plaza Serrano
        lon: -58.4747,
      },
      photos: ["https://picsum.photos/200/300?random=33333", "https://picsum.photos/200/300?random=44444"],
      description: "Apoya a los artesanos locales y descubre productos únicos.",
      amount: 0.27,
      createdAt: new Date(),
      capacity: "Entre 200 y 800 personas",
      addres: "Espacio Memoria y Derechos Humanos (Ex ESMA), Buenos Aires",
    },
    {
      name: "Concierto de Rock Alternativo",
      type: "Artistico",
      time: "20:00",
      location: {
        lat: -34.5809,  // Teatro Gran Rex
        lon: -58.4123
      },
      photos: [
        "https://picsum.photos/200/300?random=55555",
        "https://picsum.photos/200/300?random=66666"
      ],
      description: "Una noche llena de energía y buena música.",
      amount: 0.74,
      createdAt: new Date(),
      capacity: "Hasta 400 personas",
      addres: "Museo Evita, Buenos Aires"
    },
    {
      name: "Ciclo de Música Electrónica",
      type: "Artistico",
      time: "22:00",
      location: {
        lat: -34.6226,  // Club Niceto
        lon: -58.3722
      },
      photos: [
        "https://picsum.photos/200/300?random=1111",
        "https://picsum.photos/200/300?random=2222"
      ],
      description: "Vive una noche llena de beats y buena vibra con DJs locales.",
      amount: 0.78,
      createdAt: new Date(),
      capacity: "Hasta 600 personas",
      addres: "Museo de Arte Moderno de Buenos Aires (MAMBA), Buenos Aires"
    },
    {
      name: "Concierto de Jazz",
      type: "Artistico",
      time: "20:00",
      location: {
        lat: -34.6147,  // La Trastienda
        lon: -58.3711
      },
      photos: [
        "https://picsum.photos/200/300?random=3333",
        "https://picsum.photos/200/300?random=4444"
      ],
      description: "Disfruta de una velada con el mejor jazz en vivo.",
      amount: 0.54,
      createdAt: new Date(),
      capacity: "Hasta 200 personas",
      addres: "El Zanjón de Granados, Buenos Aires"
    },
    {
      name: "Taller de Pintura al Aire Libre",
      type: "Artistico",
      time: "11:00",
      location: {
        lat: -34.6872,  // Bosques de Palermo
        lon: -58.5334
      },
      photos: [
        "https://picsum.photos/200/300?random=5555",
        "https://picsum.photos/200/300?random=6666"
      ],
      description: "Expresa tu creatividad en un entorno natural mientras aprendes técnicas de pintura.",
      amount: 0.29,
      createdAt: new Date(),
      capacity: "Hasta 30 personas",
      addres: "Teatro de La Rosa, Buenos Aires"
    },
    {
      name: "Festival de Teatro Infantil",
      type: "Artistico",
      time: "15:00",
      location: {
        lat: -34.6819,  // Teatro Colón
        lon: -58.5466
      },
      photos: [
        "https://picsum.photos/200/300?random=7777",
        "https://picsum.photos/200/300?random=8888"
      ],
      description: "Una jornada de diversión y risas para toda la familia.",
      amount: 0.63,
      createdAt: new Date(),
      capacity: "Hasta 500 personas",
      addres: "Centro Cultural San Justo, Buenos Aires"
    },
    {
      name: "Mercado de Pulgas",
      type: "Artistico",
      time: "09:00",
      location: {
        lat: -34.6636,  // Mercado de San Telmo
        lon: -58.5697
      },
      photos: [
        "https://picsum.photos/200/300?random=9999",
        "https://picsum.photos/200/300?random=1010"
      ],
      description: "Descubre tesoros antiguos y únicos en nuestro mercado de pulgas.",
      amount: 0.48,
      createdAt: new Date(),
      capacity: "Sin límite",
      addres: "Museo de la Ciudad de La Matanza, Buenos Aires"
    },
    {
      name: "Concierto de Música Clásica",
      type: "Artistico",
      time: "19:00",
      location: {
        lat: -34.6891,  // Teatro Avenida
        lon: -58.5257
      },
      photos: [
        "https://picsum.photos/200/300?random=22222",
        "https://picsum.photos/200/300?random=33333"
      ],
      description: "Una velada mágica con las obras más reconocidas del repertorio clásico.",
      amount: 0.59,
      createdAt: new Date(),
      capacity: "Hasta 250 personas",
      addres: "Biblioteca Popular San Justo, Buenos Aires"
    },
    {
      name: "Exposición de Arte Moderno",
      type: "Artistico",
      time: "14:00",
      location: {
        lat: -34.6703,  // Museo de Arte Moderno
        lon: -58.5884
      },
      photos: [
        "https://picsum.photos/200/300?random=44444",
        "https://picsum.photos/200/300?random=55555"
      ],
      description: "Una exposición que desafía los límites de la creatividad.",
      amount: 0.83,
      createdAt: new Date(),
      capacity: "Sin límite",
      addres: "Teatro La Matanza, Buenos Aires"
    },
    {
      name: "Gira de Museos",
      type: "Artistico",
      time: "10:00",
      location: {
        lat: -34.6821,  // Museo Nacional de Bellas Artes
        lon: -58.5494
      },
      photos: [
        "https://picsum.photos/200/300?random=10101",
        "https://picsum.photos/200/300?random=11111"
      ],
      description: "Una jornada para explorar los museos más emblemáticos de la ciudad.",
      amount: 0.43,
      createdAt: new Date(),
      capacity: "Sin límite",
      addres: "Espacio Cultural La Fábrica, Buenos Aires"
    },
    {
      name: "Concurso de Fotografía",
      type: "Artistico",
      time: "17:00",
      location: {
        lat: -34.6887,  // Centro Artístico
        lon: -58.5492
      },
      photos: [
        "https://picsum.photos/200/300?random=12121",
        "https://picsum.photos/200/300?random=13131"
      ],
      description: "Captura la esencia de la ciudad y participa en nuestro concurso.",
      amount: 0.55,
      createdAt: new Date(),
      capacity: "Hasta 100 personas",
      addres: "Museo de Arte Contemporáneo de La Matanza, Buenos Aires"
    },
    {
      name: "Charla sobre Desarrollo Sostenible",
      type: "Artistico",
      time: "16:00",
      location: {
        lat: -34.6844,  // Universidad de Buenos Aires
        lon: -58.5773
      },
      photos: [
        "https://picsum.photos/200/300?random=14141",
        "https://picsum.photos/200/300?random=15151"
      ],
      description: "Aprende sobre la importancia del desarrollo sostenible en nuestra sociedad.",
      amount: 0.34,
      createdAt: new Date(),
      capacity: "Hasta 50 personas",
      addres: "Casa de la Cultura de La Matanza, Buenos Aires"
    },
    {
      name: "Cine al Aire Libre",
      type: "Artistico",
      time: "20:30",
      location: {
        lat: -34.6827,
        lon: -58.5308
      },
      photos: [
        "https://picsum.photos/200/300?random=20202",
        "https://picsum.photos/200/300?random=21212"
      ],
      description: "Disfruta de películas clásicas bajo las estrellas.",
      amount: 0.67,
      createdAt: new Date(),
      capacity: "Hasta 300 personas",
      addres: "Centro Cultural La Chacarita, Buenos Aires"
    },
    {
      name: "Festival de Títeres",
      type: "Artistico",
      time: "11:00",
      location: {
        lat: -34.6633,
        lon: -58.5734
      },
      photos: [
        "https://picsum.photos/200/300?random=22222",
        "https://picsum.photos/200/300?random=23232"
      ],
      description: "Un evento divertido para toda la familia con espectáculos de títeres.",
      amount: 0.46,
      createdAt: new Date(),
      capacity: "Hasta 200 personas",
      addres: "Galería de Arte de La Matanza, Buenos Aires"
    },
    {
      name: "Feria del Libro",
      type: "Artistico",
      time: "10:00",
      location: {
        lat: -34.6880,
        lon: -58.5568
      },
      photos: [
        "https://picsum.photos/200/300?random=24242",
        "https://picsum.photos/200/300?random=25252"
      ],
      description: "Una celebración de la lectura con autores, talleres y más.",
      amount: 0.91,
      createdAt: new Date(),
      capacity: "Sin límite",
      addres: "Teatro El Cubo, Buenos Aires"
    },
    {
      name: "Maratón de Lectura",
      type: "Artistico",
      time: "08:00",
      location: {
        lat: -34.6900,
        lon: -58.5250
      },
      photos: [
        "https://picsum.photos/200/300?random=26262",
        "https://picsum.photos/200/300?random=27272"
      ],
      description: "Una jornada para celebrar el placer de leer en voz alta.",
      amount: 0.39,
      createdAt: new Date(),
      capacity: "Hasta 100 personas",
      addres: "Cine Teatro San Justo, Buenos Aires"
    },
    {
      name: "Concierto de Música Folklórica",
      type: "Artistico",
      time: "19:30",
      location: {
        lat: -34.6700,
        lon: -58.5585
      },
      photos: [
        "https://picsum.photos/200/300?random=28282",
        "https://picsum.photos/200/300?random=29292"
      ],
      description: "Un homenaje a la música folklórica argentina con artistas locales.",
      amount: 0.65,
      createdAt: new Date(),
      capacity: "Hasta 400 personas",
      addres: "Museo de Arte y Memoria de La Matanza, Buenos Aires"
    },
    {
      name: "Fiesta de Disfraces",
      type: "Artistico",
      time: "22:00",
      location: {
        lat: -34.6810,
        lon: -58.5405
      },
      photos: [
        "https://picsum.photos/200/300?random=30303",
        "https://picsum.photos/200/300?random=31313"
      ],
      description: "Una noche llena de diversión, música y creatividad.",
      amount: 0.73,
      createdAt: new Date(),
      capacity: "Hasta 200 personas",
      addres: "Centro Cultural La Trama, Buenos Aires"
    },
    {
      name: "Encuentro de Artistas Locales",
      type: "Artistico",
      time: "15:00",
      location: {
        lat: -34.6885,
        lon: -58.5376
      },
      photos: [
        "https://picsum.photos/200/300?random=32323",
        "https://picsum.photos/200/300?random=33333"
      ],
      description: "Conoce a artistas locales y disfruta de su talento.",
      amount: 0.58,
      createdAt: new Date(),
      capacity: "Hasta 150 personas",
      addres: "Galería de Arte Sarmiento, Buenos Aires"
    },
    {
      name: "Concierto de Jazz en Vivo",
      type: "Artistico",
      time: "20:00",
      location: {
        lat: -34.6830,
        lon: -58.5460
      },
      photos: [
        "https://picsum.photos/200/300?random=34343",
        "https://picsum.photos/200/300?random=35353"
      ],
      description: "Una velada mágica con los mejores músicos de jazz de la ciudad.",
      amount: 0.82,
      createdAt: new Date(),
      capacity: "Hasta 200 personas",
      addres: "Espacio Cultural La Usina, Buenos Aires"
    },
    {
      name: "Exposición de Arte Moderno",
      type: "Artistico",
      time: "11:00",
      location: {
        lat: -34.6750,
        lon: -58.5710
      },
      photos: [
        "https://picsum.photos/200/300?random=38383",
        "https://picsum.photos/200/300?random=39393"
      ],
      description: "Descubre obras de artistas contemporáneos.",
      amount: 0.69,
      createdAt: new Date(),
      capacity: "Sin límite",
      addres: "Museo de Bellas Artes de La Matanza, Buenos Aires"
    },
    {
      name: "Taller de Cerámica para Niños",
      type: "Artistico",
      time: "14:00",
      location: {
        lat: -34.6875,
        lon: -58.5315
      },
      photos: [
        "https://picsum.photos/200/300?random=40404",
        "https://picsum.photos/200/300?random=41414"
      ],
      description: "Una actividad creativa para los más pequeños.",
      amount: 0.35,
      createdAt: new Date(),
      capacity: "Hasta 20 niños",
      addres: "Casa de la Música San Justo, Buenos Aires"
    },
    {
      name: "Maratón de Programación",
      type: "Artistico",
      time: "09:00",
      location: {
        lat: -34.6849,
        lon: -58.5500
      },
      photos: [
        "https://picsum.photos/200/300?random=42424",
        "https://picsum.photos/200/300?random=43434"
      ],
      description: "Compite y demuestra tus habilidades en programación.",
      amount: 0.90,
      createdAt: new Date(),
      capacity: "Hasta 100 personas",
      addres: "Escuela de Arte San Justo, Buenos Aires"
    },
    {
      name: "Feria de Ciencias",
      type: "Artistico",
      time: "10:00",
      location: {
        lat: -34.6795,
        lon: -58.5321
      },
      photos: [
        "https://picsum.photos/200/300?random=44444",
        "https://picsum.photos/200/300?random=45454"
      ],
      description: "Una jornada para explorar y experimentar la ciencia.",
      amount: 0.62,
      createdAt: new Date(),
      capacity: "Sin límite",
      addres: "Estudio de Arte Aural, Buenos Aires"
    },
    {
      name: "Exhibición de Autos Clásicos",
      type: "Artistico",
      time: "12:00",
      location: {
        lat: -34.6340,
        lon: -58.5905
      },
      photos: [
        "https://picsum.photos/200/300?random=46464",
        "https://picsum.photos/200/300?random=47474"
      ],
      description: "Admira una colección de autos clásicos y vintage.",
      amount: 0.77,
      createdAt: new Date(),
      capacity: "Sin límite",
      addres: "Teatro La Gente, Buenos Aires"
    },
    {
      name: "Festival de Verano",
      type: "Artistico",
      time: "15:00",
      location: {
        lat: -34.6345,
        lon: -58.5900
      },
      photos: [
        "https://picsum.photos/200/300?random=50505",
        "https://picsum.photos/200/300?random=51515"
      ],
      description: "Celebra el verano con música, arte y comida.",
      amount: 0.81,
      createdAt: new Date(),
      capacity: "Sin límite",
      addres: "Museo Histórico Municipal, Buenos Aires"
    },
    {
        name: "Concierto de Rock Alternativo",
        type: "Artistico",
        time: "20:00",
        location: {
        lat: -34.5890, // Estadio Obras
        lon: -58.4139,
        },
        photos: ["https://picsum.photos/200/300?random=111", "https://picsum.photos/200/300?random=222"],
        description: "Concierto de bandas emergentes de rock alternativo.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Estadio Obras, Buenos Aires",
    },
    {
        name: "Festival de Jazz Internacional",
        type: "Artistico",
        time: "19:30",
        location: {
        lat: -34.6095, // Teatro Gran Rex
        lon: -58.3973,
        },
        photos: ["https://picsum.photos/200/300?random=333", "https://picsum.photos/200/300?random=444"],
        description: "Un festival que reúne a los mejores músicos de jazz del mundo.",
        amount: 0.7,
        createdAt: new Date(),
        capacity: "Entre 2000 y 5000 personas",
        addres: "Teatro Gran Rex, Buenos Aires",
    },
    {
        name: "Concierto de Música Clásica",
        type: "Artistico",
        time: "21:00",
        location: {
        lat: -34.5880, // Teatro Colón
        lon: -58.3953,
        },
        photos: ["https://picsum.photos/200/300?random=555", "https://picsum.photos/200/300?random=666"],
        description: "Presentación de la Orquesta Sinfónica Nacional.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Teatro Colón, Buenos Aires",
    },
    {
        name: "Fiesta de Reggaetón",
        type: "Artistico",
        time: "23:00",
        location: {
        lat: -34.6050, // C.C. Konex
        lon: -58.4210,
        },
        photos: ["https://picsum.photos/200/300?random=777", "https://picsum.photos/200/300?random=888"],
        description: "La mejor fiesta de reggaetón de la ciudad.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "C.C. Konex, Buenos Aires",
    },
    {
        name: "Concierto de Pop Internacional",
        type: "Artistico",
        time: "19:00",
        location: {
        lat: -34.6085, // Hipódromo de San Isidro
        lon: -58.4245,
        },
        photos: ["https://picsum.photos/200/300?random=999", "https://picsum.photos/200/300?random=101"],
        description: "Grandes estrellas del pop internacional en un solo lugar.",
        amount: 0.9,
        createdAt: new Date(),
        capacity: "Más de 5000",
        addres: "Hipódromo de San Isidro, Buenos Aires",
    },
    {
        name: "Concierto de Música Folklórica",
        type: "Artistico",
        time: "18:30",
        location: {
        lat: -34.6042, // Teatro Nacional Cervantes
        lon: -58.3928,
        },
        photos: ["https://picsum.photos/200/300?random=102", "https://picsum.photos/200/300?random=103"],
        description: "Una noche de música folklórica con artistas locales.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Teatro Nacional Cervantes, Buenos Aires",
    },
    {
        name: "Concierto de Heavy Metal",
        type: "Artistico",
        time: "22:30",
        location: {
        lat: -34.5895, // Teatro Vorterix
        lon: -58.4221,
        },
        photos: ["https://picsum.photos/200/300?random=104", "https://picsum.photos/200/300?random=105"],
        description: "Los mejores exponentes del heavy metal en vivo.",
        amount: 0.7,
        createdAt: new Date(),
        capacity: "Entre 2000 y 5000 personas",
        addres: "Teatro Vorterix, Buenos Aires",
    },
    {
        name: "Noche de Música Electrónica",
        type: "Artistico",
        time: "23:30",
        location: {
        lat: -34.6090, // Club Niceto
        lon: -58.4220,
        },
        photos: ["https://picsum.photos/200/300?random=106", "https://picsum.photos/200/300?random=107"],
        description: "Los DJ's más importantes de la escena electrónica.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Club Niceto, Buenos Aires",
    },
    {
        name: "Concierto de Salsa",
        type: "Artistico",
        time: "21:30",
        location: {
        lat: -34.6032, // Teatro Gran Rivadavia
        lon: -58.4496,
        },
        photos: ["https://picsum.photos/200/300?random=108", "https://picsum.photos/200/300?random=109"],
        description: "Una noche de salsa y ritmo caribeño.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Teatro Gran Rivadavia, Buenos Aires",
    },
    {
        name: "Concierto de Indie",
        type: "Artistico",
        time: "20:30",
        location: {
        lat: -34.5950, // La Trastienda
        lon: -58.4201,
        },
        photos: ["https://picsum.photos/200/300?random=110", "https://picsum.photos/200/300?random=111"],
        description: "Lo mejor de la música indie nacional.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "La Trastienda, Buenos Aires",
    },
    {
        name: "Concierto de Música Electrónica",
        type: "Artistico",
        time: "22:00",
        location: {
        lat: -34.6098, // C.C. La Máscara
        lon: -58.4104,
        },
        photos: ["https://picsum.photos/200/300?random=201", "https://picsum.photos/200/300?random=202"],
        description: "Un festival con los DJ's más reconocidos del país.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "C.C. La Máscara, Buenos Aires",
    },
    {
        name: "Festival de Música Urbana",
        type: "Artistico",
        time: "18:00",
        location: {
        lat: -34.5822, // Parque Rivadavia
        lon: -58.4395,
        },
        photos: ["https://picsum.photos/200/300?random=203", "https://picsum.photos/200/300?random=204"],
        description: "Un evento al aire libre con lo mejor de la música urbana.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Parque Rivadavia, Buenos Aires",
    },
    {
        name: "Concierto de Pop Latino",
        type: "Artistico",
        time: "21:00",
        location: {
        lat: -34.6090, // Teatro Opera
        lon: -58.3918,
        },
        photos: ["https://picsum.photos/200/300?random=205", "https://picsum.photos/200/300?random=206"],
        description: "Los mejores artistas de pop latino en un solo escenario.",
        amount: 0.9,
        createdAt: new Date(),
        capacity: "Más de 5000",
        addres: "Teatro Opera, Buenos Aires",
    },
    {
        name: "Noche de Rock Clásico",
        type: "Artistico",
        time: "20:30",
        location: {
        lat: -34.5960, // Estadio Luna Park
        lon: -58.3660,
        },
        photos: ["https://picsum.photos/200/300?random=207", "https://picsum.photos/200/300?random=208"],
        description: "Revive los clásicos del rock con grandes bandas.",
        amount: 0.7,
        createdAt: new Date(),
        capacity: "Entre 2000 y 5000 personas",
        addres: "Estadio Luna Park, Buenos Aires",
    },
    {
        name: "Festival de Música de Cámara",
        type: "Artistico",
        time: "19:00",
        location: {
        lat: -34.5903, // Centro Cultural Kirchner
        lon: -58.3797,
        },
        photos: ["https://picsum.photos/200/300?random=209", "https://picsum.photos/200/300?random=210"],
        description: "Un festival dedicado a la música de cámara.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Centro Cultural Kirchner, Buenos Aires",
    },
    {
        name: "Concierto de Música Regional",
        type: "Artistico",
        time: "20:00",
        location: {
        lat: -34.6025, // Teatro San Martín
        lon: -58.3848,
        },
        photos: ["https://picsum.photos/200/300?random=211", "https://picsum.photos/200/300?random=212"],
        description: "Celebra la música regional con artistas destacados.",
        amount: 0.7,
        createdAt: new Date(),
        capacity: "Entre 2000 y 5000 personas",
        addres: "Teatro San Martín, Buenos Aires",
    },
    {
        name: "Concierto de Música de los '80",
        type: "Artistico",
        time: "21:30",
        location: {
        lat: -34.5965, // La Usina del Arte
        lon: -58.3720,
        },
        photos: ["https://picsum.photos/200/300?random=213", "https://picsum.photos/200/300?random=214"],
        description: "Un viaje musical a los '80 con las mejores bandas.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "La Usina del Arte, Buenos Aires",
    },
    {
        name: "Fiesta de Hip Hop",
        type: "Artistico",
        time: "23:00",
        location: {
        lat: -34.6102, // C.C. Matienzo
        lon: -58.4473,
        },
        photos: ["https://picsum.photos/200/300?random=215", "https://picsum.photos/200/300?random=216"],
        description: "Disfruta de una noche llena de hip hop y freestyle.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "C.C. Matienzo, Buenos Aires",
    },
    {
        name: "Noche de Tango",
        type: "Artistico",
        time: "20:00",
        location: {
        lat: -34.6000, // Café Tortoni
        lon: -58.3723,
        },
        photos: ["https://picsum.photos/200/300?random=217", "https://picsum.photos/200/300?random=218"],
        description: "Una velada de tango en el famoso Café Tortoni.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Café Tortoni, Buenos Aires",
    },
    {
        name: "Concierto de Música Experimental",
        type: "Artistico",
        time: "22:30",
        location: {
        lat: -34.5815, // Espacio Cultural Nuestros Hijos
        lon: -58.4210,
        },
        photos: ["https://picsum.photos/200/300?random=219", "https://picsum.photos/200/300?random=220"],
        description: "Un concierto que desafía los límites de la música.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Espacio Cultural Nuestros Hijos, Buenos Aires",
    },
    {
        name: "Concierto de Jazz y Blues",
        type: "Artistico",
        time: "19:30",
        location: {
        lat: -34.5940, // Thelonious
        lon: -58.3964,
        },
        photos: ["https://picsum.photos/200/300?random=301", "https://picsum.photos/200/300?random=302"],
        description: "Una noche con las mejores bandas de jazz y blues.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Thelonious, Buenos Aires",
    },
    {
        name: "Fiesta de Música Latina",
        type: "Artistico",
        time: "21:00",
        location: {
        lat: -34.6134, // Club Ciudad de Buenos Aires
        lon: -58.4218,
        },
        photos: ["https://picsum.photos/200/300?random=303", "https://picsum.photos/200/300?random=304"],
        description: "Un evento lleno de ritmos latinos y bailes.",
        amount: 0.9,
        createdAt: new Date(),
        capacity: "Más de 5000",
        addres: "Club Ciudad de Buenos Aires, Buenos Aires",
    },
    {
        name: "Noche de Indie Rock",
        type: "Artistico",
        time: "22:00",
        location: {
        lat: -34.5985, // Niceto Club
        lon: -58.4292,
        },
        photos: ["https://picsum.photos/200/300?random=305", "https://picsum.photos/200/300?random=306"],
        description: "Disfruta de las mejores bandas de indie rock en un ambiente único.",
        amount: 0.7,
        createdAt: new Date(),
        capacity: "Entre 2000 y 5000 personas",
        addres: "Niceto Club, Buenos Aires",
    },
    {
        name: "Festival de Música Folklórica",
        type: "Artistico",
        time: "18:00",
        location: {
        lat: -34.5997, // Parque Tres de Febrero
        lon: -58.3947,
        },
        photos: ["https://picsum.photos/200/300?random=307", "https://picsum.photos/200/300?random=308"],
        description: "Celebra la música folklórica en un ambiente al aire libre.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Parque Tres de Febrero, Buenos Aires",
    },
    {
        name: "Concierto de Música Electrónica Underground",
        type: "Artistico",
        time: "23:00",
        location: {
        lat: -34.6065, // Club Bahrein
        lon: -58.3926,
        },
        photos: ["https://picsum.photos/200/300?random=309", "https://picsum.photos/200/300?random=310"],
        description: "Una noche de electrónica underground con artistas locales.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Club Bahrein, Buenos Aires",
    },
    {
        name: "Noche de Rock Nacional",
        type: "Artistico",
        time: "20:30",
        location: {
        lat: -34.5961, // Teatro Gran Rex
        lon: -58.4172,
        },
        photos: ["https://picsum.photos/200/300?random=311", "https://picsum.photos/200/300?random=312"],
        description: "Los íconos del rock nacional en un solo lugar.",
        amount: 0.7,
        createdAt: new Date(),
        capacity: "Entre 2000 y 5000 personas",
        addres: "Teatro Gran Rex, Buenos Aires",
    },
    {
        name: "Concierto de Música de los '90",
        type: "Artistico",
        time: "21:30",
        location: {
        lat: -34.6068, // Teatro Coliseo
        lon: -58.3981,
        },
        photos: ["https://picsum.photos/200/300?random=313", "https://picsum.photos/200/300?random=314"],
        description: "Una noche para recordar los clásicos de los '90.",
        amount: 0.9,
        createdAt: new Date(),
        capacity: "Más de 5000",
        addres: "Teatro Coliseo, Buenos Aires",
    },
    {
        name: "Fiesta de Reggaetón",
        type: "Artistico",
        time: "22:00",
        location: {
        lat: -34.5828, // Club de Música
        lon: -58.4390,
        },
        photos: ["https://picsum.photos/200/300?random=315", "https://picsum.photos/200/300?random=316"],
        description: "Baila al ritmo del reggaetón en una noche inolvidable.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Club de Música, Buenos Aires",
    },
    {
        name: "Concierto de Música Experimental y Avant-Garde",
        type: "Artistico",
        time: "20:00",
        location: {
        lat: -34.5946, // Centro Cultural San Martín
        lon: -58.4213,
        },
        photos: ["https://picsum.photos/200/300?random=317", "https://picsum.photos/200/300?random=318"],
        description: "Explora nuevas fronteras en la música experimental.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Centro Cultural San Martín, Buenos Aires",
    },
    {
        name: "Noche de Rock Alternativo",
        type: "Artistico",
        time: "21:00",
        location: {
        lat: -34.6060, // C.C. Ciudad de La Paz
        lon: -58.4472,
        },
        photos: ["https://picsum.photos/200/300?random=319", "https://picsum.photos/200/300?random=320"],
        description: "Disfruta de lo mejor del rock alternativo en vivo.",
        amount: 0.7,
        createdAt: new Date(),
        capacity: "Entre 2000 y 5000 personas",
        addres: "C.C. Ciudad de La Paz, Buenos Aires",
    },
    {
        name: "Concierto de Rock Progresivo",
        type: "Artistico",
        time: "20:00",
        location: {
        lat: -34.6104, // Teatro Vorterix
        lon: -58.4272,
        },
        photos: ["https://picsum.photos/200/300?random=401", "https://picsum.photos/200/300?random=402"],
        description: "Sumérgete en el mundo del rock progresivo con las mejores bandas.",
        amount: 0.7,
        createdAt: new Date(),
        capacity: "Entre 2000 y 5000 personas",
        addres: "Teatro Vorterix, Buenos Aires",
    },
    {
        name: "Festival de Música Electrónica",
        type: "Artistico",
        time: "22:00",
        location: {
        lat: -34.5721, // Hipódromo de San Isidro
        lon: -58.4922,
        },
        photos: ["https://picsum.photos/200/300?random=403", "https://picsum.photos/200/300?random=404"],
        description: "Una fiesta de música electrónica que no querrás perderte.",
        amount: 0.9,
        createdAt: new Date(),
        capacity: "Más de 5000",
        addres: "Hipódromo de San Isidro, Buenos Aires",
    },
    {
        name: "Concierto de Música Clásica",
        type: "Artistico",
        time: "19:30",
        location: {
        lat: -34.5950, // Teatro Colón
        lon: -58.4182,
        },
        photos: ["https://picsum.photos/200/300?random=405", "https://picsum.photos/200/300?random=406"],
        description: "Disfruta de una noche de música clásica en el icónico Teatro Colón.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Teatro Colón, Buenos Aires",
    },
    {
        name: "Festival de Música Folklórica Argentina",
        type: "Artistico",
        time: "18:00",
        location: {
        lat: -34.5883, // Plaza de Mayo
        lon: -58.3724,
        },
        photos: ["https://picsum.photos/200/300?random=407", "https://picsum.photos/200/300?random=408"],
        description: "Celebra la cultura argentina con este festival folklórico.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Plaza de Mayo, Buenos Aires",
    },
    {
        name: "Noche de Música Experimental",
        type: "Artistico",
        time: "21:00",
        location: {
        lat: -34.6010, // Centro Cultural Konex
        lon: -58.4118,
        },
        photos: ["https://picsum.photos/200/300?random=409", "https://picsum.photos/200/300?random=410"],
        description: "Explora nuevas sonoridades en esta noche de música experimental.",
        amount: 0.7,
        createdAt: new Date(),
        capacity: "Entre 2000 y 5000 personas",
        addres: "Centro Cultural Konex, Buenos Aires",
    },
    {
        name: "Concierto de Música Indie",
        type: "Artistico",
        time: "20:30",
        location: {
        lat: -34.5983, // Teatro Opera
        lon: -58.4166,
        },
        photos: ["https://picsum.photos/200/300?random=411", "https://picsum.photos/200/300?random=412"],
        description: "Una noche para disfrutar de las mejores bandas indie.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Teatro Opera, Buenos Aires",
    },
    {
        name: "Festival Internacional de Música",
        type: "Artistico",
        time: "19:00",
        location: {
        lat: -34.6148, // CCK - Centro Cultural Kirchner
        lon: -58.3725,
        },
        photos: ["https://picsum.photos/200/300?random=413", "https://picsum.photos/200/300?random=414"],
        description: "Un evento que reúne a artistas de todo el mundo.",
        amount: 0.9,
        createdAt: new Date(),
        capacity: "Más de 5000",
        addres: "CCK - Centro Cultural Kirchner, Buenos Aires",
    },
    {
        name: "Concierto de Música Tropical",
        type: "Artistico",
        time: "21:30",
        location: {
        lat: -34.6092, // Luna Park
        lon: -58.3662,
        },
        photos: ["https://picsum.photos/200/300?random=415", "https://picsum.photos/200/300?random=416"],
        description: "Disfruta de una noche llena de ritmo tropical.",
        amount: 0.7,
        createdAt: new Date(),
        capacity: "Entre 2000 y 5000 personas",
        addres: "Luna Park, Buenos Aires",
    },
    {
        name: "Concierto de Música Barroca",
        type: "Artistico",
        time: "18:30",
        location: {
        lat: -34.6145, // Teatro San Martín
        lon: -58.3964,
        },
        photos: ["https://picsum.photos/200/300?random=417", "https://picsum.photos/200/300?random=418"],
        description: "Sumérgete en la música barroca en un entorno mágico.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Teatro San Martín, Buenos Aires",
    },
    {
        name: "Noche de Música Electrónica",
        type: "Artistico",
        time: "22:30",
        location: {
        lat: -34.6042, // Teatro Roxy
        lon: -58.4148,
        },
        photos: ["https://picsum.photos/200/300?random=419", "https://picsum.photos/200/300?random=420"],
        description: "Una noche con los mejores DJ's de la escena electrónica.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Teatro Roxy, Buenos Aires",
    },
      
    //TODO eventos Deportivos
    {
        name: "Maratón de Villa Urquiza",
        type: "Deportivo",
        time: "08:00",
        location: {
        lat: -34.5803, // Plaza de Villa Urquiza
        lon: -58.4855,
        },
        photos: ["https://picsum.photos/200/300?random=841", "https://picsum.photos/200/300?random=842"],
        description: "Participa en la maratón de 10K en un entorno natural.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza de Villa Urquiza, Buenos Aires",
    },
    {
        name: "Torneo de Fútbol Infantil",
        type: "Deportivo",
        time: "10:00",
        location: {
        lat: -34.5798, // Club Atlético Villa Urquiza
        lon: -58.4872,
        },
        photos: ["https://picsum.photos/200/300?random=843", "https://picsum.photos/200/300?random=844"],
        description: "Un torneo para los más pequeños, con premios y sorpresas.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Club Atlético Villa Urquiza, Buenos Aires",
    },
    {
        name: "Clínica de Tenis",
        type: "Deportivo",
        time: "16:00",
        location: {
        lat: -34.5810, // Tenis Club Villa Urquiza
        lon: -58.4865,
        },
        photos: ["https://picsum.photos/200/300?random=845", "https://picsum.photos/200/300?random=846"],
        description: "Mejora tu juego con expertos en esta clínica intensiva.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Tenis Club Villa Urquiza, Buenos Aires",
    },
    {
        name: "Exhibición de Artes Marciales",
        type: "Deportivo",
        time: "18:00",
        location: {
        lat: -34.5805, // Centro Deportivo Villa Urquiza
        lon: -58.4842,
        },
        photos: ["https://picsum.photos/200/300?random=847", "https://picsum.photos/200/300?random=848"],
        description: "Asiste a una demostración de diferentes disciplinas de artes marciales.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Centro Deportivo Villa Urquiza, Buenos Aires",
    },
    {
        name: "Clase Abierta de Zumba",
        type: "Deportivo",
        time: "20:00",
        location: {
        lat: -34.5792, // Plaza de los Deportes
        lon: -58.4879,
        },
        photos: ["https://picsum.photos/200/300?random=849", "https://picsum.photos/200/300?random=850"],
        description: "Una clase gratuita de Zumba para disfrutar y hacer ejercicio.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Plaza de los Deportes, Villa Urquiza",
    },
    {
        name: "Ciclismo en Ruta",
        type: "Deportivo",
        time: "09:00",
        location: {
        lat: -34.5801, // Club Ciclista Villa Urquiza
        lon: -58.4857,
        },
        photos: ["https://picsum.photos/200/300?random=851", "https://picsum.photos/200/300?random=852"],
        description: "Recorrido de ciclismo por los puntos más emblemáticos de Villa Urquiza.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Club Ciclista Villa Urquiza, Buenos Aires",
    },
    {
        name: "Torneo de Ajedrez",
        type: "Deportivo",
        time: "15:00",
        location: {
        lat: -34.5789, // Centro Cultural Villa Urquiza
        lon: -58.4860,
        },
        photos: ["https://picsum.photos/200/300?random=853", "https://picsum.photos/200/300?random=854"],
        description: "Competencia de ajedrez para aficionados y expertos.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Centro Cultural Villa Urquiza, Buenos Aires",
    },
    {
        name: "Día del Rugby",
        type: "Deportivo",
        time: "11:00",
        location: {
        lat: -34.5815, // Club de Rugby Villa Urquiza
        lon: -58.4884,
        },
        photos: ["https://picsum.photos/200/300?random=855", "https://picsum.photos/200/300?random=856"],
        description: "Disfruta de partidos amistosos y actividades para todas las edades.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Club de Rugby Villa Urquiza, Buenos Aires",
    },
    {
        name: "Entrenamiento Abierto de CrossFit",
        type: "Deportivo",
        time: "17:00",
        location: {
        lat: -34.5797, // Gimnasio CrossFit Villa Urquiza
        lon: -58.4850,
        },
        photos: ["https://picsum.photos/200/300?random=857", "https://picsum.photos/200/300?random=858"],
        description: "Ven a probar una clase de CrossFit gratuita y abierta al público.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Gimnasio CrossFit Villa Urquiza, Buenos Aires",
    },
    {
        name: "Competiciones de Patinaje",
        type: "Deportivo",
        time: "13:00",
        location: {
        lat: -34.5804, // Pista de Patinaje Villa Urquiza
        lon: -58.4868,
        },
        photos: ["https://picsum.photos/200/300?random=859", "https://picsum.photos/200/300?random=860"],
        description: "Disfruta de competiciones y exhibiciones de patinaje artístico.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Pista de Patinaje Villa Urquiza, Buenos Aires",
    },
    {
        name: "Liga de Fútbol Juvenil",
        type: "Deportivo",
        time: "09:00",
        location: {
        lat: -34.5850, // Club de Fútbol Villa Urquiza
        lon: -58.4875,
        },
        photos: ["https://picsum.photos/200/300?random=861", "https://picsum.photos/200/300?random=862"],
        description: "Partidos de la liga juvenil de fútbol, con equipos locales.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Club de Fútbol Villa Urquiza, Buenos Aires",
    },
    {
        name: "Copa de Baloncesto",
        type: "Deportivo",
        time: "14:00",
        location: {
        lat: -34.5835, // Club de Baloncesto Villa Urquiza
        lon: -58.4840,
        },
        photos: ["https://picsum.photos/200/300?random=863", "https://picsum.photos/200/300?random=864"],
        description: "Competición de baloncesto entre equipos de la región.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Club de Baloncesto Villa Urquiza, Buenos Aires",
    },
    {
        name: "Exhibición de Patinaje Artístico",
        type: "Deportivo",
        time: "11:00",
        location: {
        lat: -34.5820, // Club de Patinaje Villa Urquiza
        lon: -58.4851,
        },
        photos: ["https://picsum.photos/200/300?random=865", "https://picsum.photos/200/300?random=866"],
        description: "Demostración de talentos en patinaje artístico.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Club de Patinaje Villa Urquiza, Buenos Aires",
    },
    {
        name: "Torneo de Vóley",
        type: "Deportivo",
        time: "16:00",
        location: {
        lat: -34.5806, // Polideportivo Villa Urquiza
        lon: -58.4832,
        },
        photos: ["https://picsum.photos/200/300?random=867", "https://picsum.photos/200/300?random=868"],
        description: "Un torneo amistoso de vóley con equipos locales.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Polideportivo Villa Urquiza, Buenos Aires",
    },
    {
        name: "Clase Abierta de Yoga",
        type: "Deportivo",
        time: "18:00",
        location: {
        lat: -34.5845, // Parque Villa Urquiza
        lon: -58.4859,
        },
        photos: ["https://picsum.photos/200/300?random=869", "https://picsum.photos/200/300?random=870"],
        description: "Clase gratuita de yoga en el parque, todos los niveles.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Parque Villa Urquiza, Buenos Aires",
    },
    {
        name: "Competencia de Atletismo",
        type: "Deportivo",
        time: "10:00",
        location: {
        lat: -34.5793, // Estadio de Atletismo Villa Urquiza
        lon: -58.4866,
        },
        photos: ["https://picsum.photos/200/300?random=871", "https://picsum.photos/200/300?random=872"],
        description: "Día de competiciones de atletismo para todas las edades.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Estadio de Atletismo Villa Urquiza, Buenos Aires",
    },
    {
        name: "Entrenamiento de Boxeo",
        type: "Deportivo",
        time: "20:00",
        location: {
        lat: -34.5802, // Gimnasio de Boxeo Villa Urquiza
        lon: -58.4878,
        },
        photos: ["https://picsum.photos/200/300?random=873", "https://picsum.photos/200/300?random=874"],
        description: "Sesión de entrenamiento abierta de boxeo para principiantes.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Gimnasio de Boxeo Villa Urquiza, Buenos Aires",
    },
    {
        name: "Torneo de Frisbee",
        type: "Deportivo",
        time: "15:00",
        location: {
        lat: -34.5818, // Parque de Villa Urquiza
        lon: -58.4847,
        },
        photos: ["https://picsum.photos/200/300?random=875", "https://picsum.photos/200/300?random=876"],
        description: "Un divertido torneo de frisbee en el parque.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Parque de Villa Urquiza, Buenos Aires",
    },
    {
        name: "Competición de Natación",
        type: "Deportivo",
        time: "09:30",
        location: {
        lat: -34.5831, // Club de Natación Villa Urquiza
        lon: -58.4863,
        },
        photos: ["https://picsum.photos/200/300?random=877", "https://picsum.photos/200/300?random=878"],
        description: "Competencia de natación para jóvenes y adultos.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Club de Natación Villa Urquiza, Buenos Aires",
    },
    {
        name: "Día del Skate",
        type: "Deportivo",
        time: "17:00",
        location: {
        lat: -34.5823, // Skate Park Villa Urquiza
        lon: -58.4870,
        },
        photos: ["https://picsum.photos/200/300?random=879", "https://picsum.photos/200/300?random=880"],
        description: "Un día de actividades y competiciones de skate.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Skate Park Villa Urquiza, Buenos Aires",
    },      
    {
      name: "Muestra Fotográfica",
      type: "Deportivo",
      time: "00:00",
      location: {
        lat: -34.6882,
        lon: -58.5325,  // Belgrano
      },
      photos: ["https://picsum.photos/200/300?random=446", "https://picsum.photos/200/300?random=556"],
      description: "Un desafío deportivo de alto nivel.",
      amount: 0.99,
      createdAt: new Date(),
      capacity: "Entre 222 y 995 personas",
      addres: "Club Atlético San Justo, Buenos Aires"
    },
    {
      name: "Carrera 10K",
      type: "Deportivo",
      time: "08:00",
      location: {
        lat: -34.6880,  // Parque Centenario
        lon: -58.5520
      },
      photos: [
        "https://picsum.photos/200/300?random=333",
        "https://picsum.photos/200/300?random=444"
      ],
      description: "Únete a la carrera de 10 kilómetros por las calles de Buenos Aires.",
      amount: 0.23,
      createdAt: new Date(),
      capacity: "Entre 500 y 1000 corredores",
      addres: "Club Deportivo y Social Villa San Carlos, Buenos Aires"
    },
    {
      name: "Maratón de Verano",
      type: "Deportivo",
      time: "07:00",
      location: {
        lat: -34.6935,  // Parque Tres de Febrero
        lon: -58.5430
      },
      photos: [
        "https://picsum.photos/200/300?random=1111",
        "https://picsum.photos/200/300?random=2222"
      ],
      description: "Participa en nuestra maratón de verano a través de los parques de Buenos Aires.",
      amount: 0.31,
      createdAt: new Date(),
      capacity: "Hasta 1000 participantes",
      addres: "Club de Gimnasia y Esgrima La Plata - Sede San Justo, Buenos Aires"
    },
    {
      name: "Torneo de Ajedrez",
      type: "Deportivo",
      time: "10:00",
      location: {
        lat: -34.6870, // Club de Ajedrez
        lon: -58.5300,
      },
      photos: [
        "https://picsum.photos/200/300?random=99999",
        "https://picsum.photos/200/300?random=10101",
      ],
      description: "Demuestra tus habilidades en nuestro torneo de ajedrez.",
      amount: 0.44,
      createdAt: new Date(),
      capacity: "Hasta 100 participantes",
      addres: "Polideportivo San Justo, Buenos Aires",
    },
    {
      name: "Caminata Nocturna",
      type: "Deportivo",
      time: "20:00",
      location: {
        lat: -34.6908, // Av. de Mayo
        lon: -58.5395,
      },
      photos: [
        "https://picsum.photos/200/300?random=88888",
        "https://picsum.photos/200/300?random=99999",
      ],
      description: "Descubre la ciudad de noche mientras haces ejercicio.",
      amount: 0.35,
      createdAt: new Date(),
      capacity: "Hasta 150 personas",
      addres: "Club Atlético Defensores de Belgrano - Sede San Justo, Buenos Aires",
    },
    {
      name: "Torneo de Fútbol Infantil",
      type: "Deportivo",
      time: "09:00",
      location: {
        lat: -34.6345, // Club Atlético River Plate
        lon: -58.5900,
      },
      photos: [
        "https://picsum.photos/200/300?random=16161",
        "https://picsum.photos/200/300?random=17171",
      ],
      description: "Una emocionante jornada de fútbol para los más pequeños.",
      amount: 0.76,
      createdAt: new Date(),
      capacity: "Hasta 200 niños",
      addres: "Club Atlético Ramos Mejía, Buenos Aires",
    },
    {
        name: "Clases Abiertas de Yoga",
        type: "Deportivo",
        time: "07:00",
        location: {
            lat: -34.6330,
            lon: -58.5885
        },
        photos: [
            "https://picsum.photos/200/300?random=36363",
            "https://picsum.photos/200/300?random=37373"
        ],
        description: "Empieza el día con energía y paz interior.",
        amount: 0.47,
        createdAt: new Date(),
        capacity: "Hasta 50 personas",
        addres: "Polideportivo Ramos Mejía, Buenos Aires"
    },
    {
        name: "Caminata por la Naturaleza",
        type: "Deportivo",
        time: "08:00",
        location: {
            lat: -34.6352,
            lon: -58.5915
        },
        photos: [
            "https://picsum.photos/200/300?random=48484",
            "https://picsum.photos/200/300?random=49494"
        ],
        description: "Una experiencia única para conectar con la naturaleza.",
        amount: 0.50,
        createdAt: new Date(),
        capacity: "Hasta 30 personas",
        addres: "Club Deportivo San Martín, Buenos Aires"
    },
    {
        name: "Torneo de Fútbol 7",
        type: "Deportivo",
        time: "10:00",
        location: {
            lat: -34.6325,
            lon: -58.5890
        },
        photos: [
            "https://picsum.photos/200/300?random=67676",
            "https://picsum.photos/200/300?random=68686"
        ],
        description: "Únete a nuestro torneo y demuestra tu habilidad en el fútbol.",
        amount: 0.56,
        createdAt: new Date(),
        capacity: "Hasta 80 personas",
        addres: "Gimnasio Ramos Mejía, Buenos Aires"
    },
    //TODO eventos gastronomicos
    {
        name: "Maratón ¡Come rapido! de Buenos Aires",
        type: "Gastronomico",
        time: "00:00",
        location: {
            lat: -34.6885,
            lon: -58.5335,  // Villa Crespo
        },
        photos: ["https://picsum.photos/200/300?random=776", "https://picsum.photos/200/300?random=316"],
        description: "Ven a compartir una jornada llena de emociones.",
        amount: 0.02,
        createdAt: new Date(),
        capacity: "Entre 344 y 830 personas",
        addres: "Parrilla La Casona, Buenos Aires"
    },
    {
        name: "Feria Gastronómica",
        type: "Gastronomico",
        time: "00:00",
        location: {
            lat: -34.6890,
            lon: -58.5400,  // Colegiales
        },
        photos: ["https://picsum.photos/200/300?random=112"],
        description: "Gastronomía de autor en un solo lugar.",
        amount: 0.29,
        createdAt: new Date(),
        capacity: "Entre 439 y 890 personas",
        addres: "Restaurante El Trébol, Buenos Aires"
    },
    {
        name: "Feria de Gastronomía",
        type: "Gastronomico",
        time: "12:00",
        location: {
            lat: -34.6905,  // Parque Lezama
            lon: -58.5320
        },
        photos: [
            "https://picsum.photos/200/300?random=555",
            "https://picsum.photos/200/300?random=666"
        ],
        description: "Un evento donde podrás degustar platos típicos y gourmet de todo el país.",
        amount: 0.45,
        createdAt: new Date(),
        capacity: "Entre 300 y 800 personas",
        addres: "Café Tortoni San Justo, Buenos Aires"
    },
    {
        name: "Festival Gastronómico Internacional",
        type: "Gastronomico",
        time: "12:00",
        location: {
            lat: -34.6887,  // Parque de los Patricios
            lon: -58.5345
        },
        photos: [
            "https://picsum.photos/200/300?random=9999",
            "https://picsum.photos/200/300?random=1010"
        ],
        description: "Ven y prueba platos de todo el mundo en nuestra feria gastronómica.",
        amount: 0.86,
        createdAt: new Date(),
        capacity: "Hasta 2000 personas",
        addres: "Pizzería La Nueva Avenida, Buenos Aires"
    },
    {
        name: "Clases de Cocina Italiana",
        type: "Gastronomico",
        time: "14:00",
        location: {
            lat: -34.6910,  // Escuela de Cocina
            lon: -58.5375
        },
        photos: [
            "https://picsum.photos/200/300?random=77777",
            "https://picsum.photos/200/300?random=88888"
        ],
        description: "Aprende a cocinar los mejores platos italianos con chefs expertos.",
        amount: 0.65,
        createdAt: new Date(),
        capacity: "Hasta 50 personas",
        addres: "Heladería Grido, Buenos Aires"
    },
    {
        name: "Festival de Comida Callejera",
        type: "Gastronomico",
        time: "12:00",
        location: {
            lat: -34.606383,  // Parque Centenario
            lon: -58.375695
        },
        photos: [
            "https://picsum.photos/200/300?random=66666",
            "https://picsum.photos/200/300?random=77777"
        ],
        description: "Una explosión de sabores con lo mejor de la comida callejera.",
        amount: 0.71,
        createdAt: new Date(),
        capacity: "Sin límite",
        addres: "Parque Centenario, Buenos Aires"
    },
    {
        name: "Muestra Gastronómica Internacional",
        type: "Gastronomico",
        time: "13:00",
        location: {
            lat: -34.599125,  // Espacio de Arte Contemporáneo
            lon: -58.370196
        },
        photos: [
            "https://picsum.photos/200/300?random=18181",
            "https://picsum.photos/200/300?random=19191"
        ],
        description: "Descubre platos de diversas partes del mundo en un solo lugar.",
        amount: 0.82,
        createdAt: new Date(),
        capacity: "Sin límite",
        addres: "Espacio Artistico, Buenos Aires"
    },
    {
        name: "Festival de Comida Callejera",
        type: "Gastronomico",
        time: "12:00",
        location: {
            lat: -34.61335437095764,
            lon: -58.37647440480649
        },
        photos: [
            "https://picsum.photos/200/300?random=65656",
            "https://picsum.photos/200/300?random=66666"
        ],
        description: "Un recorrido por los sabores de la comida callejera.",
        amount: 0.64,
        createdAt: new Date(),
        capacity: "Hasta 100 personas",
        addres: "Plaza del Encuentro, Buenos Aires"
    },
    {
        name: "Competencia de Cocina",
        type: "Gastronomico",
        time: "14:00",
        location: {
            lat: -34.60952403732894,
            lon: -58.36977635383613
        },
        photos: [
            "https://picsum.photos/200/300?random=73737",
            "https://picsum.photos/200/300?random=74747"
        ],
        description: "Muestra tus habilidades culinarias y compite con otros chefs.",
        amount: 0.83,
        createdAt: new Date(),
        capacity: "Hasta 40 personas",
        addres: "Escuela de Cocina, Buenos Aires"
    },
    {
        name: "Feria Gastronómica Liniers",
        type: "Gastronomico",
        time: "12:00",
        location: {
        lat: -34.6511, // Plaza Liniers
        lon: -58.4853,
        },
        photos: ["https://picsum.photos/200/300?random=501", "https://picsum.photos/200/300?random=502"],
        description: "Descubre los sabores locales en esta feria que reúne a los mejores chefs.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Plaza Liniers, Buenos Aires",
    },
    {
        name: "Festival del Vino y la Gastronomía",
        type: "Gastronomico",
        time: "18:00",
        location: {
        lat: -34.6532, // Centro Cultural Liniers
        lon: -58.4825,
        },
        photos: ["https://picsum.photos/200/300?random=503", "https://picsum.photos/200/300?random=504"],
        description: "Un evento donde el vino y la comida se unen para crear una experiencia inolvidable.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Centro Cultural Liniers, Buenos Aires",
    },
    {
        name: "Clase de Cocina Internacional",
        type: "Gastronomico",
        time: "17:00",
        location: {
        lat: -34.6484, // Club de Cocina Liniers
        lon: -58.4870,
        },
        photos: ["https://picsum.photos/200/300?random=505", "https://picsum.photos/200/300?random=506"],
        description: "Aprende a cocinar platos de diferentes partes del mundo con un chef experto.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Club de Cocina Liniers, Buenos Aires",
    },
    {
        name: "Taller de Cervezas Artesanales",
        type: "Gastronomico",
        time: "19:00",
        location: {
        lat: -34.6500, // Cervecería Liniers
        lon: -58.4840,
        },
        photos: ["https://picsum.photos/200/300?random=507", "https://picsum.photos/200/300?random=508"],
        description: "Conoce el arte de la cerveza artesanal en este taller interactivo.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Cervecería Liniers, Buenos Aires",
    },
    {
        name: "Festival de Comida Callejera",
        type: "Gastronomico",
        time: "16:00",
        location: {
        lat: -34.6507, // Avenida Rivadavia
        lon: -58.4874,
        },
        photos: ["https://picsum.photos/200/300?random=509", "https://picsum.photos/200/300?random=510"],
        description: "Una celebración de la mejor comida callejera de la ciudad.",
        amount: 0.7,
        createdAt: new Date(),
        capacity: "Entre 2000 y 5000 personas",
        addres: "Avenida Rivadavia, Liniers, Buenos Aires",
    },
    {
        name: "Muestra Gastronómica de Liniers",
        type: "Gastronomico",
        time: "14:00",
        location: {
        lat: -34.6515, // Centro de Exposiciones Liniers
        lon: -58.4802,
        },
        photos: ["https://picsum.photos/200/300?random=511", "https://picsum.photos/200/300?random=512"],
        description: "Disfruta de una muestra con los mejores platos de la región.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Centro de Exposiciones Liniers, Buenos Aires",
    },
    {
        name: "Noche de Sabores del Mundo",
        type: "Gastronomico",
        time: "20:00",
        location: {
        lat: -34.6520, // Restaurante Gourmet Liniers
        lon: -58.4820,
        },
        photos: ["https://picsum.photos/200/300?random=513", "https://picsum.photos/200/300?random=514"],
        description: "Una experiencia culinaria que recorre los sabores de diversas culturas.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Restaurante Gourmet Liniers, Buenos Aires",
    },
    {
        name: "Jornada de Comida Saludable",
        type: "Gastronomico",
        time: "11:00",
        location: {
        lat: -34.6495, // Plaza de la Salud
        lon: -58.4861,
        },
        photos: ["https://picsum.photos/200/300?random=515", "https://picsum.photos/200/300?random=516"],
        description: "Descubre opciones saludables y nutritivas en esta jornada especial.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Plaza de la Salud, Buenos Aires",
    },
    {
        name: "Feria de Productos Orgánicos",
        type: "Gastronomico",
        time: "09:00",
        location: {
        lat: -34.6523, // Mercado de Productores Liniers
        lon: -58.4799,
        },
        photos: ["https://picsum.photos/200/300?random=517", "https://picsum.photos/200/300?random=518"],
        description: "Un espacio para encontrar productos orgánicos de la región.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Mercado de Productores Liniers, Buenos Aires",
    },
    {
        name: "Cata de Quesos y Vinos",
        type: "Gastronomico",
        time: "19:30",
        location: {
        lat: -34.6504, // Bodega Liniers
        lon: -58.4811,
        },
        photos: ["https://picsum.photos/200/300?random=519", "https://picsum.photos/200/300?random=520"],
        description: "Disfruta de una cata de quesos y vinos en un ambiente acogedor.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Bodega Liniers, Buenos Aires",
    },
    {
        name: "Festival de Comida Internacional",
        type: "Gastronomico",
        time: "13:00",
        location: {
        lat: -34.6525, // Plaza de Liniers
        lon: -58.4856,
        },
        photos: ["https://picsum.photos/200/300?random=521", "https://picsum.photos/200/300?random=522"],
        description: "Un evento que reúne sabores de diferentes países en un solo lugar.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza de Liniers, Buenos Aires",
    },
    {
        name: "Cocina al Aire Libre",
        type: "Gastronomico",
        time: "17:00",
        location: {
        lat: -34.6530, // Parque Liniers
        lon: -58.4835,
        },
        photos: ["https://picsum.photos/200/300?random=523", "https://picsum.photos/200/300?random=524"],
        description: "Disfruta de la cocina al aire libre con los mejores chefs locales.",
        amount: 0.7,
        createdAt: new Date(),
        capacity: "Entre 2000 y 5000 personas",
        addres: "Parque Liniers, Buenos Aires",
    },
    {
        name: "Taller de Gastronomía Argentina",
        type: "Gastronomico",
        time: "15:00",
        location: {
        lat: -34.6510, // Centro Cultural Liniers
        lon: -58.4875,
        },
        photos: ["https://picsum.photos/200/300?random=525", "https://picsum.photos/200/300?random=526"],
        description: "Aprende a preparar platos típicos argentinos con un chef reconocido.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Centro Cultural Liniers, Buenos Aires",
    },
    {
        name: "Mercado de Sabores",
        type: "Gastronomico",
        time: "12:00",
        location: {
        lat: -34.6502, // Mercado Liniers
        lon: -58.4860,
        },
        photos: ["https://picsum.photos/200/300?random=527", "https://picsum.photos/200/300?random=528"],
        description: "Una feria donde encontrarás productos frescos y comida artesanal.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Mercado Liniers, Buenos Aires",
    },
    {
        name: "Festival del Chocolate",
        type: "Gastronomico",
        time: "16:00",
        location: {
        lat: -34.6517, // Plaza de Chocolateros
        lon: -58.4848,
        },
        photos: ["https://picsum.photos/200/300?random=529", "https://picsum.photos/200/300?random=530"],
        description: "Una dulce celebración dedicada al chocolate y sus derivados.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Plaza de Chocolateros, Buenos Aires",
    },
    {
        name: "Gastronomía en el Parque",
        type: "Gastronomico",
        time: "10:00",
        location: {
        lat: -34.6522, // Parque Avellaneda
        lon: -58.4794,
        },
        photos: ["https://picsum.photos/200/300?random=531", "https://picsum.photos/200/300?random=532"],
        description: "Un evento que combina naturaleza y gastronomía en el parque.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Parque Avellaneda, Buenos Aires",
    },
    {
        name: "Noche de Sabores Mediterráneos",
        type: "Gastronomico",
        time: "19:00",
        location: {
        lat: -34.6538, // Restaurante Mediterráneo
        lon: -58.4850,
        },
        photos: ["https://picsum.photos/200/300?random=533", "https://picsum.photos/200/300?random=534"],
        description: "Disfruta de una noche dedicada a la comida mediterránea.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Restaurante Mediterráneo, Buenos Aires",
    },
    {
        name: "Encuentro de Chefs Locales",
        type: "Gastronomico",
        time: "14:00",
        location: {
        lat: -34.6529, // Plaza de los Chefs
        lon: -58.4803,
        },
        photos: ["https://picsum.photos/200/300?random=535", "https://picsum.photos/200/300?random=536"],
        description: "Conoce a los chefs más destacados de la zona en este encuentro.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Plaza de los Chefs, Buenos Aires",
    },
    {
        name: "Feria de Sabores Liniers",
        type: "Gastronomico",
        time: "12:30",
        location: {
        lat: -34.6519, // Espacio Cultural Liniers
        lon: -58.4855,
        },
        photos: ["https://picsum.photos/200/300?random=537", "https://picsum.photos/200/300?random=538"],
        description: "Una feria donde podrás degustar platos típicos y tradicionales.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Espacio Cultural Liniers, Buenos Aires",
    },
    {
        name: "Maratón Gastronómica",
        type: "Gastronomico",
        time: "08:00",
        location: {
        lat: -34.6503, // Plaza de la Gastronomía
        lon: -58.4821,
        },
        photos: ["https://picsum.photos/200/300?random=539", "https://picsum.photos/200/300?random=540"],
        description: "Un evento que combina deporte y gastronomía para disfrutar en familia.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Plaza de la Gastronomía, Buenos Aires",
    },
    {
        name: "Fiesta de la Pizza",
        type: "Gastronomico",
        time: "18:00",
        location: {
        lat: -34.6183, // Plaza de Flores
        lon: -58.4365,
        },
        photos: ["https://picsum.photos/200/300?random=641", "https://picsum.photos/200/300?random=642"],
        description: "Un evento donde podrás disfrutar de las mejores pizzas de Buenos Aires.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza de Flores, Buenos Aires",
    },
    {
        name: "Gastronomía en el Parque",
        type: "Gastronomico",
        time: "12:00",
        location: {
        lat: -34.6175, // Parque Avellaneda
        lon: -58.4360,
        },
        photos: ["https://picsum.photos/200/300?random=643", "https://picsum.photos/200/300?random=644"],
        description: "Una jornada dedicada a la comida al aire libre en un hermoso parque.",
        amount: 0.7,
        createdAt: new Date(),
        capacity: "Entre 2000 y 5000 personas",
        addres: "Parque Avellaneda, Buenos Aires",
    },
    {
        name: "Festival de Comida Callejera",
        type: "Gastronomico",
        time: "16:00",
        location: {
        lat: -34.6200, // Avenida Rivadavia
        lon: -58.4380,
        },
        photos: ["https://picsum.photos/200/300?random=645", "https://picsum.photos/200/300?random=646"],
        description: "Prueba las delicias de los mejores food trucks de la ciudad.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Avenida Rivadavia, Buenos Aires",
    },
    {
        name: "Taller de Pastelería",
        type: "Gastronomico",
        time: "10:00",
        location: {
        lat: -34.6185, // Centro Cultural Flores
        lon: -58.4330,
        },
        photos: ["https://picsum.photos/200/300?random=647", "https://picsum.photos/200/300?random=648"],
        description: "Aprende a preparar postres tradicionales argentinos.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Centro Cultural Flores, Buenos Aires",
    },
    {
        name: "Feria de Comida Vegana",
        type: "Gastronomico",
        time: "11:00",
        location: {
        lat: -34.6192, // Plaza Flores
        lon: -58.4395,
        },
        photos: ["https://picsum.photos/200/300?random=649", "https://picsum.photos/200/300?random=650"],
        description: "Disfruta de una variedad de opciones veganas en este evento saludable.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza Flores, Buenos Aires",
    },
    {
        name: "Cocina Tradicional Argentina",
        type: "Gastronomico",
        time: "14:00",
        location: {
        lat: -34.6208, // Plaza de la Memoria
        lon: -58.4342,
        },
        photos: ["https://picsum.photos/200/300?random=651", "https://picsum.photos/200/300?random=652"],
        description: "Una jornada para degustar platos típicos de nuestra cultura.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza de la Memoria, Buenos Aires",
    },
    {
        name: "Noche de Empanadas",
        type: "Gastronomico",
        time: "19:00",
        location: {
        lat: -34.6216, // Café de Flores
        lon: -58.4375,
        },
        photos: ["https://picsum.photos/200/300?random=653", "https://picsum.photos/200/300?random=654"],
        description: "Ven a disfrutar de una noche con diferentes variedades de empanadas.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Café de Flores, Buenos Aires",
    },
    {
        name: "Festival de Postres",
        type: "Gastronomico",
        time: "15:00",
        location: {
        lat: -34.6195, // Plaza Mariano Acosta
        lon: -58.4405,
        },
        photos: ["https://picsum.photos/200/300?random=655", "https://picsum.photos/200/300?random=656"],
        description: "Una celebración de los postres más deliciosos y creativos.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza Mariano Acosta, Buenos Aires",
    },
    {
        name: "Encuentro de Gastronomía Internacional",
        type: "Gastronomico",
        time: "13:00",
        location: {
        lat: -34.6201, // Avenida Rivadavia y Fernández
        lon: -58.4333,
        },
        photos: ["https://picsum.photos/200/300?random=657", "https://picsum.photos/200/300?random=658"],
        description: "Prueba los sabores del mundo en un solo lugar.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Avenida Rivadavia y Fernández, Buenos Aires",
    },
    {
        name: "Caminata Gastronómica",
        type: "Gastronomico",
        time: "17:00",
        location: {
        lat: -34.6220, // Calle F. de la Reta
        lon: -58.4315,
        },
        photos: ["https://picsum.photos/200/300?random=659", "https://picsum.photos/200/300?random=660"],
        description: "Una caminata donde podrás disfrutar de degustaciones en diferentes paradas.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Calle F. de la Reta, Buenos Aires",
    },
    {
        name: "Fiesta del Asado",
        type: "Gastronomico",
        time: "12:00",
        location: {
        lat: -34.6154, // Plaza de Ramos Mejía
        lon: -58.5692,
        },
        photos: ["https://picsum.photos/200/300?random=661", "https://picsum.photos/200/300?random=662"],
        description: "Un evento para disfrutar de los mejores cortes de carne al asador.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza de Ramos Mejía, Buenos Aires",
    },
    {
        name: "Festival de Comida Casera",
        type: "Gastronomico",
        time: "14:00",
        location: {
        lat: -34.6156, // Calle San Martín
        lon: -58.5694,
        },
        photos: ["https://picsum.photos/200/300?random=663", "https://picsum.photos/200/300?random=664"],
        description: "Prueba deliciosos platos preparados por chefs locales.",
        amount: 0.7,
        createdAt: new Date(),
        capacity: "Entre 2000 y 5000 personas",
        addres: "Calle San Martín, Ramos Mejía",
    },
    {
        name: "Cultura y Comida",
        type: "Gastronomico",
        time: "17:00",
        location: {
        lat: -34.6149, // Avenida de Mayo
        lon: -58.5700,
        },
        photos: ["https://picsum.photos/200/300?random=665", "https://picsum.photos/200/300?random=666"],
        description: "Un encuentro de sabores y tradiciones culinarias.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Avenida de Mayo, Ramos Mejía",
    },
    {
        name: "Taller de Cocina Argentina",
        type: "Gastronomico",
        time: "10:00",
        location: {
        lat: -34.6160, // Centro Cultural Ramos Mejía
        lon: -58.5690,
        },
        photos: ["https://picsum.photos/200/300?random=667", "https://picsum.photos/200/300?random=668"],
        description: "Aprende a preparar recetas clásicas argentinas.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Centro Cultural Ramos Mejía, Buenos Aires",
    },
    {
        name: "Día de la Gastronomía Italiana",
        type: "Gastronomico",
        time: "19:00",
        location: {
        lat: -34.6140, // Restaurante La Bella Italia
        lon: -58.5685,
        },
        photos: ["https://picsum.photos/200/300?random=669", "https://picsum.photos/200/300?random=670"],
        description: "Una noche dedicada a la deliciosa comida italiana.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Restaurante La Bella Italia, Ramos Mejía",
    },
    {
        name: "Feria del Dulce",
        type: "Gastronomico",
        time: "15:00",
        location: {
        lat: -34.6158, // Plaza Mitre
        lon: -58.5702,
        },
        photos: ["https://picsum.photos/200/300?random=671", "https://picsum.photos/200/300?random=672"],
        description: "Un evento para los amantes de los postres y dulces.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza Mitre, Ramos Mejía",
    },
    {
        name: "Cocina Saludable",
        type: "Gastronomico",
        time: "11:00",
        location: {
        lat: -34.6165, // Calle Avellaneda
        lon: -58.5705,
        },
        photos: ["https://picsum.photos/200/300?random=673", "https://picsum.photos/200/300?random=674"],
        description: "Un taller para aprender a cocinar platos saludables.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Calle Avellaneda, Ramos Mejía",
    },
    {
        name: "Noche de Tapas",
        type: "Gastronomico",
        time: "20:00",
        location: {
        lat: -34.6135, // Restaurante El Tapeo
        lon: -58.5688,
        },
        photos: ["https://picsum.photos/200/300?random=675", "https://picsum.photos/200/300?random=676"],
        description: "Disfruta de una variedad de tapas y vinos.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Restaurante El Tapeo, Ramos Mejía",
    },
    {
        name: "Festival de Comida Mexicana",
        type: "Gastronomico",
        time: "13:00",
        location: {
        lat: -34.6151, // Plaza de los Trabajadores
        lon: -58.5698,
        },
        photos: ["https://picsum.photos/200/300?random=677", "https://picsum.photos/200/300?random=678"],
        description: "Una celebración de la cocina mexicana en el corazón de Ramos Mejía.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza de los Trabajadores, Ramos Mejía",
    },
    {
        name: "Encuentro de Vinos y Quesos",
        type: "Gastronomico",
        time: "17:00",
        location: {
        lat: -34.6144, // Centro de Eventos Ramos Mejía
        lon: -58.5706,
        },
        photos: ["https://picsum.photos/200/300?random=679", "https://picsum.photos/200/300?random=680"],
        description: "Descubre la combinación perfecta de vinos y quesos.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Centro de Eventos Ramos Mejía, Buenos Aires",
    },
    {
        name: "Festival de Comida Típica",
        type: "Gastronomico",
        time: "12:00",
        location: {
        lat: -34.6345, // Plaza de Ciudadela
        lon: -58.5634,
        },
        photos: ["https://picsum.photos/200/300?random=681", "https://picsum.photos/200/300?random=682"],
        description: "Celebra la diversidad de la comida argentina con los mejores platos tradicionales.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza de Ciudadela, Buenos Aires",
    },
    {
        name: "Noche de Parrilla",
        type: "Gastronomico",
        time: "19:00",
        location: {
        lat: -34.6350, // Parrilla Don José
        lon: -58.5629,
        },
        photos: ["https://picsum.photos/200/300?random=683", "https://picsum.photos/200/300?random=684"],
        description: "Disfruta de una noche llena de asados y música en vivo.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Parrilla Don José, Ciudadela",
    },
    {
        name: "Taller de Gastronomía Internacional",
        type: "Gastronomico",
        time: "10:00",
        location: {
        lat: -34.6348, // Centro Cultural Ciudadela
        lon: -58.5641,
        },
        photos: ["https://picsum.photos/200/300?random=685", "https://picsum.photos/200/300?random=686"],
        description: "Aprende a cocinar platos de diferentes partes del mundo.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Centro Cultural Ciudadela, Buenos Aires",
    },
    {
        name: "Feria de Cervecerías Artesanales",
        type: "Gastronomico",
        time: "15:00",
        location: {
        lat: -34.6340, // Parque de Ciudadela
        lon: -58.5645,
        },
        photos: ["https://picsum.photos/200/300?random=687", "https://picsum.photos/200/300?random=688"],
        description: "Descubre las mejores cervezas artesanales de la región.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Parque de Ciudadela, Buenos Aires",
    },
    {
        name: "Día del Chocolate",
        type: "Gastronomico",
        time: "14:00",
        location: {
        lat: -34.6355, // Café Dulce Tentación
        lon: -58.5630,
        },
        photos: ["https://picsum.photos/200/300?random=689", "https://picsum.photos/200/300?random=690"],
        description: "Una jornada dedicada a los amantes del chocolate con degustaciones y talleres.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Café Dulce Tentación, Ciudadela",
    },
    {
        name: "Cata de Vinos",
        type: "Gastronomico",
        time: "18:00",
        location: {
        lat: -34.6342, // Restaurante El Buen Beber
        lon: -58.5650,
        },
        photos: ["https://picsum.photos/200/300?random=691", "https://picsum.photos/200/300?random=692"],
        description: "Aprende sobre vinos con una degustación guiada por un sommelier.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Restaurante El Buen Beber, Ciudadela",
    },
    {
        name: "Feria de Comida Vegana",
        type: "Gastronomico",
        time: "11:00",
        location: {
        lat: -34.6358, // Plaza Libertad
        lon: -58.5625,
        },
        photos: ["https://picsum.photos/200/300?random=693", "https://picsum.photos/200/300?random=694"],
        description: "Una feria dedicada a la comida vegana con opciones para todos los gustos.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza Libertad, Ciudadela",
    },
    {
        name: "Festival del Dulce",
        type: "Gastronomico",
        time: "16:00",
        location: {
        lat: -34.6347, // Heladería La Suiza
        lon: -58.5639,
        },
        photos: ["https://picsum.photos/200/300?random=695", "https://picsum.photos/200/300?random=696"],
        description: "Un evento para degustar los mejores dulces y postres de la ciudad.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Heladería La Suiza, Ciudadela",
    },
    {
        name: "Noche de Sushi",
        type: "Gastronomico",
        time: "20:00",
        location: {
        lat: -34.6352, // Restaurante Sushi City
        lon: -58.5643,
        },
        photos: ["https://picsum.photos/200/300?random=697", "https://picsum.photos/200/300?random=698"],
        description: "Una noche especial para disfrutar de sushi y platos japoneses.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Restaurante Sushi City, Ciudadela",
    },
    {
        name: "Muestra de Comidas del Mundo",
        type: "Gastronomico",
        time: "13:00",
        location: {
        lat: -34.6353, // Plaza de la Paz
        lon: -58.5651,
        },
        photos: ["https://picsum.photos/200/300?random=699", "https://picsum.photos/200/300?random=700"],
        description: "Un evento para degustar comidas típicas de diferentes países.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza de la Paz, Ciudadela",
    },
    {
        name: "Festival de Comida Casera",
        type: "Gastronomico",
        time: "11:00",
        location: {
        lat: -34.5640, // Plaza de General San Martín
        lon: -58.4883,
        },
        photos: ["https://picsum.photos/200/300?random=701", "https://picsum.photos/200/300?random=702"],
        description: "Disfruta de platos caseros de diferentes regiones argentinas.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza de General San Martín, Buenos Aires",
    },
    {
        name: "Noche de Tapas",
        type: "Gastronomico",
        time: "20:00",
        location: {
        lat: -34.5635, // Restaurante La Tapa
        lon: -58.4890,
        },
        photos: ["https://picsum.photos/200/300?random=703", "https://picsum.photos/200/300?random=704"],
        description: "Una velada dedicada a las tapas y la gastronomía española.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Restaurante La Tapa, San Martín",
    },
    {
        name: "Feria del Chocolate",
        type: "Gastronomico",
        time: "14:00",
        location: {
        lat: -34.5652, // Centro Cultural General San Martín
        lon: -58.4901,
        },
        photos: ["https://picsum.photos/200/300?random=705", "https://picsum.photos/200/300?random=706"],
        description: "Un evento dedicado a los amantes del chocolate con degustaciones y actividades.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Centro Cultural General San Martín, Buenos Aires",
    },
    {
        name: "Día de la Pizza",
        type: "Gastronomico",
        time: "16:00",
        location: {
        lat: -34.5648, // Pizzería El Buen Sabor
        lon: -58.4888,
        },
        photos: ["https://picsum.photos/200/300?random=707", "https://picsum.photos/200/300?random=708"],
        description: "Celebra el día de la pizza con promociones y variedades para degustar.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Pizzería El Buen Sabor, San Martín",
    },
    {
        name: "Noche de Vinos",
        type: "Gastronomico",
        time: "19:00",
        location: {
        lat: -34.5656, // Bodega y Restaurante La Cava
        lon: -58.4875,
        },
        photos: ["https://picsum.photos/200/300?random=709", "https://picsum.photos/200/300?random=710"],
        description: "Disfruta de una noche de cata de vinos y tapas gourmet.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Bodega y Restaurante La Cava, General San Martín",
    },
    {
        name: "Feria de Comida Saludable",
        type: "Gastronomico",
        time: "10:00",
        location: {
        lat: -34.5644, // Parque General San Martín
        lon: -58.4912,
        },
        photos: ["https://picsum.photos/200/300?random=711", "https://picsum.photos/200/300?random=712"],
        description: "Un evento para disfrutar de opciones saludables y nutritivas.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Parque General San Martín, Buenos Aires",
    },
    {
        name: "Festival de Cervezas Artesanales",
        type: "Gastronomico",
        time: "15:00",
        location: {
        lat: -34.5630, // Plaza de la Ciudad
        lon: -58.4899,
        },
        photos: ["https://picsum.photos/200/300?random=713", "https://picsum.photos/200/300?random=714"],
        description: "Descubre las mejores cervezas artesanales de la región.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza de la Ciudad, San Martín",
    },
    {
        name: "Día del Pastel",
        type: "Gastronomico",
        time: "14:00",
        location: {
        lat: -34.5653, // Pastelería El Dulce
        lon: -58.4905,
        },
        photos: ["https://picsum.photos/200/300?random=715", "https://picsum.photos/200/300?random=716"],
        description: "Celebra el día del pastel con una variedad de opciones dulces.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Pastelería El Dulce, General San Martín",
    },
    {
        name: "Cata de Aceites",
        type: "Gastronomico",
        time: "17:00",
        location: {
        lat: -34.5649, // Restaurante Sabor a Mediterráneo
        lon: -58.4915,
        },
        photos: ["https://picsum.photos/200/300?random=717", "https://picsum.photos/200/300?random=718"],
        description: "Aprende sobre los diferentes aceites y sus maridajes.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Restaurante Sabor a Mediterráneo, San Martín",
    },
    {
        name: "Feria Gastronómica",
        type: "Gastronomico",
        time: "12:00",
        location: {
        lat: -34.5641, // Plaza de la Libertad
        lon: -58.4894,
        },
        photos: ["https://picsum.photos/200/300?random=719", "https://picsum.photos/200/300?random=720"],
        description: "Un evento para disfrutar de la mejor gastronomía local.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza de la Libertad, General San Martín",
    },
    {
        name: "Feria de Comida Internacional",
        type: "Gastronomico",
        time: "12:00",
        location: {
        lat: -34.6321, // Plaza de Caseros
        lon: -58.5579,
        },
        photos: ["https://picsum.photos/200/300?random=721", "https://picsum.photos/200/300?random=722"],
        description: "Descubre los sabores del mundo en un solo lugar.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza de Caseros, Buenos Aires",
    },
    {
        name: "Festival del Asado",
        type: "Gastronomico",
        time: "16:00",
        location: {
        lat: -34.6307, // Restaurante El Asador
        lon: -58.5583,
        },
        photos: ["https://picsum.photos/200/300?random=723", "https://picsum.photos/200/300?random=724"],
        description: "Un evento dedicado al asado argentino con chefs locales.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Restaurante El Asador, Caseros",
    },
    {
        name: "Día de la Pasta",
        type: "Gastronomico",
        time: "14:00",
        location: {
        lat: -34.6312, // Trattoria Casa della Pasta
        lon: -58.5601,
        },
        photos: ["https://picsum.photos/200/300?random=725", "https://picsum.photos/200/300?random=726"],
        description: "Celebra el día de la pasta con una variedad de platos.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Trattoria Casa della Pasta, Caseros",
    },
    {
        name: "Cocina en Vivo",
        type: "Gastronomico",
        time: "18:00",
        location: {
        lat: -34.6325, // Centro Cultural Caseros
        lon: -58.5588,
        },
        photos: ["https://picsum.photos/200/300?random=727", "https://picsum.photos/200/300?random=728"],
        description: "Disfruta de clases de cocina en vivo con chefs renombrados.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Centro Cultural Caseros, Buenos Aires",
    },
    {
        name: "Noche de Hamburguesas",
        type: "Gastronomico",
        time: "20:00",
        location: {
        lat: -34.6320, // Burger House
        lon: -58.5570,
        },
        photos: ["https://picsum.photos/200/300?random=729", "https://picsum.photos/200/300?random=730"],
        description: "Una noche para disfrutar de las mejores hamburguesas de Caseros.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Burger House, Caseros",
    },
    {
        name: "Feria de Comida Vegetariana",
        type: "Gastronomico",
        time: "10:00",
        location: {
        lat: -34.6318, // Plaza del Mercado
        lon: -58.5599,
        },
        photos: ["https://picsum.photos/200/300?random=731", "https://picsum.photos/200/300?random=732"],
        description: "Disfruta de la mejor comida vegetariana en un ambiente festivo.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Plaza del Mercado, Caseros",
    },
    {
        name: "Cata de Cervezas",
        type: "Gastronomico",
        time: "19:00",
        location: {
        lat: -34.6304, // Cerveza Casera Bar
        lon: -58.5605,
        },
        photos: ["https://picsum.photos/200/300?random=733", "https://picsum.photos/200/300?random=734"],
        description: "Descubre diferentes cervezas artesanales en una cata especial.",
        amount: 0.3,
        createdAt: new Date(),
        capacity: "Menos de 500",
        addres: "Cerveza Casera Bar, Caseros",
    },
    {
        name: "Festival de Dulces",
        type: "Gastronomico",
        time: "15:00",
        location: {
        lat: -34.6323, // Confitería Delicias Caseras
        lon: -58.5580,
        },
        photos: ["https://picsum.photos/200/300?random=735", "https://picsum.photos/200/300?random=736"],
        description: "Disfruta de una variedad de dulces y postres de la región.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Confitería Delicias Caseras, Buenos Aires",
    },
    {
        name: "Mercado Gastronómico",
        type: "Gastronomico",
        time: "11:00",
        location: {
        lat: -34.6315, // Mercado Caseros
        lon: -58.5568,
        },
        photos: ["https://picsum.photos/200/300?random=737", "https://picsum.photos/200/300?random=738"],
        description: "Un espacio para disfrutar de la mejor gastronomía local.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Mercado Caseros, Buenos Aires",
    },
    {
        name: "Día del Té",
        type: "Gastronomico",
        time: "16:00",
        location: {
        lat: -34.6309, // Casa de Té El Rincón
        lon: -58.5596,
        },
        photos: ["https://picsum.photos/200/300?random=739", "https://picsum.photos/200/300?random=740"],
        description: "Celebra el día del té con degustaciones y actividades.",
        amount: 0.5,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Casa de Té El Rincón, Caseros",
    }      
      
]

