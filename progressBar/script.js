const bar = document.querySelector('.bar');
let barCounter = 0;

const interval = setInterval(function() {
  if (barCounter < 100) {
    barCounter = barCounter + 1;
    bar.style.width = barCounter + '%';
    console.log(barCounter);
  } else {
    myStopFunction();
  }
}, 100);

function myStopFunction() {
  clearInterval(interval);
}
