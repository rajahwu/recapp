import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server =  app.listen(port, () => {
    console.log('App is listening in ' + env +  ' mode on port:', server.address().port);
});
