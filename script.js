// Handle navigation between sections
function showPage(pageId) {
  const pages = ["dashboardPage", "addPage", "viewPage"];
  pages.forEach(page => document.getElementById(page).style.display = "none");

  if (pageId === "dashboard") {
    document.getElementById("dashboardPage").style.display = "block";
  } else if (pageId === "add") {
    document.getElementById("addPage").style.display = "block";
  } else if (pageId === "view") {
    document.getElementById("viewPage").style.display = "block";
    displayEmployees();
  }
}

// Add employee to localStorage
document.addEventListener("DOMContentLoaded", () => {
  showPage("dashboard"); // default view

  const form = document.getElementById("addForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const employee = {
        name: document.getElementById("name").value.trim(),
        position: document.getElementById("position").value.trim(),
        email: document.getElementById("email").value.trim(),
        location: document.getElementById("location").value.trim()
      };

      const employees = JSON.parse(localStorage.getItem("employees") || "[]");
      employees.push(employee);
      localStorage.setItem("employees", JSON.stringify(employees));

      alert("Employee added successfully!");
      form.reset();
    });
  }
});

// Show employee data
function displayEmployees() {
  const tbody = document.getElementById("employeeList");
  tbody.innerHTML = "";

  const employees = JSON.parse(localStorage.getItem("employees") || "[]");

  employees.forEach(emp => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${emp.name}</td>
      <td>${emp.position}</td>
      <td>${emp.email}</td>
      <td>${emp.location}</td>
    `;
    tbody.appendChild(row);
  });
}
