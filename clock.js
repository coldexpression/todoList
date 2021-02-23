const clock = document.querySelector(".js-clock");

function getTime () {
    const time = new Date();
    const hours = time.getHours();
    const minute = time.getMinutes();
    const seconds = time.getSeconds();
    clock.innerText = `${hours<10 ? '0'+hours : hours}:${minute<10 ? '0'+minute : minute}:${seconds<10 ? '0'+seconds : seconds}`;
    setTimeout(getTime,1000);
}

function init() {
    getTime();
}

init();