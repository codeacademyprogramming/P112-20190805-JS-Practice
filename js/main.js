"use strict";

const rightArrow = document.querySelector(".arrow-right");
const leftArrow = document.querySelector(".arrow-left");

rightArrow.addEventListener("click", function () { slide("right") });
leftArrow.addEventListener("click", function () { slide("left") });

// function slideNext(){
//     let currentSlide = document.querySelector(".slides .active");
//     currentSlide.classList.remove("active");

//     if(currentSlide.nextElementSibling == null){
//         currentSlide.parentElement.firstElementChild.classList.add("active");
//     } else {
//         currentSlide.nextElementSibling.classList.add("active");
//     }
// }
// function slidePrevious(){
//     let currentSlide = document.querySelector(".slides .active");
//     currentSlide.classList.remove("active");

//     if(currentSlide.previousElementSibling == null){
//         currentSlide.parentElement.lastElementChild.classList.add("active");
//     } else {
//         currentSlide.previousElementSibling.classList.add("active");
//     }
// }

function slide(direction) {
    let currentSlide = document.querySelector(".slides .active");
    currentSlide.classList.remove("active");

    if (direction === "left") {
        if (currentSlide.previousElementSibling == null) {
            currentSlide.parentElement.lastElementChild.classList.add("active");
        } else {
            currentSlide.previousElementSibling.classList.add("active");
        }
    } else if (direction === "right") {
        if (currentSlide.nextElementSibling == null) {
            currentSlide.parentElement.firstElementChild.classList.add("active");
        } else {
            currentSlide.nextElementSibling.classList.add("active");
        }
    }
}

// setInterval(function(){slide("right")}, 2000);


let slideNavs = document.querySelectorAll(".slide-nav div");

for (let i = 0; i < slideNavs.length; i++) {
    slideNavs[i].addEventListener("click", function(){

        document.querySelector(".slide-nav div.active").classList.remove("active");
        slideNavs[i].classList.add("active");

        let currentSlide = document.querySelector(".slide-item.active");
        currentSlide.classList.remove("active");
        document.getElementsByClassName("slide-item")[i].classList.add("active");

    });
}