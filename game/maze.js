// Set up the canvas
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Player position and direction
let playerX = 2;
let playerY = 2;
let playerDirX = 1;
let playerDirY = 0;
const playerMoveSpeed = 0.05;

// Maze layout
const maze = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];

// Raycasting parameters
const FOV = Math.PI / 3; // Field of view
const NUM_RAYS = 120; // Number of rays to cast

// Calculate the ray angle for each ray
const rayAngleStep = FOV / NUM_RAYS;
const rayAngles = [];
for (let i = 0; i < NUM_RAYS; i++) {
  const rayAngle = playerDirX - FOV / 2 + i * rayAngleStep;
  rayAngles.push(rayAngle);
}

// Function to update the game logic
function update() {
  // Move the player based on user input
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'arrowup') {
      playerX += playerDirX * playerMoveSpeed;
      playerY += playerDirY * playerMoveSpeed;
    } else if (key === 'arrowdown') {
      playerX -= playerDirX * playerMoveSpeed;
      playerY -= playerDirY * playerMoveSpeed;
    } else if (key === 'arrowright') {
      // Rotate player direction
      const tempDirX = playerDirX;
      playerDirX = playerDirX * Math.cos(-playerMoveSpeed) - playerDirY * Math.sin(-playerMoveSpeed);
      playerDirY = tempDirX * Math.sin(-playerMoveSpeed) + playerDirY * Math.cos(-playerMoveSpeed);
    } else if (key === 'arrowleft') {
      // Rotate player direction
      const tempDirX = playerDirX;
      playerDirX = playerDirX * Math.cos(playerMoveSpeed) - playerDirY * Math.sin(playerMoveSpeed);
      playerDirY = tempDirX * Math.sin(playerMoveSpeed) + playerDirY * Math.cos(playerMoveSpeed);
    }
  });

  // Perform raycasting
  for (let i = 0; i < NUM_RAYS; i++) {
    const rayAngle = rayAngles[i];

    // Calculate the distance to the wall
    let distanceToWall = 0;
    let hitWall = false;
    let wallX, wallY;

    let stepX = Math.cos(rayAngle);
    let stepY = Math.sin(rayAngle);

    let rayX = playerX;
    let rayY = playerY;

    while (!hitWall && distanceToWall < 10) {
      rayX += stepX;
      rayY += stepY;

      const mapX = Math.floor(rayX);
      const mapY = Math.floor(rayY);

      if (maze[mapY][mapX] === 1) {
        hitWall = true;
        wallX = rayX - mapX;
        wallY = rayY

