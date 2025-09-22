const sideTab = document.getElementById('sideTab');
const message = document.getElementById('message');
const overlay = document.getElementById('overlay');
let intervalId = null;

sideTab.addEventListener('click', () => {
  message.style.display = 'block';

  if (!intervalId) {
    intervalId = setInterval(() => {
      overlay.style.display = 'block';
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 3000); // 3 segundos
    }, 30000); // cada 30 segundos
  }
});



const sideTab = document.getElementById('sideTab');
const message = document.getElementById('message');
const overlay = document.getElementById('overlay');
const lucha = document.getElementById('lucha');

let intervalId = null;
let messageVisible = false;

sideTab.addEventListener('click', () => {
  messageVisible = !messageVisible;
  message.style.display = messageVisible ? 'block' : 'none';

  if (messageVisible && !intervalId) {
    intervalId = setInterval(() => {
      overlay.style.display = 'block';

      // Escucha el movimiento del mouse
      document.addEventListener('mousemove', handleMouseMove);

      setTimeout(() => {
        overlay.style.display = 'none';
        document.removeEventListener('mousemove', handleMouseMove);
      }, 3000); // 3 segundos visible
    }, 30000); // cada 30 segundos
  }

  if (!messageVisible && intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

// Función que mueve la palabra "LUCHA" al puntero
function handleMouseMove(e) {
  const x = e.clientX;
  const y = e.clientY;

  lucha.style.left = `${x - 50}px`; // Centra horizontalmente
  lucha.style.top = `${y - 50}px`;  // Centra verticalmente
}
