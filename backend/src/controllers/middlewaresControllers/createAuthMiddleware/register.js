const Joi = require('joi');

const mongoose = require('mongoose');
const shortid = require('shortid');

const checkAndCorrectURL = require('./checkAndCorrectURL');
const sendMail = require('./sendMail');
const { useAppSettings } = require('@/settings');

const register = async (req, res, { userModel }) => {
  const UserPasswordModel = mongoose.model(userModel + 'Password');
  const UserModel = mongoose.model(userModel);

  const { name, email, password } = req.body;

  const objectSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: true } })
      .required(),
    password: Joi.string().required(),
  });

  const { error } = objectSchema.validate({ name, email, password });
  if (error) {
    return res.status(409).json({
      success: false,
      result: null,
      error: error,
      message: 'Invalid/Missing credentials.',
      errorMessage: error.message,
    });
  }

  const existingUser = await UserModel.findOne({ email: email, removed: false });
  if (existingUser) {
    return res.status(409).json({
      success: false,
      result: null,
      message: 'Email already registered.',
    });
  }

  const salt = shortid.generate();
  const passwordHash = new UserPasswordModel().generateHash(salt, password);

  const newUser = await new UserModel({
    email,
    name,
    role: 'owner',
    enabled: false,
  }).save();

  const emailToken = shortid.generate();

  await new UserPasswordModel({
    password: passwordHash,
    emailVerified: false,
    salt: salt,
    user: newUser._id,
    emailToken,
  }).save();

  const settings = useAppSettings();
  const idurar_app_email = settings['idurar_app_email'];
  const idurar_base_url = settings['idurar_base_url'];
  const url = checkAndCorrectURL(idurar_base_url);
  const link = url + '/verify/' + newUser._id + '/' + emailToken;

  try {
    await sendMail({
      email,
      name,
      link,
      subject: 'Verify your email | idurar',
      idurar_app_email,
      type: 'emailVerfication',
      emailToken,
    });
  } catch (e) {
    // Do not block registration on email failure
  }

  const response = {
    success: true,
    result: null,
    message: 'Registration successful. Please check your email to verify your account.',
  };

  if (process.env.NODE_ENV !== 'production') {
    response.debug = { userId: newUser._id, emailToken };
  }

  return res.status(200).json(response);
};

module.exports = register;


