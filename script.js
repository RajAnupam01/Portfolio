document.addEventListener("DOMContentLoaded", function () {



    // menu bar logic

    const mobilemenubutton = document.querySelector("#mobile-menu-button");

    mobilemenubutton.addEventListener("click", () => {

        const mobilemenu = document.querySelector("#mobile-menu")
        mobilemenu.classList.toggle("hidden")
    })




    // scroll top logic


    const movetopbtn = document.querySelector("#move-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            movetopbtn.classList.remove("hidden");
            movetopbtn.classList.add("block");
        }
        else {
            movetopbtn.classList.remove("block");
            movetopbtn.classList.add("hidden")
        }
    });

    movetopbtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })


});