function addEducation() {
  const educationContainer = document.getElementById('education-container');
  const educationCount = educationContainer.children.length + 1;

  // Create a new div for experience
  const newEducation = document.createElement('div');
  newEducation.classList.add('education-item');
  newEducation.innerHTML = `
      <h3>Education ${educationCount}</h3>
      <label for="education_${educationCount}">Institution and Degree:</label>
      <input type="text" name="education_${educationCount}" placeholder="Enter name of institution..." required>
      <input type="text" name="edu_location_${educationCount}" placeholder="Enter location... Eg. state, country..." required>
      <input type="text" name="edu_study_${educationCount}" placeholder="Enter course of study..." required> 
      <input type="text" name="edu_degree_${educationCount}" placeholder="Enter name of degree. eg, Bachelors, Associate, HND, etc..." required>
      <input type="text" name="edu_duration_${educationCount}" placeholder="Enter duration of study. Eg Month year - Month year, (March 2024 - May 2024 or current)..." required>
      <input type="text" name="edu_cgpa_${educationCount}" placeholder="Enter CGPA..." required>

      <button type="button" class="remove-btn" onclick="removeEducation(this)">Remove Education</button>
  `;
  
  educationContainer.appendChild(newEducation);
}

function removeEducation(button) {
  const educationContainer = document.getElementById('education-container');
  educationContainer.removeChild(button.parentElement); // Remove the parent div of the button
}