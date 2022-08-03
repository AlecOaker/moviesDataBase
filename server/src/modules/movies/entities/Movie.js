const { URL_PATH } = require("../../../config");
const { DataFormat } = require("../../../config/DataFormat");
class Movie {
    constructor(movie) {
        (this.id = movie.id),
            (this.title = movie.title),
            (this.releaseDate = DataFormat(movie.release_date)),
            (this.posterPath = `${URL_PATH}${movie.poster_path}`),
            (this.adult = movie.adult),
            (this.originalTitle = movie.original_title),
            (this.popularity = movie.popularity),
            (this.voteCount = movie.vote_count),
            (this.voteAverage = movie.vote_average),
            (this.video = movie.video),
            (this.overview = movie.overview);
    }
}

module.exports = {
    Movie,
};
