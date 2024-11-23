import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './Models/User.js';
import bcrypt from 'bcryptjs'; // To hash and compare passwords
import jwt from 'jsonwebtoken'; // To generate a JWT token for authenticated users

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 4040;

// Enable CORS for all origins (you can also specify particular origins for security)
app.use(cors());

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// POST route to sign up a user
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation: check if required fields are present
  if (!email || !password || !username) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  // Password length check
  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error('Error during sign-up:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});


// POST route to sign in a user
app.post('/signin', async (req, res) => {
  console.log('Request body:', req.body); // Log the incoming request body
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Log the user object to inspect the stored password hash
    console.log('User found:', user);

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(`Password match: ${isMatch}`); 
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    // Generate a JWT token for the user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send response with user data and token
    return res.status(200).json({
      message: 'User signed in successfully',
      token,
      user: {
        username: user.username || "Guest",  // Ensure username is always returned
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error during sign-in:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
