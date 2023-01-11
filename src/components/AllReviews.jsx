import { useState, useEffect } from "react";
import { getReviews } from "../api";
import { Link,useSearchParams } from 'react-router-dom'

export const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(false)

    const sortByCategory = searchParams.get('category');
    useEffect(() => {
        setError(false)
        getReviews(sortByCategory).then((review) => {
            setReviews(review);
        }).catch(() => {
            setError(true)
        })
    }, [sortByCategory])

    if (error) { 
        return <p><br/><strong> There are no reviews for this category </strong></p>
    }

    return <section className="Reviews__Body">
        {reviews.map((review) => <section className="Reviews" key={review.review_id}> <Link to={`/reviews/${review.review_id}`}  >
            <strong>{review.title}</strong> <br/>
            Votes: {review.votes} <br/>
            <img className="imgReviews" src={review.review_img_url} alt="Board Game" />
        </Link> </section>)}
    </section>
}