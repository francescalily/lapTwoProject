const path = require("path");

const project_dir = path.join(__dirname, "../../client/");

function homepage (req, res) {
    res.sendFile(project_dir + 'homepage.html');
}

function login (req, res) {
    res.sendFile(project_dir + 'login.html');
}

function profile (req, res) {
    res.sendFile(project_dir + 'user-profile.html');
}

function history (req, res) {
    res.sendFile(project_dir + 'history.html');
}

function discussion (req, res) {
    res.sendFile(project_dir + 'discussion.html');
}

module.exports = {
    homepage, login, profile, history, discussion
}