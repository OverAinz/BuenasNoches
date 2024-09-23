var now = new Date();
var hours = now.getHours();

const   h1 = document.querySelector(".message"),
        texto = "Gracias por escogerme amor!!!";

const   h2 = document.querySelector(".message2")

var saludo = "Que tengas linda noche"

if (hours > 6 ) {
    saludo = "Que tengas lindo dia"
}

if  (hours > 13) {
    saludo = "Hola amor linda tarde, ya comiste"
}

if (hours > 20 ) {
    saludo = "Ya es tarde... como estuvo tu da"
}


if (hours > 22 ) {
    saludo = "Que descanses"
}

var     texto2 = saludo + " Brenda";


function efectTextTyping(elemento,texto, i=0) {
    elemento.textContent += texto[i];

    if (i === texto.length-1) return;

    setTimeout(() => efectTextTyping(elemento,texto,i+1),150);

    
}

efectTextTyping(h1,texto);
setTimeout(() => efectTextTyping(h2,texto2),5000);

console.log(hours)