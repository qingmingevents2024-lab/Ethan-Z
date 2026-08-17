const violinParts = document.querySelectorAll(".violin-part");
const violinInfo = document.getElementById("violin-info");

const descriptions = {
    Pegs: "🎵 The pegs are used to tune the strings.",
    Neck: "🎻 The neck connects the body to the fingerboard.",
    Fingerboard: "🎼 You press the strings against the fingerboard to change notes.",
    Body: "🎻 The wooden body helps amplify the vibrations of the strings.",
    Bridge: "🌉 The bridge holds the strings up and transfers their vibrations to the body.",
    Strings: "🎵 A violin normally has four strings: G, D, A, and E.",
    Tailpiece: "🎻 The tailpiece anchors the strings at the bottom of the violin."
};

violinParts.forEach(part => {
    part.addEventListener("click", () => {
        const name = part.dataset.part;
        violinInfo.textContent = descriptions[name];

        violinParts.forEach(p => p.classList.remove("selected"));
        part.classList.add("selected");
    });
});

document.getElementById("darkModeButton").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});