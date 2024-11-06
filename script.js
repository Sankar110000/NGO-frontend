const projects = document.querySelectorAll(".showcase div h1");
const elements = document.querySelectorAll(".chip-content .text-num");

let animationStarted = false;
let indiaNumFormatter = new Intl.NumberFormat("en-IN");

function increaseCount(ele, eleTarget, eleSpeed, eleValue){
    eleValue += eleTarget/eleSpeed; 
    if(eleValue < eleTarget){
        ele.innerHTML = Math.floor(eleValue) ;
        requestAnimationFrame(() => increaseCount(ele, eleTarget, eleSpeed, eleValue));
    }else{
        ele.innerHTML = indiaNumFormatter.format(eleTarget) + "+";
    }
}

window.addEventListener("scroll" || "load", () => {
    
    if(window.scrollY > 1550 && !animationStarted){
        increaseCount(projects[0], 999, 200,  0);
        increaseCount(projects[1], 700, 200, 0);
        increaseCount(projects[2], 250, 99, 0);
        animationStarted = true;
    }
});

window.addEventListener("load", () => {
    if(window.location.pathname == "/contact-us.html" && !animationStarted){
        increaseCount(elements[0], 999, 200,  0);
        increaseCount(elements[1], 700, 200, 0);
        increaseCount(elements[2], 250, 99, 0);
        animationStarted = true;
    }
});
