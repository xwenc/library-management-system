const { Op } = require("sequelize");
const { Book, Assign } = require("@models");
const { validationResult } = require("express-validator");

const createBook = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Creates a new user into Users table
  const { title, author, description } = req.body;
  try {
    await Book.create({
      title,
      author,
      description,
    });
    return res.send({
      status: 200,
      message: `New book: ${title} by ${author} (${description}) has been created`,
    });
  } catch (error) {
    return;
  }
};

const findAllBooks = async (req, res) => {
  const {type} = req.query;
  // fetch all the users from the database
  try {
    let data = [];
    if (type === 'available') {
      const assignedBooks = await Assign.findAll({
        attributes: ['bookId'],
      });
      const assignedBookIds = assignedBooks.map((book) => book.bookId);
      data = await Book.findAll({
        where: {
          id: {
            [Op.notIn]: assignedBookIds,
          },
        },
      });
    } else {
      data = await Book.findAll();
    }
   

    return res.send({ status: 200, data });
  } catch (error) {
    return res.send({ status: 404, data: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const bookId = Number(req.params.id);
    const findOneBookData = await Book.findByPk(bookId);

    if (!findOneBookData) {
      res.send({ status: 409, data: "Book doesn't exist" });
      return;
    }
    res.status(200).json({ data: findOneBookData, message: "findOne" });
  } catch (error) {
    return res.send({ status: 404, data: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const bookId = Number(req.params.id);
    const bookData = req.body;

    if (!bookData) {
      res.send({ status: 400, data: "bookData is empty" });
      return;
    }

    const updateBookData = await Book.findByPk(bookId);
    if (!updateBookData) {
      res.send({ status: 409, data: "Book doesn't exist" });
      return;
    }

    await Book.update(bookData, { where: { id: bookId } });

    const updateBook = await Book.findByPk(bookId);
    res.status(200).json({ data: updateBook, message: "update" });
  } catch (error) {
    return res.send({ status: 404, data: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookId = Number(req.params.id);
    const deleteBookData = await Book.findByPk(bookId);
    if (!deleteBookData) {
      res.send({ status: 409, data: "Book doesn't exist" });
      return;
    }
    await Assign.destroy({ where: { bookId } });
    await Book.destroy({ where: { id: bookId } });
    res.status(200).json({ data: deleteBookData, message: "delete" });
  } catch (error) {
    return res.send({ status: 404, data: error.message });
  }
};

module.exports = {
  createBook,
  findAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
