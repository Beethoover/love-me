const modal = document.getElementById("spanNone");
const ModalText = document.getElementById("spanText");
const main = document.getElementById("main");
const butn = document.getElementById("button");
const image = document.getElementById("image");
const npm = document.getElementById("npm");
butn.onclick = function(){
    main.style.visibility = "visible";
}

let buttonChoiceYes = document.getElementById("yesChoice");
let buttonChoiceNo = document.getElementById("noChoice");

var title = document.getElementById("status");
var descrip = document.getElementById("metaDesc");
var error = document.getElementById("error");

buttonChoiceYes.onclick = function(){
    main.style.display = "none";
    modal.style.visibility = "visible";
    ModalText.innerText = "Terimakasih sayang, i love you <3";
    title.style.display = "none";
    descrip.style.display = "none";
    butn.style.display = "none";
    image.style.display = "flex";
}

buttonChoiceNo.onclick = function (){
    document.body.style.background = "black";
    main.style.display = "none";
    modal.style.visibility = "visible";
    ModalText.innerText = "System Error, Confussed : 401";
    modal.style.background = "red";
    ModalText.style.color = "white";
    title.style.display = "none";
    descrip.style.display = "none";
    butn.style.display = "none";
    image.style.display = "none";
    error.style.display = "block";

    setTimeout(function(){
        modal.style.visibility = "hidden";
    }, 5000)
}

const quit = document.getElementById("quit");

quit.addEventListener("click", function(){
    document.body.style.background = "white";
    main.style.display = "none";
    modal.style.visibility = "hidden";
    modal.style.background = "red";
    ModalText.style.color = "white";
    title.style.display = "none";
    npm.style.display = "block";
    descrip.style.display = "none";
    butn.style.display = "none";
    image.style.display = "none";
    error.style.display = "none";
})