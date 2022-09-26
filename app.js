// STOCK DE PRODUCTOS
class Productos {
  constructor(id, nombre, categoria, marca, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria.toLowerCase();
    this.marca = marca.toLowerCase();
    this.precio = precio;
    this.img = img;
  }
}

const producto1 = new Productos(
  1,
  "I3 10100F",
  "Procesador",
  "Intel",
  22400,
  "i3-10100F.jpg"
);

const producto2 = new Productos(
  2,
  "Ryzen 5 1600",
  "Procesador",
  "AMD",
  30000,
  "r5-1600.jpg"
);

const producto3 = new Productos(
  3,
  "GTX 1660 TI",
  "Placa de video",
  "Geforce",
  80000,
  "gtx-1660ti.jpg"
);

const producto4 = new Productos(
  4,
  "RTX 2060",
  "Placa de video",
  "Geforce",
  100000,
  "rtx-2060-12gb.jpg"
);

const producto5 = new Productos(
  5,
  "RX 5600",
  "Placa de video",
  "AMD",
  90000,
  "rx-5600.jpg"
);

// ARRAY DE STOCK
const stockProductos = [producto1, producto2, producto3, producto4, producto5];
// ARRAY CARRITO, SI EXISTE CARRITO LO TRAIGO DE LOCAL STORAGE, SI NO EXISTE SE INICIA VACIO
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// FUNCIONES
// FILTRO CATEGORIA
function filtroCategoria(arr, filtro) {
  const filtrado = arr.filter((el) => el.categoria == filtro.toLowerCase());
  return filtrado;
}

// FILTRO MARCA
function filtroMarca(arr, filtro) {
  const filtrado = arr.filter((el) => el.marca == filtro.toLowerCase());
  return filtrado;
}

// AGREGAR PRODUCTOS AL DOM
const contenedorProductos = document.querySelector("#contenedorProductos");
function funcionAgregarStock() {
  stockProductos.forEach((el) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<img src="./assets/${el.img}" alt="" class="card-img">
        <h2 class="card-nombre">${el.nombre}</h2>
        <h2 class="card-precio">$${el.precio}</h2>
        <button class="card-button" id="card${el.id}">Agregar al carrito</button>`;
    contenedorProductos.append(div);
  });
  agregarCarrito();
}

funcionAgregarStock();

// FUNCION FILTRAR POR CATEGORIAS
const btnProcesadores = document.querySelector("#procesadores");
const btnPlacas = document.querySelector("#placas");

// CATEGORIA PROCESADORES
btnProcesadores.addEventListener("click", () => {
  contenedorProductos.innerHTML = "";
  let filtro;
  filtro = filtroCategoria(stockProductos, "procesador");
  filtro.forEach((el) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<img src="./assets/${el.img}" alt="" class="card-img">
      <h2 class="card-nombre">${el.nombre}</h2>
      <h2 class="card-precio">$${el.precio}</h2>
      <button class="card-button" id="card${el.id}">Agregar al carrito</button>`;
    contenedorProductos.append(div);
  });
  agregarCarritoFiltrado(filtro);
});

// CATEGORIA PLACAS DE VIDEO
btnPlacas.addEventListener("click", () => {
  let filtro;
  contenedorProductos.innerHTML = ``;
  filtro = filtroCategoria(stockProductos, "Placa de video");
  filtro.forEach((el) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<img src="./assets/${el.img}" alt="" class="card-img">
      <h2 class="card-nombre">${el.nombre}</h2>
      <h2 class="card-precio">$${el.precio}</h2>
      <button class="card-button" id="card${el.id}">Agregar al carrito</button>`;
    contenedorProductos.append(div);
  });
  agregarCarritoFiltrado(filtro);
});

// FUNCION FILTRAR POR MARCA
const btnIntel = document.querySelector("#intel");
const btnAmd = document.querySelector("#amd");
const btnGeforce = document.querySelector("#geforce");

// MARCA INTEL
btnIntel.addEventListener("click", () => {
  contenedorProductos.innerHTML = "";
  let filtro;
  filtro = filtroMarca(stockProductos, "Intel");
  for (const el of filtro) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<img src="./assets/${el.img}" alt="" class="card-img">
      <h2 class="card-nombre">${el.nombre}</h2>
      <h2 class="card-precio">$${el.precio}</h2>
      <button class="card-button" id="card${el.id}">Agregar al carrito</button>`;
    contenedorProductos.append(div);
  }
  agregarCarritoFiltrado(filtro);
});

// MARCA AMD
btnAmd.addEventListener("click", () => {
  contenedorProductos.innerHTML = "";
  let filtro;
  filtro = filtroMarca(stockProductos, "AMD");
  for (const el of filtro) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<img src="./assets/${el.img}" alt="" class="card-img">
        <h2 class="card-nombre">${el.nombre}</h2>
        <h2 class="card-precio">$${el.precio}</h2>
        <button class="card-button" id="card${el.id}">Agregar al carrito</button>`;
    contenedorProductos.append(div);
  }
  agregarCarritoFiltrado(filtro);
});

// MARCA GEFORCE
btnGeforce.addEventListener("click", () => {
  contenedorProductos.innerHTML = "";
  let filtro;
  filtro = filtroMarca(stockProductos, "Geforce");
  for (const el of filtro) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<img src="./assets/${el.img}" alt="" class="card-img">
        <h2 class="card-nombre">${el.nombre}</h2>
        <h2 class="card-precio">$${el.precio}</h2>
        <button class="card-button" id="card${el.id}">Agregar al carrito</button>`;
    contenedorProductos.append(div);
  }
  agregarCarritoFiltrado(filtro);
});

// FUNCION BORRAR FILTROS
const btnBorrar = document.querySelector("#borrarFiltro");
btnBorrar.addEventListener("click", () => {
  contenedorProductos.innerHTML = "";
  funcionAgregarStock();
});

// FUNCION BOTON AGREGAR CARRITO
function agregarCarrito() {
  stockProductos.forEach((el) => {
    document.querySelector(`#card${el.id}`).addEventListener("click", () => {
      console.log("click");
      agregarProducto(el);
    });
  });
}

// FUNCION BOTON AGREGAR CARRITO CUANDO UN PRODUCTO FUE FILTRADO
function agregarCarritoFiltrado(filtro) {
  filtro.forEach((el) => {
    document.querySelector(`#card${el.id}`).addEventListener("click", () => {
      agregarProducto(el);
    });
  });
}

// FUNCION QUE SUMA LOS PRECIOS DEL CARRITO
let totalCarrito;
function preciosCarrito() {
  totalCarrito = carrito.reduce((acc, el) => {
    return acc + el.precio * el.cantidad;
  }, 0);
}
preciosCarrito();

// FUNCION QUE AGREGA LOS PRODUCTOS Y SUMA LA CANTIDAD EN EL CARRITO

function agregarProducto(el) {
  let existe = carrito.some((producto) => producto.id === el.id);
  if (existe === false) {
    carrito.push(el);
    el.cantidad = 1;
  } else {
    let prodFind = carrito.find((producto) => producto.id === el.id);
    prodFind.cantidad++;
  }

  console.log(carrito);
  preciosCarrito();
  agregarCarritoDom(el);
  mostrarTotal(totalCarrito);
}

// RENDERIZADO DEL CARRITO
const carritoDeCompra = document.querySelector("#carritoDeCompra");
function agregarCarritoDom(el) {
  carritoDeCompra.innerHTML = "";
  carrito.forEach((el) => {
    const { img, cantidad, nombre, precio, id } = el;
    const div = document.createElement("div");
    div.classList.add("card2");
    div.innerHTML = `<img src="./assets/${img}" alt="" class="card-img2">
            <div class="card-div">
            <h3 class="card-cantidad">Cantidad: ${cantidad}</h3>
            <h2 class="card-nombre2">${nombre}</h2>
            <h2 class="card-precio2">$${precio}</h2>
            </div>
            <button class="card-button2" id="borrar${id}">Borrar</button>`;
    carritoDeCompra.appendChild(div);
  });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  // console.log(localStorage.getItem("carrito", JSON.stringify(carrito)));
  borrarProducto();
}
agregarCarritoDom();

// FUNCION PRECIO TOTAL
function mostrarTotal(total) {
  const h2Total = document.createElement("h2");
  h2Total.innerHTML = `<span style="color: black;">Total:</span> $${total}`;
  h2Total.classList.add("total");
  carritoDeCompra.appendChild(h2Total);
  localStorage.setItem("precioTotal", totalCarrito);
}
mostrarTotal(totalCarrito);

// FUNCION BORRAR PRODUCTO DEL CARRITO
function borrarProducto() {
  carrito.forEach((el) => {
    const { id } = el;
    document.querySelector(`#borrar${id}`).addEventListener("click", () => {
      let indice = carrito.findIndex((e) => e.id === id);
      carrito.splice(indice, 1);
      preciosCarrito();
      agregarCarritoDom();
      mostrarTotal(totalCarrito);
      // Swal.fire("Any fool can use a computer");
      Toastify({
        text: "producto borrado",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    });
  });
}
