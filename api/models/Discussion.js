const db = require("../database/connect");

class Discussion {
  constructor({ discussion_id, username, topic, content, votes }) {
    this.id = discussion_id;
    this.username = username;
    this.topic = topic;
    this.content = content;
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
      `SELECT * FROM discussion`
    );
    if (response.rows.length === 0) {
      throw new Error("No discussions available");
    }
    return response.rows.map((g) => new Discussion(g));
  }

  static async getOneById(id) {
    console.log(id);
    const response = await db.query(
      "SELECT * FROM discussion WHERE discussion_id = $1;",
      [id]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate discussion.");
    }
    return new Discussion(response.rows[0]);
  }

  static async getTopDiscussion() {
    const response = await db.query(
      "SELECT * FROM discussion ORDER BY votes DESC LIMIT 1;"
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate top voted discussion.");
    }
    return new Discussion(response.rows[0]);
  }

  static async create(data) {
    const { topic, content, username, user_id } = data;
    console.log("usenamamam", username);
    console.log("useridddd", user_id);
    const response = await db.query(
      "INSERT INTO discussion (username, topic, content) VALUES ($1, $2, $3) RETURNING discussion_id;",
      [username, topic, content]
    );
    console.log("response", response.rows[0])
    const newId = response.rows[0].discussion_id;
    const newDiscussion = await Discussion.getOneById(newId);
    /*
    const response = await db.query(
      `SELECT community.*, user_account.username 
         FROM community
         JOIN user_account ON community.user_id = user_account.user_id 
         WHERE community.user_id = $1;`,
      [user_id]
    ); */
    //return response.rows[0];
    return newDiscussion;
  }

  async update(data) {
    const response = await db.query(
      "UPDATE discussion SET votes = votes + $1 WHERE user_id = $2 RETURNING user_id, votes;",
      [this.votes + parseInt(data.votes), this.id]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to update votes.");
    }
    return new Discussion(response.rows[0]);
  }

  async destroy() {
    const response = await db.query(
      "DELETE FROM discussion WHERE user_id = $1 RETURNING *;",
      [this.id]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to delete discussion.");
    }
    return new Discussion(response.rows[0]);
  }
}

module.exports = Discussion;
