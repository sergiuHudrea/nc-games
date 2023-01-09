import axios from 'axios';

const houseOfGamesApi = axios.create({
    baseURL: 'https://house-of-games.onrender.com/api'
})

export const getReviews = () => {
    return houseOfGamesApi.get('/reviews').then((res) => {
        return res.data.reviews
    })
}