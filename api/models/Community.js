const db = require("../database/connect");

class Community {
  constructor({ user_id, username, topic, post, votes }) {
    this.id = user_id;
    this.username = username;
    this.topic = topic;
    this.post = post;
    this.votes = votes;
  }

  static async getAll() {
    /*
    const response = await db.query(
      `SELECT community.*, user_account.username 
     FROM community
     JOIN user_account ON community.user_id = user_account.user_id 
     ORDER BY user_account.username;`
    );
    */
    const response = await db.query(
      `SELECT * FROM community`
    );
    if (response.rows.length === 0) {
      throw new Error("No posts available");
    }
    return response.rows.map((g) => new Community(g));
  }

  static async getOneById(id) {
    const response = await db.query(
      "SELECT * FROM community WHERE user_id = $1;",
      [id]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate post.");
    }
    return new Community(response.rows[0]);
  }

  static async getTopPost() {
    const response = await db.query(
      "SELECT * FROM community ORDER BY votes DESC LIMIT 1;"
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate top voted post.");
    }
    return new Community(response.rows[0]);
  }

  static async create(data) {
    const { topic, post, user_id } = data;
    await db.query(
      "INSERT INTO community (user_id, topic, post) VALUES ($1, $2, $3);",
      [user_id, topic, post]
    );
    const response = await db.query(
      `SELECT community.*, user_account.username 
         FROM community
         JOIN user_account ON community.user_id = user_account.user_id 
         WHERE community.user_id = $1;`,
      [user_id]
    );
    return response.rows[0];
  }

  async update(data) {
    const response = await db.query(
      "UPDATE community SET votes = votes + $1 WHERE user_id = $2 RETURNING user_id, votes;",
      [this.votes + parseInt(data.votes), this.id]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to update votes.");
    }
    return new Community(response.rows[0]);
  }

  async destroy() {
    const response = await db.query(
      "DELETE FROM community WHERE user_id = $1 RETURNING *;",
      [this.id]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to delete post.");
    }
    return new Community(response.rows[0]);
  }
}

module.exports = Community;
