// ** This model constructs the Author model for use in the application **
// <--- Modules --->
const uniqueValidator = require('mongoose-unique-validator'); // imports validator for unique inputs
const mongoose = require('mongoose'); // import mongoose for model construction
const { Schema } = mongoose; // constructs empty schema object from mongoose

// <--- Schema --->
// uses blank schema object to be added to the mongoose object with module.export
const BookSchema = new Schema({
    title: {
        type: String,
        minlength: [2, 'Book title must be longer than two characters!']
    },
    publication_year: {
        type: Date,
    }
}, {timestamps: true});

// uses blank schema object to be added to the mongoose object with module.export
const AuthorSchema = new Schema({
    first_name: {
        type: String,
        minlength: [2, "Author's first name must be longer than two characters!"]
    },
    last_name: {
        type: String,
        minlength: [2, "Author's last name must be longer than two characters!"]
    },
    birthday: {
        type: Date,
    },
    books: [BookSchema]
}, {timestamps: true});

// <--- Custom Validations --->
// ** Book **
// date validation
BookSchema.pre('validate', next => {
    if (!Date(this.publication_year) < new Date() ) {
        next(new Error('Publication date must be before today!'));
    } else {
        next();
    }
});

// uniqueness
BookSchema.plugin(uniqueValidator, { message: 'Book already found!'})

// ** Author **
// date validation
AuthorSchema.pre('validate', next => {
    if (!Date(this.birthday) < new Date() ) {
        next(new Error('Birthday must be before today!'));
    } else {
        next();
    }
});

// unique
AuthorSchema.plugin(uniqueValidator, { message: 'Author already found!'})

// <--- Document Model --->
// Attach schemas to mongoose object to create documents / chain mongoose methods (added in DB connection file)
module.exports = mongoose.model('Author', AuthorSchema);