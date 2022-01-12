const { errorMiddleware } = require('../middleware');
const db = require('../models');

async function login(req, res, next) {
  const { uid, email } = req.user;

  try {
    const User = await db.User.findOne({ email: email }).select().lean().exec();
    console.log(User);

    if (User) {
      res.status(200).send({
        message: 'Logged successfully',
        user: User,
      });
    }
  } catch (err) {
    next(err);
  }
}

async function createUser(req, res, next) {
  console.log(req.body);
  const { email, password, fullName, userLink } = req.body;

  try {
    const user = await db.User.create({
      fullName: fullName,
      email: email,
      password: password,
      userLink: userLink,
    });

    res.status(201).send({
      message: 'User created succeessfully',
      data: user,
    });
  } catch (err) {
    console.log('hello kitty');
    next(err);
  }
}

async function getUsers(req, res, next) {
  try {
    const users = await db.User.find().lean().exec();
    res.status(200).send({
      data: users,
    });
  } catch (err) {
    next(err);
  }
}

async function updateUser(req, res, next) {
  const { userId } = req.params;

  try {
    const updateUser = await db.User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).send({
      message: 'User updated successfully',
      data: updateUser,
    });
  } catch (err) {
    next(err);
  }
}

async function deleteUser(req, res, next) {
  const { userId } = req.params;

  try {
    const deleteUser = await db.User.deleteOne({ _id: userId });

    if (deleteUser.deletedCount === 1) {
      res.status(200).send({
        message: 'User successfully deleted',
      });
    } else {
      res.status(500).send({
        message: 'User not removed',
      });
    }
  } catch (err) {
    next(err);
  }
}

async function getSingleUser(req, res, next) {
  try {
    const { userId } = req.params;

    const user = await db.User.findById({ _id: userId }).lean().exec();
    res.status(200).send({
      data: user,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createUser: createUser,
  login: login,
  getUsers: getUsers,
  updateUser: updateUser,
  deleteUser: deleteUser,
  getSingleUser: getSingleUser,
};
