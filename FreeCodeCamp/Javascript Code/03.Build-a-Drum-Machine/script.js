const display = document.getElementById("display");

// Function to play sound
function playSound(key) {
  const audio = document.getElementById(key);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  const pad = audio.parentElement;
  display.innerText = pad.id;
}

// Click event
document.querySelectorAll(".drum-pad").forEach(pad => {
  pad.addEventListener("click", () => {
    const key = pad.innerText.trim();
    playSound(key);
  });
});

// Keyboard event
document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  playSound(key);
});