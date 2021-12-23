const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "The email is required"],
      trim: true,
      validator: (value) => validator.isEmail(value),
      message: (props) => `The email ${props.value} is not valid`,
    },
    password: {
      type: String,
      required: [true, "The password is required"],
      minlength: [8, "The password is too short"],
    },
  },
  { tymestamps: true },
);

UserSchema.pre("save", async function passwordPreSave(next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
    return next();
  } catch (err) {
    next(err);
  }
});

UserSchema.methods.comparePassword = function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

const UserModel = new mongoose.model("user", UserSchema);
module.exports = UserModel;
