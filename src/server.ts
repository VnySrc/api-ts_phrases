import express, { Request, Response, ErrorRequestHandler} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from "cors"
import {MulterError} from "multer"

import apiRoutes from "./routes/apiRoutes"

dotenv.config();

const server = express();
server.use(cors())

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(apiRoutes)

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});
//error handler
const errorHandler:ErrorRequestHandler = (err, req, res, next) => {
    if(err instanceof MulterError) {
        console.log(err)
        res.json({error:`Houve um erro: ${err.code}`})
    }
    else {
        console.log(err)
        res.json({error:`Houve um erro: ${err.code}`})
    }
}

server.use(errorHandler)

server.listen(process.env.PORT);