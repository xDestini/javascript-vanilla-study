import { Router } from "express";
import { MovieController } from "../controllers/movies.js";

export const createMovieRouter = ({ movieModel }) => {
    const moviesRouter = Router();
    
    // controller
    const movieController = new MovieController({ movieModel });

    // /movie
    moviesRouter.get('/', movieController.getAll)
    moviesRouter.post('/', movieController.create)
    
    // /movie/id
    moviesRouter.get('/:id', movieController.getById)
    moviesRouter.patch('/:id', movieController.update)
    moviesRouter.delete('/:id', movieController.delete)

    return moviesRouter
}

