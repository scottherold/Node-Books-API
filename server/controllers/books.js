// ** This module handles the Book controller functions **
const Author = require('mongoose').model('Author'); // Import Author model

// <--- Controller Functions --->
module.exports = {
    create(req, res) {
        // create a new book, and attach to Author already in DB
        Author.findByIdAndUpdate(req.params.id, { $push: { books: req.body } }, { runValidators: true, new: true })
            .then(author => res.json(author))
            .catch(err => {
                console.log(err); 
                res.status(400).json(err)
            });
    },
    destroy(req, res) {
        // delete a book
        Author.findByIdAndUpdate(req.params.id, { $pull: { books: { _id: req.params.book_id } } })
            .then(author => res.json(author))
            .catch(err => {
                console.log(err); 
                res.status(400).json(err)
            });
    }
}