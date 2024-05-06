import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const tokin = jwt.sign({userId:user._id},process.env.JWT_SECRET,{
      expiresIn: '30d',
    });
    //SET JWT AS HTTP-ONLY
    res.cookie('jwt', tokin, {
      httpOnly: true,
      secure: process.env.NODE_ENV!== 'development',
      sameSite:'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000, //30 day
    });
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    });
 
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
 
});

const registerUser = asyncHandler(async (req, res) => {
  const {name,email,password} = req.body;
  const userExists = await User.findOne({email});
  if(userExists){
    res.status(400);
    throw new Error('User already exists');
  }
  const user = await User.create({name,email,password});
  if(user){
    const tokin = jwt.sign({userId:user._id},process.env.JWT_SECRET,{
      expiresIn: '30d',
    });
    //SET JWT AS HTTP-ONLY
    res.cookie('jwt', tokin, {
      httpOnly: true,
      secure: process.env.NODE_ENV!== 'development',
      sameSite:'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000, //30 day
    });
    
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    });
  }
  else{
    res.status(400);
    throw new Error('Invalid user data');
  }

});

const logOutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt','',{
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({message:'logged Out Successfully'});
  
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.send(' Get user profile');



});

const getUserByEmail = asyncHandler(async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });

    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


const updateUserProfile = asyncHandler(async (req, res) => {
  res.send(' update user profile');
});

const getUsers = asyncHandler(async (req, res) => {
  res.send('get User');
});

const getUserByID = asyncHandler(async (req, res) => {
  res.send('get User BY ID');
});

const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete User');
});

const updateUser = asyncHandler(async (req, res) => {
  res.send('update User');
});

export {
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
  getUserByEmail,
};
