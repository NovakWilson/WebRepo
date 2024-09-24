document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("application-form");
    const applicationsList = document.getElementById("applications");

    loadApplications();

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const info = document.getElementById("info").value;

        const application = {
            name,
            info
        };

        saveApplication(application);

        displayApplication(application);

        form.reset();
    });

    function saveApplication(application) {
        let applications = JSON.parse(localStorage.getItem("applications")) || [];
        applications.push(application);
        localStorage.setItem("applications", JSON.stringify(applications));
    }

    function loadApplications() {
        let applications = JSON.parse(localStorage.getItem("applications")) || [];
        applications.forEach(application => {
            displayApplication(application);
        });
    }

    function displayApplication(application) {
        const listItem = document.createElement("li");
        listItem.textContent = `Имя: ${application.name}  | Информация: ${application.info}`;
        applicationsList.appendChild(listItem);
    }
});
