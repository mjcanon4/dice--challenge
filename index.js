var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "Dice" + randomNumber1 + ".png";

var randomDiceImage2 = "Dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var randomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Won!"

} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!"

} else {
    document.querySelector("h1").innerHTML = "Player 2 Won!"

}