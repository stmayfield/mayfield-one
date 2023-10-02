const { User } = require("../models");

const createUser = async (req, res) => {
  console.log(`Calling createUser: ${req.body}`);
  try {
    const user = await User.create(req.body);
    res.status(201).json(user); // 201 Created
  } catch (err) {
    res.status(400).json({ error: "Error creating user" + err }); // 400 Bad Request
  }
};

const getUserById = async (req, res) => {
  console.log("Calling getUserById: " + req.body);
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user); // 200 OK
    } else {
      res.status(404).json({ error: "User not found" }); // 404 Not Found
    }
  } catch (err) {
    res.status(404).json({ error: "Failed to find user: " + err }); // 404 Not Found
  }
};

const getAllUsers = async (req, res) => {
  console.log("Calling getAllUsers: " + req.body);
  try {
    res.status(200).json(await User.findAll());
  } catch (err) {
    res.status(404).json({ error: "Failed to find users: " + err });
  }
};

const updateUserById = async (req, res) => {
  console.log("Calling updateUserById: ");
  try {
    const updated = await User.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    res.status(200).json(updated[1]); // 200 OK
  } catch (err) {
    res.status(400).json({ error: "Failed to update user: " + err }); // 400 Bad Request
  }
};

const deleteUserById = async (req, res) => {
  console.log("Calling deleteUserById: ");
  try {
    await User.destroy({
      where: { id: req.params.id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Failed to delete user" });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
