const sideTab = document.getElementById('sideTab');
const message = document.getElementById('message');
const overlay = document.getElementById('overlay');
const victimas = document.getElementById('victimas'); // contenedor de imágenes

let intervalId = null;

// Array con las rutas de tus imágenes y sus nombres
const imagenes = [
  { src: "imagenes/ANA MARIA.jpg", nombre: "ANA MARIA" },
  { src: "imagenes/MAITE CARDENAS.jpg", nombre: "MAITE CARDENAS" },
  { src: "imagenes/lady.jpg", nombre: "LADY" },
  { src: "imagenes/sandra.jpg", nombre: "SANDRA" },
  { src: "imagenes/VALENTINA.jpg", nombre: "VALENTINA" },
  { src: "imagenes/yamile.jpg", nombre: "YAMILE" },
  { src: "imagenes/YUDY PAOLA.jpg", nombre: "YUDY PAOLA" },
  { src: "imagenes/ERIKA APONTE.jpeg", nombre: "ERIKA APONTE" },
  { src: "imagenes/VIVIANA CHAMORRO.jpg", nombre: "VIVIANA CHAMORRO" },
  { src: "imagenes/sinfoto.png", nombre: "SIN FOTO" }
];

// Función para insertar las imágenes con nombre en #victimas
function mostrarImagenes() {
  victimas.innerHTML = ""; // limpia antes de volver a llenar

  imagenes.forEach(item => {
    const contenedor = document.createElement("div");
    contenedor.classList.add("item");

    const img = document.createElement("img");
    img.src = item.src;
    img.classList.add("imagen");

    const caption = document.createElement("div");
    caption.classList.add("caption");
    caption.textContent = item.nombre;

    contenedor.appendChild(img);
    contenedor.appendChild(caption);

    victimas.appendChild(contenedor);
  });
}

// 👉 función que abre y cierra el overlay 5 segundos
function mostrarOverlay() {
  mostrarImagenes();
  overlay.style.display = "block";

  setTimeout(() => {
    overlay.style.display = "none";
  }, 5000);
}

// Evento principal del botón lateral
sideTab.addEventListener('click', () => {
  message.style.display = 'block';

  // mostrar inmediatamente la primera vez
  mostrarOverlay();

  // y repetir cada 15 segundos
  if (!intervalId) {
    intervalId = setInterval(mostrarOverlay, 15000);
  }
});

// 👉 Efecto linterna sobre las imágenes
overlay.addEventListener("mousemove", e => {
  const x = e.clientX;
  const y = e.clientY - 500;

  victimas.style.maskImage = `radial-gradient(circle 120px at ${x}px ${y}px, rgba(255,255,255,1) 98%, transparent 100%)`;
  victimas.style.webkitMaskImage = `radial-gradient(circle 120px at ${x}px ${y}px, rgba(255,255,255,1) 98%, transparent 100%)`; // para compatibilidad
});


