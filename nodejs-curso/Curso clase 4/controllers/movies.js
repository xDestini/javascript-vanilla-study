import { MovieModel } from "../models/movie.js";
import { validateSchema, validateUpdateSchema } from "../schemas/movies.js";

export class MovieController {
    static async getAll (req, res) {
        const { genre } = req.query;
        const movies = await MovieModel.getAll({genre});
        res.json(movies)
    }

    static async getById (req, res) {
        const { id } = req.params;
        const movie = await MovieModel.getById({id})
        if (movie) return res.json(movie);
        res.status(404).json({ message: 'Movie not found' })
    }

    static async create (req, res) {
        const result = validateSchema(req.body);
        
        if(result.error) {
            res.status(400).json({ error: JSON.parse(result.error.message) });
        }
        
        const newMovie = await MovieModel.create({ movie: result.data})

        res.status(201).json(newMovie);
    }

    static async update (req, res) {
        const result = validateUpdateSchema(req.body);

        if(result.error) {
            res.status(400).json({ error: JSON.parse(result.error.message) });
        }
        
        const { id } = req.params;
        const updatedMovie = await MovieModel.update({id, movie: result.data})

        if (!updatedMovie) {
            return res.status(404).json({ message: 'Movie not found' })
        }

        return res.json(updatedMovie);
    }

    static async delete (req, res) {
        const { id } = req.params;

        const resultDelete = await MovieModel.delete({id})

        if (!resultDelete) {
            return res.status(404).json({ message: 'Movie not found' })
        }

        return res.json({ message: 'Movie deleted' });
    }
}