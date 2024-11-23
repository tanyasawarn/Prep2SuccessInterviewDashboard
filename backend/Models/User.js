// models/User.js
import mongoose from 'mongoose';

// Define the schema for the user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

export default User;
