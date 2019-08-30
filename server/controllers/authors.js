// ** This module handles the Author controller functions **
// <--- Modules --->
const Author = require('mongoose').model('Author'); // Imports Author model

// <--- Controller Functions --->
module.exports = {
    index(req, res) {
        // All
        Author.find()
            .then(authors => res.json(authors))
            .catch(err => res.json(err.errors));
    },
    show(req, res) {
        // display one Author by ._id
        Author.findById(req.params.id)
            .then(author => {
                res.json(author ? author : 'No such author exists...'); // return JSON Author object, unless Author doesn't exist, then return error
            })
            .catch(err => res.json(err));
    },
    create(req, res) {
        // create new Author
        Author.create(req.body)
            .then(author => res.json(author))
            .catch(err => {
                console.log(err); 
                res.status(400).json(err)
            });
    },
    update(req, res) {
        // update one Author by ._id
        Author.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(author => res.json(author))
            .catch(err => res.json(err));
    },
    destroy(req, res) {
        // delete Author by ._id
        Author.findByIdAndRemove(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
}