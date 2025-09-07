import mysql from 'mysql2/promise'

const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'moviesdb'
}

const connection = await mysql.createConnection(config)

export class MovieModel {

  static async getAll ({ genre }) {
    if(genre) {
        const toLowerCaseGenre = genre.toLowerCase()

        const [genres] = await connection.query(
                'select id, name from genre where lower(name) = ?;',
                [toLowerCaseGenre]
            )

        if(genres.length === 0) {
            return []
        }

        const [{id}] = genres

        const [movies] = await connection.query(
                `select BIN_TO_UUID(movie.id) as id, movie.title, year, director, duration, poster
                    from movie_genre
                    inner join movie on BIN_TO_UUID(movie.id) = BIN_TO_UUID(movie_genre.movie_id)
                    where genre_id = ?;`,
                [id]
            )

        if(movies.length === 0) {
            return []
        }
        return movies
    } else {
        const [movies] = await connection.query(`
            select title, year, director, duration, poster, rate, BIN_TO_UUID(id) as id from movie
        `)
    
        return movies
    }
  }

  static async getById ({ id }) {
    const [movie] = await connection.query(
        `select title, year, director, duration, poster, rate, BIN_TO_UUID(id) as id 
        from movie
        where BIN_TO_UUID(id) = ?;`,
        [id]
    )

    if(movie.length === 0) {
        return null
    }

    return movie
  }

  static async create (input) {

    const {
        genre: genreInput,
        title,
        director,
        duration,
        rate,
        poster,
        year
    } = input

    console.log(title)

    const [uuidResult] = await connection.query('select UUID() uuid')
    const [{uuid}] = uuidResult

    try {
        await connection.query(
            `insert into movie (id, title, year, director, duration, poster, rate) 
             values
             (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?, ?);`,
            [title, year, director, duration, poster, rate]
        )
    } catch (error) {
        // no enviar al cliente el error porque es un error interno del servidor
        // puede enviarle información sensible

        // enviar la informacion a un log
        throw new Error('error creating movie')
        // sendLog(error)
    }
    
    const [movie] = await connection.query(`
          select title, year, director, duration, poster, rate, BIN_TO_UUID(id) as id
          from movie
          where BIN_TO_UUID(id) = ?;`,
          [uuid]  
        )

    return movie[0]
  }

  static async delete ({ id }) {

  }

  static async update ({ id, input }) {

  }
}