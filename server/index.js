import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import router from './routes/posts.routes.js';
import generateImageRouter from './routes/generateImage.router.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));

// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.use('/api/post', router);
app.use('/api/generateImage', generateImageRouter);

// default get
app.get('/', async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the server',
  });
});

// connect to MongoDB
const connectDB = ()=>{
    mongoose.set("strictQuery", true);
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => {
            console.error('MongoDB connection error:');
            console.error(err);
        });
}


// start server
const startServer = async () => {
    try{
        connectDB();
        app.listen(8080, () => console.log('Server is running on port 8080'));
    }catch (e){
        console.error('Error starting server: ', e);
    }
};

startServer();