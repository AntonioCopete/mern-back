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
  const { email, password, fullName } = req.body;

  try {
    const user = await db.User.create({
      fullName: fullName,
      email: email,
      password: password,
    });

    res.status(201).send({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createUser: createUser,
  login: login,
};
