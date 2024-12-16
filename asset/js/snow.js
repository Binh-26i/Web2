const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

function createSnowflakes() {
  for (let i = 0; i < 100; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 4 + 1,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 + 1,
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  snowflakes.forEach((flake) => {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  });
  ctx.fill();
  moveSnowflakes();
}

function moveSnowflakes() {
  snowflakes.forEach((flake) => {
    flake.x += flake.speedX;
    flake.y += flake.speedY;

    if (flake.y > canvas.height) {
      flake.y = -flake.radius;
    }
    if (flake.x > canvas.width) {
      flake.x = 0;
    }
    if (flake.x < 0) {
      flake.x = canvas.width;
    }
  });
}

function animate() {
  drawSnowflakes();
  requestAnimationFrame(animate);
}

createSnowflakes();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
