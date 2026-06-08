document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const loginButton = document.getElementById("loginButton");

    if (!loginForm || !loginButton) return;

    loginButton.addEventListener("click", function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById("username").value.trim();
        const passwordInput = document.getElementById("password").value.trim();

        if (!usernameInput || !passwordInput) {
            alert("Please enter both username and password.");
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.username === usernameInput && storedUser.password === passwordInput) {
            alert("Login successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid username or password.");
        }
    });
});
