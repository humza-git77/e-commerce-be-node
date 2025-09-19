import UserService from "../services/userService.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await UserService.getAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const user = await UserService.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};
