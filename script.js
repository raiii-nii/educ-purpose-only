const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const phrases = document.getElementById("phrases");
const gif = document.getElementById("mainGif");

const phraseList = [
  "Are you sure?",
  "What if I asked really nicely?",
  "Pretty please",
  "With a chocolate rice cake on top",
  "What about a matcha frostie",
  "PLEASE POOKIE",
  "But :*(",
  "I am going to die",
  "Yep im dead",
  "ok ur talking to Nathan's ghost",
  "please babe",
  ":((((",
  "PRETTY PLEASE",
  "No :("
];

let phraseIndex = 0;

yesBtn.addEventListener("click", () => {
  gif.src = "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif";
  message.innerText = "Yaaay!! Raiyne is now very happy!!";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  phrases.innerText = "";
});

noBtn.addEventListener("click", () => {
  if (phraseIndex < phraseList.length) {
    phrases.innerText = phraseList[phraseIndex];
    phraseIndex++;
  } else {
    phrases.innerText = "No isn't an option... hehehe";
  }

  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
