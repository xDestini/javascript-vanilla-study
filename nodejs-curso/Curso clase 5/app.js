import express, { json } from 'express';
import { middlewareCors } from './middleware/cors.js';
import { createMovieRouter } from './routes/movies.js';

export const createApp = ({movieModel}) => {
    const PORT = process.env.PORT || 3000;
    const app = express();
    
    app.use(json()); // habilitar el req.body
    app.use(middlewareCors())
    app.disable('x-powered-by'); //deshabilitar el header X-Powered-By: Express
    
    app.use('/movies', createMovieRouter({ movieModel }))
    
    app.listen(PORT, () => {
        console.log(`server listening on port: http://localhost:${PORT}`)
    })
      
}