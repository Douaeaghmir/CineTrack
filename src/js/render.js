export function affichCard(movies){
    return `<article class="bg-zinc-900 rounded-xl overflow-hidden shadow-lg">

            <img
                src="${movies.image}"
                alt="${movies.title}"
                class="w-full h-72 object-cover"
            >

            <div class="p-4">

                <h2 class="text-white text-xl font-bold mb-3">
                    ${movies.title}
                </h2>
                <div class="flex justify-between">
                <p class="bg-red-600 border-2 border-red-600 rounded-md text-white px-3">${movies.type}</p>
                <p class="text-gray-400 mt-2">
                    ${movies.releaseYear}
                </p>
                </div>
            </div>

        </article>
    `;
}