const Community = require("../models/Community");

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
  try {
    data = req.body;
    const community = await Community.create(data);
    res.status(200).json({ community: community });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  index,
  show,
  create,
};
