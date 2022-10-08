const elCarImg = document.querySelector(".slider-box__img");
const elPrevBtn = document.querySelector(".prev-btn");
const elNextBtn = document.querySelector(".next-btn");

console.log(elCarImg);

const carListImg = [

   "./images/tesla-1.jpg",
   "./images/tesla-2.webp",
   "./images/tesla-3.jpg",
   "./images/tesla-4.jpg",
   "./images/tesla-5.jpg",
   "./images/tesla-6.jpg"

]

let count = 0;

setInterval( () => {

   elCarImg.setAttribute("src", carListImg[count])

   if (count == carListImg.length -1) {
      count = 0;
   }
   else {
      count++;
   }

}, 2000)

elPrevBtn.addEventListener("click", () => {

   elCarImg.setAttribute("src", carListImg[count])

   if (count == 0) {

      count = carListImg.length -1;

   }
   else {
      count --;
   }

});

elNextBtn.addEventListener("click", () => {

   elCarImg.setAttribute("src", carListImg[count])

   if (count == 0) {

      count = carListImg.length -1;

   }
   else {
      count ++;
   }

});