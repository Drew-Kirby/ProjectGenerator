const genbtn = document.getElementById('generatebtn');
const resetbtn = document.getElementById('resetbtn');
const projName = document.getElementById('projectlbl');
const desc = document.getElementById('projectdesc');
const skilllvl = document.getElementById('difficulty');
const estimatedTime = document.getElementById('estimatedTime');
let currentProjectIndex;

let savedValue = localStorage.getItem("projectIndex");

if (savedValue === null) {
    currentProjectIndex = 0;
} else {
    currentProjectIndex = parseInt(savedValue);
    updateUI();
}

genbtn.addEventListener('click', () =>{    
    currentProjectIndex++

    if(currentProjectIndex == 30)
        currentProjectIndex = 0;

    updateUI();

    localStorage.setItem("projectIndex", currentProjectIndex);

    //console.log(projName) here for debugging
    //console.log(desc)
})

resetbtn.addEventListener('click', () =>{
    localStorage.removeItem("projectIndex");
    currentProjectIndex = 0;
    projName.textContent = "Click the button below to generate an idea for a programming project!"
    desc.textContent = ""
    skilllvl.textContent = ""
    estimatedTime.textContent = ""
})

function updateUI() {
    let currentProject = projectsData[currentProjectIndex]
    projName.textContent = currentProject.title
    desc.textContent = currentProject.description
    skilllvl.textContent = "Difficulty: " + currentProject.difficulty
    estimatedTime.textContent = "Estimated time: " + currentProject.estimated_hours + " hours"
}