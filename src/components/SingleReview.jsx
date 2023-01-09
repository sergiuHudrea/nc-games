import  { useEffect, useState } from 'react';
import { getReview } from '../api'
import { useParams } from 'react-router-dom';


export const SingleReview = () => {
    const [review, setReview] = useState({});
    const {review_id} = useParams()

    useEffect(() => {
        getReview(review_id).then((review) => {
            setReview(review);
        })
    }, [review_id])
    
    return (
        <section className='Review'> <br/>

            <h3>{review.title} </h3>  
            <p> <strong> Designer: </strong> {review.designer} <br/> </p>
            
            <p> 
                <strong> Votes: </strong> {review.votes} <br/> 
                <strong> Comments: </strong> {review.comment_count} <br/>
            </p>
           
            <img src={review.review_img_url} alt="Board Game Review." height="300px" width="300px"/> <br />
            
            <p> <strong>Review:</strong> {review.review_body} <br/> </p>
            <p> <strong> Owner: </strong> {review.owner} <br/></p>

            <strong> Created at: </strong> {review.created_at}
            
        </section>
    )
}