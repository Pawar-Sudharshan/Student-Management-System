document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirm_password = document.getElementById("confirm_password").value;

        if (!username || !email || !password || !confirm_password) {
            alert("Please fill in all required fields.");
            return;
        }

        if (password !== confirm_password) {
            alert("Passwords do not match!");
            return;
        }

        const user = {
            username,
            email,
            password
        };

        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration successful!");
        window.location.href = "login.html";
    });
});