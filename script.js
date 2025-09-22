const sideTab = document.getElementById('sideTab');
const message = document.getElementById('message');
const overlay = document.getElementById('overlay');
const namesContainer = document.getElementById('names');

let intervalId = null;

const nombres = [
  "Lucía","Sofía","Martina","María","Julia","Paula","Valeria","Emma","Daniela","Carla",
  "Alba","Noa","Alma","Sara","Carmen","Vega","Lara","Mia","Valentina","Olivia",
  "Claudia","Jimena","Lola","Chlóe","Aitana","Abril","Ana","Laia","Triana","Candela",
  "Alejandra","Elena","Vera","Manuela","Adriana","Inés","Marta","Carlota","Irene","Victoria",
  "Blanca","Marina","Laura","Rocío","Alicia","Clara","Nora","Lía","Ariadna","Zoe",
  "Amira","Gala","Celia","Leire","Eva","Ángela","Andrea","África","Luna","Ainhoa",
  "Ainara","India","Nerea","Ona","Elsa","Isabel","Leyre","Gabriela","Aina","Cayetana",
  "Iria","Jana","Mar","Cloe","Lina","Julieta","Adara","Naia","Iris","Nour",
  "Mara","Helena","Yasmín","Natalia","Arlet","Diana","Aroa","Amaia","Cristina","Nahia",
  "Isabella","Malak","Elia","Carolina","Berta","Fátima","Nuria","Azahara","Macarena","Aurora"
];

// Un solo texto corrido con espacios
function mostrarNombres() {
  const texto = nombres.join(" ");
  namesContainer.textContent = texto;
}

// Efecto linterna
overlay.addEventListener("mousemove", e => {
  const x = e.clientX;
  const y = e.clientY;
  namesContainer.style.opacity = "1";
  namesContainer.style.webkitMaskImage = `radial-gradient(circle 120px at ${x}px ${y}px, rgba(255,255,255,1) 98%, transparent 100%)`;
  namesContainer.style.maskImage = `radial-gradient(circle 120px at ${x}px ${y}px, rgba(255,255,255,1) 98%, transparent 100%)`;
});

sideTab.addEventListener('click', () => {
  message.style.display = 'block';

  if (!intervalId) {
    intervalId = setInterval(() => {
      mostrarNombres();
      overlay.style.display = 'block';
      
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 30000); // visible 3 segundos
    }, 3000); // cada 30 segundos
  }
});
