
export async function fetchdata() 
{
    try {
        const response = await fetch(
            "https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json"
        );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const movies = await response.json();
        return movies;
    } catch (error) {
        console.error("Error fetching movies:", error.message);
        return [];
    }
}

export function saveFavorites(favMovies) {
    localStorage.setItem("favorites", JSON.stringify(favMovies));
}