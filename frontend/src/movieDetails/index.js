import React, { useState } from 'react'
import Parser from 'react-html-parser';
import { deleteData, postUserData } from '../helperFunctions';
import Button from '@mui/material/Button';
import { Rating } from 'react-simple-star-rating'

const MovieDetails = () => {
    const pickedMovie = (JSON.parse(localStorage.getItem("pickedMovie")))
    const [rating, setRating] = useState(pickedMovie.rating)
    const [comment, setComment] = useState(pickedMovie.comment)

    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }

    return (<>
        <div className="movieList">
            <div style={{ marginRight: '30px' }}>
                {pickedMovie.image ? < img src={pickedMovie.image} /> : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwxsCnimW2wWesX5T5wfWxgVmPY6KTfx-Vg&usqp=CAU' />}
            </div>
            <div>
                <span style={{ fontWeight: '600', fontSize: '24px' }}>{pickedMovie.name} </span> <br />
                {/* <span>{props.movie.show.genres.join(', ')} | {props.movie.show.runtime} minutes</span><br /> */}
                <span>{Parser(pickedMovie.description)}</span><br />
                {/* <a href={props.movie.show.url} >visit official site</a><br /> */}

                <Button color='error' variant="outlined" style={{ marginTop: '10px' }} onClick={() => deleteData(pickedMovie.id)} >Delete from favourites</Button>

            </div>

        </div>
        <div style={{ marginTop: '20px', marginLeft: '10vw' }}>
            <Rating onClick={handleRating} ratingValue={rating} />
            <div><textarea value={comment} onChange={(e) => { setComment(e.target.value) }}></textarea></div>
            <Button color='success' variant="outlined" style={{ marginTop: '10px' }} onClick={() => postUserData(pickedMovie.id, { rating, comment })} >Submit</Button>
        </div>
    </>
    )
}

export default MovieDetails