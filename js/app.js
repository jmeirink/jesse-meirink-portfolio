// JS Imports
import { projectData } from "./project-data.js";


// JS Functionality Task 1/3 - Fade in home page text upon page load
let opacity = 0;
let intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
    setInterval(reveal, 100);
}

function reveal() {
    const helloText = document.getElementById("home-description");
    opacity = Number(window.getComputedStyle(helloText).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.03;
        helloText.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}


// JS Functionality Task 2/3 - Play audio when the user clicks on the word 'drums'
const drums = document.getElementById('drums')
drums.addEventListener('click', playDrumSound)

function playDrumSound() {
    const audio = new Audio('/assets/audio/MadDrumSounds.mp3');
    audio.play();
}


// JS Functionality Task 3/3 - Dynamicaly link projects to html
const projectsSection = document.getElementById('my-projects')

let projectMarkup = projectData.map(project =>
  `
    <div class="row justify-content-center">
    <div class="col-4 text-center work-content">
        <img class ="img-responsive rounded" width="75%" src="${project.image}" alt="">
    </div>
    <div class="col-4 work-content">
        <h1>${project.title}</h1>
        <p>${project.description}</p>
        <div>
            <a href="${project.github}" class="btn btn-primary" target="_blank">GitHub</a>
            <a href="${project.deployment}" class="btn btn-primary" target="_blank">Deployment</a>
        </div>
    </div>
    </div>
  `
).join('')

projectsSection.innerHTML = projectMarkup
