// ** This module handles the Book controller functions **
const Author = require('mongoose').model('Author'); // Import Author model

// <--- Controller Functions --->
module.exports = {
    create(req, res) {
        // create a new book, and attach to Author already in DB
        Author.findByIdAndUpdate(req.params.id, { $push: { books: req.body } }, { new: true })
            .then(author => res.json(author))
            .catch(err => res.json(err));
    },
    destroy(req, res) {
        // delete a book
        Author.findByIdAndUpdate(req.params.id, { $pull: { books: req.params.book_id } })
            .then(author => res.json(author))
            .catch(err => res.json(err));
    }
}