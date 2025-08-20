const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const verify = async (req, res, { userModel }) => {
  const UserPasswordModel = mongoose.model(userModel + 'Password');
  const UserModel = mongoose.model(userModel);
  const { userId, emailToken } = req.params;

  const user = await UserModel.findOne({ _id: userId, removed: false });
  if (!user)
    return res.status(404).json({
      success: false,
      result: null,
      message: 'User not found.',
    });

  const databasePassword = await UserPasswordModel.findOne({ user: user._id, removed: false });

  if (!databasePassword || databasePassword.emailToken !== emailToken)
    return res.status(400).json({
      success: false,
      result: null,
      message: 'Invalid verification link.',
    });

  await UserPasswordModel.findOneAndUpdate(
    { user: user._id },
    { emailVerified: true, emailToken: null },
    { new: true }
  ).exec();

  await UserModel.findOneAndUpdate(
    { _id: user._id },
    { enabled: true },
    { new: true }
  ).exec();

  // sign token and store session
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );

  await UserPasswordModel.findOneAndUpdate(
    { user: user._id },
    { $push: { loggedSessions: token } },
    { new: true }
  ).exec();

  return res.status(200).json({
    success: true,
    result: {
      _id: user._id,
      name: user.name,
      surname: user.surname,
      role: user.role,
      email: user.email,
      photo: user.photo,
      token: token,
      maxAge: null,
    },
    message: 'Email verified successfully.',
  });
};

module.exports = verify;


