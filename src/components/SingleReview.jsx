import  { useEffect, useState } from 'react';
import { getReview } from '../api'
import { useParams } from 'react-router-dom';

import { Comments } from './Comments';
import { patchVotesReview } from '../api';





export const SingleReview = () => {
    const [review, setReview] = useState({});
    const {review_id} = useParams()

    useEffect(() => {
        getReview(review_id).then((review) => {
            setReview(review);
        })
    }, [review_id])

    const Vote = ({review_id},  vote) => {
            patchVotesReview(review_id, vote).then((res) => 
                res === 200 ? setReview((currReview)=> {
                    const updatedReview = {...currReview}
                    updatedReview.votes += vote;
                    return  updatedReview;
        }) : alert(`Your vote has not gone through, please try again.`))
    
    }
    
    return (
        <section>
            <section className='Review'> <br/>

                <h3>{review.title} </h3>   <br/>
                <p> <strong> Designer: </strong> {review.designer} <br/> </p>

                <img className="imgReview" src={review.review_img_url} alt="Board Game Review." height="100%" width="100%"/> <br />

                <p> <strong>Review:</strong> {review.review_body} <br/> </p>
                <p> <strong> Owner: </strong> {review.owner} <br/></p>

                <strong> Created at: </strong> {review.created_at}

                <p> 
                    <strong> Votes: </strong> {review.votes} <br/> 
                    <strong> Comments: </strong> {review.comment_count} <br/>
                </p>

            </section>
            <section>
                        <button aria-label='Up vote review.' onClick={() => Vote({review_id}, 1)}> upVote </button>
                        <button aria-label='Down vote review.' onClick={() => Vote({review_id}, -1)}> downVote </button>
            </section>

            <section className='Comments__Body'>
                <h3> Comments Section </h3>
                <Comments review_id={review_id} />
                
            </section>
        </section>
        
    )
}



