
const main = document.body;
let angle=0;
let increment=0.2;
function doRainbow(){
    requstAnimationFrame(doRainbow);
    main.style.backgroundColor = "hsl("+angle+"deg, 100%, 50%:)";
    angle+=increment;  
} 
doRainbow();