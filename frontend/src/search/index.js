import React, { useEffect, useState } from 'react'
import './styles.css'
import Button from '@mui/material/Button';
import axios from 'axios'
import Movie from '../movie/index'

const Search = () => {
    const [dataMovies, setDataMovies] = useState([1, 2, 3, 4]);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3030/favourite_movies")
            .then(res => {
                res.data.rows.map(el => setDataMovies(prevArray => [...prevArray, el.id]))
                return dataMovies
            })
            .then(console.log(dataMovies))
            .catch(err => console.error(err))

        axios.get(`https://api.tvmaze.com/search/shows?q=${localStorage.getItem("search")}`)
            .then(res => { setData(res.data) })
            .catch(err => console.error(err))

    }, [])

    return (
        <div>
            <button className="backButton" onClick={() => { window.location.href = ('/') }}>Back</button>
            {
                data.map(movie => (
                    <Movie movie={movie} ids={dataMovies} />
                ))
            }
        </div >
    )
}

export default Search;