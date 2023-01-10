import { useState, useEffect } from "react";
import { getComments } from '../api';


export const Comments = ({ review_id }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getComments(review_id).then((comments) => {
            setComments(comments);
            setIsLoading(false)
        })
    }, [])

    return isLoading ? <p> Loading... </p> :
        comments.length !== 0 ? comments.map((comment) => ( <section key={comment.comment_id} className="Comments">
                <p> <strong>{comment.author}: </strong> {comment.body}</p>
                <p> <strong>Created at: </strong> {comment.created_at}</p>
                <p> <strong>Votes: </strong> {comment.votes}</p>
            </section>) )
                         : <section key="noComments" className="Comments"> There are no comments at the moment </section>
    
}
