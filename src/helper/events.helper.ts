export const eventos = [
    {
        name: "Concierto de Rock",
        type: "Artistico",
        time: "15:30",
        location: {
            lat: -34.60448395867932,
            lon: -58.60448395867932,
        },
        photos: ["https://picsum.photos/200/300?random=505", "https://picsum.photos/200/300?random=506"],
        description: "El mejor espectáculo musical del año.",
        amount: 0.46,
        createdAt: new Date(),
        capacity: "Entre 325 y 773 personas",
        addres: "Ubicación cercana al Obelisco, Buenos Aires"
    },
    {
        name: "Maratón de Buenos Aires",
        type: "Gastronomico",
        time: "00:00",
        location: {
            lat: -34.60448395867932,
            lon: -58.38164429855504,
        },
        photos: ["https://picsum.photos/200/300?random=776", "https://picsum.photos/200/300?random=316"],
        description: "Ven a compartir una jornada llena de emociones.",
        amount: 0.02,
        createdAt: new Date(),
        capacity: "Entre 344 y 830 personas",
        addres: "Ubicación cercana al Obelisco, Buenos Aires"
    },
    {
        name: "Festival de Cine",
        type: "Deportivo",
        time: "00:00",
        location: {
            lat: -34.60315602377965,
            lon: -58.38091272630897,
        },
        photos: ["https://picsum.photos/200/300?random=406", "https://picsum.photos/200/300?random=186"],
        description: "Gastronomía de autor en un solo lugar.",
        amount: 0.67,
        createdAt: new Date(),
        capacity: "Entre 380 y 796 personas",
        addres: "Ubicación cercana al Obelisco, Buenos Aires"
    },
    {
        name: "Feria Gastronómica",
        type: "Gastronomico",
        time: "00:00",
        location: {
            lat: -34.60404044639058,
            lon: -58.38074090750974,
        },
        photos: ["https://picsum.photos/200/300?random=112"],
        description: "Gastronomía de autor en un solo lugar.",
        amount: 0.29,
        createdAt: new Date(),
        capacity: "Entre 439 y 890 personas",
        addres: "Ubicación cercana al Obelisco, Buenos Aires"
    },
    {
        name: "Festival de Cine",
        type: "Artistico",
        time: "00:00",
        location: {
            lat: -34.602984240145545,
            lon: -58.38120893827588,
        },
        photos: ["https://picsum.photos/200/300?random=526", "https://picsum.photos/200/300?random=876"],
        description: "Un recorrido Artistico único.",
        amount: 0.95,
        createdAt: new Date(),
        capacity: "Entre 183 y 766 personas",
        addres: "Ubicación cercana al Obelisco, Buenos Aires"
    },
    {
        name: "Muestra Fotográfica",
        type: "Deportivo",
        time: "00:00",
        location: {
            lat: -34.60438414706095,
            lon: -58.382067173332494,
        },
        photos: ["https://picsum.photos/200/300?random=446", "https://picsum.photos/200/300?random=556"],
        description: "Un desafío deportivo de alto nivel.",
        amount: 0.99,
        createdAt: new Date(),
        capacity: "Entre 222 y 995 personas",
        addres: "Ubicación cercana al Obelisco, Buenos Aires"
    },
    {
        name: "Cata de Vinos",
        type: "Artistico",
        time: "00:00",
        location: {
            lat: -34.60323124976875,
            lon: -58.380835281739884,
        },
        photos: ["https://picsum.photos/200/300?random=452", "https://picsum.photos/200/300?random=489"],
        description: "Disfruta de los mejores platos gourmet.",
        amount: 0.33,
        createdAt: new Date(),
        capacity: "Entre 156 y 731 personas",
        addres: "Ubicación cercana al Obelisco, Buenos Aires"
    },
    {
        name: "Concierto de Jazz",
        type: "Artistico",
        time: "19:00",
        location: {
          lat: -34.60432218946322,
          lon: -58.38142371452142
        },
        photos: [
          "https://picsum.photos/200/300?random=111",
          "https://picsum.photos/200/300?random=222"
        ],
        description: "Disfruta de una noche de jazz en vivo con las mejores bandas locales.",
        amount: 0.67,
        createdAt: new Date(),
        capacity: "Entre 200 y 500 personas",
        addres: "Teatro Principal, Buenos Aires"
    },
    {
        name: "Carrera 10K",
        type: "Deportivo",
        time: "08:00",
        location: {
          lat: -34.60254378134981,
          lon: -58.38215784327583
        },
        photos: [
          "https://picsum.photos/200/300?random=333",
          "https://picsum.photos/200/300?random=444"
        ],
        description: "Únete a la carrera de 10 kilómetros por las calles de Buenos Aires.",
        amount: 0.23,
        createdAt: new Date(),
        capacity: "Entre 500 y 1000 corredores",
        addres: "Costanera Sur, Buenos Aires"
    },
    {
        name: "Feria de Gastronomía",
        type: "Gastronomico",
        time: "12:00",
        location: {
          lat: -34.60495871254831,
          lon: -58.38012369456872
        },
        photos: [
          "https://picsum.photos/200/300?random=555",
          "https://picsum.photos/200/300?random=666"
        ],
        description: "Un evento donde podrás degustar platos típicos y gourmet de todo el país.",
        amount: 0.45,
        createdAt: new Date(),
        capacity: "Entre 300 y 800 personas",
        addres: "Parque Rivadavia, Buenos Aires"
    },
    {
        name: "Exposición de Arte Contemporáneo",
        type: "Artistico",
        time: "18:00",
        location: {
          lat: -34.60312456789512,
          lon: -58.38123671258932
        },
        photos: [
          "https://picsum.photos/200/300?random=777",
          "https://picsum.photos/200/300?random=888"
        ],
        description: "Muestra de obras de artistas contemporáneos emergentes.",
        amount: 0.89,
        createdAt: new Date(),
        capacity: "Entre 100 y 500 personas",
        addres: "Museo de Arte Moderno, Buenos Aires"
    },
    {
        name: "Festival de Música Electrónica",
        type: "Artistico",
        time: "22:00",
        location: {
          lat: -34.60413785642152,
          lon: -58.38223789415278
        },
        photos: [
          "https://picsum.photos/200/300?random=999",
          "https://picsum.photos/200/300?random=101"
        ],
        description: "Una fiesta con los mejores DJ's nacionales e internacionales.",
        amount: 0.76,
        createdAt: new Date(),
        capacity: "Entre 500 y 2000 personas",
        addres: "Hipódromo de Palermo, Buenos Aires"
    },
    {
        name: "Maratón de Verano",
        type: "Deportivo",
        time: "07:00",
        location: {
          lat: -34.60148265321847,
          lon: -58.37856641973148
        },
        photos: [
          "https://picsum.photos/200/300?random=1111",
          "https://picsum.photos/200/300?random=2222"
        ],
        description: "Participa en nuestra maratón de verano a través de los parques de Buenos Aires.",
        amount: 0.31,
        createdAt: new Date(),
        capacity: "Hasta 1000 participantes",
        addres: "Parque Tres de Febrero, Buenos Aires"
    },
    {
        name: "Noche de Tango",
        type: "Artistico",
        time: "21:00",
        location: {
          lat: -34.60219475124512,
          lon: -58.38190363467827
        },
        photos: [
          "https://picsum.photos/200/300?random=3333",
          "https://picsum.photos/200/300?random=4444"
        ],
        description: "Disfruta de una noche llena de pasión con el mejor tango en vivo.",
        amount: 0.58,
        createdAt: new Date(),
        capacity: "Entre 100 y 300 personas",
        addres: "Centro Artistico Kirchner, Buenos Aires"
    },
    {
        name: "Exposición de Fotografía",
        type: "Artistico",
        time: "15:00",
        location: {
          lat: -34.60329423858954,
          lon: -58.38302648579129
        },
        photos: [
          "https://picsum.photos/200/300?random=5555",
          "https://picsum.photos/200/300?random=6666"
        ],
        description: "Una muestra que explora la diversidad Artistico a través de la fotografía.",
        amount: 0.72,
        createdAt: new Date(),
        capacity: "Hasta 200 personas",
        addres: "Fundación Proa, Buenos Aires"
    },
    {
        name: "Feria del Libro",
        type: "Artistico",
        time: "10:00",
        location: {
          lat: -34.60349725678891,
          lon: -58.38085543345652
        },
        photos: [
          "https://picsum.photos/200/300?random=7777",
          "https://picsum.photos/200/300?random=8888"
        ],
        description: "Un evento imperdible para los amantes de la lectura y la literatura.",
        amount: 0.39,
        createdAt: new Date(),
        capacity: "Entre 1000 y 5000 personas",
        addres: "Centro de Exposiciones, Buenos Aires"
    },
    {
        name: "Festival Gastronómico Internacional",
        type: "Gastronomico",
        time: "12:00",
        location: {
          lat: -34.60501578741234,
          lon: -58.38044124782684
        },
        photos: [
          "https://picsum.photos/200/300?random=9999",
          "https://picsum.photos/200/300?random=1010"
        ],
        description: "Ven y prueba platos de todo el mundo en nuestra feria gastronómica.",
        amount: 0.86,
        createdAt: new Date(),
        capacity: "Hasta 2000 personas",
        addres: "Parque de los Patricios, Buenos Aires"
    },
    {
        name: "Ciclo de Cine Argentino",
        type: "Artistico",
        time: "19:30",
        location: {
          lat: -34.60195144245299,
          lon: -58.38295621947355
        },
        photos: [
          "https://picsum.photos/200/300?random=11111",
          "https://picsum.photos/200/300?random=22222"
        ],
        description: "Disfruta de una selección de los mejores films argentinos.",
        amount: 0.50,
        createdAt: new Date(),
        capacity: "Hasta 150 personas",
        addres: "Teatro San Martín, Buenos Aires"
    },
    {
        name: "Feria de Artesanías",
        type: "Artistico",
        time: "09:00",
        location: {
          lat: -34.60413387242674,
          lon: -58.37896234314835
        },
        photos: [
          "https://picsum.photos/200/300?random=33333",
          "https://picsum.photos/200/300?random=44444"
        ],
        description: "Apoya a los artesanos locales y descubre productos únicos.",
        amount: 0.27,
        createdAt: new Date(),
        capacity: "Entre 200 y 800 personas",
        addres: "Plaza Serrano, Buenos Aires"
    },
    {
        name: "Concierto de Rock Alternativo",
        type: "Artistico",
        time: "20:00",
        location: {
          lat: -34.60284613679094,
          lon: -58.38142028495155
        },
        photos: [
          "https://picsum.photos/200/300?random=55555",
          "https://picsum.photos/200/300?random=66666"
        ],
        description: "Una noche llena de energía y buena música.",
        amount: 0.74,
        createdAt: new Date(),
        capacity: "Hasta 400 personas",
        addres: "Teatro Gran Rex, Buenos Aires"
    },
    {
        name: "Clases de Cocina Italiana",
        type: "Gastronomico",
        time: "14:00",
        location: {
          lat: -34.60387416648027,
          lon: -58.38065246143832
        },
        photos: [
          "https://picsum.photos/200/300?random=77777",
          "https://picsum.photos/200/300?random=88888"
        ],
        description: "Aprende a cocinar los mejores platos italianos con chefs expertos.",
        amount: 0.65,
        createdAt: new Date(),
        capacity: "Hasta 50 personas",
        addres: "Escuela de Cocina, Buenos Aires"
    },
    {
        name: "Torneo de Ajedrez",
        type: "Deportivo",
        time: "10:00",
        location: {
          lat: -34.60226318673428,
          lon: -58.38276899461268
        },
        photos: [
          "https://picsum.photos/200/300?random=99999",
          "https://picsum.photos/200/300?random=10101"
        ],
        description: "Demuestra tus habilidades en nuestro torneo de ajedrez.",
        amount: 0.44,
        createdAt: new Date(),
        capacity: "Hasta 100 participantes",
        addres: "Club de Ajedrez, Buenos Aires"
    },
    {
        name: "Ciclo de Música Electrónica",
        type: "Artistico",
        time: "22:00",
        location: {
          lat: -34.60321189351932,
          lon: -58.38941293456485
        },
        photos: [
          "https://picsum.photos/200/300?random=1111",
          "https://picsum.photos/200/300?random=2222"
        ],
        description: "Vive una noche llena de beats y buena vibra con DJs locales.",
        amount: 0.78,
        createdAt: new Date(),
        capacity: "Hasta 600 personas",
        addres: "Club Niceto, Buenos Aires"
    },
    {
        name: "Concierto de Jazz",
        type: "Artistico",
        time: "20:00",
        location: {
          lat: -34.60129448738476,
          lon: -58.37713944881106
        },
        photos: [
          "https://picsum.photos/200/300?random=3333",
          "https://picsum.photos/200/300?random=4444"
        ],
        description: "Disfruta de una velada con el mejor jazz en vivo.",
        amount: 0.54,
        createdAt: new Date(),
        capacity: "Hasta 200 personas",
        addres: "La Trastienda, Buenos Aires"
    },
    {
        name: "Taller de Pintura al Aire Libre",
        type: "Artistico",
        time: "11:00",
        location: {
          lat: -34.60450923389238,
          lon: -58.38868493829082
        },
        photos: [
          "https://picsum.photos/200/300?random=5555",
          "https://picsum.photos/200/300?random=6666"
        ],
        description: "Expresa tu creatividad en un entorno natural mientras aprendes técnicas de pintura.",
        amount: 0.29,
        createdAt: new Date(),
        capacity: "Hasta 30 personas",
        addres: "Bosques de Palermo, Buenos Aires"
    },
    {
        name: "Festival de Teatro Infantil",
        type: "Artistico",
        time: "15:00",
        location: {
          lat: -34.60523568745726,
          lon: -58.38378363457211
        },
        photos: [
          "https://picsum.photos/200/300?random=7777",
          "https://picsum.photos/200/300?random=8888"
        ],
        description: "Una jornada de diversión y risas para toda la familia.",
        amount: 0.63,
        createdAt: new Date(),
        capacity: "Hasta 500 personas",
        addres: "Teatro Colón, Buenos Aires"
    },
    {
        name: "Mercado de Pulgas",
        type: "Artistico",
        time: "09:00",
        location: {
          lat: -34.60624182732431,
          lon: -58.37836524899852
        },
        photos: [
          "https://picsum.photos/200/300?random=9999",
          "https://picsum.photos/200/300?random=1010"
        ],
        description: "Descubre tesoros antiguos y únicos en nuestro mercado de pulgas.",
        amount: 0.48,
        createdAt: new Date(),
        capacity: "Sin límite",
        addres: "San Telmo, Buenos Aires"
    },
    {
        name: "Concierto de Música Clásica",
        type: "Artistico",
        time: "19:00",
        location: {
          lat: -34.60390042187832,
          lon: -58.38194873123123
        },
        photos: [
          "https://picsum.photos/200/300?random=22222",
          "https://picsum.photos/200/300?random=33333"
        ],
        description: "Una velada mágica con las obras más reconocidas del repertorio clásico.",
        amount: 0.59,
        createdAt: new Date(),
        capacity: "Hasta 250 personas",
        addres: "Teatro Avenida, Buenos Aires"
    },
    {
        name: "Exposición de Arte Moderno",
        type: "Artistico",
        time: "14:00",
        location: {
          lat: -34.60705249719089,
          lon: -58.39007219365217
        },
        photos: [
          "https://picsum.photos/200/300?random=44444",
          "https://picsum.photos/200/300?random=55555"
        ],
        description: "Una exposición que desafía los límites de la creatividad.",
        amount: 0.83,
        createdAt: new Date(),
        capacity: "Sin límite",
        addres: "Museo de Arte Moderno, Buenos Aires"
    },
    {
        name: "Festival de Comida Callejera",
        type: "Gastronomico",
        time: "12:00",
        location: {
          lat: -34.60821504700151,
          lon: -58.37792718421332
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
        name: "Caminata Nocturna",
        type: "Deportivo",
        time: "20:00",
        location: {
          lat: -34.60251597368851,
          lon: -58.37901406373467
        },
        photos: [
          "https://picsum.photos/200/300?random=88888",
          "https://picsum.photos/200/300?random=99999"
        ],
        description: "Descubre la ciudad de noche mientras haces ejercicio.",
        amount: 0.35,
        createdAt: new Date(),
        capacity: "Hasta 150 personas",
        addres: "Inicio en Av. de Mayo, Buenos Aires"
    },
    {
        name: "Gira de Museos",
        type: "Artistico",
        time: "10:00",
        location: {
          lat: -34.60170973201071,
          lon: -58.39083515678432
        },
        photos: [
          "https://picsum.photos/200/300?random=10101",
          "https://picsum.photos/200/300?random=11111"
        ],
        description: "Una jornada para explorar los museos más emblemáticos de la ciudad.",
        amount: 0.43,
        createdAt: new Date(),
        capacity: "Sin límite",
        addres: "Recorrido por museos de Buenos Aires"
    },
    {
        name: "Concurso de Fotografía",
        type: "Artistico",
        time: "17:00",
        location: {
          lat: -34.60920159320144,
          lon: -58.37613451178622
        },
        photos: [
          "https://picsum.photos/200/300?random=12121",
          "https://picsum.photos/200/300?random=13131"
        ],
        description: "Captura la esencia de la ciudad y participa en nuestro concurso.",
        amount: 0.55,
        createdAt: new Date(),
        capacity: "Hasta 100 personas",
        addres: "Centro Artistico, Buenos Aires"
    },
    {
        name: "Charla sobre Desarrollo Sostenible",
        type: "Artistico",
        time: "16:00",
        location: {
          lat: -34.61042438472612,
          lon: -58.37856932390812
        },
        photos: [
          "https://picsum.photos/200/300?random=14141",
          "https://picsum.photos/200/300?random=15151"
        ],
        description: "Aprende sobre la importancia del desarrollo sostenible en nuestra sociedad.",
        amount: 0.34,
        createdAt: new Date(),
        capacity: "Hasta 50 personas",
        addres: "Universidad de Buenos Aires, Buenos Aires"
    },
    {
        name: "Torneo de Fútbol Infantil",
        type: "Deportivo",
        time: "09:00",
        location: {
          lat: -34.60861253848422,
          lon: -58.38849348206177
        },
        photos: [
          "https://picsum.photos/200/300?random=16161",
          "https://picsum.photos/200/300?random=17171"
        ],
        description: "Una emocionante jornada de fútbol para los más pequeños.",
        amount: 0.76,
        createdAt: new Date(),
        capacity: "Hasta 200 niños",
        addres: "Complejo Deportivo, Buenos Aires"
    },
    {
        name: "Muestra Gastronómica Internacional",
        type: "Gastronomico",
        time: "13:00",
        location: {
          lat: -34.60763458334221,
          lon: -58.38923445211114
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
        name: "Cine al Aire Libre",
        type: "Artistico",
        time: "20:30",
        location: {
          lat: -34.60647181226524,
          lon: -58.38072216889344
        },
        photos: [
          "https://picsum.photos/200/300?random=20202",
          "https://picsum.photos/200/300?random=21212"
        ],
        description: "Disfruta de películas clásicas bajo las estrellas.",
        amount: 0.67,
        createdAt: new Date(),
        capacity: "Hasta 300 personas",
        addres: "Parque de la Ciudad, Buenos Aires"
    },
    {
        name: "Festival de Títeres",
        type: "Artistico",
        time: "11:00",
        location: {
          lat: -34.60805817434567,
          lon: -58.37823612345678
        },
        photos: [
          "https://picsum.photos/200/300?random=22222",
          "https://picsum.photos/200/300?random=23232"
        ],
        description: "Un evento divertido para toda la familia con espectáculos de títeres.",
        amount: 0.46,
        createdAt: new Date(),
        capacity: "Hasta 200 personas",
        addres: "Teatro Infantil, Buenos Aires"
    },
    {
        name: "Feria del Libro",
        type: "Artistico",
        time: "10:00",
        location: {
          lat: -34.60981321436821,
          lon: -58.38120575340034
        },
        photos: [
          "https://picsum.photos/200/300?random=24242",
          "https://picsum.photos/200/300?random=25252"
        ],
        description: "Una celebración de la lectura con autores, talleres y más.",
        amount: 0.91,
        createdAt: new Date(),
        capacity: "Sin límite",
        addres: "Centro de Exposiciones, Buenos Aires"
    },
    {
        name: "Maratón de Lectura",
        type: "Artistico",
        time: "08:00",
        location: {
          lat: -34.60872644201458,
          lon: -58.38571485673311
        },
        photos: [
          "https://picsum.photos/200/300?random=26262",
          "https://picsum.photos/200/300?random=27272"
        ],
        description: "Una jornada para celebrar el placer de leer en voz alta.",
        amount: 0.39,
        createdAt: new Date(),
        capacity: "Hasta 100 personas",
        addres: "Biblioteca Nacional, Buenos Aires"
    },
    {
        name: "Concierto de Música Folklórica",
        type: "Artistico",
        time: "19:30",
        location: {
          lat: -34.60794816719158,
          lon: -58.38291579483473
        },
        photos: [
          "https://picsum.photos/200/300?random=28282",
          "https://picsum.photos/200/300?random=29292"
        ],
        description: "Un homenaje a la música folklórica argentina con artistas locales.",
        amount: 0.65,
        createdAt: new Date(),
        capacity: "Hasta 400 personas",
        addres: "Teatro Gran Rex, Buenos Aires"
    },
    {
        name: "Fiesta de Disfraces",
        type: "Artistico",
        time: "22:00",
        location: {
          lat: -34.60578543736461,
          lon: -58.38007693106276
        },
        photos: [
          "https://picsum.photos/200/300?random=30303",
          "https://picsum.photos/200/300?random=31313"
        ],
        description: "Una noche llena de diversión, música y creatividad.",
        amount: 0.73,
        createdAt: new Date(),
        capacity: "Hasta 200 personas",
        addres: "Club de Buenos Aires, Buenos Aires"
    },
    {
        name: "Encuentro de Artistas Locales",
        type: "Artistico",
        time: "15:00",
        location: {
          lat: -34.61036490877732,
          lon: -58.37914687426865
        },
        photos: [
          "https://picsum.photos/200/300?random=32323",
          "https://picsum.photos/200/300?random=33333"
        ],
        description: "Conoce a artistas locales y disfruta de su talento.",
        amount: 0.58,
        createdAt: new Date(),
        capacity: "Hasta 150 personas",
        addres: "Casa de la Cultura, Buenos Aires"
    },
    {
        name: "Concierto de Jazz en Vivo",
        type: "Artistico",
        time: "20:00",
        location: {
          lat: -34.60910862784496,
          lon: -58.37767717211914
        },
        photos: [
          "https://picsum.photos/200/300?random=34343",
          "https://picsum.photos/200/300?random=35353"
        ],
        description: "Una velada mágica con los mejores músicos de jazz de la ciudad.",
        amount: 0.82,
        createdAt: new Date(),
        capacity: "Hasta 200 personas",
        addres: "Jazz Club, Buenos Aires"
    },
    {
        name: "Clases Abiertas de Yoga",
        type: "Deportivo",
        time: "07:00",
        location: {
          lat: -34.61123467812493,
          lon: -58.37634951353074
        },
        photos: [
          "https://picsum.photos/200/300?random=36363",
          "https://picsum.photos/200/300?random=37373"
        ],
        description: "Empieza el día con energía y paz interior.",
        amount: 0.47,
        createdAt: new Date(),
        capacity: "Hasta 50 personas",
        addres: "Parque de la Memoria, Buenos Aires"
    },
    {
        name: "Exposición de Arte Moderno",
        type: "Artistico",
        time: "11:00",
        location: {
          lat: -34.61049784585389,
          lon: -58.38421081733699
        },
        photos: [
          "https://picsum.photos/200/300?random=38383",
          "https://picsum.photos/200/300?random=39393"
        ],
        description: "Descubre obras de artistas contemporáneos.",
        amount: 0.69,
        createdAt: new Date(),
        capacity: "Sin límite",
        addres: "Museo de Arte Moderno, Buenos Aires"
    },
    {
        name: "Taller de Cerámica para Niños",
        type: "Artistico",
        time: "14:00",
        location: {
          lat: -34.61203489902855,
          lon: -58.38761740756996
        },
        photos: [
          "https://picsum.photos/200/300?random=40404",
          "https://picsum.photos/200/300?random=41414"
        ],
        description: "Una actividad creativa para los más pequeños.",
        amount: 0.35,
        createdAt: new Date(),
        capacity: "Hasta 20 niños",
        addres: "Centro Artistico para Niños, Buenos Aires"
    },
    {
        name: "Maratón de Programación",
        type: "Artistico",
        time: "09:00",
        location: {
          lat: -34.60984314567891,
          lon: -58.38093247079812
        },
        photos: [
          "https://picsum.photos/200/300?random=42424",
          "https://picsum.photos/200/300?random=43434"
        ],
        description: "Compite y demuestra tus habilidades en programación.",
        amount: 0.90,
        createdAt: new Date(),
        capacity: "Hasta 100 personas",
        addres: "Facultad de Ingeniería, Buenos Aires"
    },
    {
        name: "Feria de Ciencias",
        type: "Artistico",
        time: "10:00",
        location: {
          lat: -34.61167892430583,
          lon: -58.38431572657693
        },
        photos: [
          "https://picsum.photos/200/300?random=44444",
          "https://picsum.photos/200/300?random=45454"
        ],
        description: "Una jornada para explorar y experimentar la ciencia.",
        amount: 0.62,
        createdAt: new Date(),
        capacity: "Sin límite",
        addres: "Parque de la Ciencia, Buenos Aires"
    },
    {
        name: "Exhibición de Autos Clásicos",
        type: "Artistico",
        time: "12:00",
        location: {
          lat: -34.60898237446729,
          lon: -58.37568752482472
        },
        photos: [
          "https://picsum.photos/200/300?random=46464",
          "https://picsum.photos/200/300?random=47474"
        ],
        description: "Admira una colección de autos clásicos y vintage.",
        amount: 0.77,
        createdAt: new Date(),
        capacity: "Sin límite",
        addres: "Plaza Italia, Buenos Aires"
    },
    {
        name: "Caminata por la Naturaleza",
        type: "Deportivo",
        time: "08:00",
        location: {
          lat: -34.61248921567989,
          lon: -58.38679122021143
        },
        photos: [
          "https://picsum.photos/200/300?random=48484",
          "https://picsum.photos/200/300?random=49494"
        ],
        description: "Una experiencia única para conectar con la naturaleza.",
        amount: 0.50,
        createdAt: new Date(),
        capacity: "Hasta 30 personas",
        addres: "Reserva Ecológica, Buenos Aires"
    },
    {
        name: "Festival de Verano",
        type: "Artistico",
        time: "15:00",
        location: {
          lat: -34.61022245234521,
          lon: -58.38954358211111
        },
        photos: [
          "https://picsum.photos/200/300?random=50505",
          "https://picsum.photos/200/300?random=51515"
        ],
        description: "Celebra el verano con música, danza y diversión.",
        amount: 0.88,
        createdAt: new Date(),
        capacity: "Sin límite",
        addres: "Plaza de los Dos Congresos, Buenos Aires"
    },
    {
        name: "Noche de Trivia",
        type: "Artistico",
        time: "19:00",
        location: {
          lat: -34.60872131481156,
          lon: -58.372880111694336
        },
        photos: [
          "https://picsum.photos/200/300?random=61616",
          "https://picsum.photos/200/300?random=62626"
        ],
        description: "Pon a prueba tus conocimientos en una divertida noche de trivia.",
        amount: 0.45,
        createdAt: new Date(),
        capacity: "Hasta 50 personas",
        addres: "Bar de Trivia, Buenos Aires"
    },
    {
        name: "Maratón de Cine de Terror",
        type: "Artistico",
        time: "22:00",
        location: {
          lat: -34.61142138247015,
          lon: -58.37220001220703
        },
        photos: [
          "https://picsum.photos/200/300?random=63636",
          "https://picsum.photos/200/300?random=64646"
        ],
        description: "Disfruta de una noche llena de los mejores clásicos de terror.",
        amount: 0.73,
        createdAt: new Date(),
        capacity: "Sin límite",
        addres: "Cine Club, Buenos Aires"
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
        name: "Torneo de Fútbol 7",
        type: "Deportivo",
        time: "10:00",
        location: {
          lat: -34.61489547122231,
          lon: -58.37194251480103
        },
        photos: [
          "https://picsum.photos/200/300?random=67676",
          "https://picsum.photos/200/300?random=68686"
        ],
        description: "Únete a nuestro torneo y demuestra tu habilidad en el fútbol.",
        amount: 0.56,
        createdAt: new Date(),
        capacity: "Hasta 80 personas",
        addres: "Cancha de Fútbol, Buenos Aires"
    },
    {
        name: "Taller de Fotografía",
        type: "Artistico",
        time: "16:00",
        location: {
          lat: -34.61249225129754,
          lon: -58.37015665094707
        },
        photos: [
          "https://picsum.photos/200/300?random=69696",
          "https://picsum.photos/200/300?random=70707"
        ],
        description: "Aprende a capturar momentos únicos con tu cámara.",
        amount: 0.51,
        createdAt: new Date(),
        capacity: "Hasta 25 personas",
        addres: "Centro Artistico de Fotografía, Buenos Aires"
    },
    {
        name: "Encuentro de Cómics y Manga",
        type: "Artistico",
        time: "11:00",
        location: {
          lat: -34.615107476095186,
          lon: -58.3678390972256
        },
        photos: [
          "https://picsum.photos/200/300?random=71717",
          "https://picsum.photos/200/300?random=72727"
        ],
        description: "Sumérgete en el mundo de los cómics y manga.",
        amount: 0.66,
        createdAt: new Date(),
        capacity: "Sin límite",
        addres: "Centro de Cómics, Buenos Aires"
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
        name: "Jornada de Reforestación",
        type: "Artistico",
        time: "09:00",
        location: {
          lat: -34.610978765356235,
          lon: -58.36856842079151
        },
        photos: [
          "https://picsum.photos/200/300?random=75757",
          "https://picsum.photos/200/300?random=76767"
        ],
        description: "Contribuye a la conservación del medio ambiente plantando árboles.",
        amount: 0.29,
        createdAt: new Date(),
        capacity: "Sin límite",
        addres: "Parque Natural, Buenos Aires"
    },
    {
        name: "Desfile de Modas",
        type: "Artistico",
        time: "18:00",
        location: {
          lat: -34.611122150167484,
          lon: -58.36681253433228
        },
        photos: [
          "https://picsum.photos/200/300?random=77777",
          "https://picsum.photos/200/300?random=78787"
        ],
        description: "Descubre las últimas tendencias de la moda.",
        amount: 0.76,
        createdAt: new Date(),
        capacity: "Hasta 200 personas",
        addres: "Centro de Exposiciones, Buenos Aires"
    },
    {
        name: "Conferencia sobre Tecnología",
        type: "Artistico",
        time: "15:00",
        location: {
          lat: -34.60839203480026,
          lon: -58.36547684669542
        },
        photos: [
          "https://picsum.photos/200/300?random=79797",
          "https://picsum.photos/200/300?random=80808"
        ],
        description: "Aprende sobre las últimas innovaciones en el mundo tecnológico.",
        amount: 0.94,
        createdAt: new Date(),
        capacity: "Hasta 150 personas",
        addres: "Auditorio Artistico, Buenos Aires"
    }
];