import mongoose from 'mongoose';
import projectModel from '../Models/projectSchema.js';

export const getAllProjects = async (req, res) => {
   try {
      const allProjects = await projectModel.find();
      res.status(200).json(allProjects);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

export const getProject = async (req, res) => {
   const { id } = req.params;
   try {
      const project = await projectModel.findById(id);
      res.status(200).json(project);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

export const addProject = async (req, res) => {
   const project = req.body;

   const newProject = new projectModel(project);

   try {
      await newProject.save();
      res.status(201).json(newProject);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};

export const updateProject = async (req, res) => {
   const { id } = req.params;
   const { title, link, github, tags, image } = req.body;

   if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

   const updatedProject = { title, link, github, tags, image, _id: id };

   await projectModel.findByIdAndUpdate(id, updatedProject, {
      new: true,
   });
   res.json(updatedProject);
};

export const deleteProject = async (req, res) => {
   const { id } = req.params;
   if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send('No post with that id');

   await projectModel.findByIdAndDelete(id);

   res.json({ message: 'Post deleted successfully.' });
};
