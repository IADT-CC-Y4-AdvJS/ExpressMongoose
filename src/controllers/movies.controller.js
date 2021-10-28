import Movie from "../models/movie.model.js";
import User from "../models/user.model.js";

export default class MoviesController {
    static async apiGetMovies(req, res, next) {
        const MOVIES_PER_PAGE = 20
        const moviesList = await Movie.find({}).limit(MOVIES_PER_PAGE).exec();
        const totalNumMovies = await Movie.countDocuments().exec();
        let response = {
            movies: moviesList,
            page: 0,
            filters: {},
            entries_per_page: MOVIES_PER_PAGE,
            total_results: totalNumMovies,
        }
        res.json(response);
    }

    static async apiGetMovieById(req, res, next) {
        try {
            let id = req.params.id || {};
            let movie = await Movie.findById(id).exec();
            if (!movie) {
                res.status(404).json({ error: "Not found" });
                return;
            }
            let updated_type = "other";
            res.json({ movie, updated_type });
        }
        catch (e) {
            console.log(`api, ${e}`)
            res.status(500).json({ error: e })
        }
    }

    static async apiPostMovie(req, res, next) {
        try {
            const userJwt = req.get("Authorization").slice("Bearer ".length);
            const user = await User.decoded(userJwt);
            var { error } = user;
            if (error) {
                res.status(401).json({ error });
                return;
            }

            const movieDoc = req.body.movie;
            const movie = new Movie(movieDoc);
            await movie.save();
            
            res.json({ status: "success", movie });
        } 
        catch (e) {
            res.status(500).json({ e });
        }
    }
}
