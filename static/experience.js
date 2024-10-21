function addExperience() {
  const experienceContainer = document.getElementById('experience-container');
  const experienceCount = experienceContainer.children.length + 1;

  // Create a new div for experience
  const newExperience = document.createElement('div');
  newExperience.classList.add('experience-item');
  newExperience.innerHTML = `
      <h3>Experience ${experienceCount}</h3>
      <label for="experience_${experienceCount}">Job Title and Company:</label>
      <input type="text" name="experience_${experienceCount}" placeholder="Enter Company name..." required>
      <input type="text" name="exp_position_${experienceCount}" placeholder="Enter position..." required>
      <input type="text" name="exp_location_${experienceCount}" placeholder="Enter location. Eg. state, country..." required> 
      <input type="text" name="exp_duration_${experienceCount}" placeholder="Enter duration of service. Eg Month year - Month year, (March 2024 - May 2024 or current)..." required>

      <label for="exp_details_${experienceCount}">Details (Responsibilities, Achievements):</label>
      <textarea name="exp_details_${experienceCount}" placeholder="Enter job responsibilities. Separate each using fullstop..." required></textarea>

      <button type="button" class="remove-btn" onclick="removeExperience(this)">Remove Experience</button>
  `;
  
  experienceContainer.appendChild(newExperience);
}

function removeExperience(button) {
  const experienceContainer = document.getElementById('experience-container');
  experienceContainer.removeChild(button.parentElement); // Remove the parent div of the button
}