document.querySelector("body").addEventListener("keydown", (event) => {
  playSound(event);
  addHighlight(event);
});

document.querySelector("body").addEventListener("keyup", (event) => {
  removeHighlight(event);
});

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  audio.play();
}

function addHighlight(event) {
  document
    .querySelector(`div[data-key="${event.keyCode}"]`)
    .classList.add("playing");
}

function removeHighlight(event) {
  document
    .querySelector(`div[data-key="${event.keyCode}"]`)
    .classList.remove("playing");
}
