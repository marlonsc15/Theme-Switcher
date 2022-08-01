const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

var music = new Audio("transição.mp3");

function troca() {  
    music.play();
    music.currentTime = 0.3;
}




 





