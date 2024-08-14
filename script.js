const gameContainer = document.getElementById('gameContainer');
const spaceship = document.getElementById('spaceship');
const scoreElement = document.getElementById('score'); // Element to display score

let spaceshipX = gameContainer.offsetWidth / 2 - spaceship.offsetWidth / 2;
let score = 0; // Initialize score

// Initialize the spaceship's starting position
spaceship.style.left = `${spaceshipX}px`;

const moveSpaceship = (event) => {
    const step = 10;
    if (event.key === 'ArrowLeft' && spaceshipX - step >= 0) {
        spaceshipX -= step;
    } else if (event.key === 'ArrowRight' && spaceshipX + step <= gameContainer.offsetWidth - spaceship.offsetWidth) {
        spaceshipX += step;
    }
    // Update the spaceship's position on the screen
    spaceship.style.left = `${spaceshipX}px`;
};

const shootBullet = () => {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');

    // Get the current position of the spaceship before firing the bullet
    const currentSpaceshipX = spaceshipX;
    
    // Calculate bullet position relative to the spaceship's current position
    bullet.style.left = `${currentSpaceshipX + spaceship.offsetWidth / 2 - 2.5}px`;
    bullet.style.bottom = `50px`;
    gameContainer.appendChild(bullet);

    // Move the bullet upward
    const moveBullet = setInterval(() => {
        const bulletPosition = bullet.offsetTop;
        if (bulletPosition <= 0) {
            bullet.remove();
            clearInterval(moveBullet);
        } else {
            bullet.style.top = `${bulletPosition - 10}px`;
        }
        detectCollision(bullet, moveBullet);
    }, 20);
};

const createEnemy = () => {
    const enemy = document.createElement('div');
    enemy.classList.add('enemy');
    enemy.style.left = `${Math.random() * (gameContainer.offsetWidth - 40)}px`;
    enemy.style.top = `0px`;
    gameContainer.appendChild(enemy);

    const moveEnemy = setInterval(() => {
        const enemyPosition = enemy.offsetTop;
        if (enemyPosition >= gameContainer.offsetHeight - 40) {
            enemy.remove();
            clearInterval(moveEnemy);
        } else {
            enemy.style.top = `${enemyPosition + 5}px`;
        }
    }, 50);
};

const detectCollision = (bullet, moveBullet) => {
    const enemies = document.getElementsByClassName('enemy');
    for (let enemy of enemies) {
        const bulletRect = bullet.getBoundingClientRect();
        const enemyRect = enemy.getBoundingClientRect();

        if (
            bulletRect.left < enemyRect.right &&
            bulletRect.right > enemyRect.left &&
            bulletRect.top < enemyRect.bottom &&
            bulletRect.bottom > enemyRect.top
        ) {
            enemy.remove();
            bullet.remove();
            clearInterval(moveBullet);

            // Update the score when an enemy is shot
            score++;
            scoreElement.innerText = `Score: ${score}`;
        }
    }
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        moveSpaceship(event);
    } else if (event.key === ' ') {
        shootBullet();
    }
});

// Continuously create enemies every 1 second
setInterval(createEnemy, 1000);
