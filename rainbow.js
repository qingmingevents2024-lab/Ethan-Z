const main = document.getElementById('menu')
let angle=0;
let increment=0.2;
function doRainbow(){
    requstAnamaitionFrame(doRainbow);
    main.style.backgroundColor = "hsl("+angle+"deg, 100%, 50%:)";
    angle+=increment;  
}
doRainbow();