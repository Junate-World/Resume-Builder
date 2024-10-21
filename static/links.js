function addProfile() {
  const profileContainer = document.getElementById('profile-container');
  const profileCount = profileContainer.children.length + 1;

  // Create a new div for experience
  const newProfile = document.createElement('div');
  newProfile.classList.add('profile-item');
  newProfile.innerHTML = `
      <h3>Profile ${profileCount}</h3>
      <label for="profile_${profileCount}">Profile Links:</label>
      <input type="text" name="profile_${profileCount}" placeholder="Enter link file name Eg Github, LinkedIn, etc..." required>
      <input type="text" name="profile_address_${profileCount}" placeholder="Enter link address. Eg https://www.myportfolio.com..." required>

      <button type="button" class="remove-btn" onclick="removeProfile(this)">Remove Profile</button>
  `;
  
  profileContainer.appendChild(newProfile);
}

function removeProfile(button) {
  const profileContainer = document.getElementById('profile-container');
  profileContainer.removeChild(button.parentElement); // Remove the parent div of the button
}