const productosJSON = `[
  {
    "id": "TSH01",
    "nombre": "MACACARENA",
    "descripcion": "Quan balles sense vergonya i el ritme et domina.",
    "precioBase": 19.95,
    "tallas": ["S", "M", "L", "XL"],
    "colores": ["blanco", "negro", "mostaza"],
    "imagenes": {
      "blanco": "img/MACACARENA.png",
      "negro": "img/MACACARENA_BLACK.png",
      "mostaza": "img/MACACARENA.png"
    },
    "tags": ["nuevo"]
  },
  {
    "id": "TSH02",
    "nombre": "NINETIES MODE",
    "descripcion": "Un homenatge pixelat als anys 90.",
    "precioBase": 21.50,
    "tallas": ["S", "M", "L", "XL", "XXL"],
    "colores": ["gris", "negro"],
    "imagenes": {
      "gris": "img/NINETIES.png",
      "negro": "img/NINETIES_BLACK.png"
    },
    "tags": ["retro"]
  },
  {
    "id": "TSH03",
    "nombre": "RESERVOIR INVADERS",
    "descripcion": "Quan Tarantino coneix els videojocs clàssics.",
    "precioBase": 22.90,
    "tallas": ["M", "L", "XL"],
    "colores": ["azul", "negro"],
    "imagenes": {
      "azul": "img/RESERVOIR.png",
      "negro": "img/RESERVOIR_BLACK.png"
    },
    "tags": ["edicion-especial"]
  },
  {
    "id": "TSH04",
    "nombre": "VITRUVIAN CODE",
    "descripcion": "Art, codi i proporció perfecta.",
    "precioBase": 24.00,
    "tallas": ["S", "M", "L", "XL"],
    "colores": ["blanco", "negro"],
    "imagenes": {
      "blanco": "img/VITRUVIAN.png",
      "negro": "img/VITRUVIAN_BLACK.png"
    },
    "tags": ["premium"]
  }
]
`;
const productos = JSON.parse(productosJSON);

/**
 * Función inicial que orquesta la carga de la página
 */
function init() {
    muestraProductos();
}

/**
 * Recorre el array de productos y los añade al DOM
 */
function muestraProductos() {
    const contenedor = document.getElementById('contenedor-tienda');
    if (!contenedor) return;

    productos.forEach(producto => {
        const tarjeta = crearArticleProducto(producto);
        contenedor.appendChild(tarjeta);
    });
}

/**
 * Crea el elemento <article> principal
 */
function crearArticleProducto(p) {
    const article = document.createElement('article');
    article.classList.add('producto');

    // 1. Crear elementos atómicos
    const titulo = document.createElement('h3');
    titulo.textContent = p.nombre;

    const imagen = crearImagenProducto(p);
    const descripcion = crearDescripcion(p.descripcion);
    const precio = crearEtiquetaPrecio(p.precioBase);
    
    // Contenedor para agrupar selectores y que no se descuadre
    const zonaOpciones = document.createElement('div');
    zonaOpciones.className = 'zona-opciones';
    
    const selectorTallas = crearSelectorTallas(p.tallas);
    const selectorColores = crearListaColores(p, imagen); // Pasamos imagen para el cambio dinámico
    
    zonaOpciones.appendChild(selectorTallas);
    zonaOpciones.appendChild(selectorColores);

    const boton = crearBotonCompra(p.id);

    // 2. Ensamblaje siguiendo el orden visual
    article.appendChild(titulo);
    article.appendChild(imagen);
    article.appendChild(descripcion);
    article.appendChild(precio);
    article.appendChild(zonaOpciones);
    article.appendChild(boton);

    return article;
}

// --- FUNCIONES ATÓMICAS ---

function crearImagenProducto(p) {
    const img = document.createElement('img');
    const colorInicial = p.colores[0]; // Coge el primero según tu nuevo orden en el JSON
    img.src = p.imagenes[colorInicial];
    img.alt = p.nombre;
    return img;
}

function crearDescripcion(texto) {
    const p = document.createElement('p');
    p.className = 'descripcion';
    p.textContent = texto;
    return p;
}

function crearEtiquetaPrecio(valor) {
    const p = document.createElement('p');
    p.innerHTML = `Precio: <strong>${valor.toFixed(2)}€</strong>`;
    return p;
}

function crearSelectorTallas(tallas) {
    const select = document.createElement('select');
    tallas.forEach(talla => {
        const option = document.createElement('option');
        option.value = talla;
        option.textContent = talla;
        select.appendChild(option);
    });
    return select;
}

function crearListaColores(producto, elementoImagen) {
    const divColores = document.createElement('div');
    divColores.className = 'selector-colores';

    producto.colores.forEach((color, index) => {
        const circulo = document.createElement('div');
        circulo.className = 'circulo-color';
        
        const traductor = { "blanco": "#fff", "negro": "#000", "mostaza": "#e1ad01", "gris": "#888", "azul": "#00f" };
        circulo.style.backgroundColor = traductor[color] || color;

        // Marcar el primero como activo por defecto
        if (index === 0) circulo.classList.add('activo');

        circulo.addEventListener('click', () => {
            elementoImagen.src = producto.imagenes[color];
            
            // Gestión de feedback visual
            const todos = divColores.querySelectorAll('.circulo-color');
            todos.forEach(c => c.classList.remove('activo'));
            circulo.classList.add('activo');
        });

        divColores.appendChild(circulo);
    });

    return divColores;
}

function crearBotonCompra(id) {
    const btn = document.createElement('button');
    btn.textContent = "Añadir al carrito";
    btn.addEventListener('click', () => {
        console.log(`Producto ${id} enviado al carrito.`);
    });
    return btn;
}