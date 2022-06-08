//JS Imports
// import { projectData } from "./project-data.js";


// JS Functionality Task 1/3 - Fade home page text in onload
let opacity = 0;
let intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
    setInterval(show, 200);
}

function show() {
    const body = document.getElementById("home-description");
    opacity = Number(window.getComputedStyle(body)
                     .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        body.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}


// JS Functionality Task 2/3 - Dynamicaly link projects to html
