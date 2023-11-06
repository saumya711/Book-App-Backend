const { json } = require("express");
const Book = require("../models/bookModel");

const createBook = async (req, res) => {
    try {
      const book = await Book.create(req.body);
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

  const getBooks = async (req, res) => {
    try {
      const book = await Book.find();
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

  const getBook = async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findById(id);
      res.status(200).json(book);
      if (!book) {
        res.status(404).json(`No Book with id: ${id}`);
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

  const updateBook = async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (!book) {
        return res.status(404).json(`No Book with id: ${id}`);
      }
      
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

  const deleteBook = async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findByIdAndDelete(id);
      res.status(200).send("Book Deleted");
      if (!book) {
        return res.status(404).json(`No Book with id: ${id}`);
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };


  module.exports = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook
  };