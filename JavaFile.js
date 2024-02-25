const ButtonMore = document.getElementById("ButtonMore");
const Cooky = document.getElementById("Cooky");

ButtonMore.addEventListener("click", event => {
    
    if(Cooky.style.visibility === "hidden") {
        Cooky.style.visibility = "visible";
        ButtonMore.textContent = "Печенька!"
    }

    else {
        Cooky.style.visibility = "hidden";
        ButtonMore.textContent = "Где печенька?!";
    }

});