import { TypeEvents } from "src/utils/enum";
import { v4 as uuidv4 } from 'uuid';


const obeliskLat = -34.605500;
const obeliskLon = -58.384500;

// Radius in kilometers
const radius = 5;

// Function to generate random coordinates within a given radius
export function generateRandomCoordinates(lat: number, lon: number, radius: number) {
    const lat2 = lat + (Math.random() * 2 - 1) * radius / 111.32; // 111.32 km is approximately the distance between one degree of latitude
    const lon2 = lon + (Math.random() * 2 - 1) * radius / (111.32 * Math.cos(lat * Math.PI / 180));
    return { lat: lat2, lon: lon2 };
}

const eventos = [
    {
        userId: "b3f40ffd-a10b-4ad2-a017-4be59f6c2c02",
        name: "Concierto de Rock",
        type: "Artistico",
        date: "2024-06-08",
        time: "15:30",
        lat: -34.604,
        lon: -58.381,
        photos: ["https://picsum.photos/200/300?random=746", "https://picsum.photos/200/300?random=506"],
        description: "El mejor espectáculo musical del año.",
        amount: 0.46,
        createdAt: new Date(),
        capacity: "Entre 325 y 773 personas",
        addres: "Ubicación cercana al Obelisco, Buenos Aires"
    },
    {
        userId: "832585b9-ccb5-4e38-889f-118b91fc574e",
        name: "Maratón de Buenos Aires",
        type: "Gastronomico",
        date: "2024-12-09",
        time: "00:00",
        lat: -34.60448395867932,
        lon: -58.38164429855504,
        photos: ["https://picsum.photos/200/300?random=776", "https://picsum.photos/200/300?random=316"],
        description: "Ven a compartir una jornada llena de emociones.",
        amount: 0.02,
        createdAt: new Date(),
        capacity: "Entre 344 y 830 personas",
        addres: "Ubicación cercana al Obelisco, Buenos Aires"
    },
    {
        userId: "486541f6-b804-4be1-be5a-8e31c5ef140e",
        name: "Festival de Cine",
        type: "Deportivo",
        date: "2024-11-15",
        time: "00:00",
        lat: -34.60315602377965,
        lon: -58.38091272630897,
        photos: ["https://picsum.photos/200/300?random=406", "https://picsum.photos/200/300?random=186"],
        description: "Gastronomía de autor en un solo lugar.",
        amount: 0.67,
        createdAt: new Date(),
        capacity: "Entre 380 y 796 personas",
        addres: "Ubicación cercana al Obelisco, Buenos Aires"
    },
    {
        userId: "cb397f3c-58f3-4eed-ba46-8cfa3d300b86",
        name: "Feria Gastronómica",
        type: "Gastronomico",
        date: "2024-04-30",
        time: "00:00",
        lat: -34.60404044639058,
        lon: -58.38074090750974,
        photos: ["https://picsum.photos/200/300?random=112"],
        description: "Gastronomía de autor en un solo lugar.",
        amount: 0.29,
        createdAt: new Date(),
        capacity: "Entre 439 y 890 personas",
        addres: "Ubicación cercana al Obelisco, Buenos Aires"
    },
    {
        userId: "23fb3d5c-6885-432c-b58b-1eb760bc1f7c",
        name: "Festival de Cine",
        type: "Artistico",
        date: "2024-08-20",
        time: "00:00",
        lat: -34.602984240145545,
        lon: -58.38120893827588,
        photos: ["https://picsum.photos/200/300?random=526", "https://picsum.photos/200/300?random=876"],
        description: "Un recorrido cultural único.",
        amount: 0.95,
        createdAt: new Date(),
        capacity: "Entre 183 y 766 personas",
        addres: "Ubicación cercana al Obelisco, Buenos Aires"
    },
    {
        userId: "df83ca53-6cf7-4df9-b406-58dca2657bc5",
        name: "Muestra Fotográfica",
        type: "Deportivo",
        date: "2024-04-22",
        time: "00:00",
        lat: -34.60438414706095,
        lon: -58.382067173332494,
        photos: ["https://picsum.photos/200/300?random=446", "https://picsum.photos/200/300?random=556"],
        description: "Un desafío deportivo de alto nivel.",
        amount: 0.99,
        createdAt: new Date(),
        capacity: "Entre 222 y 995 personas",
        addres: "Ubicación cercana al Obelisco, Buenos Aires"
    },
    {
        userId: "df83ca53-6cf7-4df9-b406-58dca2657bc5",
        name: "Cata de Vinos",
        type: "Artistico",
        date: "2024-04-07",
        time: "00:00",
        lat: -34.60323124976875,
        lon: -58.380835281739884,
        photos: ["https://picsum.photos/200/300?random=452", "https://picsum.photos/200/300?random=489"],
        description: "Disfruta de los mejores platos gourmet.",
        amount: 0.33,
        createdAt: new Date(),
        capacity: "Entre 156 y 731 personas",
        addres: "Ubicación cercana al Obelisco, Buenos Aires"
    },
    // ... y así hasta completar los 50 eventos
];
