import { fetchdata } from "./api.js";
import { affichCard } from "./render.js";
import { searchMatch , FilterMatch } from "./filters.js";
const filterType = document.getElementById("kind");
const searchInput = document.getElementById("movie");
const displayCards = document.getElementById("movie-container");
const favourites = document.getElementById("favourites");
const movies = await fetchdata();

async function initialCards() {
    displayCards.innerHTML = movies.map(movie => affichCard(movie)).join("");
}
initialCards();

async function searchByName() {   
    searchInput.addEventListener("input" , () =>{
         let searchResult = searchMatch(movies , searchInput.value);
        console.log(searchResult);
        displayCards.innerHTML = searchResult.map(movie => affichCard(movie)).join("");
    })
}
searchByName();

async function filterByName()
{
    filterType.addEventListener("change" , () => {
        let filterResult = FilterMatch(movies , filterType.value);
        displayCards.innerHTML = filterResult.map(movie => affichCard(movie)).join("");
    })
}
filterByName();