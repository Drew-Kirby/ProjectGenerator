const button = document.getElementById('generatebtn');
const name = document.getElementById('projectlbl');
const desc = document.getElementById('projectdesc');

let currentProjectIndex = 0;

button.addEventListener('click', () =>{
    fetch('projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Response not ok' + response.statusText);
            }
            return response.json();
        })
        .then(projectsArray => {
            const selectedProject = projectsArray[currentProjectIndex];

            name.textContent = selectedProject.title;
            desc.textContent = selectedProject.description;

            currentProjectIndex = (currentProjectIndex + 1) % projectsArray.length;
        })
        .catch(error => {
            console.error('Error loading JSON file: ', error);
            desc.textContent = 'Could not load proejct data.';
        })
})