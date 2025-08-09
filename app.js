// Registration form logic
document.addEventListener("DOMContentLoaded", function() {
  // Registration page logic
  const regForm = document.getElementById('registrationForm');
  if (regForm) {
    regForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const data = {
        name: regForm.name.value.trim(),
        email: regForm.email.value.trim(),
        role: regForm.role.value,
        about: regForm.about.value.trim()
      };
      // Save to localStorage
      let applicants = JSON.parse(localStorage.getItem('applicants') || "[]");
      applicants.push(data);
      localStorage.setItem('applicants', JSON.stringify(applicants));
      regForm.reset();
      document.getElementById('successMsg').style.display = '';
      setTimeout(() => {
        document.getElementById('successMsg').style.display = 'none';
      }, 2000);
    });
  }

  // Admin page logic
  const applicantsTable = document.getElementById('applicantsTable');
  if (applicantsTable) {
    let applicants = JSON.parse(localStorage.getItem('applicants') || "[]");
    const tbody = applicantsTable.querySelector('tbody');
    if (applicants.length === 0) {
      document.getElementById('noApplicants').style.display = '';
    } else {
      applicants.forEach(app => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${app.name}</td>
                         <td>${app.email}</td>
                         <td>${app.role}</td>
                         <td>${app.about.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</td>`;
        tbody.appendChild(row);
      });
    }
  }
});
