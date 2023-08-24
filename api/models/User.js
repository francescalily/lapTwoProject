const db = require('../database/connect');

class User {
    constructor({user_id, username, email, password, isadmin}) {
        this.id = user_id,
        this.username = username,
        this.email = email,
        this.password = password,
        this.isAdmin = isadmin
    }

    static async getById(id) {
        const response = await db.query("SELECT * FROM user_account WHERE user_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }

    static async getByUsername(username) {
        const response = await db.query("SELECT * FROM user_account WHERE username = $1", [username]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }

    static async getByEmail(email) {
        const response = await db.query("SELECT * FROM user_account WHERE email = $1", [email]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }


    static async create(data) {
        const { username, email, password, isAdmin } = data;
        let response = await db.query("INSERT INTO user_account (username, email, password) VALUES ($1, $2, $3) RETURNING user_id;",
            [username, email, password]);
        const newId = response.rows[0].user_id;
        const newUser = await User.getById(newId);
        return newUser;
    }
}

module.exports = User;
