const tablero = document.querySelector('.tablero');
const cell = document.querySelectorAll('.cell');
const mensaje = document.querySelector('.mensaje');
const x = 'x';
const o = 'o';
let turnX;
const restartBtn = document.getElementById('restartButton');
const combinaciones = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

startGame();

function startGame() {
  turnX = true;
  mensaje.style.display = 'none';
  cell.forEach(cell => {
    cell.classList.remove(x);
    cell.classList.remove(o);
    cell.addEventListener('click', hacerClick, { once: true });
  });
  restartBtn.addEventListener('click', startGame);
}

function victoria(clase) {
  return combinaciones.some(combinacion => {
    return combinacion.every(ind => {
      return cell[ind].classList.contains(clase);
    });
  });
}

function hacerClick(e) {
  const cellElegida = e.target;
  let claseActual = turnX ? x : o;
  marcar(cellElegida, claseActual);
  if (victoria(claseActual)) {
    mensaje.style.display = 'block';
    cell.forEach(cell => {
      cell.removeEventListener('click', hacerClick);
    });
  } else {
    cambiarTurno();
  }
}

function cambiarTurno() {
  turnX = !turnX;
}

function marcar(cell, claseActual) {
  cell.classList.add(claseActual);
}
