let slideIndex = 0;
let backGround = document.getElementsByClassName("background--cover");
let img = backGround[0].children;

function next() {
    let next = document.getElementsByClassName("next");
    for (n = 0; n < 5; n++) {
        img[n].style.display = "none";
    }
    ++slideIndex;
    img[slideIndex].style.display = "flex";
    next += "active";

}

function previous() {
    let previous = document.getElementsByClassName("previous");
    for (n = 0; n < 5; n++) {
        img[n].style.display = "none";
    }
    --slideIndex;
    img[slideIndex].style.display = "flex";
    previous -= "active";

}