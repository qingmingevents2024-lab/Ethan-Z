
alert("🎵 Welcome to my Violin Website! 🎵");

const main = document.body;
let angle = 0;
let increment = 0.5;
let pulse = 0;  // ← NEW! This controls the pulsing

function doRainbow(){
    requestAnimationFrame(doRainbow);
    
    // PULSE EFFECT: brightness goes up and down like music! 🕺
    let brightness = 50 + Math.sin(pulse) * 30;
    main.style.backgroundColor = "hsl("+angle+"deg, 70%, "+brightness+"%)";
    
    angle += increment;
    pulse += 0.05;  // ← Controls how fast it pulses
}
doRainbow();

// Rainbow links (this part stays the same!)
const allLinks = document.querySelectorAll("a");
setInterval(function() {
    let linkAngle = 0;
    allLinks.forEach(function(link) {
        link.style.color = "hsl("+linkAngle+"deg, 80%, 50%)";
        linkAngle += 30;
    });
}, 100);