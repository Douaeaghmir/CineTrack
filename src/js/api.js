export async function fetchdata(url) {
    const response = await fetch("https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json");
    const movies = await response.json();
    return movies;
}