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
    const response = await db.query(
      "SELECT * FROM community ORDER BY username;"
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

  static async create(data) {
    const { topic, post } = data;
    const response = await db.query(
      "INSERT INTO community (topic, post) VALUES ($1, $2) RETURNING *;",
      [topic, post]
    );
    const user_id = response.rows[0].user_id;
    const newPost = await Community.getOneById(user_id);
    return newPost;
  }
}

module.exports = Community;
