const { User, Book, Assign } = require("@models");
const { validationResult } = require("express-validator");
const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Creates a new user into Users table
  const { firstName, lastName, email } = req.body;
  try {
    await User.create({
      firstName,
      lastName,
      email,
    });
    return res.send({
      status: 200,
      message: `New user: ${firstName} ${lastName} (${email}) has been created`,
    });
  } catch (error) {
    return;
  }
};

const findAllUsers = async (req, res) => {
  // fetch all the users from the database
  try {
    const data = await User.findAll({
      include: [{ model: Assign, as: "assigns", include: [{
        model: Book,
        as: "book",
        attributes: ["title", "author"],
      }] }],
    });

    return res.send({ status: 200, data });
  } catch (error) {
    return res.send({ status: 404, data: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const findOneUserData = await User.findByPk(userId);

    if (!findOneUserData) {
      res.send({ status: 409, data: "User doesn't exist" });
      return;
    }
    res.status(200).json({ data: findOneUserData, message: "findOne" });
  } catch (error) {
    return res.send({ status: 404, data: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const userData = req.body;

    if (!userData) {
      res.send({ status: 400, data: "userData is empty" });
      return;
    }

    const updateUserData = await User.findByPk(userId);
    if (!updateUserData) {
      res.send({ status: 409, data: "User doesn't exist" });
      return;
    }

    await User.update(userData, { where: { id: userId } });

    const updateUser = await User.findByPk(userId);
    res.status(200).json({ data: updateUser, message: "update" });
  } catch (error) {
    return res.send({ status: 404, data: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const deleteUserData = await User.findByPk(userId);
    if (!deleteUserData) {
      res.send({ status: 409, data: "User doesn't exist" });
      return;
    }
    await User.destroy({ where: { id: userId } });
    res.status(200).json({ data: deleteUserData, message: "delete" });
  } catch (error) {
    return res.send({ status: 404, data: error.message });
  }
};

module.exports = {
  createUser,
  findAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
