document.addEventListener("DOMContentLoaded", function () {
    // Login Logic
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        let loginEmail = document.getElementById("email");
        let loginPassword = document.getElementById("password");
        let loginErrorSpan = document.getElementById("login-error-message");
        let forgotPasswordLink = document.getElementById("forgot-password");

        if (loginErrorSpan) loginErrorSpan.style.display = "none";
        if (forgotPasswordLink) forgotPasswordLink.style.display = "none";

        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let storedUser = localStorage.getItem("user");
            if (!storedUser) {
                if (loginErrorSpan) {
                    loginErrorSpan.textContent = "No account found. Please sign up.";
                    loginErrorSpan.style.display = "block";
                }
                if (forgotPasswordLink) forgotPasswordLink.style.display = "none";
                return;
            }

            let userData = JSON.parse(storedUser);
            if (loginEmail.value.trim() === userData.email && loginPassword.value.trim() === userData.password) {
                window.location.href = "main.html";
            } else {
                if (loginErrorSpan) {
                    loginErrorSpan.textContent = "Invalid email or password.";
                    loginErrorSpan.style.display = "block";
                }
                if (forgotPasswordLink) forgotPasswordLink.style.display = "block";
            }
        });
    }

    // Signup Logic
    let signupForm = document.getElementById("signupForm");
    if (signupForm) {
        let signupUsername = document.getElementById("username");
        let signupEmail = document.getElementById("email");
        let signupPassword = document.getElementById("password");
        let signupErrorSpan = document.getElementById("signup-error-message");

        if (signupErrorSpan) signupErrorSpan.style.display = "none";

        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (signupUsername.value.trim() && signupEmail.value.trim() && signupPassword.value.trim()) {
                let userData = {
                    username: signupUsername.value.trim(),
                    email: signupEmail.value.trim(),
                    password: signupPassword.value.trim(),
                };

                localStorage.setItem("user", JSON.stringify(userData));
                console.log("User data stored:", localStorage.getItem("user")); // Debugging
                window.location.href = "login.html";
            } else {
                if (signupErrorSpan) {
                    signupErrorSpan.textContent = "All fields are required!";
                    signupErrorSpan.style.display = "block";
                }
            }
        });
    }
});