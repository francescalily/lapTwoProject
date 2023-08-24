document.querySelector('#register-form').addEventListener("submit", async e => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: form.get("username"),
            email: form.get("email"),
            password: form.get("password")
        })
    }

    const response = await fetch("/users/register", options);
    const data = await response.json();

    if (response.status == 201) {
        window.location.assign("/login");
    } else {
        alert(data.error);
    }
})

document.getElementById('confirm-password').addEventListener("change", e => {
    const password = document.getElementById('password');
    const confirmPassword = e.target;

    if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity('');
    } else {
        confirmPassword.setCustomValidity('Passwords do not match');
    }
})