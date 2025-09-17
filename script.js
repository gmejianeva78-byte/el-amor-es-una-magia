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
