

// script para efecto de girar
// Obtener todos los elementos con la clase flipCard
var flipCards = document.querySelectorAll('.skills');

// Iterar sobre cada elemento y agregar un event listener para el clic
flipCards.forEach(function(card) {
    card.addEventListener('click', function() {
        // Cambiar la transformación al hacer clic
        if (card.style.transform === 'rotateY(180deg)') {
            card.style.transform = 'rotateY(0deg)';
        } else {
            card.style.transform = 'rotateY(180deg)';
        }
    });
});

const boton = document.querySelector(".boton");
boton.addEventListener("click",function(){
    alert("pronto se habilitará esta sección")
})



