import User from "../models/userModel.js";

class UserService {
  // Get all users
  static async getAll() {
    return await User.find();
  }

  // Create new user
  static async create(userData) {
    const user = new User(userData);
    return await user.save();
  }

  // Find user by ID
  static async getById(id) {
    return await User.findById(id);
  }

  // Update user
  static async update(id, data) {
    return await User.findByIdAndUpdate(id, data, { new: true });
  }

  // Delete user
  static async delete(id) {
    return await User.findByIdAndDelete(id);
  }
}

export default UserService;
