import  { useEffect, useState } from 'react';
import { getReview } from '../api'
import { useParams } from 'react-router-dom';

import { Comments } from './Comments';
import { patchVotesReview } from '../api';
import { Error } from './Error';
import { Loading } from './Loading';



export const SingleReview = () => {
    const [review, setReview] = useState({});
    const {review_id} = useParams()
    const [IVoted, setIVoted] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        setError(false);
        getReview(review_id)
            .then((review) => {
                setIsLoading(false)
                setReview(review);
        })  
            .catch(() => {
                setError(true)
            })
    }, [review_id])

    const Vote = ({review_id},  vote) => {
            if (!IVoted) {
                setReview((currReview)=> {
                const updatedReview = {...currReview}
                updatedReview.votes += vote;
                return  updatedReview; }) 
                setIVoted(true)
                
                patchVotesReview(review_id, vote).catch((err) => 
                    setReview((currReview)=> {
                        setIVoted(false)
                        alert("Your vote did not go through, please try again.")
                        const updatedReview = {...currReview}
                        updatedReview.votes -= vote;
                        return  updatedReview; })
                )} 
    }
    
     if (error) return <Error />

     if (isLoading) return <Loading />

     return (
        <section>
            <section className='ReviewCard'> <br/>

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
                        <button className="Button" aria-label='Up vote review.' onClick={() => Vote({review_id}, 1)}> ↑ upVote </button>
                        <button className="Button" aria-label='Down vote review.' onClick={() => Vote({review_id}, -1)}> ↓ downVote </button>
            </section>

            <section className='Comments__Body'>
                <h3> Comments Section </h3>
                <Comments review_id={review_id} />
            </section>
            
        </section>
        
    )
}



