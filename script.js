const sideTab = document.getElementById('sideTab');
const message = document.getElementById('message');
const overlay = document.getElementById('overlay');
const victimas = document.getElementById('victimas'); // contenedor de imágenes

let intervalId = null;

// Array con las rutas de tus imágenes
const imagenes = [
  "imagenes/ANA MARIA.jpg",
  "imagenes/MAITE CARDENAS.jpg",
  "imagenes/lady.jpg",
  "imagenes/sandra.jpg",
  "imagenes/VALENTINA.jpg",
  "imagenes/yamile.jpg",
  "imagenes/YUDY PAOLA.jpg",
  "imagenes/ERIKA APONTE.jpg",
  "imagenes/VIVIANA CHAMORRO.jpg",
  "imagenes/sinfoto.png"
];

// Función para insertar las imágenes en #victimas
function mostrarImagenes() {
  victimas.innerHTML = ""; // limpia antes de volver a llenar

  imagenes.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("imagen");
    victimas.appendChild(img);
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
  const y = e.clientY -500;

  //victimas.style.webkitMaskImage = `radial-gradient(circle 120px at ${x}px ${y}px, rgba(255,255,255,1) 98%, transparent 100%)`;
  victimas.style.maskImage = `radial-gradient(circle 120px at ${x}px ${y}px, rgba(255,255,255,1) 98%, transparent 100%)`;
});


