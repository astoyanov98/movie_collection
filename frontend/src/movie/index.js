import React from 'react'
import Parser from 'react-html-parser';
import Button from '@mui/material/Button';
import { deleteData, addMovie } from '../helperFunctions';

const Movie = (props) => {
    const checksIfPresent = (current_id) => {
        return props.ids.includes(String(current_id));
    }

    return (
        <div className="movieList">

            <div style={{ marginRight: '30px' }}>
                {props.movie.show.image ? < img src={props.movie.show.image.medium} /> : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwxsCnimW2wWesX5T5wfWxgVmPY6KTfx-Vg&usqp=CAU' />}
            </div>
            <div>
                <span style={{ fontWeight: '600', fontSize: '24px' }}>{props.movie.show.name} ({props.movie.show.premiered && props.movie.show.premiered.split('-')[0]})</span> <br />
                <span>{props.movie.show.genres.join(', ')} | {props.movie.show.runtime} minutes</span><br />
                <span>{Parser(props.movie.show.summary)}</span><br />
                <a href={props.movie.show.url} >visit official site</a><br />

                {!checksIfPresent(props.movie.show.id) ? <Button color='success' variant="outlined" style={{ marginTop: '10px' }} onClick={() => addMovie({ "name": props.movie.show.name, "image": props.movie.show.image ? props.movie.show.image.medium : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwxsCnimW2wWesX5T5wfWxgVmPY6KTfx-Vg&usqp=CAU', "description": props.movie.show.summary, "id": props.movie.show.id })}>Add to favourites</Button>
                    : <Button color='error' variant="outlined" style={{ marginTop: '10px' }} onClick={() => deleteData(props.movie.show.id)} >Delete from favourites</Button>}
            </div>

        </div>
    )
}

export default Movie;