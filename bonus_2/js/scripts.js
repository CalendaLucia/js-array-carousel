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
slider.innerHTML +=`<div class="big-slide"><div class="container"></div></div>`;
const container = document.querySelector('.container')
const bigSlide = document.querySelector('.big-slide')



// CREO UN CICLO DELLE MIE IMMAGINI E DO TANTI DIV FIGLI, CON CLASSE SLIDE, AL MIO CONTAINER, TANTE QUANTE SONO LE MIE IMMAGINI.

for (let counter = 0; counter < images.length; counter++) {
  
// CREO LE SLIDE CHE ANDRANNO AGGIUNTE AL CONTAINER SLIDER


    container.innerHTML +=`<div class="slide">
                            <img src="${images[counter]}">
                            <div class="overlay"></div>
                         </div>`;  
                         
                                 
    
}


for (let counter = 0; counter < images.length; counter++) {
  
  // CREO LE SLIDE CHE ANDRANNO AGGIUNTE AL CONTAINER SLIDER
  
  bigSlide.innerHTML +=`<img class="big-image" src="${images[counter]}">`; 
   
                          
  }


// PRENDO TUTTE LE SLIDE CREATE E AGGIUNGO SOLO ALL' INDICE 0, OVVERO LA PRIMA SLIDE, LA CLASSE CURRENT, DANDOLE VALORE "O".

// SLIDE PICCOLE A DESTRA
const slides = document.querySelectorAll(".slide");
let current= 0;
slides[current].classList.add("current");

// OVERLAY
const selected = document.querySelectorAll(".overlay");
let hidden= 0;
selected[hidden].classList.add("hidden");


const selectedBigImage = document.querySelectorAll('.big-image');
let currentBigImage = 0;
selectedBigImage[currentBigImage].classList.add('current-image');


// CREO LE FUNZIONI CHE ACCADRANNO AL CLICK DEI MIEI BOTTONI

const nextSlide = document.querySelector(".btn-next")
const prevSlide = document.querySelector(".btn-prev")

// CREO LA FUNZIONE AL CLICK DI NEXT BUTTON
prevSlide.addEventListener('click',
  function () {
    
    slides[current].classList.remove('current');
    selected[hidden].classList.remove("hidden");
    selectedBigImage[currentBigImage].classList.remove('current-image');
  
    
   
    if (current == slides.length - 1) {
      
       current = 0;
       hidden = 0;
       currentBigImage = 0;

     
    } else {
     
      current++;
      hidden++;
      currentBigImage ++;
      
  }
    slides[current].classList.add('current');
    selected[hidden].classList.add("hidden");
    selectedBigImage[currentBigImage].classList.add('current-image');
    slides[current].classList.add('current-image');

  
  })


//   CREO LA FUNZIONE AL CLICK DI PREV-BUTTON
  nextSlide.addEventListener('click',
     function () {
    
    slides[current].classList.remove('current');
    selected[hidden].classList.remove("hidden");
    selectedBigImage[currentBigImage].classList.remove('current-image');

     if (current == 0) {
    
      current = slides.length - 1;
      hidden = slides.length - 1;
      currentBigImage = selectedBigImage.length - 1 ;
  }
  
  else {

      current--;
      hidden--;
      currentBigImage--;
      
  }
    slides[current].classList.add('current');
    selected[hidden].classList.add("hidden");
    selectedBigImage[currentBigImage].classList.add('current-image');

  })

  

  