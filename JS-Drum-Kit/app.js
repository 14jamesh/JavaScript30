const playSound = function (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (audio) {
    const div = document.querySelector(`div[data-key = "${event.keyCode}"]`);
    div.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }
};

const handleTransition = function (event) {
  if (!event.propertyName.includes("transform")) return;
  event.target.classList.remove("playing");
};

Array.from(document.querySelectorAll(".key")).forEach((el) => {
  el.addEventListener("transitionend", (event) => {
    handleTransition(event);
  });
});

document.querySelector("body").addEventListener("keydown", (event) => {
  playSound(event);
});
