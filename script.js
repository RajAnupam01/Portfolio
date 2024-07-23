const mobilemenubutton = document.querySelector("#mobile-menu-button");
const mobilemenu = document.querySelector("#mobile-menu")

mobilemenubutton.addEventListener("click",()=>{
    mobilemenu.classList.toggle("hidden")
})