const num = document.querySelector("#scrollNum");
const target = 1000;
const speed = 100;
let currentVal = 0;

function updateNum(){
    currentVal += target/speed;
    console.log(currentVal);
    if (currentVal < target) {
        num.innerText = Math.ceil(currentVal);
        requestAnimationFrame(updateNum);
      } else {
        numberElement.innerText = targetNumber;
      }
}

window.addEventListener("load", () => {
    updateNum();
})