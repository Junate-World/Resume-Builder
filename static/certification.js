function addCertification() {
  const certificationContainer = document.getElementById('certification-container');
  const certificationCount = certificationContainer.children.length + 1;

  // Create a new div for experience
  const newCertification = document.createElement('div');
  newCertification.classList.add('certification-item');
  newCertification.innerHTML = `
      <h3>Certification ${certificationCount}</h3>
      
      <input type="text" name="certification_${certificationCount}" placeholder="Enter certification name" required>
      <input type="text" name="cert_details_${certificationCount}" placeholder="Enter the link to your cerification page eg: https://www.mycert.com" required>
      <input type="text" name="issuer_details_${certificationCount}" placeholder="Enter the issuing firm of the certification" required>

      <button type="button" class="remove-btn" onclick="removeCertification(this)">Remove Certification</button>
  `;
  
  certificationContainer.appendChild(newCertification);
}

function removeCertification(button) {
  const certificationContainer = document.getElementById('certification-container');
  certificationContainer.removeChild(button.parentElement); // Remove the parent div of the button
}