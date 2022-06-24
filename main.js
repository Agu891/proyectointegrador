const addButtons = document.querySelector('button');
const shoppingCart = document.querySelector('#carrito');
const productos = [];
const span = document.createElement('span');
span.innerHTML = '';
const total = document.querySelector('#total');
const ul = document.createElement('ul');
const option = document.querySelector('#option');
const memorias = document.querySelector('#memorias');
const motherboards = document.querySelector('#motherboards');
const destacados = document.querySelector('#destacados');
const ofertas = document.querySelector('#ofertas');
const seccion2 = document.querySelector('#seccion2');
const gabinetes = document.querySelector('#gabinetes');
const gpus = document.querySelector('#gpus');
const procesadores = document.querySelector('#procesadores');
const fuentes = document.querySelector('#fuentes');
const monitores = document.querySelector('#monitores');
const seccionVentas = document.querySelector('.seccionVentas');
const userName = document.querySelector('#userName');
let nuevoUsuario = sessionStorage.getItem('usuario');

window.onload = function cargarUsuario() {
  if (nuevoUsuario) {
    userName.innerHTML = `<i class="fa-solid fa-user fa-xl"></i> Hola,${nuevoUsuario}`;
  }
};

function mostrarTienda() {
  seccion2.innerHTML = '';
  seccion2.appendChild(procesadores);
  seccion2.appendChild(memorias);
  seccion2.appendChild(motherboards);
  seccion2.appendChild(monitores);
  seccion2.appendChild(gabinetes);
  seccion2.appendChild(gpus);
  seccion2.appendChild(fuentes);
  procesadores.style.display = 'block';
  memorias.style.display = 'block';
  motherboards.style.display = 'block';
  monitores.style.display = 'block';
  gabinetes.style.display = 'block';
  gpus.style.display = 'block';
  fuentes.style.display = 'block';
}

function mostrarMonitores() {
  seccion2.innerHTML = '';
  seccion2.appendChild(monitores);
  monitores.style.display = 'block';
}

function mostrarProcesadores() {
  seccion2.innerHTML = '';
  seccion2.appendChild(procesadores);
  procesadores.style.display = 'block';
}

function mostrarMemorias() {
  seccion2.innerHTML = '';
  seccion2.appendChild(memorias);
  memorias.style.display = 'block';
}
function mostrarMothers() {
  seccion2.innerHTML = '';
  seccion2.appendChild(motherboards);
  motherboards.style.display = 'block';
}

function volverDestacados() {
  seccion2.innerHTML = '';
  seccion2.appendChild(destacados);
  seccion2.appendChild(ofertas);
}

function mostrarGabinetes() {
  seccion2.innerHTML = '';
  seccion2.appendChild(gabinetes);
  gabinetes.style.display = 'block';
}

function mostrarGpus() {
  seccion2.innerHTML = '';
  seccion2.appendChild(gpus);
  gpus.style.display = 'block';
}

function mostrarFuentes() {
  seccion2.innerHTML = '';
  seccion2.appendChild(fuentes);
  fuentes.style.display = 'block';
}

function seeShoppingCart() {
  const see = () => {
    total.appendChild(ul);
    let sumaTotal = 0;

    for (let i = 0; i < productos.length; i++) {
      //   const btnEliminar = document.createElement('button')
      //   btnEliminar.innerText = "Eliminar"
      //   btnEliminar.setAttribute("class" , "btnEliminar")
      //   btnEliminar.setAttribute("value", `${i+1}`)
      //   btnEliminar.setAttribute("onclick", "eliminarCarrito()")

      sumaTotal += productos[i].precio;
      const liNombre = document.createElement('li');
      ul.appendChild(liNombre);

      liNombre.innerHTML =
        productos[i].nombre +
        `<img id= "imagenCarrito" src ="${productos[i].img}">` +
        '$' +
        productos[i].precio;
      //liNombre.appendChild(btnEliminar)
      setTimeout(() => ul.classList.add('animate'), i * 500);
      setTimeout(() => liNombre.classList.add('animate'), i * 200);
    }

    const precioFinal = document.createElement('p');

    ul.appendChild(precioFinal);
    precioFinal.innerHTML = `TOTAL: $${sumaTotal} 
                                <button id="finalizarBtn">Finalizar Compra</button> `;
    setTimeout(() => precioFinal.classList.add('animate'), 500);

    console.log(sumaTotal);
    ul.classList.remove('animate');
  };
  function unsee() {
    ul.innerHTML = '';
    total.innerHTML = '';
  }

  if (ul.hasChildNodes()) {
    unsee();
  } else {
    see();
  }
}

function addToCart(precio, nombre, img) {
  productos.push({ precio: precio, nombre: nombre, img: img });
  span.innerHTML = productos.length;
  shoppingCart.appendChild(span);
  console.log(productos);
  let sumaTotal = 0;

  if (ul.hasChildNodes()) {
    ul.innerHTML = '';
    seeShoppingCart()();
  }
}
