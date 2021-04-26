const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
   authors: {
       type: Array,
       required: true,
       trim: true
   },
   description: {
       type: String,
       required: true
   },
   image: {
       type: URL,
       required: true
   },
   link: {
       type: URL,
       required: true
   },
    title: {
        type: String,
        required: true,
        trim: true
    }

});


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
