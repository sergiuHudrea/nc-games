import { postComment } from "../api";
import { useEffect, useState } from 'react';



export const InsertComment = ({review_id, setComments}) => {
    const [newComment, setNewComment] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        if (newComment !== "") {
            postComment(review_id, newComment)
                .then(() => { 
                    setIsLoading(false);
                })
                .catch(() => { alert('Your comment did not go through, please try again.')})
                setNewComment("")
        } else {
            alert("You cannot add an empty comment...");
            setIsLoading(false)
        }
        
    }
    

    return isLoading ? <section> ...sending comment </section> :
        <section className="Form">
            <br/>
            <form onSubmit={handleSubmit}>
                <label> <strong>Add comment</strong> </label> <br/>
                <textarea 
                    id="newComment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}/> <br/>
                <button> Add </button>
            </form>
        </section>
    
}