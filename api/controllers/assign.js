const { Assign, Book, User } = require("@models");

const assignBook = async (req, res) => {
  const { bookId, userId } = req.body;
  try {
    await Assign.create({
      bookId,
      userId,
    });
    return res.send({
      status: 200,
      message: `Book with id: ${bookId} has been assigned to user with id: ${userId}`,
    });
  } catch (error) {
    return res.send({ status: 404, data: error.message });
  }
};

const returnBook = async (req, res) => {
  try {
    const bookId = Number(req.params.id);
    const returnBookData = await Assign.findByPk(bookId);
    if (!returnBookData) {
      res.send({ status: 409, data: "Book doesn't exist" });
      return;
    }
    await Assign.destroy({ where: { id: bookId } });
    res.status(200).json({ data: returnBookData, message: "return" });
  } catch (error) {
    return res.send({ status: 404, data: error.message });
  }
};

const fetchAssignedBooks = async (req, res) => {
  try {
    const assignedBooks = await Assign.findAll({
      include: [
        {
          model: Book,
          as: "book",
          attributes: ["title", "author"],
        },
        {
          model: User,
          as: "user",
          attributes: ["firstName", "lastName"],
        },
      ],
    });
    return res.send({ status: 200, data: assignedBooks });
  } catch (error) {
    console.log('error: ', error);
    return res.send({ status: error.statusCode, data: error.message });
  }
};

module.exports = {
  assignBook,
  returnBook,
  fetchAssignedBooks,
};
