import { displaCardFav } from "./render.js";
import { saveFavorites } from "./api.js"
let favMovies = JSON.parse(localStorage.getItem("favorites")) || [];


export function clickButtonFav(movies, favourites) {
    favourites.innerHTML = favMovies
    .map(movie => displaCardFav(movie))
    .join("");
    const btn = document.querySelectorAll(".added");

    btn.forEach(button => {
        button.addEventListener("click", () => {
            const movieId = button.dataset.id;
            const movie = movies.find(movie => movie.id == movieId);
            const exist = favMovies.some(movie => movie.id == movieId);

            if (exist) {
                favMovies = favMovies.filter(movie => movie.id != movieId);
            }
            else
                favMovies.push(movie);
            saveFavorites(favMovies);
            favourites.innerHTML = favMovies
                .map(movie => displaCardFav(movie))
                .join("");
        })
    })
    favourites.addEventListener("click", (event) => {

        if (event.target.classList.contains("removeFav")) {
            const movieId = event.target.dataset.id;

            favMovies = favMovies.filter(movie => movie.id != movieId);
            saveFavorites(favMovies);
            const originalButton = document.querySelector(
                `.added[data-id="${movieId}"]`
            );

            if (originalButton) {
                originalButton.textContent = "🖤";
            }
            favourites.innerHTML = favMovies
                .map(movie => displaCardFav(movie))
                .join("");
        }
    });
}