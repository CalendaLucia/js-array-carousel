// CREO UN ARRAY CON LE IMMAGINI DA INSERIRE NEL CAROSELLO

const images = [
"img/01.webp",
"img/02.webp",
"img/03.webp",
"img/04.webp",
"img/05.webp",
] ;

// INIZIALIZZO IL MIO CONTAINER
const slider = document.querySelector(".slider");

// CREO UN CICLO DELLE MIE IMMAGINI E DO TANTI DIV FIGLI, CON CLASSE SLIDE, AL MIO CONTAINER, TANTE QUANTE SONO LE MIE IMMAGINI.

for (let counter = 0; counter < images.length; counter++) {
  
// CREO LE SLIDE CHE ANDRANNO AGGIUNTE AL CONTAINER SLIDER

    slider.innerHTML += `<div class="slide">
                            <img src="${images[counter]}">
                         </div>`;
  
    
}

// PRENDO TUTTE LE SLIDE CREATE E AGGIUNGO SOLO ALL' INDICE 0, OVVERO LA PRIMA SLIDE, LA CLASSE CURRENT, DANDOLE VALORE "O".

const slides = document.querySelectorAll(".slide");
let current= 0;
slides[current].classList.add("current");



// CREO LE FUNZIONI CHE ACCADRANNO AL CLICK DEI MIEI BOTTONI

const nextSlide = document.querySelector(".btn-next")
const prevSlide = document.querySelector(".btn-prev")

// CREO LA FUNZIONE AL CLICK DI NEXT BUTTON
nextSlide.addEventListener('click',
  function () {
    
    slides[current].classList.remove('current');
  
    if (current == slides.length - 1) {
      
       current = 0;

    } else {
     
      current++;
  }
    slides[current].classList.add('current');
 

  })


//   CREO LA FUNZIONE AL CLICK DI PREV-BUTTON
  prevSlide.addEventListener('click',
     function () {
    
    slides[current].classList.remove('current');

     if (current == 0) {
    
      current = slides.length - 1;
  }
  else {

      current--;
  }
    slides[current].classList.add('current');

  })
  
 
  
