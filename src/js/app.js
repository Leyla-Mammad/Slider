window.addEventListener("DOMContentLoaded",function(){
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let sliderIMG = document.getElementById("sliderIMG");

let sliderContainer = document.querySelector(".slider-container");


let images = [
    "src/img/breaking.jpg",
    "src/img/dark.jpg",
    "src/img/black-mirror-season-6-review-1200x720.jpg",
    "src/img/3%.jpg",
    "src/img/west.jpg",
]
let currentIndex = 0;
function SlideImage(){
    if(currentIndex < 0){
        currentIndex = images.length-1;
    }else if(currentIndex >= images.length){
        currentIndex = 0;
    }
    console.log(images[currentIndex])
    sliderIMG.src = images[currentIndex];
}

prevBtn.addEventListener("click", function(){
    currentIndex--;
    SlideImage();
}) 
nextBtn.addEventListener("click", function(){
    currentIndex++;
    SlideImage();
    
})

let autoSlide = this.setInterval(function(){
    currentIndex++;
    SlideImage();
},3000);

sliderContainer.addEventListener("mouseover", function(){
clearInterval(autoSlide);
})
sliderContainer.addEventListener("mouseout", function(){
    autoSlide = setInterval(function(){
        currentIndex++;
        SlideImage();
    },3000);
})
}
)