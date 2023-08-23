const db = require('../database/connect');

class Book {

    constructor ({ book_id, book_name, book_description, upvotes }) {
        this.id = book_id;
        this.name = book_name;
        this.description = book_description;
        this.upvotes = upvotes;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM book ORDER BY book_name;");
        if (response.rows.length === 0) {
            throw new Error("No books available.")
        }
        return response.rows.map(g => new Book(g));
    }

    static async getTop() {
        const response = await db.query("SELECT * FROM book ORDER BY upvotes DESC LIMIT 1;");
        if (response.rows.length != 1) {
            throw new Error("Unable to locate book.")
        }
        return new Book(response.rows[0]);
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM book WHERE book_id = $1;", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate book.")
        }
        return new Book(response.rows[0]);
    }

    static async create(data) {
        const {book_name, book_description} = data;   
        const response = await db.query('INSERT INTO book (book_name, book_description) VALUES ($1, $2) RETURNING *;' , [book_name, book_description]);
        const bookId = response.rows[0].book_id;
        const newBook = await Book.getOneById(bookId);
        return newBook;
    }

    async update(data) {
        const {id, upvotes} = data
        const response = await db.query("UPDATE book SET upvotes = upvotes + $1 WHERE book_id = $2 RETURNING book_id, upvotes;",
            [parseInt(upvotes), this.id ]);
        if (response.rows.length != 1) {
            throw new Error("Unable to update votes.")
        }
        return new Book(response.rows[0]);
    }

     async destroy() {
        const response = await db.query('DELETE FROM book WHERE book_id = $1 RETURNING *;', [this.id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to delete book.")
        }
        return new Book(response.rows[0]);
    }
}

module.exports = Book;