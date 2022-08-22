let gameContext = document.getElementById("game").getContext("2d");
let carYPosition = 20;
let width = 50;
let height = 100;
let carXPosition = 20;
gameContext.clearRect(carXPosition, carYPosition, width, height);

function drawCar() {
    gameContext.beginPath();
    gameContext.fillStyle = '#fa4b2a';
    gameContext.fillRect(carXPosition, carYPosition, width, height);
}

function moveCarUp() {
    gameContext.clearRect(carXPosition, carYPosition, width, height);
    ;
    if (carYPosition > 0) {
        carYPosition--;

    }
    drawCar();

}
setInterval(moveCarUp, 10);
function moveCarDown() {

    gameContext.clearRect(carXPosition, carYPosition, width, height);
    ;
    if (carYPosition + 100 < 600) {
        carYPosition++;
    }
    drawCar();

}
setInterval(moveCarDown,10);
let yDistance = 1;
let gameTopPosition = 2;
let gameBottomPosition = 599;
function moveCar() {
    gameContext.clearRect(carXPosition, carYPosition, width, height);
    let isTouchTop = carYPosition < gameTopPosition;
    let isTouchBottom = carYPosition + height > gameBottomPosition;
    if (isTouchTop || isTouchBottom) {
        yDistance = -yDistance;
    }

    carYPosition += yDistance;
    drawCar();
}
setInterval(moveCar,10);