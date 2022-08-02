// botão que muda de dia para noite

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

// audio de mudança

var music = new Audio("transição.mp3");

function troca() {  
    music.play();
    music.currentTime = 0.3;
}

//função de hora do dia

var data = new Date();
var hora =  data.getHours();
// var hora = 1;

function ativarCheckbox(el) {
    el.checked = true;
}
    console.log(hora);
if((hora >= 18 && hora <= 24) || (hora >= 0 && hora < 6)) {
    document.body.classList.toggle("dark");
    ativarCheckbox(checkbox);
}else{
    
}
