const Discussion = require("../models/Discussion");
const jwt = require("jsonwebtoken");

async function index(req, res) {
  try {
    const discussion = await Discussion.getAll();
    res.status(200).json(discussion);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

async function show(req, res) {
  try {
    const id = parseInt(req.params.id);
    const discussion = await Discussion.getOneById(id);
    res.status(200).json(discussion);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
}

async function create(req, res) {
  console.log("create request: ",req);
  const decoded = jwt.verify(req.token, process.env.TOKEN_KEY);
  //let userId = decoded.user.user_id
  console.log(decoded)
  console.log(decoded.id)
  console.log(decoded.username)
  try {
    const { topic, content } = req.body;
    const user_id = decoded.id;
    const username = decoded.username;
    const data = { topic, content, username, user_id };
    const discussion = await Discussion.create(data);
    res.status(200).json({ discussion: discussion });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  /*
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "POST created...",
        authData
      });
    }
  })
  
  
  */
}

async function updateVotes(req, res) {
  try {
    const id = parseInt(req.params.id);
    const result = await Discussion.updateVotes(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
}

async function getTop(req, res) {
  try {
    const discussion = await Discussion.getTopDiscussion();
    res.status(200).json({ discussion: discussion });
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
}

async function destroy(req, res) {
  try {
    const id = parseInt(req.params.id);
    const discussion = await Discussion.getOneById(id);
    const result = await discussion.destroy();
    res.json(result);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
}

async function getAllByUsername(req, res){
  try {
    const username = req.params.username;
    const discussions = await Discussion.getAllByUsername(username);
    res.json(discussions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  index,
  show,
  create,
  updateVotes,
  getTop,
  destroy,
  getAllByUsername
};
