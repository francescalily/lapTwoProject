const Book = require("../models/Books.js");

async function index (req, res) {
    try {
        const books = await Book.getAll();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function show (req, res) {
    try {
        const id = parseInt(req.params.id);
        const book = await Book.getOneById(id);
        res.status(200).json(book);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function getTop (req, res) {
    try {
        const book = await Book.getTop();
        res.status(200).json(book);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function create (req, res) {
    
    try {
        data = req.body
        const book = await Book.create(data);
        res.json(book);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function update(req, res) {
 
    try {
        const id = parseInt(req.params.id);
        const book = await Book.getOneById(id);
        const data = req.body;
        const result = await book.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({"error": err.message}) // bad request status code
    }
}

async function destroy (req, res) {
    
    try {
        const id = parseInt(req.params.id);
        const book = await Book.getOneById(id);
        const result = await book.destroy();
        res.json(result);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = {
    index, show, create, getTop, update, destroy
}