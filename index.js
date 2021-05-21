import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import tinderUsersRouter from './routes/TinderRoutes/tinderRouters.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const DATABASE_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@all-personal-database.fddyw.mongodb.net/allDatabase?retryWrites=true&w=majority`;
const app = express();

// All middlewares
app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

// App Routes
app.get('/', (req, res) => res.send('Backend is up and running!!!'));
app.use('/tinder/user', tinderUsersRouter);

// Database connection and listener
mongoose
   .connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() =>
      app.listen(PORT, () =>
         console.log(`Server is running at http://localhost:${PORT}`)
      )
   )
   .catch((error) => console.log(error.message));

// Just to ensure that we don't get any warning on the console.
mongoose.set('useFindAndModify', false);
