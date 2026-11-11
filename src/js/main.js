import { fetchdata } from "./api.js";
import { affichCard } from "./render.js"
const filterType = document.getElementById("kind");
const searchInput = document.getElementById("movie-containe");
const displayCards = document.getElementById("movie-container");
const favourites = document.getElementById("favourites");

async function initial() {

    const movies = await fetchdata();
    displayCards.innerHTML = movies.map(movie => affichCard(movie)).join("");
}
initial();