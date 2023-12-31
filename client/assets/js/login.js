document.querySelector('#login-form').addEventListener("submit", async e => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: form.get("email"),
            password: form.get("password")
        })
    }

    const response = await fetch("/users/login", options);
    const data = await response.json();

    if (response.status == 200) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("exp", Date.now() + 60 * 60 * 1000);
        window.history.back();
    } else {
        alert(data.error);
    }
})

function ifLogged() {
    if(localStorage.token) {
        window.location.assign("/");
    }
}

ifLogged()
