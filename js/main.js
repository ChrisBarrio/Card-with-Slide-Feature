//swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




const titulo = document.getElementById("titulo");
const tituloHover = document.querySelector('#titulo');

tituloHover.addEventListener("click",() =>{
  console.log("tengo el mouse arriba");
  titulo.style.color = '#fff';
  titulo.style.backgroundColor = 'lightblue';
  titulo.textContent = 'Felicitaciones Campeones!!!';
})