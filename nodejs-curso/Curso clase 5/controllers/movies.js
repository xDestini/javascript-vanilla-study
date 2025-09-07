// import { MovieModel } from "../models/local-file-system/movie.js";
// import { MovieModel } from "../models/mysql/movie.js";
import { validateSchema, validateUpdateSchema } from "../schemas/movies.js";

export class MovieController {
    constructor({ movieModel }) {
        this.movieModel = movieModel
    }

    getAll = async (req, res) => {
        const { genre } = req.query;
        const movies = await this.movieModel.getAll({genre});
        res.json(movies)
    }

    getById = async (req, res) => {
        const { id } = req.params;
        const movie = await this.movieModel.getById({id})
        if (movie) return res.json(movie);
        res.status(404).json({ message: 'Movie not found' })
    }

    create = async (req, res) => {
        const result = validateSchema(req.body);

        console.log('resultado', result)
        
        if(result.error) {
            res.status(400).json({ error: JSON.parse(result.error.message) });
        }
        
        const newMovie = await this.movieModel.create(result.data)

        res.status(201).json(newMovie);
    }

    update = async (req, res) => {
        const result = validateUpdateSchema(req.body);

        if(result.error) {
            res.status(400).json({ error: JSON.parse(result.error.message) });
        }
        
        const { id } = req.params;
        const updatedMovie = await this.movieModel.update({id, movie: result.data})

        if (!updatedMovie) {
            return res.status(404).json({ message: 'Movie not found' })
        }

        return res.json(updatedMovie);
    }

    delete = async (req, res) => {
        const { id } = req.params;

        const resultDelete = await this.movieModel.delete({id})

        if (!resultDelete) {
            return res.status(404).json({ message: 'Movie not found' })
        }

        return res.json({ message: 'Movie deleted' });
    }
}