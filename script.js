var submitButton = document.getElementById("submit-button");
var memeForm = document.getElementById("meme-form");
var imgUrl = document.getElementById("img-url");
var topText = document.getElementById("top-text");
var botText = document.getElementById("bot-text");
var memesContainer = document.getElementById("memes-container");
var overlay = document.getElementsByClassName("overlay");

//dank memes

//Submit functionality:
memeForm.addEventListener("submit", function(e){

    //preventDefault stops the submit from refreshing the page
    e.preventDefault();

    //create div: <div class="meme-box">
        var newMeme = document.createElement("div");
        newMeme.setAttribute("class", "meme-box");
        memesContainer.appendChild(newMeme);

    //create img: <img class="meme-img" src="">
        var newImg = document.createElement("img");
        newImg.setAttribute("src",imgUrl.value);
        newImg.setAttribute("class", "meme-img");
        newMeme.appendChild(newImg);

    //create top: <p class="top-text">We didn't choose the thug life</p>
        var newTopText = document.createElement("p");
        newTopText.setAttribute("class", "top-text");
        newTopText.innerText = topText.value;
        newMeme.appendChild(newTopText);

    //create top: <p class="top-text">We didn't choose the thug life</p>
        var newBotText = document.createElement("p");
        newBotText.setAttribute("class", "bot-text");
        newBotText.innerText = botText.value;
        newMeme.appendChild(newBotText);

    //create overlay: <div class="overlay">X</div>
        var newOverlay = document.createElement("div");
        newOverlay.setAttribute("class", "overlay");
        newOverlay.innerText = "X"
        newMeme.appendChild(newOverlay);

    
    //resetting the form and clearing out any values
        memeForm.reset();

    // Test to see if submit button is working on click:
        // submitButton.style.backgroundColor = "green"

});

//Delete Functionality:
memesContainer.addEventListener("click", function(e) {
    console.log(e.target.className)
    if (e.target.className === "overlay") {
        memesContainer.removeChild(e.target.parentElement)
    }
});

//
