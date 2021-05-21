import mongoose from 'mongoose';
import userModel from '../../Models/TinderModels/userSchema.js';

export const getAllUsers = async (req, res) => {
   try {
      const allUsers = await userModel.find();
      res.status(200).json(allUsers);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

export const getUser = async (req, res) => {
   const { id } = req.params;
   try {
      const User = await userModel.findById(id);
      res.status(200).json(User);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

export const addUser = async (req, res) => {
   const User = req.body;

   const newUser = new userModel(User);

   try {
      await newUser.save();
      res.status(201).json(newUser);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};

export const updateUser = async (req, res) => {
   const { id } = req.params;
   const { name, imgUrl } = req.body;

   if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No user with id: ${id}`);

   const updatedUser = { name, imgUrl, _id: id };

   await userModel.findByIdAndUpdate(id, updatedUser, {
      new: true,
   });
   res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
   const { id } = req.params;
   if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send('No user with that id');

   await userModel.findByIdAndDelete(id);

   res.json({ message: 'Post deleted successfully.' });
};
