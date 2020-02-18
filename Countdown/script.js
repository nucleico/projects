const fraseAleatoria = "https://api.quotable.io/random"
const fraseElemento = document.getElementById("fraseE")
const author = document.getElementById("author")
const fraseInput = document.getElementById("fraseInput")
const contador = document.getElementById("contador")

fraseInput.addEventListener("input", () => {
  const arrayFrase = fraseElemento.querySelectorAll("span")
  const arrayValor = fraseInput.value.split("")
  let correct = true;
  arrayFrase.forEach((char, index) => {
    const character = arrayValor[index]
    if (character === null) {
      char.classList.remove("correct")
      char.classList.remove("incorrect")
      correct = false
    } else if (character === char.innerText) {
      char.classList.add("correct")
      char.classList.remove("incorrect")
    } else {
      char.classList.remove("correct")
      char.classList.add("incorrect")
      correct = false
      }
    })
  if (correct) renderNewQuote();
})

function getRandomQuote() {
  return fetch(fraseAleatoria)
    .then(response => response.json())
    .then(data => data.content)
}

function getAuthorQuote() {
  return fetch(fraseAleatoria)
    .then(response => response.json())
    .then(data => data.author)
}

async function renderNewQuote() {
  const quote = await getRandomQuote();
  const authorV = await getAuthorQuote();
  fraseElemento.innerHTML = "";
  quote.split("").forEach(character => {
    const characterSpan = document.createElement("span")
    characterSpan.innerText = character;
    fraseElemento.appendChild(characterSpan)
  })
  fraseInput.value = null;
  author.textContent = "("+authorV+")";
  startTimer();
}

let startTime;
function startTimer() {
  contador.innerText = 0;
  startTime = new Date()
  setInterval(() => {
    contador.innerText = getTimerTime();
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000)
}

renderNewQuote();
