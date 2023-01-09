import axios from 'axios';

const houseOfGamesApi = axios.create({
    baseURL: 'https://house-of-games.onrender.com/api'
})

export const getReviews = () => {
    return houseOfGamesApi.get('/reviews').then((res) => {
        return res.data.reviews
    })
}

export const getReview = (review_id) => {
    return houseOfGamesApi.get(`/reviews/${review_id}`).then((res) => {
        return res.data.review
    })
}