const button = document.getElementById('generatebtn');
const projName = document.getElementById('projectlbl');
const desc = document.getElementById('projectdesc');

let currentProjectIndex = 0;

button.addEventListener('click', () =>{    
    let currentProject = projectsData[currentProjectIndex]
    projName.textContent = currentProject.title
    desc.textContent = currentProject.description

    currentProjectIndex++

    if(currentProjectIndex == 30)
        currentProjectIndex = 0;

    //console.log(projName)
    //console.log(desc)
})