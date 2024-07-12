// Sample data for demonstration
let projects = [];

document.addEventListener('DOMContentLoaded', function() {
    const projectForm = document.getElementById('project-form');
    projectForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const title = document.getElementById('project-title').value;
        const description = document.getElementById('project-description').value;
        const goal = parseFloat(document.getElementById('project-goal').value);
        
        // Create project object
        const project = {
            title: title,
            description: description,
            goal: goal,
            funded: 0
        };
        
        // Add project to array
        projects.push(project);
        
        // Clear form fields
        document.getElementById('project-title').value = '';
        document.getElementById('project-description').value = '';
        document.getElementById('project-goal').value = '';
        
        // Update project list display
        displayProjects();
    });

    function displayProjects() {
        const projectList = document.getElementById('project-list');
        projectList.innerHTML = '';
        
        projects.forEach(function(project, index) {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p>Goal: $${project.goal}</p>
                <p>Funded: $${project.funded}</p>
            `;
            projectList.appendChild(projectCard);
        });
    }
});
