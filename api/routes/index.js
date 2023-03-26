const express = require("express");
const { body } = require("express-validator");
const {
  createUser,
  findAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("@controllers/user");
const {
  createBook,
  findAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("@controllers/book");
const {
  assignBook,
  returnBook,
  fetchAssignedBooks
} = require("@controllers/assign");

const route = express.Router();

// Add User and Get User Routes
route.post(
  "/users",
  body("firstName").isString(),
  body("lastName").isString(),
  body("email").isEmail(),
  createUser
);
route.put("/users/:id", updateUser);
route.delete("/users/:id", deleteUser);
route.get("/users", findAllUsers);
route.get("/users/:id", getUserById);

// Add Book and Get Book Routes
route.post(
  "/books",
  body("title").isString(),
  body("author").isString(),
  body("description").isString(),
  createBook
);
route.put("/books/:id", updateBook);
route.delete("/books/:id", deleteBook);
route.get("/books", findAllBooks);
route.get("/books/:id", getBookById);

// Add Assign and Get Assign Routes
route.post("/assigns", assignBook);
route.delete("/assigns/:id", returnBook);
route.get("/assigns", fetchAssignedBooks);


module.exports = route;
 