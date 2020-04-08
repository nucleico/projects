let btn = document.querySelector('button');

function tipCalculator() {
  let totalText = document.querySelector('.total');
  let totalBill = document.querySelector('.bill').value;
  let people = document.querySelector('.people').value;
  let service = document.querySelector('.service').value;
  let total = ((totalBill * service) / people).toFixed(2);

  totalText.innerHTML = 'The total tip is per person is $ ' + total + '.';

  if (totalBill == '' || totalBill <= 0) {
    totalText.innerHTML = 'Please type a bill.';
    if (people == '' || people <= 0) {
      totalText.innerHTML = 'Please type a bill and number of people.';
    }
  } else if (people == '' || people <= 0) {
    totalText.innerHTML = 'Please type number of people.';
    if (totalBill == '' || totalBill <= 0) {
      totalText.innerHTML = 'Please type a bill and number of people.';
    }
  }
}

btn.addEventListener('click', function() {
  tipCalculator();
});
