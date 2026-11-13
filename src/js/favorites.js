import { displaCardFav } from "./render.js";
let favMovies = [];
export function clickButtonFav(movies, favourites) {
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
            button.textContent = exist ? "🖤" : "❤️";
            favourites.innerHTML = favMovies
                .map(movie => displaCardFav(movie))
                .join("");
            console.log(favMovies);
        })
    })
}