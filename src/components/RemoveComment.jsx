import { useState } from "react"
import { deleteComment } from "../api"

export const RemoveComment = ({ comment_id, setComments }) => {
    const [error, setError] = useState(false)
    const deletedComments = []

    const handleClick = (e) => {
        e.preventDefault();
        setError(false);

        setComments((currComments) => {
            const updatedComments = [...currComments]
            deletedComments.push(updatedComments[0])
            updatedComments.shift()
            return updatedComments
            
        })

        deleteComment(comment_id).catch(() => {
            setError(true)
            setComments((currComments) => {
                const updatedComments = [...currComments]
                return deletedComments.concat(updatedComments)
            })
        }
        )
    }
       
    if (error) {return <p> Error, the deletion was not successful </p>}
    
    return <button onClick={handleClick}> Delete </button>
}