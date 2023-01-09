import { useState, useEffect } from "react";
import { getComments } from '../api';


export const Comments = ({ review_id }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(review_id).then((comments) => {
            setComments(comments);
        })
    }, [])

    return (comments.map((comment) => ( <div key={comment.comment_id} className="Comments">
                <p> <strong>Comment: </strong> {comment.body}</p>
                <p> <strong>Author: </strong> {comment.author}</p>
                <p> <strong>Created at: </strong> {comment.created_at}</p>
                <p> <strong>Votes: </strong> {comment.votes}</p>
            </div>
    )
            )
    )
}
