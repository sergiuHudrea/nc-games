import { useState, useEffect } from "react";
import { getReviews } from "../api";
import { Link } from 'react-router-dom'

export const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviews().then((review) => {
            setReviews(review);
        })
    }, [])


    return <section className="Reviews__Body">
        {reviews.map((review) => <section className="Reviews" key={review.review_id}> <Link to={`/reviews/${review.review_id}`}  >
            <strong>{review.title}</strong> <br/>
            Votes: {review.votes} <br/>
            <img className="imgReviews" src={review.review_img_url} alt="Board Game" />
        </Link> </section>)}
    </section>
}