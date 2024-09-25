document.addEventListener("DOMContentLoaded", function() {
    const usersList = document.getElementById("users-list");
    const preloader = document.getElementById("preloader");
    const errorMessage = document.getElementById("error-message");
    function loadUsers() {
        preloader.style.display = "block";
        errorMessage.style.display = "none";
        usersList.innerHTML = '';

        const minId = Math.random() > 0.5 ? 100 : 1;
        const maxId = Math.random() > 0.5 ? 10 : 100;

        setTimeout(() => {fetch(`https://jsonplaceholder.typicode.com/users`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Ошибка при загрузке данных.");
                    }
                    return response.json();
                })
                .then(users => {
                    const filteredUsers = users.filter(user => user.id >= minId && user.id <= maxId);

                    if (filteredUsers.length > 0) {
                        displayUsers(filteredUsers);
                    } else {
                        const emptyMessage = document.createElement("li");
                        emptyMessage.textContent = "Нет пользователей для отображения.";
                        usersList.appendChild(emptyMessage);
                    }
                })
                .catch(error => {
                    errorMessage.textContent = "⚠ Что-то пошло не так. Повторите попытку позже.";
                    errorMessage.style.display = "block";
                    console.error("Ошибка:", error);
                })
                .finally(() => {
                    preloader.style.display = "none";
                });
            }, 2000);
    }

    function displayUsers(users) {
        usersList.innerHTML = '';

        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = `Имя пользователя: ${user.username}, Имя: ${user.name}, Email: ${user.email}`;
            usersList.appendChild(listItem);
        });
    }
    loadUsers();
});
