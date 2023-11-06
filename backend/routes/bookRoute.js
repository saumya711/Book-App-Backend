const express = require("express");
const { createBook, getBooks, getBook, updateBook, deleteBook } = require("../controllers/bookController");
const router = express.Router();

router.post("/post-book", createBook);
router.get("/get-book", getBooks);
router.get("/get-book/:id", getBook);
router.put("/update-book/:id", updateBook);
router.delete("/delete-book/:id", deleteBook);

module.exports = router;