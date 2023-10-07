const gameContainer = document.getElementById("gameContainer");
        const scoreBoard = document.getElementById("scoreBoard");
        let snake = [{ x: 39, y: 19 }];
        let food = { x: 10, y: 10 };
        let dx = 1;
        let dy = 0;
        let score = 0;

        function createBoard() {
            for (let i = 0; i < 40 * 40; i++) {
                const pixel = document.createElement("div");
                pixel.id = `pixel${i}`;
                gameContainer.appendChild(pixel);
            }
        }

        function createSnake() {
            snake.forEach(segment => {
                const pixel = document.getElementById(`pixel${segment.y * 40 + segment.x}`);
                pixel.classList.add("snakeBodyPixel");
            });
        }

        function createFood() {
            const pixel = document.getElementById(`pixel${food.y * 40 + food.x}`);
            pixel.classList.add("food");
        }

        function moveSnake() {
            const head = { x: snake[0].x + dx, y