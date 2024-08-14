Space Shooting Game

This is a simple space shooting game created using HTML, CSS, and JavaScript. The player controls a spaceship and must shoot down enemies to score points. The game ends when the player reaches a certain score.

Table of Contents

- [Game Description](  game-description)
- [Gameplay](  gameplay)
- [Features](  features)
- [How to Run the Game](  how-to-run-the-game)
- [Customization](  customization)
- [Technologies Used](  technologies-used)
- [License](  license)

Game Description

In this game, the player controls a spaceship at the bottom of the screen. The goal is to shoot down as many enemies as possible by firing bullets. The player wins the game when they reach a specified score.

Gameplay

- Use the   Left Arrow   and   Right Arrow   keys to move the spaceship horizontally.
- Press the   Spacebar   to shoot bullets.
- Each time a bullet hits an enemy, the enemy is destroyed and the player's score increases by 1 point.
- The game ends with a "You Win!" message when the player reaches the winning score.

Features

- Responsive controls for spaceship movement and shooting.
- Enemies spawn randomly from the top of the screen and move downward.
- Score tracking with an on-screen display.

How to Run the Game

1.   Clone the Repository  :
    ```bash
    git clone https://github.com/justfsl50/spaceship-game.git
    ```
2.   Navigate to the Project Directory  :
    ```bash
    cd spaceship-game
    ```
3.   Open `index.html` in a Web Browser  :
    You can open the `index.html` file directly in any modern web browser.

Customization

-   Spaceship  : Change the color, size, or position by modifying the `  spaceship` CSS class in the `style.css` file.
-   Enemies  : Customize the appearance and behavior of the enemies by editing the `.enemy` CSS class and the `createEnemy` function in the `script.js` file.
-   Score  : Adjust the winning score by changing the `winningScore` variable in the `script.js` file.
-   Game Container  : Modify the size and appearance of the game area by editing the `  gameContainer` CSS class.

Technologies Used
- HTML: Structure of the game.
- CSS: Styling for the game elements.
- JavaScript: Game logic and interactivity.