function updateClock() {
    
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`; 
    document.getElementById("clock").textContent = timeString;

}

updateClock();
setInterval(updateClock, 10);

/* Change the background code */



const Button5 = document.getElementById("ChangeBack")
const Fone = document.getElementById("BackGroundMain")

Button5.addEventListener("click", event => {
    if(Fone.style.backgroundColor === "white") {
        Fone.style.backgroundColor = "rgb(48, 48, 48)";
    } else {
        Fone.style.backgroundColor = "white";
    }

});