import { useState, useEffect } from "react";
import { getReviews } from "../api";

export const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviews().then((review) => {
            setReviews(review);
        })
    }, [])


    return <div className="Reviews__Body">
        {reviews.map((review) => <p key={review.review_id} className="Reviews">
            <strong>{review.title}</strong> <br/>
            Votes: {review.votes} <br/>
            <img src={review.review_img_url} alt="Board Game Photo" height="300px" width="300px"/>
        </p>)}
    </div>
}