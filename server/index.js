
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/students.js';

const app = express();
app.use(cors());

app.use(express.json({limit: "20mb", extended:true}));
app.use(express.urlencoded({limit: "20mb", extended:true}));

app.use('/students', studentRoutes);

const CONNECTION_URL = 'mongodb+srv://TaskMNGR:<password>@cluster0.pjhrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => 
    console.log(`Connection established on ${PORT}`)
)).catch((error) => console.log(error.message));


