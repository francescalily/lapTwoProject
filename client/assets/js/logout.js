document.querySelector('#logout-button').addEventListener("click", e => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.assign("/");
})