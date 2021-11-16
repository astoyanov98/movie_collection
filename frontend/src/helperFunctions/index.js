import axios from 'axios'

const deleteData = (id) => {

    axios.delete(`http://localhost:3030/favourite_movie/delete/${id}`)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });

    window.location.href = ('/')
}

const postUserData = (id, data) => {

    axios.post(`http://localhost:3030/favourite_movie/${id}`, data)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });
    window.location.href = ('/')
}

const addMovie = (data) => {
    axios.post('http://localhost:3030/favourite_movies', data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    window.location.reload(false);
}

export { deleteData, postUserData, addMovie }