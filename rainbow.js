alert("Welcome to my website");
const main = document.body;
let angle=0;
let increment=0.5;
function doRainbow(){
    requestAnimationFrame(doRainbow);
    main.style.backgroundColor = "hsl("+angle+"deg, 60%, 90%)";
    angle+=increment;  
} 
doRainbow();