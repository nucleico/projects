const fraseElemento = document.getElementById('fraseE');
const author = document.getElementById('author');
const fraseInput = document.getElementById('fraseInput');
const contador = document.getElementById('contador');
const appBtn = document.querySelector('#applyBtn');
const difficulty = document.querySelector('#difficulty');

const easyFrase = 'https://api.quotable.io/random/?minLength=20&maxLength=40';
const normalFrase =
  'https://api.quotable.io/random/?minLength=41&maxLength=150';
const dificilFrase =
  'https://api.quotable.io/random/?minLength=150&maxLength=1500';

fraseInput.addEventListener('input', () => {
  const difficultyLevel = difficulty.value;
  const arrayFrase = fraseElemento.querySelectorAll('span');
  const arrayValor = fraseInput.value.split('');
  let correct = true;
  arrayFrase.forEach((char, index) => {
    const character = arrayValor[index];
    if (character === null) {
      char.classList.remove('correct');
      char.classList.remove('incorrect');
      correct = false;
    } else if (character === char.innerText) {
      char.classList.add('correct');
      char.classList.remove('incorrect');
    } else {
      char.classList.remove('correct');
      char.classList.add('incorrect');
      correct = false;
    }
  });
  if (correct) renderNewQuote(difficultyLevel);
});

function getRandomQuote(difficultyLevel) {
  if (difficultyLevel === 'facil') {
    return fetch(`${easyFrase}`)
      .then((response) => response.json())
      .then((data) => [data.content, data.author]);
  } else if (difficultyLevel === 'normal') {
    return fetch(`${normalFrase}`)
      .then((response) => response.json())
      .then((data) => [data.content, data.author]);
  } else {
    return fetch(`${dificilFrase}`)
      .then((response) => response.json())
      .then((data) => [data.content, data.author]);
  }
}

async function renderNewQuote(difficultyLevel) {
  const quote = await getRandomQuote(difficultyLevel);
  fraseElemento.innerHTML = '';
  quote[0].split('').forEach((character) => {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    fraseElemento.appendChild(characterSpan);
  });
  fraseInput.value = null;
  author.textContent = '(' + quote[1] + ')';
  startTimer();
}

let startTime;
function startTimer() {
  contador.innerText = 0;
  startTime = new Date();
  setInterval(() => {
    contador.innerText = getTimerTime();
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

// Set Level

function startGame() {
  const difficultyLevel = difficulty.value;
  renderNewQuote(difficultyLevel);
}

appBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const difficultyLevel = difficulty.value;
  renderNewQuote(difficultyLevel);
});

startGame();
