// ARRAY DE STOCK
// Comentado ya que uso este array trayendolo del JSON
// const stockProductos = [
//   {
//     id: 1,
//     nombre: "I3 10100F",
//     categoria: "Procesador",
//     marca: "Intel",
//     precio: 22400,
//     img: "i3-10100F.jpg",
//   },
//   {
//     id: 2,
//     nombre: "Ryzen 5 1600",
//     categoria: "Procesador",
//     marca: "AMD",
//     precio: 30000,
//     img: "r5-1600.jpg",
//   },
//   {
//     id: 3,
//     nombre: "GTX 1660 TI",
//     categoria: "Placa de video",
//     marca: "Geforce",
//     precio: 80000,
//     img: "gtx-1660ti.jpg",
//   },
//   {
//     id: 4,
//     nombre: "RTX 2060",
//     categoria: "Placa de video",
//     marca: "Geforce",
//     precio: 100000,
//     img: "rtx-2060-12gb.jpg",
//   },
//   {
//     id: 5,
//     nombre: "RX 5600",
//     categoria: "Placa de video",
//     marca: "AMD",
//     precio: 90000,
//     img: "rx-5600.jpg",
//   },
// ];
let stockProductos = [];

// ARRAY CARRITO, SI EXISTE CARRITO LO TRAIGO DE LOCAL STORAGE, SI NO EXISTE SE INICIA VACIO
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// FUNCIONES
// FILTRO CATEGORIA

// FILTRO MARCA
function filtroMarca(arr, filtro) {
  const filtrado = arr.filter((el) => el.marca == filtro.toLowerCase());
  return filtrado;
}

// AGREGAR PRODUCTOS AL DOM
const contenedorProductos = document.querySelector("#contenedorProductos");
function funcionAgregarStock(stockProductos) {
  stockProductos.forEach((el) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<img src="./assets/${el.img}" alt="" class="card-img">
        <h2 class="card-nombre">${el.nombre}</h2>
        <h2 class="card-precio">$${el.precio}</h2>
        <button class="card-button" id="card${el.id}">Agregar al carrito</button>`;
    contenedorProductos.append(div);
  });
}

// FUNCION FILTRAR POR CATEGORIAS
const btnProcesadores = document.querySelector("#procesadores");
const btnPlacas = document.querySelector("#placas");

// CATEGORIA PROCESADORES
// btnProcesadores.addEventListener("click", () => {
//   contenedorProductos.innerHTML = "";
//   let filtro;
//   filtro = filtroCategoria(stockProductos, "procesador");
//   filtro.forEach((el) => {
//     const div = document.createElement("div");
//     div.classList.add("card");
//     div.innerHTML = `<img src="./assets/${el.img}" alt="" class="card-img">
//       <h2 class="card-nombre">${el.nombre}</h2>
//       <h2 class="card-precio">$${el.precio}</h2>
//       <button class="card-button" id="card${el.id}">Agregar al carrito</button>`;
//     contenedorProductos.append(div);
//   });
//   agregarCarritoFiltrado(filtro);
// });

// CATEGORIA PLACAS DE VIDEO
btnPlacas.addEventListener("click", () => {
  let filtro;
  contenedorProductos.innerHTML = ``;
  filtro = filtroCategoria(stockProductos, "Placa de video");
  console.log(filtro);
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
function agregarCarrito(stockProductos) {
  stockProductos.forEach((el) => {
    document.querySelector(`#card${el.id}`).addEventListener("click", () => {
      agregarProducto(el);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  });
}

// FUNCION BOTON AGREGAR CARRITO CUANDO UN PRODUCTO FUE FILTRADO
function agregarCarritoFiltrado(filtro) {
  filtro.forEach((el) => {
    document.querySelector(`#card${el.id}`).addEventListener("click", () => {
      agregarProducto(el);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
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

// FETCH JSON
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    stockProductos.push(data);
    funcionAgregarStock(data);
    agregarCarrito(data);
    btnProcesadores.addEventListener("click", () => {
      contenedorProductos.innerHTML = "";
      let filtro;
      filtro = filtroCategoria(data, "procesador");
      console.log(filtro);
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
  });

console.log(stockProductos);

stockProductos.forEach(() => {
  console.log("123");
});

function filtroCategoria(arr, filtro) {
  const filtrado = arr.filter((el) => el.categoria == filtro.toLowerCase());
  console.log(filtrado);
  return filtrado;
}
