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

// Rotating circle

let angle = 0;

const div = document.getElementById("Cube");
window.setInterval(rotate, 20);

function rotate() {
    div.style.transform = `rotate(${angle}deg)`;
    angle += 1;
}