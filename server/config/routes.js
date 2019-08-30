// ** This module handles routing ** 
// <--- Modules --->
const authorsController = require('../controllers/authors'); // imports Author controller
const booksController = require('../controllers/books'); // imports Book controller

// <--- Rounting --->
module.exports = app => {
    // ** Authors **
    app.get('/authors/', authorsController.index); // all
    app.get('/authors/:id', authorsController.show); // show
    app.post('/authors/', authorsController.create); // create
    app.put('/authors/:id', authorsController.update); // update
    app.delete('/authors/:id', authorsController.destroy); // delete

    // ** Books **
    app.post('/authors/:id/books/', booksController.create); // create
    app.delete('/authors/:id/books/:book_id', booksController.destroy); // delete
}