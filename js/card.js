const elCardImg = document.querySelector(".card-img-top");

let count = 0;
let moviesInterval;

elCardImg.addEventListener("mouseenter", () => {

   moviesInterval = setInterval(() => {

      if (count == elCardImg.dataset.maxFrameCount) {
         count = 1
      } else {
         count++
      }

      elCardImg.setAttribute("src", `./images-cards/shum-bola-${count}.jpg`)

   },600)

});

elCardImg.addEventListener("mouseleave", () => {

   elCardImg.setAttribute("src", `./images-cards/shum-bola-1.jpg`);
   clearInterval(moviesInterval);

})