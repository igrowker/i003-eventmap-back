export function generateRandomCoordinates(lat: number, lon: number, radius: number) {
    const lat2 = lat + (Math.random() * 2 - 1) * radius / 111.32;
    const lon2 = lon + (Math.random() * 2 - 1) * radius / (111.32 * Math.cos(lat * Math.PI / 180));
    return { lat: lat2, lon: lon2 };
}
