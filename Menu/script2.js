const menu = [
  {
    id: 1,
    titulo: 'Locro',
    categoria: 'almuerzo',
    imagen: './images/1.jpg',
    precio: 350,
    descripcion: 'Un locro estilo tradicional para los días más patrios',
  },
  {
    id: 2,
    titulo: 'Ravioles de ricota',
    categoria: 'almuerzo',
    imagen: './images/2.jpg',
    precio: 275,
    descripcion: 'Un plato clásico de la cocina italiana con salsa a elección',
  },
  {
    id: 3,
    titulo: 'Piezas de sushi',
    categoria: 'cena',
    imagen: './images/3.jpg',
    precio: 630,
    descripcion:
      'Una opción osada para los paladares más exigentes, directo desde Okinawa',
  },
  {
    id: 4,
    titulo: 'Tiramisú',
    categoria: 'postre',
    imagen: './images/4.jpg',
    precio: 150,
    descripcion: 'El postre preferido de los argentinos',
  },
  {
    id: 5,
    titulo: 'Bastones de muzzarella',
    categoria: 'entrada',
    imagen: './images/5.jpg',
    precio: 120,
    descripcion: 'Un manjar para iniciar una velada inolvidable',
  },
  {
    id: 6,
    titulo: 'Milanesa a caballo extra-grande con papas fritas',
    categoria: 'cena',
    imagen: './images/6.jpg',
    precio: 450,
    descripcion: 'Solamente para aquellos que no tienen miedo a un desafío',
  },
  {
    id: 7,
    titulo: 'Ensalada de frutas',
    categoria: 'postre',
    imagen: './images/7.jpg',
    precio: 150,
    descripcion:
      'Una alternativa deliciosa, fresca y recomendada por su médico',
  },
  {
    id: 8,
    titulo: 'Carré de cerdo con salsa a elección y guarnición',
    categoria: 'cena',
    imagen: './images/8.jpg',
    precio: 250,
    descripcion:
      'Infaltable para las personas que quieren vivir sensaciones inolvidables',
  },
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function () {
  displayOpcionesMenu(menu);
});

function displayOpcionesMenu(menuItems) {
  let displayMenu = menuItems.map(function (plato) {
    return `<article class="menu-item">
              
              <div class="item-info">
                <header>
                  <h4>${plato.titulo}</h4>
                  <h4 class="price">$${plato.precio}</h4>
                </header>
                <p class="item-text">
                  ${plato.descripcion}
                </p>
              </div>
              <img src=${plato.imagen} alt=${plato.titulo} class="photo" />
            </article>`;
  });
  displayMenu = displayMenu.join('');

  sectionCenter.innerHTML = displayMenu;
}

const filterBtns = btnContainer.querySelectorAll('.filter-btn');

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const categoria = e.currentTarget.dataset.id;
    const menuCategoria = menu.filter(function (menuItem) {
      if (menuItem.categoria === categoria) {
        return menuItem;
      }
    });
    if (categoria === 'all') {
      displayOpcionesMenu(menu);
    } else {
      displayOpcionesMenu(menuCategoria);
    }
  });
});
