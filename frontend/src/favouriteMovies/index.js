import React from 'react';
import './style.css'
import { useEffect, useState } from 'react';
import axios from 'axios'

const Favourite_movies = () => {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        axios.get("http://localhost:3030/favourite_movies")
            .then(res => { setData(res.data.rows) })
            .catch(err => console.error(err))
    }, [])

    const handleClick = (movie) => {
        window.location.href = "/movies/movie-title"
        localStorage.setItem("pickedMovie", JSON.stringify(movie))
    }

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <span className="favoriteTitle">Your Favorites</span>
            </div>
            <div style={{ textAlign: 'center' }}>
                {data.map(movie => (
                    < div className="favouriteMovie" onClick={() => handleClick(movie)}>
                        <img height={"auto"} width={"100%"} src={movie.image} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Favourite_movies;