// Hidden Message Reveal
document.querySelector(".heart-btn").addEventListener("click", function() {
    document.querySelector(".hidden-message").style.display = "block";
});

// Valentine Buttons
document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("surprise").style.display = "block";
});

document.getElementById("no-btn").addEventListener("click", function() {
    this.style.transform = "scale(0.5)";
});

// Play Audio Message
document.querySelector(".microphone-btn").addEventListener("click", function() {
    document.getElementById("voiceMessage").play();
});