const express = require('express');
const app = express();
const pool = require('./db');
const cors = require('cors');

app.use(express.json())
app.use(cors());

app.post('/favourite_movies', async (req, res) => {
    try {
        const { name, image, description, id } = req.body
        const new_favourite_movie = await pool.query("INSERT INTO favourite_movies (name, image, description, id) VALUES ($1, $2, $3, $4) RETURNING *", [name, image, description, id])

        res.json(new_favourite_movie.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.post('/favourite_movie/:id', async (req, res) => {
    try {
        const { rating, comment } = req.body
        const new_favourite_movie = await pool.query('UPDATE favourite_movies SET rating=$1, comment=$2 WHERE id=$3 RETURNING *', [rating, comment, req.params.id])

        res.json(new_favourite_movie.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/favourite_movies', async (req, res) => {
    try {
        const all_movies = await pool.query("SELECT * FROM favourite_movies")
        res.send(all_movies);
    } catch (error) {
        console.error(err.message)
    }
})

app.delete('/favourite_movie/delete/:id', async (req, res) => {
    try {
        const deletedMovie = await pool.query("DELETE FROM favourite_movies WHERE id=($1)", [req.params.id])
        res.send(deletedMovie)
    } catch (error) {
        console.error(err.message)
    }
})

app.get('/favourite_movie', async (req, res) => {
    try {
        let id = req.query.id
        const movie = await pool.query("SELECT * FROM favourite_movies WHERE id=($1)", [id])
        const bool = movie.rows.length > 0 ? true : false
        res.send(bool);
    } catch (error) {
        console.error(err.message)
    }
})

app.listen(3030, () => {
    console.log("Server is listening on port 3030")
})