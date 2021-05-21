import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
   title: String,
   link: String,
   github: String,
   tags: [String],
   image: String,
   addedAt: {
      type: Date,
      default: new Date(),
   },
});

const projectModel = mongoose.model('projectModel', projectSchema);
export default projectModel;
