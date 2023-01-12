import axios from 'axios';

const houseOfGamesApi = axios.create({
    baseURL: 'https://house-of-games.onrender.com/api'
})

export const getReviews = (sort_by, order, category) => {
        return houseOfGamesApi.get('/reviews', { 
            params: { sort_by, order, category }}).then((res) => {
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
        return res.data;
    })
}

export const postComment = (review_id, newComment) => {
    const postBody = {
        username: "happyamy2016",
        body: newComment
    }

    return houseOfGamesApi.post(`/reviews/${review_id}/comments`, postBody).then((res) => {
        return res.data;
    })
}

export const getCategories = () => {
    return houseOfGamesApi.get('/categories').then(({ data }) => {
        return data.categories;
    })
}

export const deleteComment = (comment_id) => {
    return houseOfGamesApi.delete(`/comments/${comment_id}`)
}