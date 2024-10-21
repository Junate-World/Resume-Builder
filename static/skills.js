function addSkill() {
  const skillContainer = document.getElementById('skill-container');
  const skillCount = skillContainer.children.length + 1;

  // Create a new div for experience
  const newSkill = document.createElement('div');
  newSkill.classList.add('skill-item');
  newSkill.innerHTML = `
      <h3>Skill ${skillCount}</h3>
      <select name="skill_${skillCount}" id="skills_${skillCount}">
      <option value="None" disabled>Choose skill category</option>
      <option value="Programming Languages">Programming Languages</option>
      <option value="Libraries/Frameworks">Libraries/Frameworks</option>
      <option value="Tools">Tools/Platforms</option>
      <option value="Databases">Databases</option>
      </select>
      <input type="text" name="skill_select_${skillCount}" placeholder="Enter list of skills separated by commas..." required>

      <button type="button" class="remove-btn" onclick="removeSkill(this)">Remove Skill</button>
  `;
  
  skillContainer.appendChild(newSkill);
}

function removeSkill(button) {
  const skillContainer = document.getElementById('skill-container');
  skillContainer.removeChild(button.parentElement); // Remove the parent div of the button
}