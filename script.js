const imgWrapper = document.querySelector(".img-wrap");
const imgLength = document.querySelectorAll(".img-wrap img").length;
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let translateValue = 0;
// keep slider moving
let interval = setInterval(keepSliding, 2500);

nextBtn.addEventListener("click", () => {
    // stop the interval before responding to the button 
    clearInterval(interval)
    interval = setInterval(keepSliding, 2500)
    // increasing translateValue 
    translateValue++
    slide()
});

prevBtn.addEventListener("click", () => {
    // stop the interval before responding to the button 
    clearInterval(interval)
    interval = setInterval(keepSliding, 2500)
    // decreasing translateValue 
    translateValue--
    slide()
});

// function to keep slider moving
function keepSliding(){
    translateValue++
    slide()
}
function slide() {
    if(translateValue > imgLength - 1){
        translateValue = 0
    }else if(translateValue < 0){
        translateValue = imgLength -1
    }
  imgWrapper.style.transform = `translate(-${translateValue}00%)`;
}