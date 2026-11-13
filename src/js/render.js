export function affichCard(movies) 
{
    return `<article class="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:border-2 border-red-800 transition-all hover:shadow-red-600 shadow-md">

            <img
                src="${movies.image}"
                alt="${movies.title}"
                class="w-full h-72 object-cover"
            >
            <div class="p-4">
                <div class="flex items-center justify-between">
                <h2 class="text-white text-xl font-bold mb-3">
                    ${movies.title}
                </h2>
                <button class="added bg-red-600 w-[50px] rounded-md" data-id="${movies.id}">🖤</button>
                </div>
                <div class="flex justify-between">
                <p class="font-['inter'] bg-red-600 border-2 border-red-600 rounded-md text-white px-3">${movies.type}</p>
                <p class="text-gray-400 mt-2 font-['Robot']">
                    ${movies.releaseYear}
                </p>
                </div>
            </div>
        </article>
    `;
}
export function messages(displayCards)
{
            return displayCards.innerHTML = `<div class="text-center col-span-full p-5 border-2 rounded border-red-800 bg-red-600 ml-[250px] mr-[250px]">
            <p class="text-center text-white font-['Robot']">No Movie Or Series Was Found Under This Name</p>
            </div>`
}


export function displaCardFav(movies) {
    return `
        <article class="flex items-center gap-3 bg-zinc-900 p-2 rounded-lg mb-3">

            <img 
                src="${movies.image}" 
                alt="${movies.title}"
                class="w-16 h-20 object-cover rounded-md"
            >

            <h3 class="text-white font-bold flex-1">
                ${movies.title}
            </h3>

            <button 
                class="removeFav bg-red-600 text-white px-3 py-2 rounded-md"
                data-id="${movies.id}"
            >
                X
            </button>

        </article>
    `;
}
