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

export const getComments = (review_id) => {
    return houseOfGamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
        return res.data.comments
    })
}

export const patchVotesReview = (review_id, vote) => {
    const patchBody = { inc_votes: vote }

    return houseOfGamesApi.patch(`/reviews/${review_id}`, patchBody).then((res) => {
        return res.request.status;
    })
}