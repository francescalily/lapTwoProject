const Community = require("../models/Community");
const jwt = require("jsonwebtoken");

async function index(req, res) {
  try {
    const community = await Community.getAll();
    res.status(200).json(community);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

async function show(req, res) {
  try {
    const id = parseInt(req.params.id);
    const community = await Community.getOneById(id);
    res.status(200).json(community);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
}

async function create(req, res) {
  console.log(req.token);
  const decoded = jwt.verify(req.token, process.env.TOKEN_KEY);
  //let userId = decoded.user.user_id
  console.log(decoded)
  console.log(decoded.id)
  console.log(decoded.username)
  try {
    const { topic, post } = req.body;
    const user_id = decoded.id;
    const username = decoded.username;
    const data = { topic, post, username, user_id };
    const community = await Community.create(data);
    res.status(200).json({ community: community });
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

async function update(req, res) {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const community = await Community.getOneById(id);
    const result = await community.update(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
}

async function getTop(req, res) {
  try {
    const community = await Community.getTopPost();
    res.status(200).json({ community: community });
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
}

async function destroy(req, res) {
  try {
    const id = parseInt(req.params.id);
    const community = await Community.getOneById(id);
    const result = await community.destroy();
    res.json(result);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  getTop,
  destroy,
};
