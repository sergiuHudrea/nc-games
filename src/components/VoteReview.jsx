// import { patchVotesReview } from '../api';


// export const upVote = ({review_id}) => {
//     const vote = 1;

//     patchVotesReview(review_id, vote).then(() => {
//         setVotesReview(vote)
//     })
// }

// export const downVote = ({review_id}) => {
//     const vote = -1;

//     patchVotesReview(review_id, vote).then(() => {
//         setVotesReview(vote)
//     })
// }


// // for SingleReview
// import {upVote, downVote } from './VoteReviews'

// <div>
//     <button aria-label='Up vote review.' onClick={() => upVote(review_id)}> upVote </button>
//     <button aria-label='Down vote review.' onClick={() => downVote(review_id)}> downVote </button>
// </div>


// // For api
// export const patchVotesReview = (review_id, vote) => {
//     const patchBody = { inc_votes: vote }

//     return houseOfGamesApi.patch(`/reviews/${review_id}`, patchBody).then(({data}) => {
//         console.log(data)
//     })
// }