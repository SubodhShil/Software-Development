import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';


// express app 
const app = express();


app.set("view engine", "ejs");


dotenv.config();


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
    console.log('middleware 1');
    next();
});


const homeMiddleware = (req, res, next) => {
    console.log('This middleware is only available for home route');
    next();
};


app.get('/', homeMiddleware, (req, res) => {
    res.render('index');
});


const PORT = process.env.PORT || 5700;


app.listen(PORT, () => {
    console.log(`Running at port http://localhost:${PORT}`);
});
