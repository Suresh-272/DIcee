var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomSource = "images/" + randomImage;
var image1 = document.querySelector("img");
image1.setAttribute("src", randomSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomSource2 = "images/" + randomImage2;
var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomSource2);

// If statment

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏆Player1 Wins!";
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 Wins!🏆";
} else {
    document.querySelector("h1").innerHTML = "The Matchs is Draw!";
}

