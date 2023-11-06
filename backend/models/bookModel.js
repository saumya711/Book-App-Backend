const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a task"]
        },
        apc_num: {
            type: String,
            required: [true, "Please add a APC Number"]
        },
        isbn_num: {
            type: String,
            required: [true, "Please add a ISBN Number"]
        }
    }, 
    {
        timestamps: true,
    }
)

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
