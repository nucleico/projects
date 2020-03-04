//queryselectors

const btnChg = document.querySelector('.changeChar');
const firstRoundBtn = document.querySelector('.fightBtn');
const fightTxt = document.querySelector('.fightText');

let person = document.querySelector('.person');
let height = document.querySelector('.height');
let gender = document.querySelector('.gender');
let birthYear = document.querySelector('.birthYear');
let power = document.querySelector('.power');

let person1 = document.querySelector('.person1');
let height1 = document.querySelector('.height1');
let gender1 = document.querySelector('.gender1');
let birthYear1 = document.querySelector('.birthYear1');
let power1 = document.querySelector('.power1');
let photoOne = document.getElementById('photoUno');
let photoTwo = document.getElementById('photoDos');

// create Elements

let thirdRoundBtn = document.createElement('button');
let thirdRoundEl = document.createElement('h1');
let secondRoundBtn = document.createElement('button');

async function getData() {
  let changeData = function() {
    return Math.ceil(Math.random() * 9);
  };

  let fullPower = function() {
    return Math.ceil(Math.random() * 100);
  };

  let urlsImg = {
    api_urlImg: changeData(),
    api_urlImg1: changeData()
  };

  while (urlsImg.api_urlImg === urlsImg.api_urlImg1) {
    urlsImg.api_urlImg1 = changeData();
  }

  let urls = {
    api_url: 'https://swapi.co/api/people/' + urlsImg.api_urlImg,
    api_url1: 'https://swapi.co/api/people/' + urlsImg.api_urlImg1
  };

  while (urls.api_url === urls.api_url1) {
    urls.api_url1 = 'https://swapi.co/api/people/' + changeData();
  }

  document
    .getElementById('photoUno')
    .setAttribute('src', `img/${urlsImg.api_urlImg}.jpg`);
  document
    .getElementById('photoDos')
    .setAttribute('src', `img/${urlsImg.api_urlImg1}.jpg`);

  let data = await fetch(urls.api_url);
  let resp = await data.json();

  let personData = resp.name;
  person.textContent = personData;
  let heightData = resp.height;
  heightData = parseInt(heightData);
  height.textContent = heightData;
  gender.textContent = resp.gender;
  birthYear.textContent = resp.birth_year;
  let powerData = fullPower();
  power.textContent = powerData;

  let data1 = await fetch(urls.api_url1);
  let resp1 = await data1.json();

  let personData1 = resp1.name;
  person1.textContent = personData1;
  let heightData1 = resp1.height;
  heightData1 = parseInt(heightData1);
  height1.textContent = heightData1;
  gender1.textContent = resp1.gender;
  birthYear1.textContent = resp1.birth_year;
  let powerData1 = fullPower();
  power1.textContent = powerData1;

  //round functions

  function firstRound() {
    console.log(personData);
    console.log(personData1);

    let firstRoundEl = document.createElement('h1');
    if (heightData > heightData1) {
      firstRoundEl.innerHTML = '';
      firstRoundEl.innerHTML = `${personData} is taller, therefore the winner!`;
      fightTxt.appendChild(firstRoundEl);
    } else if (heightData < heightData1) {
      firstRoundEl.innerHTML = '';
      firstRoundEl.innerHTML = `${personData1} is taller, therefore the winner!`;
      fightTxt.appendChild(firstRoundEl);
    } else {
      firstRoundEl.innerHTML = `Both characters are equally tall, it's a draw!`;
      fightTxt.appendChild(firstRoundEl);
    }
    secondRoundBtn.innerHTML = 'Go for Second Round!';
    fightTxt.appendChild(secondRoundBtn);
    secondRoundBtn.style.display = 'block';
  }

  function secondRound() {
    let secondRoundEl = document.createElement('h1');
    if (powerData > powerData1 && heightData > heightData1) {
      secondRoundEl.innerHTML = '';
      secondRoundEl.innerHTML = `${personData} has more full power, therefore wins the second round and the fight!`;
      fightTxt.appendChild(secondRoundEl);
      photoOne.classList.add('winnerPhoto');
    } else if (powerData < powerData1 && heightData < heightData1) {
      secondRoundEl.innerHTML = '';
      secondRoundEl.innerHTML = `${personData1} has more full power, therefore wins the second round and the fight!`;
      fightTxt.appendChild(secondRoundEl);
      photoTwo.classList.add('winnerPhoto');
    } else if (powerData > powerData1 && heightData < heightData1) {
      secondRoundEl.innerHTML = '';
      secondRoundEl.innerHTML = `${personData} has more full power, therefore wins the second round!`;
      fightTxt.appendChild(secondRoundEl);
      thirdRoundBtn.innerHTML = 'Tiebreak!';
      fightTxt.appendChild(thirdRoundBtn);
    } else if (powerData < powerData1 && heightData > heightData1) {
      secondRoundEl.innerHTML = '';
      secondRoundEl.innerHTML = `${personData1} has more full power, therefore wins the second round!`;
      fightTxt.appendChild(secondRoundEl);
      thirdRoundBtn.innerHTML = 'Tiebreak!';
      fightTxt.appendChild(thirdRoundBtn);
    }
  }

  function thirdRoundWinner() {
    nameArr = [personData, personData1];
    nameArr.sort();
    thirdRoundEl.innerHTML = `In alphabetical order, ${nameArr[0]} is the winner, congratulations!`;
    fightTxt.appendChild(thirdRoundEl);
    if (nameArr[0] === personData) {
      photoOne.classList.add('winnerPhoto');
    } else {
      photoTwo.classList.add('winnerPhoto');
    }
  }
  // Event Listeners
  firstRoundBtn.addEventListener('click', firstRound);
  secondRoundBtn.addEventListener('click', secondRound);
  thirdRoundBtn.addEventListener('click', thirdRoundWinner);

  btnChg.addEventListener('click', function() {
    getData();
  });
}

getData();
