const form = document.querySelector(".js-form"),
    greet = form.querySelector(".js-greeting"),
    text = form.querySelector(".js-text");

const SHOWING = "showing",
    HIDE = "text",
    GREET_LS = "greetingname";

function printGreet() {
    const name = localStorage.getItem(GREET_LS);
    greet.classList.add(HIDE);
    text.classList.add(SHOWING);
    text.innerText = `안녕하세요 ${name}님`;
}

function saveName(name) {
    localStorage.setItem(GREET_LS,name);
}

function handleInput(event) {
    event.preventDefault();
    const context = greet.value;
    saveName(context);
    printGreet();
    greet.value = "";
}


function askName() {
    form.addEventListener("submit",handleInput);
}

function loadedGreet() {
    const names = localStorage.getItem(GREET_LS);
    if(names === null) {
        askName();
    } else {
        printGreet();
    }
}

function init() {
    loadedGreet();
}

init();