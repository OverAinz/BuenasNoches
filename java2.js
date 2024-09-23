const   h1 = document.querySelector(".message"),
        texto = "Gracias por escojerme amor!!!";

const   h2 = document.querySelector(".message2"),
        texto2 = "Que tengas linda noche Brenda";

function efectTextTyping(elemento,texto, i=0) {
    elemento.textContent += texto[i];

    if (i === texto.length-1) return;

    setTimeout(() => efectTextTyping(elemento,texto,i+1),150);

    
}

efectTextTyping(h1,texto);
setTimeout(() => efectTextTyping(h2,texto2),5000);
