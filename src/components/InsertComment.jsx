import { postComment } from "../api";
import {  useState } from 'react';


export const InsertComment = ({review_id, setComments}) => {
    const [newComment, setNewComment] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (newComment !== "") {
            setComments((currComments) => {
                const updatedComments = [{
                    author: "happyamy2016",
                    body: newComment,
                    created_at: new Date(Date.now()).toString(),
                    votes: 0,
                    comment_id: Date.now()
                }, ...currComments]
                return updatedComments
            })
            postComment(review_id, newComment)
                .catch(() => { setComments((currComments) => {
                    const updatedComments = [...currComments]
                    alert('Your comment did not go through, please try again.')
                    return updatedComments.shift()
                })
                    })
                setNewComment("")
        } else {
            alert("You cannot add an empty comment...");
        }
        
    }
    

    return <section className="Form">
            <br/>
            <form onSubmit={handleSubmit}>
                <label> <strong>Add comment</strong> </label>
                <textarea 
                    id="newComment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}/> <br/>
                <button> Add </button>
            </form>
        </section>
    
}