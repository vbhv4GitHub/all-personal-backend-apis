import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
   name: String,
   imgUrl: String,
});

const userModel = mongoose.model('tinderUsers', userSchema);
export default userModel;
