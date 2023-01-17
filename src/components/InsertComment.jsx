import { postComment } from "../api";
import {  useState, } from 'react';


export const InsertComment = ({review_id, setComments}) => {
    const [newComment, setNewComment] = useState("");
    const loginUsername = window.localStorage.getItem("loginUsername");

    
    const handleSubmit = (e) => {
        e.preventDefault()
            if (loginUsername) {
            postComment(review_id, newComment, loginUsername).then(({comment}) => {
            setComments((currComments) => {
                return [comment, ...currComments]
            }) })
                .catch(() => { setComments((currComments) => {
                    const updatedComments = [...currComments]
                    alert('Your comment did not go through, please try again.')
                    return updatedComments.shift()
                })
                    })
                setNewComment("")
                } else {
                    alert("You cannot leave comments as a guest. Please login.")
                }

    }
    

    return <section className="Form">
            <br/>
            <form onSubmit={handleSubmit}>
                <label> <strong>Add comment</strong> </label>
                <textarea 
                    placeholder="Type your comment here..."
                    spellCheck={true}
                    required
                    maxLength={250}
                    id="newComment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}/> <br/>
                <button> Add </button>
            </form>
        </section>
    
}