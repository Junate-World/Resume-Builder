function addProject() {
  const projectContainer = document.getElementById('project-container');
  const projectCount = projectContainer.children.length + 1;

  // Create a new div for experience
  const newProject = document.createElement('div');
  newProject.classList.add('project-item');
  newProject.innerHTML = `
      
      <h3>Project ${projectCount}</h3>
      <label for="project_${projectCount}">Projects, links, skills used and brief description:</label>
      <input type="text" name="project_${projectCount}" placeholder="Enter name of project..." required>
      <input type="text" name="project_link_${projectCount}" placeholder="Enter link to the project repository..." required>
      <input type="text" name="project_skills_${projectCount}" placeholder="Enter skills used for the project: Eg. Python, Django, etc..." required> 
      <input type="text" name="project_details_${projectCount}" placeholder="Enter brief description of project..." required>

      <button type="button" class="remove-btn" onclick="removeProject(this)">Remove Project</button>
  `;
  
  projectContainer.appendChild(newProject);
}

function removeProject(button) {
  const projectContainer = document.getElementById('project-container');
  projectContainer.removeChild(button.parentElement); // Remove the parent div of the button
}