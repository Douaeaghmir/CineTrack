
export function openMovieModal(movies) {

    const movieContainer = document.getElementById("movie-container");
    const modal = document.getElementById("movieModal");
    const closeModal = document.getElementById("closeModal");
    movieContainer.addEventListener("click", async (event) => {

        const card = event.target.closest("article[data-id]");
        if (!card) return;
        if (event.target.closest("button")) return;

        const movieId = card.dataset.id;

        const movie = movies.find(movie => movie.id == movieId);
        if (!movie)
            return;
        else {
            const seasonsContainer = document.getElementById("seasonsContainer");
            const seasonSelect = document.getElementById("seasonSelect");

            seasonSelect.className += " border-2 border-red-600"
            if (movie.type === "series") {
                seasonsContainer.classList.remove("hidden");

                seasonSelect.innerHTML = movie.seasons.map(season =>
                    `<option value="${season}">Season ${season}</option>`
                ).join("");

            } else {
                seasonsContainer.classList.add("hidden");
            }
        }

        document.getElementById("modalTitle").textContent = movie.title;
        document.getElementById("modalTime").textContent = movie.duration;
        document.getElementById("modalTime").className = "bg-red-600 text-white font-['Robot'] pl-2 w-[40px] rounded";
        document.getElementById("modalImage").src = movie.image;
        let describe = document.getElementById("modalDescription")

        describe.textContent = movie.description;
        describe.className = "font-['Robot']"
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    });
}