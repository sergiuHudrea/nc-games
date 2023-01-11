import { useState, useEffect } from "react";
import { getReviews } from "../api";
import { Link,useSearchParams} from 'react-router-dom'

export const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category');

    const [sort_by, setSort_by] = useState(undefined);
    const [order, setOrder] = useState(undefined);
    

    useEffect(() => {
        setIsLoading(true)
        setError(false)

        getReviews(sort_by, order, category).then((review) => {
            setReviews(review);
            setIsLoading(false)
        }).catch(() => {
            setError(true)
        })
    }, [sort_by, order, category])

    if (error) { 
        return <p><br/><strong> Something went wrong... </strong></p>
    }

    if (isLoading) {
        return <p> Loading... </p>
    }

    return <section> <br/>
        <label>Sort by: </label>
        <select value={sort_by} onChange={(e) => setSort_by(e.target.value)}>
            <option value="created_at">  Date </option>
            <option value="votes"> Votes </option>
            <option value="comment_count"> Comment count </option>
        </select>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="desc"> Descending </option>
            <option value="asc"> Ascending </option>       
        </select>

        <section className="Reviews__Body">
        {reviews.map((review) => <section className="Reviews" key={review.review_id}> <Link to={`/reviews/${review.review_id}`}  >
            <strong>{review.title}</strong> <br/>
            Votes: {review.votes} <br/>
            <img className="imgReviews" src={review.review_img_url} alt="Board Game" />
        </Link> </section>)}
    </section></section>
}

