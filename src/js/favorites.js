export function clickButtonFav()
{
    const btn = document.querySelectorAll(".added");

    btn.forEach(button => {
        button.addEventListener("click" , ()=>{
            console.log("hna");
            console.log(button.dataset.id);
        })
    })
}