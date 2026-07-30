const main = document.body;
let angle=0;
let increment=5;
function doRainbow(){
    requestAnimationFrame(doRainbow);
    main.style.backgroundColor = "hsl("+angle+"deg, 100%, 50%)";
    angle+=increment;  
} 
doRainbow();