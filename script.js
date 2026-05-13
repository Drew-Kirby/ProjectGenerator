const button = document.getElementById('generatebtn');
const projName = document.getElementById('projectlbl');
const desc = document.getElementById('projectdesc');
const skilllvl = document.getElementById('difficulty');
const estimatedTime = document.getElementById('estimatedTime');

let currentProjectIndex = 0;

button.addEventListener('click', () =>{    
    let currentProject = projectsData[currentProjectIndex]
    
    projName.textContent = currentProject.title
    desc.textContent = currentProject.description
    skilllvl.textContent = "Difficulty: " + currentProject.difficulty
    estimatedTime.textContent = "Estimated time: " + currentProject.estimated_hours + " hours"

    currentProjectIndex++

    if(currentProjectIndex == 30)
        currentProjectIndex = 0;

    //console.log(projName) here for debugging
    //console.log(desc)
})