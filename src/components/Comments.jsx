import { useState, useEffect } from "react";
import { getComments } from '../api';
import { InsertComment } from "./InsertComment";
import {RemoveComment} from './RemoveComment';
import { Loading } from './Loading';

export const Comments = ({ review_id }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const author = "happyamy2016";

    useEffect(() => {
        setIsLoading(true);
        getComments(review_id).then((comments) => {
            setComments(comments);
            setIsLoading(false)
        })
    }, [])    
    
    if (isLoading) return <Loading />

    if (comments.length !== 0 ) { 
        return <section>
                    <section > 
                        <InsertComment review_id={review_id} setComments={setComments} />
                    </section> 
                    {comments.map((comment) => 
                    (<li key={comment.comment_id} className="Comments"> 
                        <p> <strong>{comment.author} : </strong> {comment.body}</p> 
                        <p> <strong>Created at: </strong> {new Date(comment.created_at).toString().slice(0,-30)}</p>
                        <p> <strong>Votes: </strong> {comment.votes}</p>
                        { comment.author === author ? <RemoveComment comment={comment} setComments={setComments} />: null }
                    </li>) )}
        
                </section>
                        } else { 
                                return (<section>
                                            <section > 
                                                <InsertComment review_id={review_id} setComments={setComments} />
                                            </section>
                                            <section key="noComments" className="Comments"> There are no comments at the moment </section>
                                        </section>
                                )
                        } 
    
}


