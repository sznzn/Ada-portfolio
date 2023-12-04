function timer() {
    document.getElementById("seconds").innerHTML = Math.floor(Date.now
()/1000);
}
setInterval(timer, 1000);

function clickme1() {
    let projet1 = document.getElementById("projet1")
    if(projet1.style.display == "none"){
        projet1.style.display = "block"
    }else{
        projet1.style.display = "none"
    }
}
function clickme2() {
    let projet2 = document.getElementById("projet2")
    if(projet2.style.display == "none"){
        projet2.style.display = "block"
    }else{
        projet2.style.display = "none"
    }
}
function clickme3() {
    let projet3 = document.getElementById("projet3")
    if(projet3.style.display == "none"){
        projet3.style.display = "block"
    }else{
        projet3.style.display = "none"
    }
}