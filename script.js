function timer() {
    document.getElementById("seconds").innerHTML = Math.floor(Date.now
()/1000);
}
setInterval(timer, 1000);