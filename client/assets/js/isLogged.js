if(localStorage.token) {
    const loginButton = document.querySelector("#login-btn");
    const logoutButton = document.querySelector("#logout-btn");
    const profileButton = document.querySelector("#profile-btn");
    const loggedButtons = document.querySelector("#logged-in");
    let enableEvent = true;


    if(localStorage.exp < Date.now()) {
        localStorage.removeItem("token");
        localStorage.removeItem("exp");
        window.location.reload();
    }

    if(loggedButtons && loginButton) {
        loggedButtons.classList.toggle("hidden");
        loginButton.classList.toggle("hidden");
    }

    if(logoutButton) {
        logoutButton.addEventListener("click", e => {
            e.preventDefault();
            localStorage.removeItem("token");
            localStorage.removeItem("exp");
            window.location.reload();
        })
    }

    if(profileButton) {
            
        if(localStorage.token) {
            profileButton.addEventListener("click", async (e) => {
                if(enableEvent) {
                    enableEvent = false;
                    e.preventDefault();

                    const isTokenGood = await checkToken();

                    if(isTokenGood === true) {
                        window.location.assign("/profile");
                    } else {
                        alert(isTokenGood);
                    }
                }
            })
        }
}
}

async function checkToken() {
    const options = {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${localStorage.token}`
        }
    }

    const response = await fetch("/check-token", options);
    if (response.status == 204) {
        return true;
    } else {
        const data = await response.json();
        return data.error;
    }
}



