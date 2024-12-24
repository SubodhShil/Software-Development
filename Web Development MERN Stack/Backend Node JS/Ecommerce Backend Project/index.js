import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

// import routes
import testRoutes from './routes/testRoutes.js';
import userRoutes from './routes/userRoutes.js';

// database configuration
import connectDB from './configs/db.js';

// dotenv config
dotenv.config();

// database connection
connectDB();

// REST object
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

/* Routes */
// Subroutes
app.use('/api/v1', testRoutes);
app.use('/api/v1/user', userRoutes);

app.get('/', (req, res) => {
    return res.status(200).send(`<h1>Welcome guys!!</h1>`);
});

// Port
const PORT = process.env.PORT || 5700;

// Listen or run the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`.bgRed);
});
